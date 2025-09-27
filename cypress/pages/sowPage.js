class SowPage {
  clickSowMenu() {
    cy.get('.ng-trigger', { timeout: 10000 })
      .contains('SOW')
      .should('be.visible')
      .click({ force: true })
  }

  clickCreateSow() {
    cy.get('.p-element', { timeout: 10000 })
      .contains('Create SOW')
      .should('be.visible')
      .click({ force: true })
  }

  navigateToCreateSow() {
    this.clickSowMenu()
    this.clickCreateSow()
  }
}

export default new SowPage()

