class PrincipalPage {
  constructor() {
    this.path = "";
  }
  navigate() {
    cy.visit(this.path);
  }

  clickElement(selector) {
    cy.get(selector).click();
  }

  validateText(selector, text) {
    cy.get(selector).should("contain.text", text);
  }
}

export default PrincipalPage;
