import getCipher from "../functions/cipher.js"

test.each([
    ["def", 1, "efg"],
    ["abc", 18, "stu"],
    ["xyz", 3, "abc"],
    ["abcd", 6, "ghij"],
    ["a b cd", 3, "d e fg"], 
    ["heLLo", 3, "khOOr"],
    ["Hello, World!", 3, "Khoor, Zruog!"]
])

("Caesar Cipher (%s, %i → %s)", (a, b, c) => {
    expect(getCipher(a, b)).toBe(c);
});