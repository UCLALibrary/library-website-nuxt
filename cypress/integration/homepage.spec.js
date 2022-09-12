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

describe("Website Homepage - Desktop", () => {

    before(function() {
        // Runs before all tests inside describe
        // Setup test data or test context
        // Send or reset the database
        cy.log('Testing for Desktop Size')
        HomePage.loadHomePage()
    })

    after(function() {
        // Runs after all tests inside describe blocks are done
        // Test clean up
        // Clean cookies or localStorage
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    beforeEach(function() {
        // Runs after each it block in the describe
        cy.viewport(1920, 1080)
    })

    afterEach(function() {
        // Runs after each it block in the describe
    })

    it("Should test the main div", () => {
        cy.get("div.page.page-home")
            .should("be.visible")
    })

    it("Should test the Header", () => {
        cy.get("header")
            .children()
            .should('have.length.at.least', 2)
    })

    it("Should test the mastheadPrimary", () => {
        cy.get(".masthead-primary")
            .should("be.visible")
            .find(".logo")
            .should("be.visible")
        
        cy.get(".search-home")
            .should("be.visible")
            .and("contain", "Search the Library Site")
            .and("contain", "Search Materials")
        
        cy.get("input.input-search")
            .should("have.attr", "placeholder", "Search by keyword")
        
        cy.fixture('links').then((linksFixture) => {
            cy.get(".masthead-primary")
                .find(".regular-links")
                .children()
                .each((item, index) => {
                    cy.wrap(item)
                        .should('contain.text', linksFixture.mastheadPrimaryRegularLinks[index].text)
                        .should('have.attr', "href", linksFixture.mastheadPrimaryRegularLinks[index].link)
                })
        })

        cy.get(".advanced-links")
            .should("be.visible")
            .and("have.text", "Advanced Search")
    })

    it("Should test the Site Brand Bar", () => {
        // UCLA brand
        cy.get(".site-brand-bar").should("be.visible")
        cy.get(".visually-hidden").should("contain", "UCLA Home")
        cy.fixture('links').then((linksFixture) => {
            cy.get(".ucla-logo")
                .parent()
                .should("have.attr", "href", linksFixture.uclaEdu)
        })
    })

    it("Should test the NavPrimary", () => {
        cy.get("nav")
            .should("be.visible")
        
        cy.fixture('links').then((linksFixture) => {
            cy.get(".item-top")
                .children()
                .should("have.attr", "href",  linksFixture.default)
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
            .should("be.visible")
            .and("contain.text", "Get help with...")
            .and("contain.text", "Visit")
            .and("contain.text", "About")

        cy.get('ul.menu')
            .children()
            .first()
            .click()
            .find(".sub-menu-item")
            .should("be.visible")

        cy.get(".support-links")
            .should("contain.text", "Support us")
        
        cy.fixture('links').then((linksFixture) => {
            cy.get(".support-link.underline-hover")
                .should("have.attr", "href",  linksFixture.supportUs)
        })

        cy.get("div.background-white")
            .should("be.visible")

    })

    it("Should test the NavSecondary", () => {
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
                .should("have.attr", "href",  linksFixture.default)
        })

        Cypress.log({
            name: 'navigation list items',
            displayName: "TEST",
            message: [`⚙️ Testing | Navigation list items`],
            autoEnd: false,
        })

        cy.fixture('links').then((linksFixture) => {
            cy.get(".list")
                .children()
                .each((item, index) => {
                    cy.wrap(item)
                        .should('contain.text', linksFixture.navigationListItems[index].name)
                        .children()
                        .should('have.attr', 'href', linksFixture.navigationListItems[index].to)
                })
        })
    })

    it("Should test the Get Help With Section", () => {
        cy.get(".section-cards-with-illustrations")
            .should("be.visible")
            
        cy.get(".meta > div.text")
            .and("be.visible")
            
        cy.get(".cards")
            .should("be.visible")
            .find(".meta > .smart-link > .title")
            .and("be.visible")
        
        cy.get(".cards")
            .find(".meta > .text")
            .and("be.visible")
        
        cy.get(".card-more")
            .and("be.visible")
    })

    it("Should test all DividerWayFinder", () => {
            
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

describe("Website Homepage - Mobile", () => {
    before(function() {
        // Runs before all tests inside describe
        // Setup test data or test context
        // Send or reset the database
        cy.log('Testing for Mobile Size')
    })
    
    beforeEach(function() {
        // Runs after each it block in the describe
        cy.viewport(900, 1920)
    })

    after(function() {
        // Runs after all tests inside describe blocks are done
        // Test clean up
        // Clean cookies or localStorage
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })

    it("Should test the Header", () => {
        cy.get("header")
            .children()
            .should('have.length.at.least', 2)
    })

    it("Should test the hamburguer menu", () => {
        cy.fixture('accessibility').then((accessibilityFixture) => {
            cy.get(".open-menu")
                .should("be.visible")
                .and("have.attr", "aria-label", accessibilityFixture.openMenu)
                .click()
                .get(".expanded-menu-container")
                .should("be.visible")
        })
        
        cy.get(".expanded-menu")
            .should("be.visible")
        
        cy.fixture('links').then((linksFixture) => {
            cy.get(".expanded-menu")
                .children()
                .first()
                .should("have.attr", "href", linksFixture.default)
        })

        cy.fixture('accessibility').then((accessibilityFixture) => {
            cy.get(".expanded-menu")
                .children()
                .first()
                .should("have.attr", "aria-label", accessibilityFixture.uclaLibraryHomePage)
        })

        cy.get(".expanded-menu")
            .children(".close-menu")
            .should("be.visible")

        cy.get(".nav-menu-primary")
            .children()
            .should("be.visible")
            .and("contain.text", "Research")
            .and("contain.text", "Get help with...")
            .and("contain.text", "Visit")
            .and("contain.text", "About")

        cy.get('.nav-menu-primary')
            .children()
            .first()
            .find(".section-name.block")
            .click()
        
        cy.get(".sub-menu-item")
            .should("be.visible")

        cy.get('.nav-menu-primary')
            .children()
            .first()
            .find(".section-name.block")
            .click()

        cy.get(".sub-menu-item")
            .should("not.be.visible")

        cy.get(".support-us-container")
            .should("be.visible")
            .and("contain.text", "Support us")
        
        cy.fixture('links').then((linksFixture) => {
            cy.get(".support-us-container > a")
                .should("have.attr", "href",  linksFixture.supportUs)
        })
        
        cy.fixture('accessibility').then((accessibilityFixture) => {
            cy.get(".close-menu")
                .should("have.attr", "aria-label", accessibilityFixture.closeMenu)
                .click()
                .should("not.be.visible")
        })
    })
})
