import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runServicesResourcesPageTests({ withSnapshot = false } = {}) {
  it('Visits the Services & Resources Page', () => {
    cy.visit('/help/services-resources/a-test-workshop-with-a-pull-quote-fpb')

    // UCLA Library brand (intentionally omitted on this page)
    // cy.get('.logo-ucla').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'A Test Workshop with a "Pull Quote" FPB'
    )

    if (withSnapshot) {
      cy.visualSnapshot('workshopseries')
    }
  })

  if (!isChromatic && !isPercy) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/help/services-resources/no_entry',
          failOnStatusCode: false
        })
          .its('status')
          .should('equal', 404)

        /*
          cy.visit("/help/services-resources/no_entry")
          cy.get("p.error").should("contain","404")
          cy.get("h1.error-title").should("contain","Page not found")
        */
      })
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Services & Resources Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runServicesResourcesPageTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Services & Resources Page', () => {
    runServicesResourcesPageTests({ withSnapshot: true })
  })
} else {
  describe('Services & Resources Page', () => {
    runServicesResourcesPageTests({ withSnapshot: false })
  })
}
