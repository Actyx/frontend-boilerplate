import { mkRandomEmail, mkRandomString } from '../utils';

const TEST_EMAIL = mkRandomEmail();
const TEST_DETAILS = `test - ${mkRandomString()} - I am a robot adding details`;

describe('get-started', () => {
  before(() => {
    cy.visit('https://www.actyx.com/get-started/');
  });

  it('should schedule a call for a factory manager', () => {
    // find button on page
    const btnScheduleCall = cy.contains('Schedule a call');
    btnScheduleCall.should('exist');

    // click button and open dialog
    btnScheduleCall.click();
    const inputEmail = cy.get('input[name="email"]').should('exist');

    // enter email
    inputEmail.click();
    inputEmail.type(TEST_EMAIL);

    // enter details
    const inputDetails = cy.get('textarea[name="additionalDetails"]').should('exist');
    inputDetails.type(TEST_DETAILS);

    // submit form
    const btnSumbit = cy.get('button[type="submit"]').should('exist');
    btnSumbit.click();

    // assert submit was successful
    cy.contains('Thank you!').should('exist');
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://www.actyx.com/thank-you');
    });
  });
});
