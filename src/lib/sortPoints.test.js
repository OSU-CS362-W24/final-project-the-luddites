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

test('This tests that 10 negative points ', function() {
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


/*
Edge Cases

4.54, 3.64
34343453, 45345345
four, six
-4, 3



*/