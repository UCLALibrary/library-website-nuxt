describe("Events & Exhibitions List page", () => {
    it("Visits a Events & Exhibitions List Page", () => {
        cy.visit("visit/events-exhibitions")
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-events-exhibits").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "Exhibits & Upcoming Events"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
