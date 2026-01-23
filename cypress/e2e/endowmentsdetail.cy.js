import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runEndowmentsDetailTests({ withSnapshot = false } = {}) {
  it('Visits an Endowments Detail Page', () => {
    cy.visit('/give/endowments/lifu-wang-chinese-cultural-endowment')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-endowments-detail').should('be.visible')
    cy.get('h1.title').should('contain', 'Lifu Wang')

    if (withSnapshot) {
      cy.visualSnapshot('endowmentsdetail')
    }
  })

  if (!isChromatic && !isPercy) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/give/endowments/no_entry',
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
    describe(`Endowments Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runEndowmentsDetailTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Endowments Detail Page', () => {
    runEndowmentsDetailTests({ withSnapshot: true })
  })
} else {
  describe('Endowments Detail Page', () => {
    runEndowmentsDetailTests({ withSnapshot: false })
  })
}
