import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runServicePageTests({ withSnapshot = false } = {}) {
  it('Visit a Service Page', () => {
    cy.visit('/help/services-resources/service-with-all-flexible-page-block-types')

    // UCLA Library brand (intentionally omitted on this page)
    cy.get('h1.title').should(
      'contain',
      'Service with all flexible page block types'
    )

    cy.get('.page-anchor').scrollIntoView()
    cy.get('.page-anchor').should('be.visible')

    if (withSnapshot) {
      cy.visualSnapshot('service')
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
    describe(`Service Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runServicePageTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Service Page', () => {
    runServicePageTests({ withSnapshot: true })
  })
} else {
  describe('Service Page', () => {
    runServicePageTests({ withSnapshot: false })
  })
}
