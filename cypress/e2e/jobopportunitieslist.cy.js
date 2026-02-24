import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runJobOpportunitiesListTests({ withSnapshot = false } = {}) {
  it('Visits the Job Opportunities List Page', () => {
    // the following data will not work in production
    cy.visit('/about/jobs/staff-academic-jobs/')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-job-opportunities').should('be.visible')
    cy.get('h1.title').should('contain', 'Job Opportunities')

    if (withSnapshot) {
      cy.visualSnapshot('jobopportunitieslist')
    }
  })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Job Opportunities List Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runJobOpportunitiesListTests({ withSnapshot: true })
    })
  })
} else {
  describe('Job Opportunities List Page', () => {
    runJobOpportunitiesListTests({ withSnapshot: false })
  })
}
