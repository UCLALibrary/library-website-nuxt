describe("NAV / Header Smart", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=nav-header-smart--default&args=&viewMode=story"
        )
        cy.get(".header-smart").should("exist")

        cy.percySnapshot("NAV / Header Smart: Default")
    })
})
