import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "시리즈",
};

export default function SeriesPage() {
  return (
    <div className="mx-auto max-w-list px-gutter">
      <h1>시리즈</h1>
    </div>
  );
}
