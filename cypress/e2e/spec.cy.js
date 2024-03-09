describe('Charts', () => {
  it('correctly generates a chart', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
  })
})