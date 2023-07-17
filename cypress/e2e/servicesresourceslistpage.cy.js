describe("All Services & Resources Listing page", () => {
    it("Visits the All Services & Resources Listing Page", () => {
        cy.visit("help/services-resources")
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
    it("Search Found", () => {
        cy.visit("help/services-resources?q=test")
        cy.get(".logo-ucla").should("be.visible")
        cy.get("div.input-container > input[type=search]").should(
            "have.value",
            "test"
        )
        cy.get("h2.about-results").invoke("text").should("not.be.empty")
        //cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
