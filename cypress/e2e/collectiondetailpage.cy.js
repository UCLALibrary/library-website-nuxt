import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runCollectionDetailTests({ withSnapshot = false, label = 'Desktop' } = {}) {
  it('Visits a Collection Detail Page', () => {
    cy.request({
      url: '/collections/explore/halloween-costumes/',
      timeout: 120000,
      retryOnStatusCodeFailure: true
    }).visit('/collections/explore/halloween-costumes/')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-collection-detail').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'TEST - Collection - Halloween Costumes'
    )

    cy.get('.page-anchor').scrollIntoView()
    cy.get('.page-anchor').should('be.visible')

    if (withSnapshot && label === 'Tablet') {
      /*
      Your story couldn’t be captured because it exceeds our
      25,000,000px limit.
      Its dimensions are 1,280x21,630px.
      Possible ways to resolve:

      Separate pages into components
      Minimize the number of very large elements in a story
      */

      cy.visualSnapshot('collectiondetailpage')
    }
  })

  if (!isChromatic && !isPercy) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/collections/explore/no_entry',
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
    describe(`Collection Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runCollectionDetailTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Collection Detail Page', () => {
    runCollectionDetailTests({ withSnapshot: true })
  })
} else {
  describe('Collection Detail Page', () => {
    runCollectionDetailTests({ withSnapshot: false })
  })
}
