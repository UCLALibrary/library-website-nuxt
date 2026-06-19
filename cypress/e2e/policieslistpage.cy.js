import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runPolicyListTests({ withSnapshot = false, isMobile = false } = {}) {
  it('Visits a Policy List Page', () => {
    cy.visit('/about/policies')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-policies').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'Policies'
    )

    cy.get('body').then(($body) => {
      const $alert = $body.find('.site-notification-alert.is-opened')

      if ($alert.length) {
        cy.wrap($alert)
          .find('.button-dismiss')
          .click()

        cy.wrap($alert)
          .should('have.class', 'is-closed')
        cy.get('.page-anchor').scrollIntoView()
        cy.get('.page-anchor').should('be.visible')
      }
    })

    if (withSnapshot) {
      cy.visualSnapshot('policieslistpage')
    }
  })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Policy List Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runPolicyListTests({ withSnapshot: true, isMobile: label === 'Mobile' })
    })
  })
} else {
  describe('Policy List Page', () => {
    runPolicyListTests({ withSnapshot: false, isMobile: false })
  })
}
