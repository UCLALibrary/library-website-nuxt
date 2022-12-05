describe("Resource page", () => {
    it("Visit a Workshop Series Page", () => {
        cy.visit("/help/services-resources/service-with-all-flexible-page-block-types")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            `Service with all flexible page block types`
        )
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            // cy.visit("/about/blogs/no_entry", {failOnStatusCode: false})
            cy.request({url: "/about/staff/no_entry", failOnStatusCode: false}).its("status").should("equal", 404)
        })
    })
})
