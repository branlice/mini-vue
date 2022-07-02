import { readonly } from "../reactive";

describe("readonly", () => {
    it("should return a readonly proxy", () => {
        const target = { a: 1, b: { c: 2 } };
        const proxy = readonly(target);
        expect(proxy).not.toBe(target);
        expect(proxy.a).toBe(1);
    });

    it("cannot set readonly proxy", () => {
        console.warn = jest.fn();

        const target = { a: 1 };
        const proxy = readonly(target);

        proxy.a = 20;
        expect(console.warn).toBeCalled();
    })
})