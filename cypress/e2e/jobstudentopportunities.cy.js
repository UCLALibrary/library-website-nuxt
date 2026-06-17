import { viewports } from '../support/viewports'
import { a11yIt } from '../support/a11y'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runStudentOpportunitiesListTests({ withSnapshot = false } = {}) {
  it('Visits the Student Opportunities List Page', () => {
    // the following data will not work in production
    cy.visit('/about/student-opportunities')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-student-opportunities').should('be.visible')
    cy.get('h1.title').should('contain', 'Student Opportunities')

    if (withSnapshot) {
      cy.visualSnapshot('jobstudentopportunities')
    }
  })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Student Opportunities List Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runStudentOpportunitiesListTests({ withSnapshot: true })
    })
  })
} else {
  describe('Student Opportunities List Page', () => {
    runStudentOpportunitiesListTests({ withSnapshot: false })

    a11yIt('/about/student-opportunities')
  })
}
