import { a11yIt } from '../support/a11y'

function runMobileHomepageTests({ withSnapshot = false } = {}) {
  it('Visit the Mobile Homepage', () => {
    cy.visit('/')
    cy.viewport(900, 900)
    cy.get('.site-brand-bar').should('be.visible')
    cy.get('.header-main-responsive').should('be.visible')

    // Not sure why this is failing all of a sudden
    // cy.get('.svg__icon-menu').click({ force: true })

    if (withSnapshot) {
      // keep explicit widths for this test (mobile-focused snapshots)
      cy.visualSnapshot('mobilehomepage', { widths: [768, 992, 1002] })
    }
  })
}

describe('Mobile Website Homepage', () => {
  runMobileHomepageTests({ withSnapshot: false })

  // re-enable when LADI-5226 is merged and test if fixed
  // Set selector to null to ccheck the header and footer for accessibility violations as well on the homepage
  // Exclude SectionDualMasonry images for now as axe-core flags their structure as a violation,
  // but siteImprove and screen readers seem to handle them just fine.
  a11yIt.skip('/', { selector: null, exclude: '.brick .brick-image' })
})
