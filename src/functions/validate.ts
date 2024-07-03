export const isEmptyString = (str?: string) => {
  try {
    return str?.replace(" ", "") === "";
  } catch {
    return true;
  }
};
