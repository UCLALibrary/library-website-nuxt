import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runStaffListingTests({ withSnapshot = false } = {}) {
  it('Visit the Staff Listing Page', () => {
    cy.visit('/about/staff')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-staff').should('be.visible')
    cy.get('h1.title').should('contain', 'Staff Directory')

    cy.get('.search-generic-filter-buttons')
      .find('button')
      .should('have.length', 2)

    cy.get('.search-generic-filter-buttons')
      .find('button')
      .each(($el) => {
        cy.wrap($el).click()
        cy.get('fieldset.base-checkbox-group > ul.list > li.list-item')
          .find('label')
          .should('have.length.greaterThan', 0)
      })

    cy.get('.search-generic-filter-buttons > div.single-checkbox').should('be.visible')

    if (withSnapshot) {
      cy.visualSnapshot('stafflistingpage')
    }
  })
  if(!isChromatic && !isPercy) {
    it('Visit Subject Librarian Listing page', () => {
      cy.intercept('/about/staff/*').as('getStaffRoutes')
      cy.visit('/about/staff?q=&filters=subjectLibrarian.keyword:(yes)', { timeout: 30000 })

      cy.wait('@getStaffRoutes').then(() => {
        cy.get('td.column-1').should('be.visible')
      })
    })
  }
}

if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Staff Listing Page - ${label}`, { viewportWidth, viewportHeight }, () => {
      runStaffListingTests({ withSnapshot: true })
    })
  })
} else if (isPercy) {
  describe('Staff Listing Page', () => {
    runStaffListingTests({ withSnapshot: true })
  })
} else {
  describe('Staff Listing Page', () => {
    runStaffListingTests({ withSnapshot: false })
  })
}
