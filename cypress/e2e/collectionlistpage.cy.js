import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runCollectionListingTests({ withSnapshot = false } = {}) {
  it('Visit the Collection Listing Page', () => {
    cy.visit('/collections')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    cy.get('.page-anchor').scrollIntoView()
    cy.get('.page-anchor').should('be.visible')

    if (withSnapshot) {
      cy.visualSnapshot('collectionlistpage')
    }
  })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Collection Listing Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runCollectionListingTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Collection Listing Page', () => {
    runCollectionListingTests({ withSnapshot: true })
  })
} else {
  describe('Collection Listing Page', () => {
    runCollectionListingTests({ withSnapshot: false })
  })
}
