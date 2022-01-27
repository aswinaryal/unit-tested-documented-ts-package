import { hashPassword, validatePassword } from "./password";

const PASSWORD = "1234";
const VALUES = {
  hash: "65bddd9a2bdcb798bd1740a7f1ba65b4b9584291ee20a0fd458938be450013681323b1a76b108893c46b8b21e18ee88e919d3af5d07edfd163097b4b859d1cc5",
  salt: "47ed7986d4afde3c1f3e0d7ed6adf142",
  string: "1234",
  wrongString: "1232334",
};
describe("hashPassword", () => {
  test("hashPassword returns an object with hash", () => {
    const result = hashPassword(PASSWORD);
    expect(result).toHaveProperty("hash");
  });

  test("hashPassword returns an object with salt", () => {
    const result = hashPassword(PASSWORD);
    expect(result).toHaveProperty("salt");
  });
});

describe("validatePassword", () => {
  test("with correct password", () => {
    expect(validatePassword(VALUES.string, VALUES.salt, VALUES.hash)).toBe(
      true
    );
  });

  test("with wrong password", () => {
    expect(validatePassword(VALUES.wrongString, VALUES.salt, VALUES.hash)).toBe(
      false
    );
  });
});
