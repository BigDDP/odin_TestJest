import getCapital from "../functions/capitalise.js"

test(`Capitalising the first letter`, () => {
    expect(getCapital("hello 1 There there")).toBe("Hello 1 There There");
});