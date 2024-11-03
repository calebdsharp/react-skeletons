export const toPx = (value: number | string) =>
  typeof value === "number" ? `${value}px` : value;
