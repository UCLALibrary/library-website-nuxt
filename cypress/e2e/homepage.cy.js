describe("Website Homepage", () => {
    it("Visit the Homepage", () => {
        cy.visit("/")
        cy.viewport(1200, 1200)

        // UCLA brand
        cy.get(".site-brand-bar").should("be.visible")
        cy.get(".visually-hidden").should("contain", "UCLA Home")
        cy.get(".ucla-logo")
            .parent()
            .should("have.attr", "href", "https://www.ucla.edu")

        // NavSecondary
        cy.get(".nav-secondary")
            .should("contain", "Locations & Hours")
            .and("contain", "Ask Us")
            .and("contain", "My Account")

        // NavPrimary
        cy.get(".nav-primary")
            .should("contain", "Get help with...")
            .and("contain", "Visit")
            .and("contain", "About")

        // MastheadPrimary
        cy.get(".masthead-primary").find(".logo").should("be.visible")
        cy.get(".masthead-primary")
            .find(".search-home")
            .should("be.visible")
            .and("contain", "Site Search")
            .and("contain", "UC Library Search")
        cy.get(".masthead-primary")
            .find("input[type='search']")
            .should(
                "have.attr",
                "placeholder",
                "Search articles, books and more"
            )
        cy.get(".masthead-primary")
            .contains("a", "Databases A-Z")
            .should(
                "have.attr",
                "href",
                "https://guides.library.ucla.edu/az.php?&_ga=2.194620910.2109030156.1663611669-236460657.1661379075"
            )
        cy.get(".masthead-primary")
            .contains("a", "Course Reserves")
            .should(
                "have.attr",
                "href",
                "https://www.library.ucla.edu/borrow-renew-return/course-reserves"
            )
        // cy.get(".masthead-primary")
        //     .contains("a", "Advanced Search")
        //     .should("have.attr", "href", "http://www.primo.com")

        // Get help with
        cy.get(".section-cards-with-illustrations").should(
            "contain",
            "Get Help With"
        )

        cy.get('[aria-label="Ask Us: Online Chat"]').click({ force: true })

        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
