import getReverse from "../functions/reverse.js"

test(`Capitalising the first letter`, () => {
    expect(getReverse("abc def")).toBe("fed cba");
});