describe("Search Results page", () => {
    it("Visits the search results page", () => {
        // the following data will not work in production
        cy.visit("/search_site")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
