import loginpage from "../Pages/loginpage"
import sowPage from "../pages/sowPage"

describe('Navigate to SOW', () => {
  it('should login and click on SOW', () => {
    loginpage.login('akshay.khatode+3@simplifyvms.com', 'Akshay@1234')

    // Pass sowPage methods into cy.origin
    cy.origin('https://qa-hiring.simplifysandbox.net', { args: {} }, ({}) => {
      // Redefine steps inside origin
      cy.get('.ng-trigger', { timeout: 10000 }).contains('SOW').click({ force: true })
      cy.get('.p-element', { timeout: 10000 }).contains('Create SOW').click({ force: true })

      // Step 3: Fill Create SOW form
      cy.get('[class="ng-input"]').first().click({force:true}).wait(5000)
      cy.get('[class="ng-option-label ng-star-inserted"]').eq(1).click();
      // cy.get('textarea[formcontrolname="sowDescription"]').type('Created by Cypress automation')

      // // Dates
      // cy.get('input[formcontrolname="startDate"]').clear().type('09/27/2025')
      // cy.get('input[formcontrolname="endDate"]').clear().type('12/31/2025')

      // // PO & External Reference
      // cy.get('input[formcontrolname="poNumber"]').type('PO123456')
      // cy.get('input[formcontrolname="externalReferenceId"]').type('EXT-98765')

      // // File Upload
      // cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.pdf')

      // // Submit / Next Step
      // cy.contains('Get Started').click()
    })
  })
})
