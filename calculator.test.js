const { add, subtract, multiply, divide } = require("./calculator");

describe("Calculator Tests", () => {
    test("تأكيد دالة الجمع: 1 + 2 مفروض تساوي 3", () => {
        expect(add(1, 2)).toBe(3);
    });
    test("تأكيد دالة الطرح: 5 - 3 مفروض تساوي 2", () => {
        expect(subtract(5, 3)).toBe(2);
    });
    test("تأكيد دالة الضرب: 2 * 4 مفروض تساوي 8", () => {
        expect(multiply(2, 4)).toBe(8);
    });
    test("تأكيد دالة القسمة: 10 / 2 مفروض تساوي 5", () => {
        expect(divide(10, 2)).toBe(5);
    });
    test("تأكيد الخطأ عند القسمة على صفر", () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
});