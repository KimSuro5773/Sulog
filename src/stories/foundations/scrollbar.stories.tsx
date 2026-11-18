import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const results = Array.from(
  { length: 20 },
  (_, index) => `검색 결과 ${index + 1}`,
);

const code = `const posts = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID, sorts: [{ property: "date", direction: "descending" }] });`;

const categories = [
  "전체",
  "프론트엔드",
  "백엔드",
  "인프라",
  "회고",
  "데이터베이스",
  "네트워크",
];

const meta = {
  title: "Foundations/Scrollbar",
  parameters: {
    controls: { disable: true },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <ul className="h-48 w-72 overflow-y-auto rounded-md border p-4 text-body text-neutral-muted">
      {results.map((result) => (
        <li key={result} className="py-1">
          {result}
        </li>
      ))}
    </ul>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <pre className="w-96 overflow-x-auto rounded-md border p-4 font-mono text-code text-neutral">
      <code>{code}</code>
    </pre>
  ),
};

export const Hidden: Story = {
  render: () => (
    <Tabs defaultValue="전체" className="w-72">
      <TabsList>
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  ),
};
