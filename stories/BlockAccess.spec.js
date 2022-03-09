describe("BLOCK / Access", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=block-access--default&args=&viewMode=story")
        cy.get(".block-access").should("exist")

        cy.percySnapshot("BLOCK / Access: Default")
    })
})
