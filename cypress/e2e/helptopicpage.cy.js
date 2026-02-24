import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runHelpTopicTests({ withSnapshot = false } = {}) {
  it('Visit a Help Topic Page', () => {
    cy.visit('/help/printing')

    // UCLA Library brand (intentionally omitted on this page)
    cy.get('h1.title').should(
      'contain',
      'Printing Practices - Simple Card 3 Up - Rich Text - Pull Quote'
    )

    cy.get('.page-anchor').scrollIntoView()
    cy.get('.page-anchor').should('be.visible')

    if (withSnapshot) {
      cy.visualSnapshot('helptopic')
    }
  })

  if (!isChromatic) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/help/no_entry',
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
    describe(`Help Topic Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runHelpTopicTests({ withSnapshot: true })
    })
  })
} else {
  describe('Help Topic Page', () => {
    runHelpTopicTests({ withSnapshot: false })
  })
}
