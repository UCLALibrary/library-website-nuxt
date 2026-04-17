import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runNewsListingTests({ withSnapshot = false } = {}) {
  it('Visit the News Listing Page', () => {
    cy.visit('/about/news')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should('contain', 'MEAP News')
    if (withSnapshot) cy.visualSnapshot('News Listing Page')
  })
  if (!isChromatic) {
    it('Search Found', () => {
      cy.visit('/about/news?q=kids&filters=')
      cy.get('.logo-ucla').should('be.visible')
      cy.get('input[type=search]').should(
        'have.value',
        'kids'
      )
      cy.get('h2.about-results').invoke('text').should('not.be.empty')
    })
  }
}
if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`News Listing page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runNewsListingTests({ withSnapshot: true })
    })
  })
 } else if(isPercy){
  describe('News Listing page', () => {
    runNewsListingTests({ withSnapshot: true })
  })
}
 else {
  describe('News Listing page', () => {
    runNewsListingTests({ withSnapshot: false })
  })
}
