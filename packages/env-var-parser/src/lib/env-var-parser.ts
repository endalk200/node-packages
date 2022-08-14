/**
 * If the environment variable exists, return it as the type T, otherwise return the default value as
 * the type T.
 * @param {string} key - The environment variable key.
 * @param {T} defaultValue - The default value to return if the environment variable is not set.
 * @returns A function that takes a string and a default value and returns a value of type T or
 * undefined.
 */
export const parseEnv = <T>(key: string, defaultValue?: T): T | undefined => {
    const value = process.env[key];

    if (value) return value as unknown as T;

    return defaultValue ? defaultValue : undefined;
};
