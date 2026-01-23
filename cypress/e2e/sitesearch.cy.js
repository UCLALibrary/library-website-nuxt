import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runSiteSearchTests({ withSnapshot = false } = {}) {
  it('Search blank', () => {
    cy.visit('/search-site')

    cy.get('h1.title').should('contain', 'Search Results')
    cy.get('div > h2').should('contain', 'Search for “” not found.')

    // no snapshot for empty state
  })
  if(!isChromatic && !isPercy) {
    it('Search all', () => {
      cy.intercept('/search-site/*').as('getSearchRoutes')
      cy.visit('/search-site/?q=*', { timeout: 30000 })

      cy.wait('@getSearchRoutes').then(() => {
        // UCLA Library brand
        cy.get('.logo-ucla').should('be.visible')

        cy.get('input[type=search]').should(
          'have.value',
          '*'
        )

        cy.get('h2.about-results', { timeout: 80000 })
          .invoke('text')
          .should('not.be.empty')

        // intentionally no snapshot here (behavioral test)
      })
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Site Search Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runSiteSearchTests({ withSnapshot: false })
    })
  })
} else if (isPercy) {
  describe('Site Search Page', () => {
    runSiteSearchTests({ withSnapshot: false })
  })
} else {
  describe('Site Search Page', () => {
    runSiteSearchTests({ withSnapshot: false })
  })
}
