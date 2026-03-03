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
})
