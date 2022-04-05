describe("GLOBAL / Smart Link", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=global-smart-link--default&args=&viewMode=story"
        )
        cy.get(".smart-link").should("exist")

        cy.percySnapshot("GLOBAL / Smart Link: Default")
    })
})
