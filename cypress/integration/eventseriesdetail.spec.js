describe("Event Series Detail page", () => {
    it("Visits an Event Series Detail Page", () => {
        // the following data will not work in production
        cy.visit("/visit/events-exhibitions/test-event-series")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Test Event Series: Side Pie")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
