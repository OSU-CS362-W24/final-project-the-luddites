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
    jest.isolateModules(function() {
        require(jsPath)
    })
}

beforeEach(()=> {
    window.localStorage.clear()
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
    expect(xInput.value).toBe("1")        // Verifies that the data entered before clicking is 1
    await user.click(addValuesButton)  
    const xInputs = domTesting.queryAllByLabelText(document, "X")
    expect(xInputs[0].value).toBe("1")   // Verifies that the data entered after clicking is still 1
})

test("Add values button doesn't impact any data already entered for Y value", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const addValuesButton = domTesting.getByText(document, "+")
    const yInput = domTesting.getByLabelText(document, "Y")

    const user = userEvent.setup()
    await user.type(yInput, "3")
    expect(yInput.value).toBe("3")        // Verifies that the data entered before clicking is 3
    await user.click(addValuesButton)  
    const yInputs = domTesting.queryAllByLabelText(document, "Y")
    expect(yInputs[0].value).toBe("3")   // Verifies that the data entered after clicking is still 3
})

