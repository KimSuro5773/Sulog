import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Chip, chipVariants } from "./chip";

const tags = ["Spring Boot", "Docker", "GitHub Actions", "무중단 배포"];

function FilterChips() {
  const [selectedTags, setSelectedTags] = useState<string[]>(["Docker"]);

  const toggleTag = (tag: string, selected: boolean) =>
    setSelectedTags((current) =>
      selected ? [...current, tag] : current.filter((item) => item !== tag),
    );

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip
          key={tag}
          selected={selectedTags.includes(tag)}
          onSelectedChange={(selected) => toggleTag(tag, selected)}
        >
          {tag}
        </Chip>
      ))}
    </div>
  );
}

function TagLinks() {
  const currentTag = "Docker";

  return (
    <nav aria-label="태그" className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isCurrent = tag === currentTag;
        return (
          <a
            key={tag}
            href="#"
            aria-current={isCurrent ? "page" : undefined}
            className={chipVariants({ selected: isCurrent })}
          >
            {tag}
          </a>
        );
      })}
    </nav>
  );
}

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: {
    children: "Docker",
  },
  argTypes: {
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const States: Story = {
  parameters: {
    controls: { disable: true },
    pseudo: {
      hover: ["#chip-hover", "#chip-selected-hover"],
      focusVisible: "#chip-focus",
    },
  },
  render: () => (
    <div className="grid grid-cols-[repeat(6,auto)] items-center justify-start gap-x-6 gap-y-3">
      {["기본", "호버", "선택", "선택 + 호버", "포커스", "비활성"].map(
        (label) => (
          <span key={label} className="text-caption text-neutral-subtle">
            {label}
          </span>
        ),
      )}
      <Chip>기본</Chip>
      <Chip id="chip-hover">호버</Chip>
      <Chip selected>선택</Chip>
      <Chip id="chip-selected-hover" selected>
        선택
      </Chip>
      <Chip id="chip-focus">포커스</Chip>
      <Chip disabled>비활성</Chip>
    </div>
  ),
};

export const Filter: Story = {
  parameters: { controls: { disable: true } },
  render: () => <FilterChips />,
};

export const TagLinkList: Story = {
  parameters: { controls: { disable: true } },
  render: () => <TagLinks />,
};
