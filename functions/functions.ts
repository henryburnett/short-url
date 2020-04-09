export const createKey = (): string => {
    const key = (Math.random()*0xFFFFFF<<0).toString(16);
    return key
}

