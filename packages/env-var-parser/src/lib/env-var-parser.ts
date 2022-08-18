/**
 * If the environment variable exists, return it as the type T, otherwise return the default value as
 * the type T.
 * @param {string} key - The environment variable key.
 * @param {T} defaultValue - The default value to return if the environment variable is not set.
 * @returns environment variable with type support
 */
export const parseEnv = <T>(key: string, defaultValue?: T) => {
    const value: string | undefined = process.env[key];

    if (value) return value as unknown as T;

    return defaultValue ? defaultValue : undefined;
};
