describe('User-Agent Blocking', () => {
  it('blocks requests from a specific user-agent', () => {
    cy.request({
      url: '/', // Replace '/' with the URL path you want to test
      failOnStatusCode: false, // Prevent Cypress from failing the test when the status code is 403
      headers: {
        'User-Agent': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)'
      }
    }).then((response) => {
      expect(response.status).to.eq(403)
    })
  })
  it('blocks requests from a claudebot user-agent to location page', () => {
    cy.request({
      url: '/visit/locations', // Replace '/' with the URL path you want to test
      failOnStatusCode: false, // Prevent Cypress from failing the test when the status code is 403
      headers: {
        'User-Agent': 'claudebot'
      }
    }).then((response) => {
      expect(response.status).to.eq(403)
    })
  })
})
