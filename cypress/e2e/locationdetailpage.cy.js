import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runLocationDetailTests({ withSnapshot = false } = {}) {
  it('Visit a Location Detail Page', () => {
    cy.visit('/visit/locations/biomed')

    // UCLA Library brand (intentionally omitted on this page)
    cy.get('h1.title').should(
      'contain',
      'Louise M. Darling Biomedical Library'
    )

    cy.get('.page-anchor').scrollIntoView()
    cy.get('.page-anchor').should('be.visible')

    if (withSnapshot) {
      cy.visualSnapshot('locationdetailpage')
    }
  })

  if (!isChromatic) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/visit/locations/no_entry',
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
    describe(`Location Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runLocationDetailTests({ withSnapshot: true })
    })
  })
} else {
  describe('Location Detail Page', () => {
    runLocationDetailTests({ withSnapshot: false })
  })
}
