export const environment = <T extends Record<string, unknown>>(types: T): T => {
    const result: Record<string, unknown> = {};
    Object.keys(types).forEach((key: string) => {
        const value = types[key];
        if (typeof value === 'function' && process.env.hasOwnProperty(key)) {
            result[key] = value(process.env[key]);
        } else if (typeof value === 'function' && !process.env.hasOwnProperty(key)) {
            throw new Error(`Undefined env param ${key}`);
        } else {
            result[key] = value;
        }

    })
    return result as T;
}