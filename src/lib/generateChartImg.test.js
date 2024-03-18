
const generateChartImg = require('./generateChartImg');


test("Test generate chart with all inputs valid", async () => {

    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 9 },
        { x: 4, y: 6 },
        { x: 5, y: 8 }
    ];

    const type = "line";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example Line Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);
    // chartStorage.saveChart(myChart, null);

    // ASSERT
    // console.log(myChart);
    // expect(chart).toMatchObject(chart);
})

test("Test Generate chart with out color", async () => {

    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 9 },
        { x: 4, y: 6 },
        { x: 5, y: 8 }
    ];

    const type = "line";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example Line Chart";


    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);
    // chartStorage.saveChart(myChart, null);

    // ASSERT
    // console.log(myChart);
    // expect(chart).toMatchObject(chart);
})

test("Test Generate chart with out color or title", async () => {

    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 9 },
        { x: 4, y: 6 },
        { x: 5, y: 8 }
    ];

    const type = "line";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";


    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);
    // chartStorage.saveChart(myChart, null);

    // ASSERT
    // console.log(myChart);
    // expect(chart).toMatchObject(chart);
})


test("Test generate chart with all inputs valid and rgb css color input", async () => {

    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 9 },
        { x: 4, y: 6 },
        { x: 5, y: 8 }
    ];

    const type = "line";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example Line Chart";
    const color = "rgb(255, 0, 0)"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);
    // chartStorage.saveChart(myChart, null);

    // ASSERT
    // console.log(myChart);
    // expect(chart).toMatchObject(chart);
})