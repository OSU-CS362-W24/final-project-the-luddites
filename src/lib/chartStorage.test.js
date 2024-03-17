/**
* @jest-environment ./src/fixjsdomenvironment.js
*/

// testing chartStorage.js, so yoink that file
const chartStorage = require('./chartStorage');

// clear local storage after each test
beforeEach(function() {
    window.localStorage.clear()
})

// saveChart tests -----------------------------

test("saveChart with no index specification (only one chart saved)", function() {
    // ARRANGE
    // set up chart
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
    expect(chartStorage.loadSavedChart(0)).toMatchObject(myChart);
})

test("saveChart with no index specification (multiple charts saved)", function() {
    // ARRANGE
    // set up charts
    var myChart1 = ({
        type: "scatter",
        data: [{x:4,y:1},{x:5,y:11},{x:12,y:12},{x:15,y:12}],
        xLabel: "Mice",
        yLabel: "Rats",
        title: "Mice vs. Rats",
        color: "#ff0000"
    })
    var myChart2 = ({
        type: "bar",
        data: [{x:"Owls",y:32},{x:"Crows",y:102}],
        xLabel: "Bird types",
        yLabel: "Population",
        title: "Bird populations by type",
        color: "#0000ff"
    })

    // ACT
    // save chart
    chartStorage.saveChart(myChart1, null);
    chartStorage.saveChart(myChart2, null);

    // ASSERT
    expect(chartStorage.loadSavedChart(0)).toMatchObject(myChart1);
    expect(chartStorage.loadSavedChart(1)).toMatchObject(myChart2);
})

test("saveChart with index specification (only one chart saved)", function() {
    // ARRANGE
    // set up chart
    var myChart = ({
        type: "bar",
        data: [{x:"Eagles",y:203},{x:"Ravens",y:197}],
        xLabel: "Bird types",
        yLabel: "Population",
        title: "Bird populations by type",
        color: "#008000"
    })

    // ACT
    // save chart
    chartStorage.saveChart(myChart, 0);

    // ASSERT
    expect(chartStorage.loadSavedChart(0)).toMatchObject(myChart);
})

test("saveChart with index specification (multiple charts saved in order)", function() {
    // ARRANGE
    // set up charts
    var myChart1 = ({
        type: "line",
        data: [{x:1,y:3},{x:2,y:7},{x:3,y:15},{x:4,y:28},{x:5,y:50}],
        xLabel: "Cats",
        yLabel: "Dogs",
        title: "Cats vs. Dogs",
        color: "#ffa500"
    })
    var myChart2 = ({
        type: "bar",
        data: [{x:"Owls",y:32},{x:"Crows",y:102}],
        xLabel: "Bird types",
        yLabel: "Population",
        title: "Bird populations by type",
        color: "#0000ff"
    })

    // ACT
    // save chart
    chartStorage.saveChart(myChart1, 0);
    chartStorage.saveChart(myChart2, 1);

    // ASSERT
    expect(chartStorage.loadSavedChart(0)).toMatchObject(myChart1);
    expect(chartStorage.loadSavedChart(1)).toMatchObject(myChart2);
})

test("saveChart with index specification (overrided a chart)", function() {
    // ARRANGE
    // set up charts
    var myChart1 = ({
        type: "line",
        data: [{x:1,y:3},{x:2,y:7},{x:3,y:15},{x:4,y:28},{x:5,y:50}],
        xLabel: "Cats",
        yLabel: "Dogs",
        title: "Cats vs. Dogs",
        color: "#ffa500"
    })
    var myChart2 = ({
        type: "scatter",
        data: [{x:4,y:1},{x:5,y:11},{x:12,y:12},{x:15,y:12}],
        xLabel: "Mice",
        yLabel: "Rats",
        title: "Mice vs. Rats",
        color: "#ff0000"
    })
    var myChart3 = ({
        type: "bar",
        data: [{x:"Owls",y:32},{x:"Crows",y:102}],
        xLabel: "Bird types",
        yLabel: "Population",
        title: "Bird populations by type",
        color: "#0000ff"
    })

    // ACT
    // save chart
    chartStorage.saveChart(myChart1, 0);
    chartStorage.saveChart(myChart2, 1);
    chartStorage.saveChart(myChart3, 0);

    // ASSERT
    expect(chartStorage.loadSavedChart(0)).toMatchObject(myChart3);
    expect(chartStorage.loadSavedChart(1)).toMatchObject(myChart2);
})

// loadAllSavedCharts tests -----------------------------

test("loadAllSavedCharts loads a single saved chart", function() {
    // ARRANGE
    // set up chart
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
    expect(chartStorage.loadAllSavedCharts()[0]).toMatchObject(myChart);
})

