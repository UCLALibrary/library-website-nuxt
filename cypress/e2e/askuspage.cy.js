import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runAskUsTests({ withSnapshot = false } = {}) {
  it('Visits the Ask Us Page', () => {
    cy.visit('/help/services-resources/ask-us')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-ask-us').should('be.visible')
    cy.get('h1.title').should('contain', 'Ask Us')

    if (withSnapshot) {
      cy.visualSnapshot('askuspage')
    }
  })
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Ask Us Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runAskUsTests({ withSnapshot: true })
    })
  })
} else {
  describe('Ask Us Page', () => {
    runAskUsTests({ withSnapshot: false })
  })
}
