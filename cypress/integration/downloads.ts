const URL_START = 'https://downloads.actyx.com/';

describe('downloads.actyx.com', () => {
  it('should return 200 status', () => {
    cy.request(URL_START).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });
});
