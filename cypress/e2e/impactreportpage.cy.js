import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runImpactReportTests({ withSnapshot = false } = {}) {
  it('Visit the Impact Report Page', () => {
    cy.visit('/impact/2022')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    // Ginny's Letter
    cy.get('h1')
      .should('have.class', 'intro')

    if (withSnapshot) {
      cy.visualSnapshot('impactreportpage')
    }
  })

  if (!isChromatic && !isPercy) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/impact/2080',
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
    describe(`Impact Report Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runImpactReportTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Impact Report Page', () => {
    runImpactReportTests({ withSnapshot: true })
  })
} else {
  describe('Impact Report Page', () => {
    runImpactReportTests({ withSnapshot: false })
  })
}
