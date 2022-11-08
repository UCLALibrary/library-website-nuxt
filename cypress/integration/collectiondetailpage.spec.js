describe("Collection Detail page", () => {
    it("Visits a Collection Detail Page", () => {
        cy.visit("/collections/halloween-costumes")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
