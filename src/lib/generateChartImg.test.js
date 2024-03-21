
const generateChartImg = require('./generateChartImg');

/*


*/ 


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

test("Test that color set as an empty string will be seen as valid", async () => {

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
    const color = ""; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);
    // chartStorage.saveChart(myChart, null);

    // ASSERT
    // console.log(myChart);
    // expect(chart).toMatchObject(chart);
})


test("Test that has title set as an empty string will be seen as valid", async () => {

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
    const title = "";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test generate chart with all inputs valid and line as type type input", async () => {

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




    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test generate chart with all inputs valid and scatter as type input", async () => {

    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 9 },
        { x: 4, y: 6 },
        { x: 5, y: 8 }
    ];

    const type = "scatter";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example scatter Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);




    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test generate chart with all inputs valid and bar as input type ", async () => {

    const data = [
        { x: 1, y: 5 },
        { x: 2, y: 7 },
        { x: 3, y: 9 },
        { x: 4, y: 6 },
        { x: 5, y: 8 }
    ];

    const type = "bar";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example bar Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);




    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test generate chart with an empty data set should ", async () => {

    const data = [];

    const type = "bar";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example bar Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);




    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test A line chart that starts in a negative x axis will pass", async () => {

    const data = [
        { x: -2, y: 5 },
        { x: -1, y: 7 },
        { x: 0, y: 9 },
        { x: 1, y: 6 },
        { x: -3, y: 8 }
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

})

test("Test that a line chart that goes below 0 in the negative y axis will pass", async () => {

    const data = [
        { x: 1, y: -5 },
        { x: 2, y: 7 },
        { x: 3, y: -9 },
        { x: 4, y: 6 },
        { x: 1, y: -8 }
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

})

test("Test that a line chart that goes below 0 in the negative y and x axis will pass", async () => {

    const data = [
        { x: -1, y: -5 },
        { x: 2, y: 7 },
        { x: -3, y: -9 },
        { x: 4, y: -6 },
        { x: 1, y: 8 }
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

})



test("Test A bar chart that starts in a negative x axis will pass", async () => {

    const data = [
        { x: -2, y: 5 },
        { x: -1, y: 7 },
        { x: 0, y: 9 },
        { x: 1, y: 6 },
        { x: -3, y: 8 }
    ];

    const type = "bar";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example bar Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test that a bar chart that goes below 0 in the negative y axis will pass", async () => {

    const data = [
        { x: 1, y: -5 },
        { x: 2, y: 7 },
        { x: 3, y: -9 },
        { x: 4, y: 6 },
        { x: 1, y: -8 }
    ];

    const type = "bar";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example bar Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test that a bar chart that goes below 0 in the negative y and x axis will pass", async () => {

    const data = [
        { x: -1, y: -5 },
        { x: 2, y: 7 },
        { x: -3, y: -9 },
        { x: 4, y: -6 },
        { x: 1, y: 8 }
    ];

    const type = "bar";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example bar Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);

})


///


test("Test A scatter chart that starts in a negative x axis will pass", async () => {

    const data = [
        { x: -2, y: 5 },
        { x: -1, y: 7 },
        { x: 0, y: 9 },
        { x: 1, y: 6 },
        { x: -3, y: 8 }
    ];

    const type = "scatter";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example scatter Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test that a scatter chart that goes below 0 in the negative y axis will pass", async () => {

    const data = [
        { x: 1, y: -5 },
        { x: 2, y: 7 },
        { x: 3, y: -9 },
        { x: 4, y: 6 },
        { x: 1, y: -8 }
    ];

    const type = "scatter";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example scatter Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test that a scatter chart that goes below 0 in the negative y and x axis will pass", async () => {

    const data = [
        { x: -1, y: -5 },
        { x: 2, y: 7 },
        { x: -3, y: -9 },
        { x: 4, y: -6 },
        { x: 1, y: 8 }
    ];

    const type = "scatter";
    const xLabel = "X Axis";
    const yLabel = "Y Axis";
    const title = "Example scatter Chart";
    const color = "#FF5733"; 

    // generateChartImg(type, data, xLabel, yLabel, title, color).then()
    const returndata = await generateChartImg(type, data, xLabel, yLabel, title, color);


    console.log(returndata);

    expect(returndata).toMatch(/blob:nodedata/);

})

test("Test that float values with really small values are valid and pass", async () => {

    const data = [
        { x: 1.0000005, y: 5.0000001 },
        { x: 2.0000005, y: 7.0000001 },
        { x: 3.0000005, y: 9.0000001 },
        { x: 4.0000005, y: 6.0000001 },
        { x: 5.0000005, y: 8.0000001 }
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

})

test("Test that float values with really small values that are close to zero are valid and pass", async () => {

    const data = [
        { x: 0.0000000001, y: 5.0000001 },
        { x: 1.0000005, y: 7.0000001 },
        { x: 3.0000005, y: 9.0000001 },
        { x: 4.0000005, y: 6.0000001 },
        { x: 5.0000005, y: 8.0000001 }
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

})

test("Test that small negative float values with really small values that are close to zero are valid and pass", async () => {

    const data = [
        { x: -0.0000000001, y: -0.0000001 },
        { x: 1.0000005, y: 7.0000001 },
        { x: -3.0000005, y: -9.0000001 },
        { x: 4.0000005, y: 6.0000001 },
        { x: -5.0000005, y: -8.0000001 }
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

})