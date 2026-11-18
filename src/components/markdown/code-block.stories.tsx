import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Toaster } from "@/components/ui/sonner";
import { highlightCode, type HighlightedCode } from "@/lib/markdown/highlight";

import { CodeBlock } from "./code-block";

type CodeBlockStoryArgs = {
  code: string;
  language: string;
  filename?: string;
};

const meta = {
  title: "Markdown/CodeBlock",
  args: {
    language: "java",
    code: `@RestController
public class HealthController {
    // 배포 스크립트가 이 경로로 새 컨테이너의 상태를 확인합니다.
    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("UP");
    }
}`,
  },
  argTypes: {
    code: { control: "text" },
    language: { control: "text" },
    filename: { control: "text" },
  },
  loaders: [
    async ({ args }) => ({
      highlighted: await highlightCode(args as CodeBlockStoryArgs),
    }),
  ],
  decorators: [
    (Story) => (
      <div className="max-w-3xl">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  render: (args, { loaded }) => (
    <CodeBlock
      {...(loaded.highlighted as HighlightedCode)}
      filename={args.filename}
    />
  ),
} satisfies Meta<CodeBlockStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDiff: Story = {
  args: {
    language: "yaml",
    filename: "docker-compose.yml",
    code: `services:
  app:
    image: sulog/api:latest # [!code --]
    image: sulog/api:$TAG # [!code ++]
    healthcheck:
      interval: 3s  # 3초마다 확인합니다. # [!code ++]`,
  },
};

export const WithHighlight: Story = {
  args: {
    language: "javascript",
    filename: "src/components/SearchBox.jsx",
    code: `function SearchBox() {
  const [isPending, startTransition] = useTransition(); // [!code highlight]
  const onChange = (e) => {
    setQuery(e.target.value);
    startTransition(() => setResults(search(e.target.value))); // [!code highlight]
  };
}`,
  },
};

export const PlainText: Story = {
  args: {
    language: "plain text",
    code: `배포 순서
1. 새 컨테이너를 띄웁니다.

2. 상태 확인이 통과하면 트래픽을 옮깁니다.`,
  },
};

export const Mermaid: Story = {
  args: {
    language: "mermaid",
    code: `flowchart LR
  Client --> Nginx --> Blue
  Nginx -.-> Green`,
  },
};

export const LongContent: Story = {
  args: {
    language: "typescript",
    filename:
      "src/features/posts/server/notion/convert-notion-blocks-to-markdown-with-captions.ts",
    code: `export async function getPostMarkdown(pageId: string): Promise<string> {
  const response = await notion.pages.retrieveMarkdown({ page_id: pageId, markdown_version: "v2" });
  return response.markdown;
}`,
  },
};
