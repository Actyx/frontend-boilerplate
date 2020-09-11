import { mkRandomEmail, mkRandomString } from '../utils';

const URL_START = 'https://www.actyx.com/get-started/';
const URL_END = 'https://www.actyx.com/thank-you';
const TEST_EMAIL = mkRandomEmail();
const TEST_DETAILS = `test - ${mkRandomString()} - I am a robot adding details`;

const checkThankYou = () => {
  // assert submit was successful
  cy.contains('Thank you!').should('exist');
  cy.location().should((loc) => {
    expect(loc.href).to.eq(URL_END);
  });
};

describe('get-started', () => {
  it('should schedule a call for a factory manager', () => {
    cy.visit(URL_START);
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

    checkThankYou();
  });

  it('should schedule a demo for an it project manager', () => {
    cy.visit(URL_START);
    // find button on page
    const btnScheduleCall = cy.contains('Get a demo');
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

    checkThankYou();
  });
});
