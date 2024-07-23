describe('Job Opportunities List page', () => {
  it('Visits the Job Opportunities List Page', () => {
    // the following data will not work in production
    cy.visit('/about/jobs/staff-academic-jobs/')

    // UCLA Library brand
    cy.get('.logo-ucla').should('be.visible')
    cy.get('.page-job-opportunities').should('be.visible')
    cy.get('h1.title').should('contain', 'Job Opportunities')
    cy.percySnapshot('jobopportunitieslist', { widths: [768, 992, 1200] })
  })
})
