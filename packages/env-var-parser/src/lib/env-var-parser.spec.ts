import { parseEnv } from "./env-var-parser";

describe("envVarParser", () => {
    it("should read the environment variable", () => {
        const _packageName = parseEnv<string>("PACKAGE_NAME");

        expect(_packageName).toEqual("env-var-parser");
    });

    it("should return default value incase of undefined environment variable", () => {
        const _packageName = parseEnv<string>("PACKAGE", "env");

        expect(_packageName).toEqual("env");
    });
});
