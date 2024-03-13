const sortPoints = require('./sortPoints');

test('This tests that 2 potive points in decending order are rearanged to ascending order', function() {
	expect(sortPoints(
        [
            { x: 8, y: 2 },
            { x: 4, y: 4 }
        ]
    )).toStrictEqual(
        [
            { x: 4, y: 4 },
            { x: 8, y: 2 }
        ]
    );

});



test('This tests that 2 points in ascending order will remain in ascending order', function() {
	expect(sortPoints(
        [
            { x: 4, y: 4 },
            { x: 8, y: 2 }
        ]
    )).toStrictEqual(
        [
            { x: 4, y: 4 },
            { x: 8, y: 2 }
        ]
    );

});

test('This tests that 2 points in acending order that have float numbers reamain as float numbers', function() {
	expect(sortPoints(
        [
            { x: 4.5, y: 4.9 },
            { x: 8, y: 2 }
        ]
    )).toStrictEqual(
        [
            { x: 4.5, y: 4.9 },
            { x: 8, y: 2 }
        ]
    );

});


test('This tests that 2 potive points in decending order with floats are rearanged to ascending order', function() {
	expect(sortPoints(
        [
            { x: 8.45, y: 2.76 },
            { x: 4, y: 4 }
        ]
    )).toStrictEqual(
        [
            { x: 4, y: 4 },
            { x: 8.45, y: 2.76 }
        ]
    );

});

test('This tests that 2 potive points in decending order with 2 sets of floats that are rearanged to ascending order', function() {
	expect(sortPoints(
        [
            { x: 8.45, y: 2.76 },
            { x: 4.36, y: 4.32 }
        ]
    )).toStrictEqual(
        [
            { x: 4.36, y: 4.32 },
            { x: 8.45, y: 2.76 }
        ]
    );

});


test('This tests that 10 potive points in decending order will be put in ascending order', function() {
	expect(sortPoints(
        [
            { x: 9, y: 1 },
            { x: 8, y: 1 },
            { x: 7, y: 1 },
            { x: 6, y: 1 },
            { x: 5, y: 1 },
            { x: 4, y: 1 },
            { x: 3, y: 1 },
            { x: 2, y: 1 },
            { x: 1, y: 1 },
            { x: 0, y: 1 }

        ]
    )).toStrictEqual(
        [
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
            { x: 4, y: 1 },
            { x: 5, y: 1 },
            { x: 6, y: 1 },
            { x: 7, y: 1 },
            { x: 8, y: 1 },
            { x: 9, y: 1 }

        ]
    );

});


test('This tests that 10 random order potive points in decending order will be put in ascending order', function() {
	expect(sortPoints(
        [
            { x: 3, y: 1 },
            { x: 6, y: 1 },
            { x: 2, y: 1 },
            { x: 5, y: 1 },
            { x: 4, y: 1 },
            { x: 1, y: 1 },
            { x: 9, y: 1 },
            { x: 0, y: 1 },
            { x: 7, y: 1 },
            { x: 8, y: 1 }

        ]
    )).toStrictEqual(
        [
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
            { x: 4, y: 1 },
            { x: 5, y: 1 },
            { x: 6, y: 1 },
            { x: 7, y: 1 },
            { x: 8, y: 1 },
            { x: 9, y: 1 }

        ]
    );

});

test('This tests that 10 negative points will be put in acending order with more negative numbers twords the top ', function() {
	expect(sortPoints(
        [
            { x: -9, y: 1 },
            { x: -8, y: 1 },
            { x: -7, y: 1 },
            { x: -6, y: 1 },
            { x: -5, y: 1 },
            { x: -4, y: 1 },
            { x: -3, y: 1 },
            { x: -2, y: 1 },
            { x: -1, y: 1 },
            { x: 0, y: 1 }

        ]
    )).toStrictEqual(
        [
            { x: -9, y: 1 },
            { x: -8, y: 1 },
            { x: -7, y: 1 },
            { x: -6, y: 1 },
            { x: -5, y: 1 },
            { x: -4, y: 1 },
            { x: -3, y: 1 },
            { x: -2, y: 1 },
            { x: -1, y: 1 },
            { x: 0, y: 1 }

        ]
    );

});

