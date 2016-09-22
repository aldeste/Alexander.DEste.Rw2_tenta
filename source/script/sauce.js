function isLeapYear(year) {
  // Check if year is divisable by 4 and not divisable by 100,
  // or check if year is divisable by 400
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

export default isLeapYear;
