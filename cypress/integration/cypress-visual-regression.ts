// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    compareSnapshot(name: string, threshold?: number): Chainable<Subject>;
  }
}
