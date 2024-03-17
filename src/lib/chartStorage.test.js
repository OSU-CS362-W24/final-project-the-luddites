/**
* @jest-environment ./src/fixjsdomenvironment.js
*/

// testing chartStorage.js, so yoink that file
const chartStorage = require('./chartStorage');

// saveChart tests -----------------------------

// save LINE chart with no index specification
test("saveChart with no index specification", function() {
    // ARRANGE
    // set up line chart
    var myChart = ({
        type: "line",
        data: [{x:1,y:3},{x:2,y:7},{x:3,y:15},{x:4,y:28},{x:5,y:50}],
        xLabel: "Cats",
        yLabel: "Dogs",
        title: "Cats vs. Dogs",
        color: "#ffa500"
    })

    // ACT
    // save chart
    chartStorage.saveChart(myChart, null);

    // ASSERT
    console.log(chartStorage.loadSavedChart(0));
    console.log(myChart);
    expect(chartStorage.loadSavedChart(0)).toMatchObject(myChart);
})