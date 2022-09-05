class BasePage {
    static loadHomePage() {
        cy.visit("/")
    }

    static wait(number) {
        cy.visit(number)
    }
}

class HomePage extends BasePage {
    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe("Website Homepage", () => {

    before(function() {
        // Runs before all tests inside describe
        // Setup test data or test context
        // Send or reset the database
    })

    after(function() {
        // Runs after all tests inside describe blocks are done
        // Test clean up
        // Clean cookies or localStorage
    })

    beforeEach(function() {
        // Runs after each it block in the describe
        cy.log('Testing for Desktop Size')
        cy.viewport(1200, 1200)
        HomePage.loadHomePage()
    })

    afterEach(function() {
        // Runs after each it block in the describe
    })

    // Inside Header Smart component from default.vue
    // Header Smart #region

    it("Should test the main div", () => {
        cy.get("div.page.page-home")
            .should("be.visible")
    })

    it("Should test the masthead-primary", () => {
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
    })

    it("Should test the Header", () => {
        cy.get("header")
            .children()
            .should('have.length', 4)
    })

    it("Should test the Site Brand Bar", () => {
        // UCLA brand
        cy.get(".site-brand-bar").should("be.visible")
        cy.get(".visually-hidden").should("contain", "UCLA Home")
        cy.fixture('links').then((linksFixture) => {
            cy.get(".ucla-logo")
                .parent()
                .should("have.attr", "href", linksFixture.uclaEduLink)
        })
    })

    it("Should test the NavSecondary", () => {
        cy.get(".nav-secondary")
            .should("contain", "Locations & Hours")
            .and("contain", "Ask a Librarian")
            .and("contain", "My Account")

        
        cy.fixture('altTexts').then((altTextsFixture) => {
            cy.get(".logo-ucla")
                .should("have.attr", "alt", altTextsFixture.uclaLibraryLogoBlue)
        })

        cy.fixture('links').then((linksFixture) => {
            cy.get(".svg.logo-ucla")
                .parent()
                .should("have.attr", "href",  linksFixture.defaultLink)
        })

        cy.log('TEST NAVIGATION LIST ITEMS')
        const navigationListItems = [
            {
                id: "843",
                name: "Locations & Hours",
                to: "/locations",
                classes: "",
                target: "",
            },
            {
                id: "844",
                name: "Ask a Librarian",
                to: "/research-teaching-support/research-help",
                classes: null,
                target: "",
            },
            {
                id: "25315",
                name: "Support Us",
                to: "https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463",
                classes: "support-link",
                target: "1",
            },
            {
                id: "845",
                name: "My Account",
                to: "https://search.library.ucla.edu/discovery/login?vid=01UCS_LAL:UCLA",
                classes: "account-button",
                target: "1",
            },
        ]

        cy.get(".list")
            .children()
            .each((item, index) => {
                cy.wrap(item)
                    .should('contain.text', navigationListItems[index].name)
                    .children()
                    .should('have.attr', 'href', navigationListItems[index].to)
            })

        cy.log('TEST NAVIGATION ACCOUNT BUTTON')
        cy.get(".account-button")
            .should('have.attr', 'href', "https://search.library.ucla.edu/discovery/login?vid=01UCS_LAL:UCLA")
        
    })

    it("Should test the NavPrimary", () => {
        // NavPrimary
        cy.get(".nav-primary")
            .should("contain", "Get help with...")
            .and("contain", "Visit")
            .and("contain", "About")
            .and("contain", "Support us")
    })

    it("Should test the Get Help With Section", () => {

        // get help with
        cy.get(".section-cards-with-illustrations").should(
            "contain",
            "Get Help With"
        )
    })

    it.only("Should test the DividerWayFinder", () => {
        cy.get(".divider.divider-first.divider-way-finder.color-help")
            .should("be.visible")
    })
})
