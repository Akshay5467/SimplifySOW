import loginpage from "../Pages/loginpage"

describe('Login Test', () => {
  it('logs in and lands on Control Panel', () => {
    // credentials from cypress.env.json or fallback
    const username = Cypress.env('username') || 'akshay.khatode+3@simplifyvms.com'
    const password = Cypress.env('password') || 'Akshay@1234'

    loginpage.login(username, password)

    // adjust assertion to your actual app behavior
    cy.url().should('include', '/dashboard')
  });
})



