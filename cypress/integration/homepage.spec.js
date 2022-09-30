describe("Website Homepage", () => {

    before(function() {
        cy.visit('/')
    })

    describe("Desktop", () => {

        beforeEach(function() {
            cy.viewport(1200, 1080)
        })

        after(function() {
            cy.percySnapshot({ widths: [1200] })
        })

        it("is visible", () => {
            cy.get("div.page.page-home")
                .should("be.visible")
        })

        it("has content in the header", () => {
            cy.get("header")
                .children()
                .should('have.length.at.least', 2)
        })

        describe("Primary Masthead", () => {
            it("has the logo", () => {
                cy.get(".masthead-primary")
                    .should("be.visible")
                    .find(".logo")
                    .should("be.visible")
            })

            it("includes the search bar", () => {
                cy.get(".search-home")
                    .should("be.visible")
                    .and("contain", "Search the Library Site")
                    .and("contain", "Search Materials")
                
                cy.get("input.input-search")
                    .should("have.attr", "placeholder", "Search by keyword")
            })

            it("has the right header content", () => {
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
            })

            it("links to advanced search", () => {
                cy.get(".advanced-links")
                    .should("be.visible")
                    .and("have.text", "Advanced Search")
            })
        })

        it("includes UCLA brand bar", () => {
            // UCLA brand
            cy.get(".site-brand-bar").should("be.visible")
            cy.get(".site-brand-bar .visually-hidden").should("contain", "UCLA Home")
            cy.get(".site-brand-bar a")
                .should("have.attr", "href", "https://www.ucla.edu")
        })

        describe("Primary Nav Bar", () => {
            it("is visible", () => {
                cy.get("nav")
                    .should("be.visible")
            })

            it("has the UCLA Library logo", () => {
                cy.get(".item-top a")
                    .should("have.attr", "href",  "/")
                    .and("have.attr", "aria-label",  "UCLA Library home page")
                
                cy.get("h1.title")
                    .should("not.exist")

                cy.get(".item-top svg.svg__logo-library")
                    .should("be.visible")
                    .and("have.attr", "alt",  "UCLA Library logo blue")
            })

            it("has the right menu content", () => {
                cy.get("ul.menu")
                    .children()
                    .should("be.visible")
                    .and("contain.text", "Get help with...")
                    .and("contain.text", "Visit")
                    .and("contain.text", "About")
            })

            it("expands and collapses", () => {
                cy.get('ul.menu')
                    .children()
                    .first()
                    .click()
                    .find(".sub-menu-item")
                    .should("be.visible")
                
                cy.get(".click-blocker").click()
                cy.get("ul.menu .sub-menu-item").should("not.be.visible")
            })

            it("uses a white background", () => {
                cy.get("div.background-white")
                    .should("be.visible")
            })

        })

        describe("Secondary Nav Bar", () => {
            it("has the right menu items", () => {
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
        })

        describe("'Get Help With' Section", () => {
            it("is visible", () => {
                cy.get("[data-cy='section-cards-with-illustrations-get-help-with']")
                    .should("be.visible")
            })

            it("has the descriptive paragraph", () => {
                cy.get("[data-cy='section-cards-with-illustrations-get-help-with'] .section-summary")
                    .should("be.visible")
                    .and("contain", "Need guidance on how to make the most of UCLA Libraries?")
            })

            it("has help topic cards", () => {
                cy.get("[data-cy='section-cards-with-illustrations-get-help-with'] > .cards")
                    .should("be.visible")
                    .and("have.css", "flex-wrap", "wrap")
                    .and("contain", "Example Service")
            })
        })

        describe("Section divider", () => {
            it("have the correct wafinder theme colors", () => {
            
                let dividerWayFinderThemes = [
                    "help", "visit", "about"
                ]
                cy.get(".divider-way-finder").should("have.length", 3)
                    
                cy.get(".divider-way-finder").each((item, index) => {
                    expect(item).to.have.class(`color-${dividerWayFinderThemes[index]}`)
                })
            })
        })
    })

    describe("Website Homepage - Mobile", () => {
        beforeEach(function() {
            cy.viewport(992, 1920)
        })

        after(function() {
            cy.percySnapshot({ widths: [768, 992] })
        })

        describe("Header", () => {
            it("has content", () => {
                cy.get("header")
                    .children()
                    .should('have.length.at.least', 2)
            })
        })

        describe("Hamburger Menu", () => {
            it("can be opened to see content", () => {
                cy.get(".open-menu")
                    .should("be.visible")
                    .and("have.attr", "aria-label", "Open menu")
                    .click()
                    .get(".expanded-menu-container")
                    .should("be.visible")
            
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

                cy.contains("a", "Give Now", { matchCase: false })
                    .should("be.visible")
                    .and("have.attr", "href",  "https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463")
                
                cy.get("button.close-menu")
                    .should("have.attr", "aria-label", "Close menu")
                    .click()
                    .should("not.be.visible")

                cy.get(".sub-menu-item")
                    .should("not.be.visible")
            })
        })

        it("Should test the Get Help With Section", () => {
            cy.get(".section-cards-with-illustrations > .cards")
                .should("be.visible")
                .and("have.css", "flex-wrap", "nowrap")
        })
    })
})