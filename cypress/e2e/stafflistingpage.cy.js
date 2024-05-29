// https://uclalibrary-test-nuxt3x.netlify.app/about/staff?q=&departments=Software Development and Library Systems, Administration&locations=UCLA Film & Television Archive, Eugene and Maxine Rosenfeld Management Library&subjectLibrarian=yes&lastNameLetter=G

describe('Article News Listing page', () => {
  it('Visit the Article News Listing Page', () => {
    cy.visit('/about/staff')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-staff').should('be.visible')
    cy.get('h1.title').should('contain', 'Staff Directory')
    cy.get('.search-generic-filter-buttons').find('button').should('have.length', 2)

    cy.get('.search-generic-filter-buttons').find('button').each(($el, index, $list) => {
      cy.wrap($el).click()
      cy.get('fieldset.base-checkbox-group > ul.list > li.list-item').find('label').should('have.length.greaterThan', 0)
    })
    cy.get('.search-generic-filter-buttons > div.single-checkbox').should('be.visible')
    cy.percySnapshot({ widths: [768, 992, 1200] })
  })

  it('Visit Subject Librarian Listing page', () => {
    cy.intercept('/about/staff/*').as('getStaffRoutes')
    cy.visit('/about/staff/?q=&filters={"subjectLibrarian.keyword":["yes"]}', { timeout: 30000 })
    cy.wait('@getStaffRoutes').then(() => {
      cy.get('td.academic-department').should('be.visible')
    })
  })
})
