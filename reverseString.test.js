import {reverseString} from "./reverseString";

test("correctly reverse string", () => {
    expect(reverseString("Javascript")).toBe("tpircsavaJ");
})

test("correctly reverses string with spaces", () => {
    expect(reverseString("This is Javascript")).toBe("tpircsavaJ si sihT");
})

test("correctly reverse string with numbers", () => {
    expect(reverseString("5546")).toBe("6455");
})

test("handles missing argument", () => {
    expect(reverseString()).toBe("No argument provided");
})