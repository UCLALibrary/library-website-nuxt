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
        cy.log('Testing for Desktop Size')
        cy.viewport(1200, 1200)
        HomePage.loadHomePage()
    })

    after(function() {
        // Runs after all tests inside describe blocks are done
        // Test clean up
        // Clean cookies or localStorage
    })

    beforeEach(function() {
        // Runs after each it block in the describe
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
            .should('have.length', 2)
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

    it.only("Should test the NavPrimary", () => {
        cy.log('Testing for Desktop Size')
        cy.viewport(1200, 1200)
        HomePage.loadHomePage()
        
        cy.get("nav")
            .should("be.visible")
        
        cy.fixture('links').then((linksFixture) => {
            cy.get(".item-top")
                .children()
                .should("have.attr", "href",  linksFixture.defaultLink)
        })

        cy.fixture('accessibility').then((accessibilityFixture) => {
            cy.get(".item-top")
                .children()
                .should("have.attr", "aria-label",  accessibilityFixture.uclaLibraryHomePage)
        })

        cy.get("h1.title")
            .should("not.exist")

        cy.fixture('accessibility').then((accessibilityFixture) => {
            cy.get(".svg.logo-ucla")
                .should("be.visible")
                .should("have.attr", "alt",  accessibilityFixture.uclaLibraryLogoBlue)
        })

        cy.get("ul.menu")
            .children()
            .should("have.length", "3")
            .and("contain.text", "Get help with...")
            .and("contain.text", "Visit")
            .and("contain.text", "About")

        cy.get(".support-links")
            .should("contain.text", "Support us")
        
        cy.fixture('links').then((linksFixture) => {
            cy.get(".support-link.underline-hover")
                .should("have.attr", "href",  linksFixture.supportUsLink)
        })

    })

    it("Should test the NavSecondary", () => {
        cy.log('Testing for Desktop Size')
        cy.viewport(1200, 1200)

        HomePage.loadHomePage()
        
        cy.get(".nav-secondary")
            .should("contain", "Locations & Hours")
            .and("contain", "Ask a Librarian")
            .and("contain", "My Account")

        cy.fixture('accessibility').then((accessibilityFixture) => {
            cy.get(".logo-ucla")
                .should("have.attr", "alt", accessibilityFixture.uclaLibraryLogoBlue)
        })

        cy.fixture('links').then((linksFixture) => {
            cy.get(".svg.logo-ucla")
                .parent()
                .should("have.attr", "href",  linksFixture.defaultLink)
        })

        cy.log({
            name: 'navigation list items',
            displayName: "TEST",
            message: [`⚙️ Testing | Navigation list items`],
            autoEnd: false,
        })
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

    it("Should test the Get Help With Section", () => {
        // get help with
        cy.get(".section-cards-with-illustrations").should(
            "contain",
            "Get Help With"
        )
    })

    it("Should test all DividerWayFinder", () => {
        cy.get("div.divider.divider-way-finder")
            .should("have.length", "3")
            
        cy.get(".divider-way-finder").each((item, index, list) => {
            // Returns the elements from the cy.get command
            expect(list).to.have.length(3)
    
            let dividerWayFinderCss = [
                "help", "visit", "about"
            ]
            // Returns the current element from the loop
            expect(item).to.have.class(`color-${dividerWayFinderCss[index]}`)
        })
    })
})
