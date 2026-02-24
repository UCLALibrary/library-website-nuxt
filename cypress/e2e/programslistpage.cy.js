import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'

function runProgramListTests({ withSnapshot = false } = {}) {
  it('Visits the Program List Page', () => {
    cy.visit('/about/programs')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-programs').should('be.visible')

    cy.get('h1.title').should(
      'contain',
      'Programs & Initiatives'
    )

    cy.get('.search-generic-filter-buttons')
      .find('button')
      .should('have.length', 1)

    cy.get('.search-generic-filter-buttons > button').click()

    cy.get('fieldset.base-checkbox-group > ul.list > li.list-item')
      .find('label')
      .should('have.length.greaterThan', 0)

    if (withSnapshot) {
      cy.visualSnapshot('programlistpage')
    }
  })
  if (!isChromatic) {
    it('Visit Program Listing page filter by type', () => {
      cy.visit('/about/programs?q=&filters=programType.title.keyword:(Collections)', {
        timeout: 60000
      })

      cy.get('h2.about-results').should('be.visible')
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Program List Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runProgramListTests({ withSnapshot: true })
    })
  })
} else {
  describe('Program List Page', () => {
    runProgramListTests({ withSnapshot: false })
  })
}
