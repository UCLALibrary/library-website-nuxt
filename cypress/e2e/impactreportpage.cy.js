describe('Impact Report Page', () => {
  it('Visit the Impact Report Page', () => {
    /* // cy.visit('/impact/2022')
    cy.visit('/impact/2022')
    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')

    // Ginny's Letter
    cy.get('h1')
      .should('have.class', 'intro')
    // cy.get('.signature').should('contain','Virginia Steel')

    // // Main story/ banner data
    // cy.get('.banner').should('contain','Read full story')
    // cy.get('.media-video').should('be.visible')

    // // featurettes
    // cy.get('.block-highlight').should('have.length','9')

    // cy.get('.divider').should('have.length','2')

    // cy.get('h2.title')
    //     .should('contain', '2020-21: An Academic Year Like No Other')
    // cy.get('.sub-section-grid')
    //     .should('have.descendants','.grid-gallery-subtitle')
    //     .and('have.descendants','.grid-gallery')
    // cy.get('.grid-gallery').find('img').last().should('have.attr','src','https://static.library.ucla.edu/ucla-library_nakatani-bookplate-crop.jpg')
    // cy.get('.credits').should('be.visible')

    cy.percySnapshot({ widths: [768, 992, 1200] }) */
  })

  context('When there isn\'t an entry in craft', () => {
    it('Raises a 404 error', () => {
      // cy.visit("/about/blogs/no_entry", {failOnStatusCode: false})
      cy.request({ url: '/impact/2080', failOnStatusCode: false }).its('status').should('equal', 404)
      /* cy.visit('/impact/2080')
      cy.get('p.error').should('contain', '404')
      cy.get('h1.error-title').should('contain', 'Page not found') */
    })
  })
})
