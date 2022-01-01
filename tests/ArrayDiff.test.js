import {ArrayDiff} from "../src/ArrayDiff";

describe("For ArrayDiff,", () => {
    test("Verify that ArrayDiff does not throw an error.", () => {
        expect(() => ArrayDiff([], [])).not.toThrow();
    });

    test(`Verify that ArrayDiff returns "[2]" if provided "[1, 2]" for first array and "[1]" for second array.`, () => {
        expect(ArrayDiff([1, 2], [1])).toStrictEqual([2]);
    });

    test(`Verify that ArrayDiff returns "[1, 3]" if provided "[1, 2, 2, 2, 2, 3]" for first array and "[2]" for second array.`, () => {
        expect(ArrayDiff([1, 2, 2, 2, 2, 3], [2])).toStrictEqual([1, 3]);
    });
});
