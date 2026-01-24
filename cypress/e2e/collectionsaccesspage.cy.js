import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runAccessCollectionTests({ withSnapshot = false } = {}) {
  it('Visit an Access Collection Page', () => {
    // prevent cypress 404 errors on slow page load
    cy.intercept('/collections/*').as('getCollectionsRoutes')
    cy.visit('/collections/access')

    cy.wait('@getCollectionsRoutes').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')
      cy.get('.page-collections-access').should('be.visible')
      cy.get('h1.title').should(
        'contain',
        'Listing - Collections > Access Collections'
      )

      if (withSnapshot) {
        cy.visualSnapshot('collectionaccesspage')
      }
    })
  })
  if (!isChromatic && !isPercy) {
    it('Search Found', () => {
      cy.visit('/collections/access?q=test')

      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')

      cy.get('input[type=search]').should(
        'have.value',
        'test'
      )

      cy.get('h2.about-results').invoke('text').should('not.be.empty')
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Access Collection Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runAccessCollectionTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Access Collection Page', () => {
    runAccessCollectionTests({ withSnapshot: true })
  })
} else {
  describe('Access Collection Page', () => {
    runAccessCollectionTests({ withSnapshot: false })
  })
}
