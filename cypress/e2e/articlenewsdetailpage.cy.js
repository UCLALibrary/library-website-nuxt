import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runArticleDetailTests({ withSnapshot = false } = {}) {
  it('Visits a News Detail Page', () => {
    cy.request({
      url: '/about/news/turtles/',
      timeout: 120000,
      retryOnStatusCodeFailure: true
    }).visit('/about/news/turtles/')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'I Like Turtles'
    )

    if (withSnapshot) {
      cy.visualSnapshot('articlenewsdetailpage')
    }
  })

  if (!isChromatic) {
    context("When there isn't an entry in craft", () => {
      it('Raises a 404 error', () => {
        cy.request({
          url: '/about/news/no_entry',
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
    describe(`Article Detail Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runArticleDetailTests({ withSnapshot: true })
    })
  })
} else {
  describe('Article Detail Page', () => {
    runArticleDetailTests({ withSnapshot: false })
  })
}
