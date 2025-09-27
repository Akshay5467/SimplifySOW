class loginpage {
  visit() {
    cy.visit('/')           // uses baseUrl from cypress.config.js
  }

  enterUsername(username) {
    cy.get('[formcontrolname="username"]').clear().type(username)
  }

  enterPassword(password) {
    cy.get('[formcontrolname="password"]').clear().type(password)
  }

  clickLogin() {
    cy.get('[class="col-12 ps-1"]').click().wait(5000)
  }

  login(username, password) {
    this.visit()
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }
}

export default new loginpage()