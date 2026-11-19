import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "아티클",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-list px-gutter">
      <h1>아티클</h1>
    </div>
  );
}
