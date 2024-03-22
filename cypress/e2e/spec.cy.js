describe('Charts', () => {
  it('correctly generates a chart', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
    cy.contains("Chart title").type("Cats vs Dogs")
    cy.contains("X label").type("Cats")
    cy.contains("Y label").type("Dogs")

    cy.get("[data-test-id='x1']").type("1")
    cy.get("[data-test-id='y1']").type("3")

    cy.findByText("+").click()

    cy.get("[data-test-id='x2']").type("2")
    cy.get("[data-test-id='y2']").type("7")

    cy.findByText("+").click()

    cy.get("[data-test-id='x3']").type("3")
    cy.get("[data-test-id='y3']").type("15")

    cy.findByText("+").click()

    cy.get("[data-test-id='x4']").type("4")
    cy.get("[data-test-id='y4']").type("25")

    cy.findByText("+").click()

    cy.get("[data-test-id='x5']").type("5")
    cy.get("[data-test-id='y5']").type("40")

    cy.findByText("Generate chart").click()

    cy.findByRole("img").should("exist")
  })
  
  it('keeps the data across pages', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
    cy.contains("Chart title").type("Cats vs Dogs")
    cy.contains("X label").type("Cats")
    cy.contains("Y label").type("Dogs")

    cy.get("[data-test-id='x1']").type("1")
    cy.get("[data-test-id='y1']").type("3")

    cy.findByText("+").click()

    cy.get("[data-test-id='x2']").type("2")
    cy.get("[data-test-id='y2']").type("7")

    cy.findByText("+").click()

    cy.get("[data-test-id='x3']").type("3")
    cy.get("[data-test-id='y3']").type("15")

    cy.findByText("+").click()

    cy.get("[data-test-id='x4']").type("4")
    cy.get("[data-test-id='y4']").type("25")

    cy.findByText("+").click()

    cy.get("[data-test-id='x5']").type("5")
    cy.get("[data-test-id='y5']").type("40")

    cy.findByText("Scatter").click()

    cy.get("[data-test-id='x1']").should("have.value", "1")
    cy.get("[data-test-id='y1']").should("have.value", "3")
    cy.get("[data-test-id='x2']").should("have.value", "2")
    cy.get("[data-test-id='y2']").should("have.value", "7")
    cy.get("[data-test-id='x3']").should("have.value", "3")
    cy.get("[data-test-id='y3']").should("have.value", "15")
    cy.get("[data-test-id='x4']").should("have.value", "4")
    cy.get("[data-test-id='y4']").should("have.value", "25")
    cy.get("[data-test-id='x5']").should("have.value", "5")
    cy.get("[data-test-id='y5']").should("have.value", "40")

    cy.findByLabelText("Chart title").should("have.value", "Cats vs Dogs")
    cy.findByLabelText("X label").should("have.value", "Cats")
    cy.findByLabelText("Y label").should("have.value", "Dogs")

    cy.findByText("Bar").click()

    cy.get("[data-test-id='x1']").should("have.value", "1")
    cy.get("[data-test-id='y1']").should("have.value", "3")
    cy.get("[data-test-id='x2']").should("have.value", "2")
    cy.get("[data-test-id='y2']").should("have.value", "7")
    cy.get("[data-test-id='x3']").should("have.value", "3")
    cy.get("[data-test-id='y3']").should("have.value", "15")
    cy.get("[data-test-id='x4']").should("have.value", "4")
    cy.get("[data-test-id='y4']").should("have.value", "25")
    cy.get("[data-test-id='x5']").should("have.value", "5")
    cy.get("[data-test-id='y5']").should("have.value", "40")

    cy.findByLabelText("Chart title").should("have.value", "Cats vs Dogs")
    cy.findByLabelText("X label").should("have.value", "Cats")
    cy.findByLabelText("Y label").should("have.value", "Dogs")
  })
})

describe('Saving/Loading', () => {
  it('can save a chart to the gallery', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
    cy.contains("Chart title").type("Cats vs Dogs")
    cy.contains("X label").type("Cats")
    cy.contains("Y label").type("Dogs")

    cy.get("[data-test-id='x1']").type("1")
    cy.get("[data-test-id='y1']").type("3")

    cy.findByText("+").click()

    cy.get("[data-test-id='x2']").type("2")
    cy.get("[data-test-id='y2']").type("7")

    cy.findByText("+").click()

    cy.get("[data-test-id='x3']").type("3")
    cy.get("[data-test-id='y3']").type("15")

    cy.findByText("+").click()

    cy.get("[data-test-id='x4']").type("4")
    cy.get("[data-test-id='y4']").type("25")

    cy.findByText("+").click()

    cy.get("[data-test-id='x5']").type("5")
    cy.get("[data-test-id='y5']").type("40")

    cy.findByText("Generate chart").click()

    cy.contains("Generate chart").click()

    cy.contains("Save chart").click()

    cy.contains("Gallery").click()

    cy.findByText("Cats vs Dogs").should("exist")
  })

  it('can open a chart in the gallery', () => {
    cy.visit('localhost:8080')

    cy.contains("Line").click()
    cy.contains("Chart title").type("Cats vs Dogs")
    cy.contains("X label").type("Cats")
    cy.contains("Y label").type("Dogs")

    cy.get("[data-test-id='x1']").type("1")
    cy.get("[data-test-id='y1']").type("3")

    cy.findByText("+").click()

    cy.get("[data-test-id='x2']").type("2")
    cy.get("[data-test-id='y2']").type("7")

    cy.findByText("+").click()

    cy.get("[data-test-id='x3']").type("3")
    cy.get("[data-test-id='y3']").type("15")

    cy.findByText("+").click()

    cy.get("[data-test-id='x4']").type("4")
    cy.get("[data-test-id='y4']").type("25")

    cy.findByText("+").click()

    cy.get("[data-test-id='x5']").type("5")
    cy.get("[data-test-id='y5']").type("40")

    cy.findByText("Generate chart").click()

    cy.contains("Generate chart").click()

    cy.contains("Save chart").click()

    cy.contains("Gallery").click()

    cy.findByText("Cats vs Dogs").click()

    cy.get("[data-test-id='x1']").should("have.value", "1")
    cy.get("[data-test-id='y1']").should("have.value", "3")
    cy.get("[data-test-id='x2']").should("have.value", "2")
    cy.get("[data-test-id='y2']").should("have.value", "7")
    cy.get("[data-test-id='x3']").should("have.value", "3")
    cy.get("[data-test-id='y3']").should("have.value", "15")
    cy.get("[data-test-id='x4']").should("have.value", "4")
    cy.get("[data-test-id='y4']").should("have.value", "25")
    cy.get("[data-test-id='x5']").should("have.value", "5")
    cy.get("[data-test-id='y5']").should("have.value", "40")

    cy.findByLabelText("Chart title").should("have.value", "Cats vs Dogs")
    cy.findByLabelText("X label").should("have.value", "Cats")
    cy.findByLabelText("Y label").should("have.value", "Dogs")
  })
})