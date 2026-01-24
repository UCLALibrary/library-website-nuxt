import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runResourcePageTests({ withSnapshot = false } = {}) {
  it('Visit a Resource Page', () => {
    cy.visit('/help/services-resources/animals')

    // UCLA Library brand (intentionally omitted on this page)
    cy.get('h1.title').should(
      'contain',
      'Animals are Excellent and Flowers are Fluffy'
    )

    if (withSnapshot) {
      cy.visualSnapshot('resource')
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
      })
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Resource Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runResourcePageTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Resource Page', () => {
    runResourcePageTests({ withSnapshot: true })
  })
} else {
  describe('Resource Page', () => {
    runResourcePageTests({ withSnapshot: false })
  })
}
