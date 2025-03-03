export function getTimeRangeArrayMilitaryFormat(start: number, end: number) {
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

// 00:00 PM|AM format
export function convertTimeStringToInteger(time_string: string) {
  if (!time_string.length) {
    throw new Error("Invalid time string");
  }

  const [time, period] = time_string.split(" ");
  const [hour_string, minute_string] = time.split(":");

  let hour = Number(hour_string),
    minute = Number(minute_string) / 60;
  if (period === "PM") {
    if (hour !== 12) {
      hour = hour + 12;
    }
  }
  return hour + minute;
}
