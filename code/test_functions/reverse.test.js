import getReverse from "../functions/reverse.js"

test(`Reversing the string`, () => {
    expect(getReverse("abc def")).toBe("fed cba");
});