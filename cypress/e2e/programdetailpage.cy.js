import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runProgramDetailTests({ withSnapshot = false } = {}) {
  it('Visit a Program Detail Page', () => {
    cy.visit('/about/programs/digital-library-program')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'Digital Library Program'
    )

    cy.get('.page-anchor').scrollIntoView()
    cy.get('.page-anchor').should('be.visible')

    if (withSnapshot) {
      cy.visualSnapshot('programdetailpage')
    }
  })

  if (!isChromatic && !isPercy) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/about/programs/no_entry',
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
    describe(`Program Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runProgramDetailTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Program Detail Page', () => {
    runProgramDetailTests({ withSnapshot: true })
  })
} else {
  describe('Program Detail Page', () => {
    runProgramDetailTests({ withSnapshot: false })
  })
}
