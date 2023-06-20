const findMax = require("./findMax");

describe("findMax takes an array as input and returns the largest number in the array", () => {
    test("Empty array returns null", () => {
        expect(findMax([])).toBeNull();
    });

    test("findMax([1]) => 1", () => {
        expect(findMax([1])).toBe(1);
    });

    test("findMax([10, 20, 30, 25, 100, 7]) => 1", () => {
        expect(findMax([10, 20, 30, 25, 100, 7])).toBe(100);
    });
});
