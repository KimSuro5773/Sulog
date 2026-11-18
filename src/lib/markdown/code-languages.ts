import type { BundledLanguage } from "shiki/langs";

export type CodeLanguage = {
  label: string;
  lang: BundledLanguage | "text";
};

const notionLanguages = new Map<string, CodeLanguage>([
  ["abap", { label: "ABAP", lang: "abap" }],
  ["arduino", { label: "Arduino", lang: "cpp" }],
  ["bash", { label: "Bash", lang: "bash" }],
  ["basic", { label: "Basic", lang: "text" }],
  ["c", { label: "C", lang: "c" }],
  ["clojure", { label: "Clojure", lang: "clojure" }],
  ["coffeescript", { label: "CoffeeScript", lang: "coffeescript" }],
  ["c++", { label: "C++", lang: "cpp" }],
  ["c#", { label: "C#", lang: "csharp" }],
  ["css", { label: "CSS", lang: "css" }],
  ["dart", { label: "Dart", lang: "dart" }],
  ["diff", { label: "Diff", lang: "diff" }],
  ["docker", { label: "Docker", lang: "dockerfile" }],
  ["elixir", { label: "Elixir", lang: "elixir" }],
  ["elm", { label: "Elm", lang: "elm" }],
  ["erlang", { label: "Erlang", lang: "erlang" }],
  ["flow", { label: "Flow", lang: "javascript" }],
  ["fortran", { label: "Fortran", lang: "fortran-free-form" }],
  ["f#", { label: "F#", lang: "fsharp" }],
  ["gherkin", { label: "Gherkin", lang: "gherkin" }],
  ["glsl", { label: "GLSL", lang: "glsl" }],
  ["go", { label: "Go", lang: "go" }],
  ["graphql", { label: "GraphQL", lang: "graphql" }],
  ["groovy", { label: "Groovy", lang: "groovy" }],
  ["haskell", { label: "Haskell", lang: "haskell" }],
  ["html", { label: "HTML", lang: "html" }],
  ["java", { label: "Java", lang: "java" }],
  ["javascript", { label: "JavaScript", lang: "javascript" }],
  ["json", { label: "JSON", lang: "json" }],
  ["julia", { label: "Julia", lang: "julia" }],
  ["kotlin", { label: "Kotlin", lang: "kotlin" }],
  ["latex", { label: "LaTeX", lang: "latex" }],
  ["less", { label: "Less", lang: "less" }],
  ["lisp", { label: "Lisp", lang: "common-lisp" }],
  ["livescript", { label: "LiveScript", lang: "text" }],
  ["lua", { label: "Lua", lang: "lua" }],
  ["makefile", { label: "Makefile", lang: "make" }],
  ["markdown", { label: "Markdown", lang: "markdown" }],
  ["markup", { label: "Markup", lang: "html" }],
  ["matlab", { label: "MATLAB", lang: "matlab" }],
  ["mermaid", { label: "Mermaid", lang: "mermaid" }],
  ["nix", { label: "Nix", lang: "nix" }],
  ["objective-c", { label: "Objective-C", lang: "objective-c" }],
  ["ocaml", { label: "OCaml", lang: "ocaml" }],
  ["pascal", { label: "Pascal", lang: "pascal" }],
  ["perl", { label: "Perl", lang: "perl" }],
  ["php", { label: "PHP", lang: "php" }],
  ["plain text", { label: "Text", lang: "text" }],
  ["powershell", { label: "PowerShell", lang: "powershell" }],
  ["prolog", { label: "Prolog", lang: "prolog" }],
  ["protobuf", { label: "Protobuf", lang: "proto" }],
  ["python", { label: "Python", lang: "python" }],
  ["r", { label: "R", lang: "r" }],
  ["reason", { label: "Reason", lang: "text" }],
  ["ruby", { label: "Ruby", lang: "ruby" }],
  ["rust", { label: "Rust", lang: "rust" }],
  ["sass", { label: "Sass", lang: "sass" }],
  ["scala", { label: "Scala", lang: "scala" }],
  ["scheme", { label: "Scheme", lang: "scheme" }],
  ["scss", { label: "SCSS", lang: "scss" }],
  ["shell", { label: "Shell", lang: "shellscript" }],
  ["sql", { label: "SQL", lang: "sql" }],
  ["swift", { label: "Swift", lang: "swift" }],
  ["typescript", { label: "TypeScript", lang: "typescript" }],
  ["vb.net", { label: "VB.Net", lang: "vb" }],
  ["verilog", { label: "Verilog", lang: "verilog" }],
  ["vhdl", { label: "VHDL", lang: "vhdl" }],
  ["visual basic", { label: "Visual Basic", lang: "vb" }],
  ["webassembly", { label: "WebAssembly", lang: "wasm" }],
  ["xml", { label: "XML", lang: "xml" }],
  ["yaml", { label: "YAML", lang: "yaml" }],
  ["java/c/c++/c#", { label: "Java/C/C++/C#", lang: "text" }],
]);

const fileExtensionLanguages = new Map<string, CodeLanguage>([
  ["jsx", { label: "JSX", lang: "jsx" }],
  ["tsx", { label: "TSX", lang: "tsx" }],
]);

export function resolveCodeLanguage(
  language: string,
  filename?: string,
): CodeLanguage {
  const extension = filename?.split(".").pop()?.toLowerCase();
  const languageFromFilename = extension
    ? fileExtensionLanguages.get(extension)
    : undefined;

  return (
    languageFromFilename ??
    notionLanguages.get(language.trim().toLowerCase()) ?? {
      label: language,
      lang: "text",
    }
  );
}