test("loadAllSavedCharts loads multiple saved charts", function() {
    // ARRANGE
    // set up charts
    var myChart1 = ({
        type: "scatter",
        data: [{x:4,y:1},{x:5,y:11},{x:12,y:12},{x:15,y:12}],
        xLabel: "Mice",
        yLabel: "Rats",
        title: "Mice vs. Rats",
        color: "#ff0000"
    })
    var myChart2 = ({
        type: "bar",
        data: [{x:"Owls",y:32},{x:"Crows",y:102}],
        xLabel: "Bird types",
        yLabel: "Population",
        title: "Bird populations by type",
        color: "#0000ff"
    })

    // ACT
    // save chart
    chartStorage.saveChart(myChart1, null);
    chartStorage.saveChart(myChart2, null);

    // ASSERT
    expect(chartStorage.loadAllSavedCharts()[0]).toMatchObject(myChart1);
    expect(chartStorage.loadAllSavedCharts()[1]).toMatchObject(myChart2);
})

// loadSavedChart tests -----------------------------

test("loadSavedChart loads the saved chart", function() {
    // ARRANGE
    // set up chart
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
    expect(chartStorage.loadSavedChart(0)).toMatchObject(myChart);
})

test("loadSavedChart loads chart saved at end of array of charts", function() {
    // ARRANGE
    // set up charts
    var myChart1 = ({
        type: "line",
        data: [{x:1,y:3},{x:2,y:7},{x:3,y:15},{x:4,y:28},{x:5,y:50}],
        xLabel: "Cats",
        yLabel: "Dogs",
        title: "Cats vs. Dogs",
        color: "#ffa500"
    })
    var myChart2 = ({
        type: "scatter",
        data: [{x:4,y:1},{x:5,y:11},{x:12,y:12},{x:15,y:12}],
        xLabel: "Mice",
        yLabel: "Rats",
        title: "Mice vs. Rats",
        color: "#ff0000"
    })
    var myChart3 = ({
        type: "bar",
        data: [{x:"Owls",y:32},{x:"Crows",y:102}],
        xLabel: "Bird types",
        yLabel: "Population",
        title: "Bird populations by type",
        color: "#0000ff"
    })

    // ACT
    // save chart
    chartStorage.saveChart(myChart1, 0);
    chartStorage.saveChart(myChart2, 1);
    chartStorage.saveChart(myChart3, 2);

    // ASSERT
    expect(chartStorage.loadSavedChart(2)).toMatchObject(myChart3);
})

test("loadSavedChart loads chart saved in middle of array of charts", function() {
    // ARRANGE
    // set up charts
    var myChart1 = ({
        type: "line",
        data: [{x:1,y:3},{x:2,y:7},{x:3,y:15},{x:4,y:28},{x:5,y:50}],
        xLabel: "Cats",
        yLabel: "Dogs",
        title: "Cats vs. Dogs",
        color: "#ffa500"
    })
    var myChart2 = ({
        type: "scatter",
        data: [{x:4,y:1},{x:5,y:11},{x:12,y:12},{x:15,y:12}],
        xLabel: "Mice",
        yLabel: "Rats",
        title: "Mice vs. Rats",
        color: "#ff0000"
    })
    var myChart3 = ({
        type: "bar",
        data: [{x:"Owls",y:32},{x:"Crows",y:102}],
        xLabel: "Bird types",
        yLabel: "Population",
        title: "Bird populations by type",
        color: "#0000ff"
    })

    // ACT
    // save chart
    chartStorage.saveChart(myChart1, 0);
    chartStorage.saveChart(myChart2, 1);
    chartStorage.saveChart(myChart3, 2);

    // ASSERT
    expect(chartStorage.loadSavedChart(1)).toMatchObject(myChart2);
})

// updateCurrentChartData tests -----------------------------

test("complete but unsaved chart stored in localStorage", function() {
    // ARRANGE
    // set up chart
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
    chartStorage.updateCurrentChartData(myChart);

    // ASSERT
    const current = window.localStorage.getItem("currentChartData");
    expect(JSON.parse(current)).toMatchObject(myChart);
})

test("incomplete chart stored in localStorage", function() {
    // ARRANGE
    // set up chart
    var myChart = ({
        type: "line",
        xLabel: "Cats",
        yLabel: "Dogs",
        color: "#ffa500"
    })

    // ACT
    // save chart
    chartStorage.updateCurrentChartData(myChart);

    // ASSERT
    const current = window.localStorage.getItem("currentChartData");
    expect(JSON.parse(current)).toMatchObject(myChart);
})