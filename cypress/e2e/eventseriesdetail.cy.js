import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runEventSeriesDetailTests({ withSnapshot = false } = {}) {
  it('Visits an Event Series Detail Page', () => {
    // the following data will not work in production
    cy.request({
      url: '/visit/events-exhibitions/test-event-series',
      timeout: 120000,
      retryOnStatusCodeFailure: true
    }).visit('/visit/events-exhibitions/test-event-series')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should('contain', 'Test - Event Series - Side Pie')

    if (withSnapshot) {
      cy.visualSnapshot('eventseriesdetail')
    }
  })

  if (!isChromatic) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/visit/events-exhibitions/no_entry',
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
    describe(`Event Series Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runEventSeriesDetailTests({ withSnapshot: true })
    })
  })
} else {
  describe('Event Series Detail Page', () => {
    runEventSeriesDetailTests({ withSnapshot: false })
  })
}
