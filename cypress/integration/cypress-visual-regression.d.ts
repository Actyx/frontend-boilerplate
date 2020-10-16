declare namespace Cypress {
  interface Chainable<Subject> {
    compareSnapshot(name: string): Chainable<Subject>;
  }
}
