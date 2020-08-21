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
    });
  });
});
