const provider = Cypress.env('VISUAL_PROVIDER')

function runMobileHomepageTests({ withSnapshot = false } = {}) {
   it("Visit the Mobile Homepage", () => {
        cy.visit("/")
        cy.viewport(900, 900)
        cy.get(".site-brand-bar").should("be.visible")
        cy.get(".header-main-responsive").should("be.visible")

        cy.get(".svg__icon-menu").click({ force: true })
        if (withSnapshot) cy.visualSnapshot('mobilehomepage')

    })
}

  describe("Mobile Homepage", () => {
    runMobileHomepageTests({ withSnapshot: false })
  })


