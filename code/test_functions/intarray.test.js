import getArray from "../functions/intarray.js"

test.each([
    ["1,8,3,4,2,6", {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }],
])

(test(`Array probability parameters (%s → %s)`, (a, b) => {
    expect(getArray(a)).toBe(b);
}));