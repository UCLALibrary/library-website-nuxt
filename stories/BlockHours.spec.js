describe("BLOCK / Hours", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=block-hours--default&args=&viewMode=story"
        )
        cy.get(".block-hours").should("exist")

        cy.percySnapshot("BLOCK / Hours: Default")
    })
})
