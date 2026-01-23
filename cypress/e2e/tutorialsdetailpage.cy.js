import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runTutorialsDetailTests({ withSnapshot = false } = {}) {
  it('Visit a Tutorials Detail Page', () => {
    cy.visit('/help/tutorials/electron-configurations')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'Electron Configurations'
    )

    if (withSnapshot) {
      cy.visualSnapshot('tutorialsdetailpage')
    }
  })

  if (!isChromatic && !isPercy) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/help/tutorials/no_entry',
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
    describe(`Tutorials Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runTutorialsDetailTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Tutorials Detail Page', () => {
    runTutorialsDetailTests({ withSnapshot: true })
  })
} else {
  des
