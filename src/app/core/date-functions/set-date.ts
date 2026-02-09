export function setDate(baseDate: Date, hours: number, minutes: number, seconds: number): Date {
  const date = new Date(baseDate);
  date.setHours(date.getHours() + hours);
  date.setMinutes(date.getMinutes() + minutes);
  date.setSeconds(date.getSeconds() + seconds);
  return date;
}
