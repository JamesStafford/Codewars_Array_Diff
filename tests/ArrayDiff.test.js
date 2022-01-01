import {ArrayDiff} from "../src/ArrayDiff";

describe("For ArrayDiff,", () => {
    test("Verify that ArrayDiff does not throw an error", () => {
        expect(() => ArrayDiff([])).not.toThrow();
    });
});