test('This tests that a negative x and y will be sorted correctly', function() {
	expect(sortPoints(
        [
            { x: -8, y: -6 },
            { x: -9, y: -5 },
        ]
    )).toStrictEqual(
        [
            { x: -9, y: -5 },
            { x: -8, y: -6 },
        ]
    );

});

test('This tests that a negative x and y will be sorted correctly', function() {
	expect(sortPoints(
        [
            { x: -8, y: -6 },
            { x: -9, y: -5 },
        ]
    )).toStrictEqual(
        [
            { x: -9, y: -5 },
            { x: -8, y: -6 },
        ]
    );

});

test('This tests that two points can be on the same x axis', function() {
	expect(sortPoints(
        [
            { x: 0, y: 0 },
            { x: 3, y: 3 },
            { x: 3, y: 0 },
            { x: 6, y: 3 },
        ]
    )).toStrictEqual(
        [
            { x: 0, y: 0 },
            { x: 3, y: 3 },
            { x: 3, y: 0 },
            { x: 6, y: 3 },
        ]
    );

});


test('This tests that two points can be on the same y axis', function() {
	expect(sortPoints(
        [
            { x: 0, y: 6 },
            { x: 3, y: 3 },
            { x: 0, y: 3 },
            { x: 3, y: 0 }
        ]
    )).toStrictEqual(
        [
            { x: 0, y: 6 },
            { x: 0, y: 3 },
            { x: 3, y: 3 },
            { x: 3, y: 0 },
        ]
    );

});

test('This tests that points in an order that form a circle will be sorted', function() {
	expect(sortPoints(
        [
            { x: 0, y: 4 },
            { x: 1, y: 6 },
            { x: 2, y: 8 },
            { x: 3, y: 6 },
            { x: 4, y: 4 },
            { x: 5, y: 2 },
            { x: 6, y: 0 },
            { x: 7, y: 2 },
            { x: 8, y: 4 }
        ]
    )).toStrictEqual(
        [
            { x: 0, y: 4 },
            { x: 1, y: 6 },
            { x: 2, y: 8 },
            { x: 3, y: 6 },
            { x: 4, y: 4 },
            { x: 5, y: 2 },
            { x: 6, y: 0 },
            { x: 7, y: 2 },
            { x: 8, y: 4 }
        ]
    );

});


test('This tests that really big numbers will be sorted', function() {
	expect(sortPoints(
        [
            { x: 9999999999, y: 9999999999 },
            { x: 5555555555, y: 5555555555 }
        ]
    )).toStrictEqual(
        [
            { x: 5555555555, y: 5555555555 },
            { x: 9999999999, y: 9999999999 }
        ]
    );

});

test('This tests that really small numbers will be sorted', function() {
	expect(sortPoints(
        [
            { x: -5555555555, y: -5555555555 },
            { x: -9999999999, y: -9999999999 }
        ]
    )).toStrictEqual(
        [
            { x: -9999999999, y: -9999999999 },
            { x: -5555555555, y: -5555555555 }
        ]
    );

});


test('This tests that only one point will be sorted/returned', function() {
	expect(sortPoints(
        [
            { x: 5, y: 6 }
        ]
    )).toStrictEqual(
        [
            { x: 5, y: 6 }
        ]
    );

});


test('This tests that no points will return nothing', function() {
	expect(sortPoints(
        [
            
        ]
    )).toStrictEqual(
        [
            
        ]
    );

});

test('This tests that points with only a small difference will be sorted', function() {
	expect(sortPoints(
        [
            { x: 5.000006, y: 6 },
            { x: 5.000005, y: 6 }
        ]
    )).toStrictEqual(
        [
            { x: 5.000005, y: 6 },
            { x: 5.000006, y: 6 }
        ]
    );

});


/*
Edge Cases

4.54, 3.64
34343453, 45345345
four, six
-4, 3



*/