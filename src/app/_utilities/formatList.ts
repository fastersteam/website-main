export const formatList = (list: string[]): string => {
  const len = list.length;
  switch (list.length) {
    case 0:
      return "";
    case 1:
      return list[0];
    case 2:
      return list.join(" and ");
    default:
      return `${list.slice(0, len - 1).join(", ")}, and ${list[len - 1]}`;
  }
};
