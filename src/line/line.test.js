/**
 * @jest-environment jsdom
 */


const fs = require("fs")
require("whatwg-fetch")            // Since I am not using ES6 modules or MSW, I have to add this require statement
const domTesting = require('@testing-library/dom')
require('@testing-library/jest-dom')
const userEvent = require('@testing-library/user-event').default

function initDomFromFiles(htmlPath, jsPath) {
    const html = fs.readFileSync(htmlPath, 'utf8')
    document.open()
    document.write(html)
    document.close()
    require(jsPath)
}

afterEach(()=> {
    window.localStorage.clear()
    jest.restoreAllMocks()
    jest.resetModules()
})

test("Add values button adds input field for X value", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const addValuesButton = domTesting.getByText(document, "+")

    const user = userEvent.setup()
    await user.click(addValuesButton)  
    const xInputs = domTesting.queryAllByText(document, "X")
    expect(xInputs[1]).toBeDefined()    // Verifies a second X input field was created

})

test("Add values button adds input field for Y value", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const addValuesButton = domTesting.getByText(document, "+")

    const user = userEvent.setup()
    await user.click(addValuesButton)  
    const yInputs = domTesting.queryAllByText(document, "Y")
    expect(yInputs[1]).toBeDefined()   // Verifies a second Y input field was created

})

test("Add values button doesn't impact any data already entered for X value", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const addValuesButton = domTesting.getByText(document, "+")
    const xInput = domTesting.getByLabelText(document, "X")

    const user = userEvent.setup()
    await user.type(xInput, "1")
    expect(xInput).toHaveDisplayValue("1")        // Verifies that the data entered before clicking is 1
    await user.click(addValuesButton)  
    const xInputs = domTesting.queryAllByLabelText(document, "X")
    expect(xInputs[0]).toHaveDisplayValue("1")   // Verifies that the data entered after clicking is still 1
})

test("Add values button doesn't impact any data already entered for Y value", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const addValuesButton = domTesting.getByText(document, "+")
    const yInput = domTesting.getByLabelText(document, "Y")

    const user = userEvent.setup()
    await user.type(yInput, "3")
    expect(yInput).toHaveDisplayValue("3")        // Verifies that the data entered before clicking is 3
    await user.click(addValuesButton)  
    const yInputs = domTesting.queryAllByLabelText(document, "Y")
    expect(yInputs[0]).toHaveDisplayValue("3")   // Verifies that the data entered after clicking is still 3
})

test("Error message displayed when generating chart without data", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const generateChartButton = domTesting.getByText(document, "Generate chart")
    const spy = jest.spyOn(window, 'alert')
    spy.mockImplementation(function () {})                          // An empty mock implementation prevents a console implementation error message from happening
    const user = userEvent.setup()
    await user.click(generateChartButton)

    expect(spy).toHaveBeenCalled()                                  // Verifies the mock function was called
    
    const alertMessage = spy.mock.lastCall[0]                       // Gets the arguments of the last call for the mock function

    expect(alertMessage).toContain("Error: No data specified!")     // Verifies the correct alert message was passed

})

test("Error message displayed when generating chart without labels", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const generateChartButton = domTesting.getByText(document, "Generate chart")
    const spy = jest.spyOn(window, 'alert')
    spy.mockImplementation(function () {})                          // An empty mock implementation prevents a console implementation error message from happening
    const xInput = domTesting.getByLabelText(document, "X")
    const yInput = domTesting.getByLabelText(document, "Y")

    const user = userEvent.setup()
    
    await user.type(xInput, "1")
    await user.type(yInput, "3")
    await user.click(generateChartButton)

    expect(spy).toHaveBeenCalled()                                  // Verifies the mock function was called
    
    const alertMessage = spy.mock.lastCall[0]                       // Gets the arguments of the last call for the mock function

    expect(alertMessage).toContain("Error: Must specify a label for both X and Y!")     // Verifies the correct alert message was passed
})

test("Clear chart data button correctly clears the chart title", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const clearChartButton = domTesting.getByText(document, "Clear chart data")                       
    const chartTitle = domTesting.getByLabelText(document, "Chart title")

    const user = userEvent.setup()
    
    await user.type(chartTitle, "Cats Vs. Dogs") 
    expect(chartTitle).toHaveDisplayValue("Cats Vs. Dogs")     // Verifies that chartTitle has a chart title
    await user.click(clearChartButton)

    expect(chartTitle).toHaveDisplayValue("")                 // Verifies that chartTitle has an empty string after clicking
})

