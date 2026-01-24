import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runArticleNewsListingTests({ withSnapshot = false } = {}) {
  it('Visit the Article News Listing Page', () => {
    cy.intercept('/about/news').as('getNews')
    cy.visit('/about/news')

    cy.wait('@getNews').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')
      cy.get('.page-news').should('be.visible')
      cy.get('h1.title').should('contain', 'Library News')
      cy.get('.search-generic-filter-buttons').find('button').should('have.length', 2)

      cy.get('.search-generic-filter-buttons')
        .find('button')
        .each(($el) => {
          cy.wrap($el).click()
          cy.get('fieldset.base-checkbox-group > ul.list > li.list-item')
            .find('label')
            .should('have.length.greaterThan', 0)
        })

      if (withSnapshot) {
        cy.visualSnapshot('articlenewslistingpage')
      }
    })
  })
  if (!isChromatic && !isPercy) {
    it('Visit News Article Listing page filter by category', () => {
      cy.visit('/about/news?q=&filters=articleCategory.title.keyword:(Featured)')
      cy.get('h2.about-results').should('be.visible')
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Article News Listing Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runArticleNewsListingTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Article News Listing Page', () => {
    runArticleNewsListingTests({ withSnapshot: true })
  })
} else {
  describe('Article News Listing Page', () => {
    runArticleNewsListingTests({ withSnapshot: false })
  })
}
