import { mkRandomEmail } from '../utils';

const URL_HOME = 'https://www.actyx.com/';

describe('www.actyx.com/', () => {
  beforeEach(() => {
    cy.visit(URL_HOME);
  });

  it('should switch language after user clicks option', () => {
    // check if english appears as default
    cy.contains('English').should('exist');
    cy.contains('The Factory Digitization Platform').should('exist');

    // change to german
    cy.get('a[href="/de/*"]').first().click({ force: true });
    cy.contains('Deutsch').should('exist');
    cy.contains('Die Plattform zur Digitalisierung der Fabrik').should('exist');
  });

  it('should sign-up to newsletter', () => {
    // check if text is on page
    const email = mkRandomEmail();
    cy.contains('Sign-up to our newsletter').should('exist');

    // get input and enter an email
    const input = cy.get('input[type="email"]');
    input.should('exist');
    input.type(email);

    // click submit button and assert subscription
    const submit = cy.get('button[type="submit"]');
    submit.should('exist');
    submit.click();
    cy.contains('Thank you! Your request was successfully submitted.');
  });

  describe.only('cookies warning', () => {
    it('should show cookies warning in en', () => {
      cy.visit(`${URL_HOME}`);
      cy.contains(
        'This website stores cookies on your computer to provide more personalized services to you.'
      ).should('exist');
    });

    it('should show cookies warning in de', () => {
      cy.visit(`${URL_HOME}/de/`);
      cy.contains('Diese Website speichert Cookies auf Ihrem Computer.').should('exist');
    });
  });
});
