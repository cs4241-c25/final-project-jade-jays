export function getTimeRange(start: number, end: number) {
  const arr: string[] = [];
  for (let i: number = start; i <= end; i++) {
    arr.push(getMilitaryTimeFormat(i));
  }
  return arr;
}

export function getMilitaryTimeFormat(time: number) {
  if (time - 12 == 0) return `${time}PM`;
  else if (time - 12 > 0) return `${time - 12}PM`;
  return `${time}AM`;
}
