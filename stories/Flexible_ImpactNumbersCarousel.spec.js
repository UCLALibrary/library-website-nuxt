describe("FLEXIBLE / Impact Numbers Carousel", () => {
    it("Default", () => {
        cy.visit("/iframe.html?id=flexible-impact-numbers-carousel--default")
        cy.get(".impact-numbers-carousel").should("exist")

        cy.percySnapshot("FLEXIBLE / Impact Numbers Carousel: Default")
    })
})
