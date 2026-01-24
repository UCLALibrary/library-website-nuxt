import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runPolicyDetailTests({ withSnapshot = false } = {}) {
  it('Visits a Policy Detail Page', () => {
    cy.intercept('about/policies/shhh').as('getPolicyDetailRoute')
    cy.visit('/about/policies/shhh')

    cy.wait('@getPolicyDetailRoute').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')

      cy.get('.page-anchor').scrollIntoView()
      cy.get('.page-anchor').should('be.visible')

      if (withSnapshot) {
        cy.visualSnapshot('policiesdetailpage')
      }
    })
  })

  if (!isChromatic && !isPercy) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        // TODO COMMENT THIS LINE later if static page 404 starts working
        cy.request({
          url: '/about/policies/no_entry',
          failOnStatusCode: false
        })
          .its('status')
          .should('equal', 404)

        /*
          These tests will run once our 404 page starts working in static mode
          cy.visit("/about/policies/no_entry")
          cy.get("p.error").should("contain","404")
          cy.get("h1.error-title").should("contain","Page not found")
        */
      })
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Policy Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runPolicyDetailTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Policy Detail Page', () => {
    runPolicyDetailTests({ withSnapshot: true })
  })
} else {
  describe('Policy Detail Page', () => {
    runPolicyDetailTests({ withSnapshot: false })
  })
}
