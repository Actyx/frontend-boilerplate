const URL_START = 'https://downloads.actyx.com/';

describe('downloads.actyx.com', () => {
  it('should check if artifact files name are valid', () => {
    cy.visit(URL_START);
    cy.get('a').then((x) => {
      const hrefs = x
        .toArray()
        .map((x) => x.href)
        .filter((x) => x !== '')
        .filter((x) => x.startsWith('https://axartifacts.blob.core.windows.net/artifacts/'));

      const android = hrefs.filter((x) => x.includes('android'));
      android.forEach((x) => {
        expect(x).to.includes('actyxos.apk');
      });
      console.log(android);

      console.log(hrefs);
    });
  });
});
