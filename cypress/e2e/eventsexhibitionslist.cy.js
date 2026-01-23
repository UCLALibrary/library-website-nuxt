import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runEventsExhibitionsListTests({ withSnapshot = false } = {}) {
  it('Visits the Events & Exhibitions List Page', () => {
    cy.intercept('/visit/events-exhibitions').as('getEventsRoutes')
    cy.visit('/visit/events-exhibitions')

    cy.wait('@getEventsRoutes').then(() => {
      // UCLA Library brand
      cy.get('.logo-ucla').should('be.visible')
      cy.get('.page-events-exhibits').should('be.visible')
      cy.get('h1.title').should('contain', 'Events & Exhibitions')

      if (withSnapshot) {
        cy.visualSnapshot('eventsexhibitionslist')
      }
    })
  })
  if(!isChromatic && !isPercy) {
    it('Visit Events & Exhibitions Listing page filter by event type', () => {
      cy.intercept('/visit/events-exhibitions/*').as('getEventsSearchRoutes')

      // routeFilters
      cy.visit(
        '/visit/events-exhibitions/?q=&filters=past:(yes)+AND+eventType.title.keyword:(Presentation+OR+Screening)',
        { timeout: 30000 }
      )

      cy.wait('@getEventsSearchRoutes').then(() => {
        // UCLA Library brand
        cy.get('.logo-ucla').should('be.visible')
        cy.get('h2.about-results').invoke('text').should('not.be.empty')
      })
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Events & Exhibitions List Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runEventsExhibitionsListTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Events & Exhibitions List Page', () => {
    runEventsExhibitionsListTests({ withSnapshot: true })
  })
} else {
  describe('Events & Exhibitions List Page', () => {
    runEventsExhibitionsListTests({ withSnapshot: false })
  })
}
