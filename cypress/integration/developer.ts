/* eslint-disable prefer-const */
import { getUrlsFromDocument, removeHashFromUrl } from './utils';

const BASE_URL = 'https://developer.actyx.com/docs/cli/getting-started';

describe('developer.com', () => {
  it('should walk website and detect broken links', () => {
    cy.visit(BASE_URL);
    cy.document().then((doc) => {
      getUrlsFromDocument(doc)
        .filter((x) => x.startsWith(BASE_URL))
        .map(removeHashFromUrl)
        .filter((x: string, idx: number, data: string[]) => data.indexOf(x) === idx)
        .forEach((x) => {
          console.log(x);
          // cy.visit(x).then((x) => {
          //   console.log(x.document.title);
          // });
        });
    });
  });
});
