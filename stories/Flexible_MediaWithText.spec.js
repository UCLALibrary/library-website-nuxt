describe("FLEXIBLE / Media With Text", () => {
    it("Default", () => {
        cy.visit(
            "/iframe.html?id=flexible-media-with-text--default&args=&viewMode=story"
        )
        cy.get(".section-media-with-text").should("exist")

        cy.percySnapshot("FLEXIBLE / Media With Text: Default")
    })
})
