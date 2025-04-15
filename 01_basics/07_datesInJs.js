// ******************** 📅 Dates in JavaScript ********************
// JavaScript Date object allows working with dates & times
// Use `new Date()`, .toString(), .toLocaleString(), .getTime(), .getDate(), .getDay(), etc.
// Timestamps are in milliseconds (useful in comparisons)

let myDate = new Date(); // Creates a new Date object with the current date and time

console.log(myDate); // Raw Date format (machine readable)
console.log(myDate.toString()); // Converts Date to human-readable string format
console.log(myDate.toDateString()); // Shows only date part (e.g., "Mon Apr 14 2025")
console.log(myDate.toLocaleString()); // Local date + time (based on system settings)
console.log(myDate.toLocaleDateString()); // Localized date only
console.log(myDate.toLocaleTimeString()); // Localized time only
console.log(myDate.toISOString()); // ISO format (used in APIs, databases)
console.log(myDate.toJSON()); // Same as .toISOString()

// ✅ Get various parts of the date
console.log(myDate.getTime()); // Returns milliseconds since Jan 1, 1970
console.log(myDate.getDate()); // Day of the month (1–31)
console.log(myDate.getDay()); // Day of the week (0 = Sunday, 6 = Saturday)
console.log(myDate.getHours()); // Current hour (0–23)

// ✅ Modify the date
console.log(myDate.setFullYear(2023)); // Sets the year and returns timestamp

// ✅ Type of Date object
console.log(typeof myDate); // Output: object

// ******************** ⏱️ Timestamps ********************

let myTimeStamp = Date.now(); // Returns current timestamp in milliseconds (used in comparisons)

console.log(myTimeStamp); // e.g., 1713089258374
console.log(myDate.getTime()); // Same as above but from Date object

// ✅ Convert to seconds (used in many APIs)
console.log(Math.floor(Date.now() / 1000)); // Converts timestamp to seconds

/*
📘 Notes:
- JavaScript Date is based on milliseconds since Jan 1, 1970 (Unix Epoch).
- Use `Date.now()` to get current timestamp (useful for comparisons, logging, etc).
- .toLocaleString() adapts to user's region — great for UI display.
- For storing or sending dates (APIs, databases), prefer ISO format (e.g. toISOString()).
- To calculate time difference, subtract two .getTime() values and divide by 1000 to get seconds.
*/
