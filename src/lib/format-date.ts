const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Seoul",
});

export function formatDate(date: string | Date) {
  const normalizedDate = typeof date === "string" ? new Date(date) : date;

  return dateFormatter.format(normalizedDate);
}
