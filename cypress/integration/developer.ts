/* eslint-disable prefer-const */
const BASE_URL = 'https://developer.actyx.com/';

describe('developer.com', () => {
  it('should open page', () => {
    cy.visit(BASE_URL);
    cy.contains('Actyx');
  });

  it('should detect broken links', () => {
    cy.document().then((doc) => {
      const urls = Array.from(doc.querySelectorAll('a'))
        .map((x) => x.href)
        .filter((x) => x.length > 0);
      console.log(urls);
      urls.forEach((url) => {
        cy.visit({
          url: url,
        });
      });

      //
    });
  });

  const getUrlsFromDOM = (doc: Document) =>
    Array.from(doc.querySelectorAll('a'))
      .map((x) => x.href)
      .filter((x) => x.length > 0);

  it.only('should detect recursivelly', () => {
    let que: string[] = [];

    cy.visit(BASE_URL);
    cy.document().then((doc) => {
      que = getUrlsFromDOM(doc);
      const next = que.pop();
      if (next) {
        const isInternal = next.startsWith(BASE_URL);
        if (isInternal) {
          cy.visit({ url: next }).then((x) => {
            console.log('ready');
            const newItems = getUrlsFromDOM(x.document);
            const filtered = newItems.filter((x) => !que.includes(x));
            que = [...que, ...filtered];
          });
        } else {
          console.log('not internal');
        }
      }
      // while (que.length > 0) {
      //   const next = que.pop();
      //   if (next) {
      //     const isInternal = next.startsWith(BASE_URL);
      //     if (isInternal) {
      //       cy.visit({ url: next });
      //     } else {
      //       que.push(next);
      //     }
      //   }
      // }
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
