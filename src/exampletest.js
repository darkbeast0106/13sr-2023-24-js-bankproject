import { describe, test, expect } from "vitest";

function sum(a, b) {
    return a + b;
}

describe("Example tests", () => {
    test("successfull example", () => {
        expect(sum(3, 5)).toBe(8);
    });

    test("failed example", () => {
        expect(sum(3, 5)).not.toBe(8);
    });
});