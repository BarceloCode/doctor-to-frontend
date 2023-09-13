export const whiteSpaceBtweenCapitalized = (str: string) => {
  return str?.toString()?.replace(/([A-Z])/g, " $1").trim();
};
