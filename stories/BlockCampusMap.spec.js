describe("BLOCK / Campus Map", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-campus-map--default&args=&viewMode=story"
        )
        cy.get(".block-campus-map").should("exist")

        cy.percySnapshot("BLOCK / Campus Map: Default")
    })
})
