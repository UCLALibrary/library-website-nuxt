describe("NAV / Header Smart", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=nav-header-smart--default--default&args=&viewMode=story"
        )
        cy.get(".header-smart").should("exist")

        cy.percySnapshot("NAV / Header Smart: Default")
    }),
    it("MobileWindowWidth", () => {
        cy.visit(
            "/iframe.html?id=nav-header-smart--mobile-window-width--default&args=&viewMode=story"
        )
        cy.get(".header-smart").should("exist")

        cy.percySnapshot("NAV / Header Smart: Mobile Window Width")
    })
})
