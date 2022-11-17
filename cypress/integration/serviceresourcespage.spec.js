describe("Services & Resources page", () => {
    it("Visits the Services & Resources Page", () => {
        cy.visit("help/services-resources/a-test-workshop-with-a-pull-quote-fpb")
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
