describe("Site Search page", () => {
    it("Search blank", () => {
        cy.visit("/search-site")
        cy.get("h1.title").should("contain", "Search Results")
       
        cy.get("div.error-text > div.rich-text > h1").should('contain',"Search for “” not found.")

    })
    it("Search all", () => {
        cy.visit("/search-site?q=*")
        cy.get(".about-results").should('be.visible')
    })

})
