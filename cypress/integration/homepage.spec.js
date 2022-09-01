describe("Website Homepage", () => {
    it("Visit the Homepage", () => {
        cy.visit("/")
        cy.viewport(1200, 1200)

        // Inside Header Smart component from default.vue
        // Header Smart #region
        // UCLA brand
        cy.get(".site-brand-bar").should("be.visible")
        cy.get(".visually-hidden").should("contain", "UCLA Home")
        cy.fixture('links').then((linksFixture) => {
            cy.get(".ucla-logo")
                .parent()
                .should("have.attr", "href", linksFixture.uclaEduLink)
        })

        // NavSecondary
        cy.get(".nav-secondary")
            .should("contain", "Locations & Hours")
            .and("contain", "Ask a Librarian")
            .and("contain", "My Account")

        
        cy.fixture('altTexts').then((altTextsFixture) => {
            cy.get(".logo-ucla")
                .should("have.attr", "alt", altTextsFixture.uclaLibraryLogoBlue)
        })

        cy.fixture('links').then((linksFixture) => {
            cy.get(".logo-ucla")
                .parent()
                .should("have.attr", "href", linksFixture.defaultLink)
        })

        // NavPrimary
        cy.get(".nav-primary")
            .should("contain", "Get help with...")
            .and("contain", "Visit")
            .and("contain", "About")
            .and("contain", "Support us")

        // Header Smart #endregion

        // MastheadPrimary
        cy.get(".masthead-primary").find(".logo").should("be.visible")
        cy.get(".masthead-primary")
            .find(".search-home")
            .should("be.visible")
            .and("contain", "Search the Library Site")
            .and("contain", "Search Materials")
        cy.get(".masthead-primary")
            .find("input.input-search")
            .should("have.attr", "placeholder", "Search by keyword")
        cy.get(".masthead-primary")
            .contains("a", "Course Reserves")
            .should(
                "have.attr",
                "href",
                "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do"
            )
        cy.get(".masthead-primary")
            .contains("a", "UCLA Research Guides")
            .should("have.attr", "href", "https://guides.library.ucla.edu/")
        cy.get(".masthead-primary")
            .contains("a", "Databases A-Z")
            .should(
                "have.attr",
                "href",
                "https://guides.library.ucla.edu/az.php"
            )

        // get help with
        cy.get(".section-cards-with-illustrations").should(
            "contain",
            "Get Help With"
        )

        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
