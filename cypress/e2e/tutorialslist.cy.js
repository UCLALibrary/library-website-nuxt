import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runTutorialsListingTests({ withSnapshot = false } = {}) {
  it('Visits the Tutorials Listing Page', () => {
    cy.visit('/help/tutorials')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-tutorials-listing').should('be.visible')
    cy.get('h1.title').should('contain', 'Tutorials')

    if (withSnapshot) {
      cy.visualSnapshot('tutorialslist')
    }
  })
  if (!isChromatic && !isPercy) {
    it('Searches Tutorials Listing', () => {
      cy.visit('/help/tutorials/?q=tutorial&filters=', { timeout: 60000 })

      cy.get('input[type=search]').should(
        'have.value',
        'tutorial'
      )

      cy.get('h2.about-results')
        .invoke('text')
        .should('not.be.empty')
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Tutorials Listing Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runTutorialsListingTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Tutorials Listing Page', () => {
    runTutorialsListingTests({ withSnapshot: true })
  })
} else {
  describe('Tutorials Listing Page', () => {
    runTutorialsListingTests({ withSnapshot: false })
  })
}
