describe('Charts', () => {
  it('correctly generates a chart', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
    cy.contains("X label").type("Cats")
    cy.contains("Y label").type("Dogs")

    cy.findByText("X").type("1")
    cy.findByText("Y").type("3")

    cy.findByText("Generate chart").click()

    cy.findByRole("img").should("exist")
  })
  
  it('keeps the data across pages', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
    cy.contains("X label").type("Cats")
    cy.contains("Y label").type("Dogs")

    cy.findByText("X").type("1")
    cy.findByText("Y").type("3")

    cy.findByText("Scatter").click()

    cy.findByDisplayValue("1").should("exist")
    cy.findByDisplayValue("3").should("exist")

    cy.findByText("Bar").click()

    cy.findByDisplayValue("1").should("exist")
    cy.findByDisplayValue("3").should("exist")

  })
})

describe('Charts', () => {
  it('can save a chart to the gallery', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
    cy.contains("X label").type("Cats")
    cy.contains("Y label").type("Dogs")

    cy.findByText("X").type("1")
    cy.findByText("Y").type("3")

    cy.contains("Generate chart").click()

    cy.contains("Save chart").click()

    cy.contains("Gallery").click()

    cy.findByRole("img").should("exist")
  })

  it('can open a chart in the gallery', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
    cy.contains("X label").type("Cats")
    cy.contains("Y label").type("Dogs")

    cy.findByText("X").type("1")
    cy.findByText("Y").type("3")

    cy.contains("Generate chart").click()

    cy.contains("Save chart").click()

    cy.contains("Gallery").click()

    cy.findByRole("img").click()

    cy.findByDisplayValue("1").should("exist")
    cy.findByDisplayValue("3").should("exist")
  })
})