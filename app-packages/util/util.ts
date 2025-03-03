export function stringToDecimal(str: string): number {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    result += charCode / 127;
  }
  return result;
}
