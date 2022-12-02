import {calculator} from "./calculator";

test("correctly adding two numbers", () => {
    expect(calculator.add(5, 2)).toBe(7);
})

test("correctly subtract two numbers", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
})

test("correctly handle string input", () => {
    expect(calculator.add("G", "F")).toBe("Must provide two numbers");
    expect(calculator.subtract("G", "F")).toBe("Must provide two numbers");
    expect(calculator.multiply("G", "F")).toBe("Must provide two numbers");
    expect(calculator.divide("G", "F")).toBe("Must provide two numbers");
})

test("correctly subtract two negative numbers", () => {
    expect(calculator.subtract(-4, -2)).toBe(-2);
})

test("correctly divide two numbers", () => {
    expect(calculator.divide(12, 4)).toBe(3);
})

test("correctly multiply two numbers", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
})