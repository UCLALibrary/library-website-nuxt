import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runServicesResourcesListingTests({ withSnapshot = false } = {}) {
  it('Visits the All Services & Resources Listing Page', () => {
    cy.intercept('/help/*').as('getHelpRoutes')
    cy.visit('/help/services-resources')

    cy.wait('@getHelpRoutes').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')

      if (withSnapshot) {
        cy.visualSnapshot('servicesresourceslistpage')
      }
    })
  })

  it('Search Found', () => {
    cy.intercept('/help/services-resources?*').as('getResourcesSearchRoutes')
    cy.visit('/help/services-resources?q=test', { timeout: 35000 })

    cy.wait('@getResourcesSearchRoutes').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')

      cy.get('input[type=search]').should(
        'have.value',
        'test'
      )

      cy.get('h2.about-results').invoke('text').should('not.be.empty')

      if (withSnapshot) {
        cy.visualSnapshot('servicesresourcessearch')
      }
    })
  })
  if (!isChromatic && !isPercy) {
    it('Visit Services Listing page filter by category', () => {
      cy.visit('/help/services-resources?q=Radical&filters=serviceOrResourceType.keyword:(workshop+series)')
      cy.get('h2.about-results').should('be.visible')
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`All Services & Resources Listing Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runServicesResourcesListingTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('All Services & Resources Listing Page', () => {
    runServicesResourcesListingTests({ withSnapshot: true })
  })
} else {
  describe('All Services & Resources Listing Page', () => {
    runServicesResourcesListingTests({ withSnapshot: false })
  })
}
