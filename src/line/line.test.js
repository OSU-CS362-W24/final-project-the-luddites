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

test("Add values button adds input field for X value", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const addValuesButton = domTesting.getByText(document, "+")

    const user = userEvent.setup()
    await user.click(addValuesButton)  
    const xInputs = domTesting.queryAllByText(document, "X")
    expect(xInputs[1]).not.toBe(undefined)   // Verifies a second X input field was created

})

test("Add values button adds input field for Y value", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)

    const addValuesButton = domTesting.getByText(document, "+")

    const user = userEvent.setup()
    await user.click(addValuesButton)  
    const yInputs = domTesting.queryAllByText(document, "Y")
    expect(yInputs[1]).not.toBe(undefined)   // Verifies a second Y input field was created

})
