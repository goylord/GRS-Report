export const uuid = () => {
    const s:string[] = [];
    const hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    const uuid = s.join("");
    return uuid;
}