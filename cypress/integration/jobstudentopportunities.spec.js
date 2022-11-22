describe("Student Opportunities List page", () => {
    it("Visits the Student Opportunities List Page", () => {
        // the following data will not work in production
        cy.visit("/about/jobs/student-opportunities")

        // UCLA Library brand
        cy.get(".logo-ucla").should("be.visible")
        cy.get(".page-student-opportunities").should("be.visible")
        cy.get("h1.title").should("contain", "Student Opportunities")
        cy.percySnapshot({ widths: [768, 992, 1200] })
    })
})
