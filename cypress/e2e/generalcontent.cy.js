import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runGeneralContentTests({ withSnapshot = false } = {}) {
  it('Visits a General Content Page', () => {
    cy.visit('/privacy-terms-of-use')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should('contain', 'Privacy & Terms of Use')

    if (withSnapshot) {
      cy.visualSnapshot('generalcontent')
    }
  })

  it('Visits a Nested General Content Page', () => {
    cy.visit('/accessibility/emergency')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should('contain', 'Emergency')

    if (withSnapshot) {
      cy.visualSnapshot('generalcontentnested')
    }
  })

  if (!isChromatic) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/no_entry',
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
    describe(`General Content Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runGeneralContentTests({ withSnapshot: true })
    })
  })
} else {
  describe('General Content Page', () => {
    runGeneralContentTests({ withSnapshot: false })
  })
}
