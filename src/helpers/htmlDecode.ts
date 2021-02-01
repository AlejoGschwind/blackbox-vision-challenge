export const htmlDecode = (input: string): string | null => {
  const e = document.createElement("textarea");

  e.innerHTML = input;

  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};
