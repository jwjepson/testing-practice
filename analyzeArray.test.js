import {analyzeArray} from "./analyzeArray";

test("correctly determines average, min, max, and length of array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    expect(analyzeArray([-2,-5,3,4,500,6])).toEqual({average: 84, min: -5, max: 500, length: 6});
})

test("correctly rejects array with strings", () => {
    expect(analyzeArray([5,2,8,"4",1])).toBe("Array must contain only numbers");
})