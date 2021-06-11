import { countDown } from "../index.js";

describe("test countDown function", () => {
    const expectedPos = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const expectedExample = [3, 2, 1, 0];
    const expectedZero = [0];
    it("positive numbers", () =>{
        expect(countDown(10)).toStrictEqual(expectedPos);
    }),
    it("example", () =>{
        expect(countDown(3)).toStrictEqual(expectedExample);
    }),
        it("only zero", () =>{
            expect(countDown(0)).toStrictEqual(expectedZero);
        }),
    it("negative numbers", () =>{
        expect(countDown(-8)).toBe("Please, enter a number more or equal to 0");
    }),
    it("enter a string or NaN", () =>{
        expect(countDown("startNumber")).toBe("Please, enter a number");
    });
});