class controlpanelpage {
  // elements
  header() {
    return cy.get('h6')   
  }

  // actions
  verifyPageLoaded() {
    this.header().should('contain.text', 'Control Panel')
  }
}

export default new controlpanelpage()