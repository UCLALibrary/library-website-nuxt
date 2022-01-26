describe('Impact Homepage', () => {
    it('Visit the Impact Home Page', () => {
        cy.visit('/impact')

        // UCLA Library brand
        cy.get('.logo-ucla').should('be.visible')


        // Ginny's Letter
        cy.get('.intro')
            .should('contain', 'Impact Report')
        cy.get('.signature').should('contain','Virginia Steel')

        // Main story/ banner data
        cy.get('.banner-main-story-data').should('contain','Read full story')
        cy.get('.media-video').should('be.visible')

        // featurettes
        cy.get('.block-highlight').should('have.length','3')
            
        cy.get('.divider').should('have.length','3')
       
        cy.get('.grid-gallery-title')
            .should('contain', '2020-21: An Academic Year Like No Other')
        cy.get('.sub-section-grid')
            .should('have.descendants','.grid-gallery-subtitle')
            .and('have.descendants','.grid-gallery')
        cy.get('.grid-gallery').find('img').last().should('have.attr','src','https://static.library.ucla.edu/ucla-library_nakatani-bookplate-crop.jpg')
        cy.get('.credits').should('be.visible')

        cy.percySnapshot({ widths: [768, 992, 1200] })

    })
})
