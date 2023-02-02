describe("Collection Detail page", () => {
    it("Visits a Collection Detail Page", () => {
        cy.visit("/collections/explore/halloween-costumes")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-collection-detail").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "TEST - Title of Collection - Halloween Costumes"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    context("When there isn't an entry in craft", () => {
        it("Raises a 404 error", () => {
            // cy.visit("/about/blogs/no_entry", {failOnStatusCode: false})
            /* cy.request({
                url: "/collections/explore/no_entry",
                failOnStatusCode: false,
            })
                .its("status")
                .should("equal", 404)*/
        })
    })
})
