import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import type { Element, ElementContent, Root, RootContent } from "hast";
import {
  createCssVariablesTheme,
  createHighlighterCore,
  type HighlighterCore,
} from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import { bundledLanguages } from "shiki/langs";

import { resolveCodeLanguage } from "./code-languages";

export type HighlightedCode = {
  label: string;
  hast: Root;
  text: string;
};

const themeName = "css-variables";

const theme = createCssVariablesTheme({
  name: themeName,
  variablePrefix: "--shiki-",
  fontStyle: true,
});

let highlighter: Promise<HighlighterCore> | undefined;

function getHighlighter() {
  highlighter ??= createHighlighterCore({
    themes: [theme],
    langs: [],
    engine: createJavaScriptRegexEngine(),
  });
  return highlighter;
}

export async function highlightCode({
  code,
  language,
  filename,
}: {
  code: string;
  language: string;
  filename?: string;
}): Promise<HighlightedCode> {
  const { label, lang } = resolveCodeLanguage(language, filename);
  const instance = await getHighlighter();

  if (lang !== "text" && !instance.getLoadedLanguages().includes(lang)) {
    await instance.loadLanguage(bundledLanguages[lang]);
  }

  const hast = instance.codeToHast(code, {
    lang,
    theme: themeName,
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  });
  const text = getLines(hast)
    .map((line) => getText(line).trimEnd())
    .join("\n");

  return { label, hast, text };
}

function hasClass(element: Element, className: string) {
  const value = element.properties.class ?? element.properties.className;
  const classNames = Array.isArray(value) ? value : String(value).split(" ");

  return classNames.includes(className);
}

function getLines(node: Root | RootContent): Element[] {
  if (node.type === "element" && hasClass(node, "line")) return [node];
  if (node.type !== "root" && node.type !== "element") return [];

  return node.children.flatMap(getLines);
}

function getText(node: ElementContent): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") return node.children.map(getText).join("");

  return "";
}
