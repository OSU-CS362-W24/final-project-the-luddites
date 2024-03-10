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

test('This tests that 2 potive points in decending order with multible floats are rearanged to ascending order', function() {
	expect(sortPoints(
        [
            { x: 8.45, y: 2.76 },
            { x: 4.45, y: 4.54 }
        ]
    )).toStrictEqual(
        [
            { x: 4.45, y: 4.54 },
            { x: 8.45, y: 2.76 }
        ]
    );

});


test('This tests that 2 potive points in acending order with multible floats are rearanged to ascending order', function() {
	expect(sortPoints(
        [
            { x: 4.45, y: 4.54 },
            { x: 8.45, y: 2.76 }
        ]
    )).toStrictEqual(
        [
            { x: 4.45, y: 4.54 },
            { x: 8.45, y: 2.76 }
        ]
    );

});

test('This tests that 2 potive points in acending order with multible different sized floats are rearanged to ascending order', function() {
	expect(sortPoints(
        [
            { x: 4.45, y: 4.54 },
            { x: 8.4534, y: 2.7654 }
        ]
    )).toStrictEqual(
        [
            { x: 4.45, y: 4.54 },
            { x: 8.4534, y: 2.7654 }
        ]
    );

});

test('This tests that 2 potive points in acending order with multible different sized floats are rearanged to ascending order', function() {
	expect(sortPoints(
        [
            { x: e, y: 3 },
            { x: 8.4534, y: 2.7654 }
        ]
    )).toBe(undefined);

});
/*
Edge Cases

4.54, 3.64
34343453, 45345345
four, six
-4, 3



*/