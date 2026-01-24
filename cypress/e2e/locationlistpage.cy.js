import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runLocationListingTests({ withSnapshot = false } = {}) {
  it('Visit a Location Listing Page', () => {
    cy.visit('/visit/locations')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'Listing - Locations & Hours'
    )

    cy.get('.search-generic-filter-buttons')
      .find('button')
      .should('have.length', 1)

    cy.get('.search-generic-filter-buttons > button').click()

    cy.get('fieldset.base-checkbox-group > ul.list > li.list-item')
      .find('label')
      .should('have.length.greaterThan', 0)

    if (withSnapshot) {
      cy.visualSnapshot('locationlistpage')
    }
  })
  if (!isChromatic && !isPercy) {
    it('Visit Locations Listing page filter by type', () => {
      cy.visit('/visit/locations?q&filters=amenities.keyword:(Lockers)', {
        timeout: 60000
      })

      cy.get('h2.about-results')
        .invoke('text')
        .should('not.be.empty')
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Location Listing Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runLocationListingTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Location Listing Page', () => {
    runLocationListingTests({ withSnapshot: true })
  })
} else {
  describe('Location Listing Page', () => {
    runLocationListingTests({ withSnapshot: false })
  })
}
