"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var password_1 = require("./password");
var PASSWORD = "1234";
var VALUES = {
    hash: "65bddd9a2bdcb798bd1740a7f1ba65b4b9584291ee20a0fd458938be450013681323b1a76b108893c46b8b21e18ee88e919d3af5d07edfd163097b4b859d1cc5",
    salt: "47ed7986d4afde3c1f3e0d7ed6adf142",
    string: "1234",
    wrongString: "1232334",
};
describe("hashPassword", function () {
    test("hashPassword returns an object with hash", function () {
        var result = (0, password_1.hashPassword)(PASSWORD);
        expect(result).toHaveProperty("hash");
    });
    test("hashPassword returns an object with salt", function () {
        var result = (0, password_1.hashPassword)(PASSWORD);
        expect(result).toHaveProperty("salt");
    });
});
describe("validatePassword", function () {
    test("with correct password", function () {
        expect((0, password_1.validatePassword)(VALUES.string, VALUES.salt, VALUES.hash)).toBe(true);
    });
    test("with wrong password", function () {
        expect((0, password_1.validatePassword)(VALUES.wrongString, VALUES.salt, VALUES.hash)).toBe(false);
    });
});
