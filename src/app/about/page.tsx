import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-list px-gutter">
      <h1>소개</h1>
    </div>
  );
}
