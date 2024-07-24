describe("Event Series Detail page", () => {
    it("Visits an Event Series Detail Page", () => {
        // the following data will not work in production
        cy.request({
            url:'/visit/events-exhibitions/test-event-series',
            timeout: 120000,
            retryOnStatusCodeFailure: true
        }).visit("/visit/events-exhibitions/test-event-series")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should("contain", "Test - Event Series - Side Pie")
        cy.percySnapshot("eventseriesdetail",{ widths: [768, 992, 1200] })
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            
            /*cy.request({
                url: "/visit/events-exhibitions/no_entry",
                failOnStatusCode: false,
            })
                .its("status")
                .should("equal", 404)*/
            cy.visit("/visit/events-exhibitions/no_entry")
            cy.get("p.error").should("contain","404")
            cy.get("h1.error-title").should("contain","Page not found")
        })
    })
})
