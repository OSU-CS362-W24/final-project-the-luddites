/**
 * @jest-environment jsdom
 */

// setup for testing
const fs = require("fs")
const domTesting = require('@testing-library/dom')
const { assert } = require("console")
const { hasUncaughtExceptionCaptureCallback } = require("process")
require('@testing-library/jest-dom')
const userEvent = require("@testing-library/user-event").default

// helper function for initializing dom
function initDomFromFiles(htmlPath, jsPath) {
    const html = fs.readFileSync(htmlPath, 'utf8')
    document.open()
    document.write(html)
    document.close()
    jest.isolateModules(function() {
        require(jsPath)
    })
}

const chartStorage = require('./chartStorage');

// saveChart tests -----------------------------

// save BAR chart with no index specification
test("saveChart with no index specification", function() {
    // ARRANGE
    // get stuff from dom via initializing
    initDomFromFiles(`${__dirname}/../bar/bar.html`, `${__dirname}/chartStorage.js`);
    // get chart
    const myChart = document.getElementById("graph");
    // no index specification
    const myIndex = null;
    // ACT
    saveChart(myChart, myIndex);
    // ASSERT
    expect(localStorage.length()).toBe(1);
})