import { parseEnv } from "./env-var-parser";

describe("envVarParser", () => {
    it("should read the environment variable", () => {
        expect(parseEnv("PACKAGE_NAME")).toEqual("env-var-parser");
    });
});
