import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn, userEvent, within } from "storybook/test";

import { Mark } from "@/components/ui/mark";

import { type SearchResult, SearchDialog } from "./search-dialog";

const results: SearchResult[] = [
  {
    slug: "github-actions-docker-zero-downtime-deploy",
    title: (
      <>
        GitHub Actions와 Docker로 Spring Boot 무중단 <Mark>배포</Mark> 구성하기
      </>
    ),
    summary:
      "블루그린 방식으로 전환하면서 헬스 체크, 롤백, 환경 변수 관리를 어떻게 처리했는지 단계별로 설명합니다.",
    publishedAt: "2026-09-17",
  },
  {
    slug: "deploy-automation-1",
    title: (
      <>
        <Mark>배포</Mark> 자동화 입문 1편: 수동 <Mark>배포</Mark>에서 벗어나기
      </>
    ),
    summary:
      "SSH로 접속해서 jar를 교체하던 방식에서 벗어나기 위해 가장 먼저 정리한 체크리스트입니다.",
    publishedAt: "2026-07-02",
  },
  {
    slug: "nginx-cache-response-time",
    title: "Nginx 캐시 설정 하나로 응답 시간을 절반으로 줄인 이야기",
    summary: (
      <>
        캐시 무효화 시점을 <Mark>배포</Mark> 파이프라인에 연결해서,{" "}
        <Mark>배포</Mark> 직후에도 오래된 응답이 나가지 않게 했습니다.
      </>
    ),
    publishedAt: "2026-08-12",
  },
  {
    slug: "rollback-within-a-minute",
    title: (
      <>
        롤백이 1분 안에 끝나도록 <Mark>배포</Mark> 스크립트 다듬기
      </>
    ),
    summary:
      "이전 컨테이너를 바로 지우지 않고 남겨 두는 방식으로 롤백 시간을 줄였습니다.",
    publishedAt: "2026-07-28",
  },
];

async function openSearch(canvasElement: HTMLElement, query?: string) {
  const screen = within(canvasElement.ownerDocument.body);

  await userEvent.click(screen.getByRole("button", { name: "검색 열기" }));

  if (query) {
    await userEvent.type(await screen.findByLabelText("글 검색"), query);
  }
}

const meta = {
  title: "Search/SearchDialog",
  component: SearchDialog,
  tags: ["autodocs"],
  args: {
    onQueryChange: fn(),
    onResultSelect: fn(),
  },
  argTypes: {
    results: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: false, iframeHeight: 640 },
    },
  },
} satisfies Meta<typeof SearchDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Closed: Story = {};

export const Idle: Story = {
  play: ({ canvasElement }) => openSearch(canvasElement),
};

export const Results: Story = {
  args: { results },
  play: ({ canvasElement }) => openSearch(canvasElement, "배포"),
};

export const Loading: Story = {
  args: { isLoading: true },
  play: ({ canvasElement }) => openSearch(canvasElement, "배포"),
};

export const Empty: Story = {
  args: { results: [] },
  play: ({ canvasElement }) => openSearch(canvasElement, "쿠버네티스"),
};

export const LongQueryEmpty: Story = {
  args: { results: [] },
  play: ({ canvasElement }) =>
    openSearch(canvasElement, "kubernetes".repeat(8)),
};
