const factorial = require("./factorial");

describe("factorial(num) should return the factorial of num", () => {
    test("factorial(0) => 1", () => {
        expect(factorial(0)).toBe(1);
    });

    test("factorial(0) => 1", () => {
        expect(factorial(1)).toBe(1);
    });

    test("factorial(3) => 6", () => {
        expect(factorial(3)).toBe(6);
    });

    test("factorial(5) => 120", () => {
        expect(factorial(5)).toBe(120);
    });
});
