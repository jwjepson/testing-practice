import {caesarCipher} from "./caesarCipher";

test("java gets ciphered to kbwb", () => {
    expect(caesarCipher("java")).toBe("kbwb");
})

test("correctly rejects non-strings", () => {
    expect(caesarCipher(5)).toBe("Must provide a string");
})

test("correctly ciphers a sentence", () => {
    expect(caesarCipher("Javascript is cool!")).toBe("Kbwbtdsjqu jt dppm!");
})

test("correctly keeps punctuation the same", () => {
    expect(caesarCipher("java!")).toBe("kbwb!");
    expect(caesarCipher("%$$!<")).toBe("%$$!<");
})

test("correctly handles wrapping from z to a", () => {
    expect(caesarCipher("Zebra")).toBe("Afcsb");
    expect(caesarCipher("zebra")).toBe("afcsb");
})

test("correctly handles case sensitivity", () => {
    expect(caesarCipher("zEbRa")).toBe("aFcSb");
})