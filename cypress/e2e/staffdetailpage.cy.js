import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runStaffDetailTests({ withSnapshot = false } = {}) {
  it('Visit a Staff Detail Page', () => {
    cy.visit('/about/staff/brigid-abreu')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    cy.get('h1.staffName').should(
      'contain',
      'Brigid Abreu'
    )

    if (withSnapshot) {
      cy.visualSnapshot('staffdetailpage')
    }
  })

  if (!isChromatic) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.visit('/about/staff/no_entry', { failOnStatusCode: false })
        cy.get('p.error').should('contain', '404')
        cy.get('h1.error-title').should('contain', 'Page not found')
      })
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Staff Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runStaffDetailTests({ withSnapshot: true })
    })
  })
} else {
  describe('Staff Detail Page', () => {
    runStaffDetailTests({ withSnapshot: false })
  })
}