test("Clear chart data button correctly clears the X label", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const clearChartButton = domTesting.getByText(document, "Clear chart data")                       
    const xLabel = domTesting.getByLabelText(document, "X label")

    const user = userEvent.setup()
    
    await user.type(xLabel, "Cats") 
    expect(xLabel).toHaveDisplayValue("Cats")                  // Verifies that the X label has a label
    await user.click(clearChartButton)

    expect(xLabel).toHaveDisplayValue("")                      // Verifies that X label has an empty string after clicking
})

test("Clear chart data button correctly clears the Y label", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const clearChartButton = domTesting.getByText(document, "Clear chart data")                       
    const yLabel = domTesting.getByLabelText(document, "Y label")

    const user = userEvent.setup()
    
    await user.type(yLabel, "Dogs") 
    expect(yLabel).toHaveDisplayValue("Dogs")             // Verifies that the Y label has a label
    await user.click(clearChartButton)

    expect(yLabel).toHaveDisplayValue("")                 // Verifies that Y label has an empty string after clicking
})

test("Clear chart data button correctly clears the X data", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const clearChartButton = domTesting.getByText(document, "Clear chart data")                       
    const xData = domTesting.getByLabelText(document, "X")

    const user = userEvent.setup()
    
    await user.type(xData, "1") 
    expect(xData).toHaveDisplayValue("1")                           // Verifies that the X data has a value
    await user.click(clearChartButton)
    const xDataEmpty = domTesting.getByLabelText(document, "X")     // Gets the X input again after clicking
    expect(xDataEmpty).toHaveDisplayValue("")                       // Verifies that there is no value displayed for X values
})

test("Clear chart data button correctly clears the Y data", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const clearChartButton = domTesting.getByText(document, "Clear chart data")                       
    const yData = domTesting.getByLabelText(document, "Y")

    const user = userEvent.setup()
    
    await user.type(yData, "3") 
    expect(yData).toHaveDisplayValue("3")                           // Verifies that the Y data has a value
    await user.click(clearChartButton)
    const yDataEmpty = domTesting.getByLabelText(document, "Y")     // Gets the Y input again after clicking
    expect(yDataEmpty).toHaveDisplayValue("")                       // Verifies that there is no value displayed for Y values
})

test("Clear chart data button correctly clears the X data so there is only one input box", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const clearChartButton = domTesting.getByText(document, "Clear chart data")  
    const addValuesButton = domTesting.getByText(document, "+")

    const user = userEvent.setup()
    await user.click(addValuesButton)
    const xInputMultiple = domTesting.queryAllByLabelText(document, "X")  
    await user.click(clearChartButton)
    expect(xInputMultiple).toHaveLength(2)                                 // Verifies that there are two X inputs before clicking
    const xInputSingle = domTesting.queryAllByLabelText(document, "X")  
    expect(xInputSingle).toHaveLength(1)                                  // Verifies that there is one X input after clicking
})

test("Clear chart data button correctly clears the Y data so there is only one input box", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const clearChartButton = domTesting.getByText(document, "Clear chart data")  
    const addValuesButton = domTesting.getByText(document, "+")

    const user = userEvent.setup()
    await user.click(addValuesButton)
    const yInputMutiple = domTesting.queryAllByLabelText(document, "Y")  
    await user.click(clearChartButton)
    expect(yInputMutiple).toHaveLength(2)                                 // Verifies that there are two Y inputs before clicking
    const yInputSingle = domTesting.queryAllByLabelText(document, "Y")  
    expect(yInputSingle).toHaveLength(1)                                  // Verifies that there is one Y input after clicking
})

test("Clear chart data button correctly changes the color back to the original color", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const chartColorBox = domTesting.getByLabelText(document, "Chart color")
    const clearChartButton = domTesting.getByText(document, "Clear chart data") 

    const user = userEvent.setup()
    await user.click(chartColorBox)
    expect(chartColorBox).toHaveValue('#ff4500')                                // Verifies the original color of the color box
    domTesting.fireEvent.input(chartColorBox, {target: {value: '#00FFFF'}})     // Changes the color to aqua blue
    expect(chartColorBox).toHaveValue('#00ffff')                                // Verifies the value of the color box is updated to aqua blue
    await user.click(clearChartButton)
    const chartColor = domTesting.getByLabelText(document, "Chart color")
    expect(chartColor).toHaveValue('#ff4500')                                   // Verifies the value of the color is back to the original color
})


