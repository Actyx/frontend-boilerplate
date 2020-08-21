export const removeHashFromUrl = (url: string): string => url.split('#')[0];

export const getUrlsFromDocument = (doc: Document): string[] =>
  Array.from(doc.querySelectorAll('a'))
    .map((x) => x.href)
    .filter((x) => x.length > 0);

export const filterInternalUrls = (
  prevUrls: string[],
  newUrls: string[],
  baseUrl: string
): string[] => newUrls.filter((x) => !prevUrls.includes(x) && x.startsWith(baseUrl));
