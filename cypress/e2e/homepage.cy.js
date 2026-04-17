import { viewports } from '../support/viewports'

const provider = Cypress.env('VISUAL_PROVIDER')
const isChromatic = provider === 'chromatic'
const isPercy = provider === 'percy'

function runHomepageTests({ withSnapshot = false, label = 'Desktop' } = {}) {
 it('Visit the Homepage', () => {
    cy.visit('/')

    // UCLA brand
    cy.get('.site-brand-bar').should('be.visible')
    cy.get('.visually-hidden').should('contain', 'UCLA Home')
    cy.get('.ucla-logo')
      .parent()
      .should('have.attr', 'href', 'https://www.ucla.edu')
    cy.get('.svg__logo-library')
      .parent()
      .should('have.attr', 'href', 'https://www.library.ucla.edu')

    cy.get('a.logo-ucla')
      .should('have.attr', 'href', 'https://www.library.ucla.edu')
       if (label === 'Desktop') {
         // NavPrimary
        cy.get('.nav-primary').then((elem) => {
          if (elem[0].textContent.startsWith('Modern Endangered Archives Program Get help with')) {
            cy.get('.nav-primary').should('contain', 'Who we are')
              .and('contain', 'For applicants')
              .and('contain', 'Projects')
          }
        })
       }


    cy.contains('a.smart-link', 'Browse Collections').should('have.attr', 'target', '_blank')

    cy.get('.masthead-secondary').should(
      'contain',
      'Modern Endangered Archives Program'
    )

    cy.get('h2.section-title').should(
      'contain',
      'Program Resources'
    )

    cy.get('h2.section-title').should(
      'contain',
      'News'
    )

     if (withSnapshot) {
      cy.visualSnapshot('HomePage')
    }
  })
}
if (isChromatic) {
  viewports.forEach(({ label, viewportWidth, viewportHeight }) => {
    describe(`Website Homepage - ${label}`, { viewportWidth, viewportHeight }, () => {
      runHomepageTests({ withSnapshot: true, label })
    })
  })
} else if(isPercy){
  describe('Website Homepage', () => {
    runHomepageTests({ withSnapshot: true })
  })
} else {
  describe('Website Homepage', { viewportWidth: 1200, viewportHeight: 1200 }, () => {
    runHomepageTests({ withSnapshot: false })
  })
}
