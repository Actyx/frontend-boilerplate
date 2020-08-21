/* eslint-disable prefer-const */
import { filterInternalUrls, getUrlsFromDocument, removeHashFromUrl } from './utils';

const BASE_URL = 'https://developer.actyx.com/';
const VISIT_TIMEOUT = 10 * 1000;

describe('developer.com', () => {
  it('should walk website and detect broken links', () => {
    let urlsQue: string[] = [];
    let urlsExternal: string[] = [];

    cy.visit(BASE_URL);

    cy.document().then((doc) => {
      urlsQue = getUrlsFromDocument(doc);

      const checkUrls = () => {
        let next = urlsQue.pop();
        if (next) {
          const isInternal = next.startsWith(BASE_URL);
          if (isInternal) {
            next = removeHashFromUrl(next);
            cy.visit({
              url: next,
              failOnStatusCode: true,
              timeout: VISIT_TIMEOUT,
            });
            const urlsVisit = getUrlsFromDocument(document);
            const urlUnique = filterInternalUrls(urlsQue, urlsVisit, BASE_URL);
            urlsQue = [...urlsQue, ...urlUnique];
            checkUrls();
          } else {
            urlsExternal.push(next);
            checkUrls();
          }
        } else {
          console.log('DONE!');
          console.log(urlsExternal);
        }
      };

      checkUrls();
    });
  });
});

/*

// GET ALL LINKS
- get all links from homepage and add to que
- take first element from the que
- if url start with developer continue else skip
- take all links from page taken from the que
- for each linq, add to quey only if it is not alreay present
- continue from start
- stop when que is empty


*/
