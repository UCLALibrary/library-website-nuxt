import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runEndowmentsListingTests({ withSnapshot = false } = {}) {
  it('Visits the Endowments Listing Page', () => {
    // the following data will not work in production
    cy.visit('/give/endowments')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-endowment-listing').should('be.visible')
    cy.get('h1.title').should('contain', 'Endowments')

    if (withSnapshot) {
      cy.visualSnapshot('endowmentslist')
    }
  })
  if (!isChromatic) {
    it('Search Found', () => {
      cy.visit('/give/endowments?q=lifu')

      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')

      cy.get('input[type=search]').should(
        'have.value',
        'lifu'
      )

      cy.get('h2.about-results').invoke('text').should('not.be.empty')
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Endowments Listing Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runEndowmentsListingTests({ withSnapshot: true })
    })
  })
} else {
  describe('Endowments Listing Page', () => {
    runEndowmentsListingTests({ withSnapshot: false })
  })
}
