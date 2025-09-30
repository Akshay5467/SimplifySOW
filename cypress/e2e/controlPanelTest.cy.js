import loginpage from '../Pages/loginpage.js'
import controlpanelpage from '../pages/controlpanelpage.js'

describe('Control Panel Tests', () => {

  beforeEach(() => {
    // login before each test
    const username = Cypress.env('username') || 'admin'
    const password = Cypress.env('password') || 'Admin@Simplify'

    loginpage.login(username, password)
    controlpanelpage.verifyPageLoaded()
  })

  it('should show Control Panel after login', () => {
    controlpanelpage.verifyPageLoaded()
  });
})
