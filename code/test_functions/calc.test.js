import getCalc from "../functions/calc.js"

test(`Calculating 2 values: `, () => {
    expect(getCalc(2,8)).toBe("Sum: 10, Subtract: -6, Multiply: 16, Divide: 0.25");
});