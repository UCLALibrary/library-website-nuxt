import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runGeneralContentTests({ withSnapshot = false } = {}) {
  it('Visit a General Content Page', () => {
    cy.visit('/about')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('h1.title').should('contain', 'Who We Are')
    if (withSnapshot) cy.visualSnapshot('General Content Page')
  })
}
if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`General Content page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runGeneralContentTests({ withSnapshot: true })
    })
  })
} else if(isPercy){
  describe('General Content page', () => {
    runGeneralContentTests({ withSnapshot: true })
  })
}
else {
  describe('General Content page', () => {
    runGeneralContentTests({ withSnapshot: false })
  })
}
