import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runArticleDetailTests({ withSnapshot = false } = {}) {
  it('Visits an Article Detail Page', () => {
    // the following data will not work in production
    cy.visit('/about/news/kids-play')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should(
      'contain',
      'Kids Play'
    )
    if (withSnapshot) cy.visualSnapshot('Article Detail Page')
  })
}
if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Article Detail page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runArticleDetailTests({ withSnapshot: true })
    })
  })
 } else if(isPercy){
  describe('Article Detail page', () => {
    runArticleDetailTests({ withSnapshot: true })
  })
}
 else {
  describe('Article Detail page', () => {
    runArticleDetailTests({ withSnapshot: false })
  })
}
