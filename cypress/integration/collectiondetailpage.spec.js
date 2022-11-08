describe("Collection Detail page", () => {
    it("Visit a Collection Detail Page", () => {
        cy.request("collections/halloween-costumes")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
