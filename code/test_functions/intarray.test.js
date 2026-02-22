import getArray from "../functions/intarray.js"

test.each([
  ["1,8,3,4,2,6", { average: 4, min: 1, max: 8, length: 6 }],
  ["5,8,32,12,8,7,2,2", { average: 9.5, min: 2, max: 32, length: 8 }],
  ["5,8,,b,   , ,32,12,8,7,2,2", { average: 9.5, min: 2, max: 32, length: 8 }]
])

("getArray(%s) → %o", (a, expected) => {
  expect(getArray(a)).toEqual(expected);
});
