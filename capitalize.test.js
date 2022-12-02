import {capitalize} from "./capitalize";

test("uppercase first character", () => {
  expect(capitalize("javascript")).toBe("Javascript");
})

test("uppercase first character in sentence", () => {
  expect(capitalize("uppercase this sentence")).toBe("Uppercase this sentence");
})

test("uppercase first character when already uppercase", () => {
  expect(capitalize("JAVASCRIPT")).toBe("JAVASCRIPT");
})