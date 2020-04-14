import { Url } from '../models/urls'

const countItems = Url.countDocuments((err, count) => {
    err ? console.log({err}) : logResult(count)
});

const logResult = (result) => {console.log(result)}

export const testCreateKey = (previousCount: number): string => {
    const key = (previousCount + 1).toString(32);
    return key
}

export const createKey = (): string => {
    const key = (Math.random()*0xFFFFFF<<0).toString(16);
    return key
}

export const countConvert = (): void => {
    for (let i = 2; i <= 10000000; i*=2) {
        const hex = i.toString(16);
        const base36 = i.toString(36);
        console.log({dec: i, hex, base36})
    }
}
