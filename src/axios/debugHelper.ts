export const LEVEL = "DEBUG";

export function debug(msg: string) {
    if (LEVEL == "DEBUG")
        console.log(msg)
}