describe("Service page", () => {
    it("Visit a Service page", () => {
        cy.visit("/help/services-resources/a-test-workshop-with-a-pull-quote-fpb")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            `A Test Workshop with a "Pull Quote" FPB`
        )
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            // cy.visit("/about/blogs/no_entry", {failOnStatusCode: false})
            cy.request({url: "/help/services-resources/no_entry", failOnStatusCode: false}).its("status").should("equal", 404)
        })
    })
})
