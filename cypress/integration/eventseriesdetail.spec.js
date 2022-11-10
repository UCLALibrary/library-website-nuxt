describe("Event Series Detail Page", () => {
    it("Visits an Event Series Detail Page", () => {
        cy.visit("/visit/events-exhibitions/test-event-series")
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Test Event Series: Side Pie")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
