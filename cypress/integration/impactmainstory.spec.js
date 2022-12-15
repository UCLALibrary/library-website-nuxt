describe("Impact Main Story page", () => {
    it("Visit the Impact Mainstory Page", () => {
        cy.visit("/impact/2021/ucla-library-reimagined")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get("h1.title").should(
            "contain",
            "After Covid Triggered a Campus Closure"
        )
        cy.get(".media-video").should(
            "have.attr",
            "src",
            "https://static.library.ucla.edu/craftassetstest/images/ucla-impact-report-animation.mp4"
        )
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
