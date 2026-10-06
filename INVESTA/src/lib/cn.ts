export const cn = (...values: Array<string | false | undefined>) =>
  values.filter(Boolean).join(" ");
