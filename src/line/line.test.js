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

test("Something", async function(){
    initDomFromFiles(`${__dirname}/line.html`,`${__dirname}/line.js`)
})