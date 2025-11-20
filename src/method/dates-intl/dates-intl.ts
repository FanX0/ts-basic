// Construct a specific UTC date
const d = new Date("2020-01-02T03:04:05Z");
// ISO formatting and field accessors
console.log(d.toISOString());
console.log(d.getUTCFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getTime());

// Intl.DateTimeFormat for localized date/time
const df = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "UTC",
});
console.log(df.format(d));

// Intl.NumberFormat for currency
const nf = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});
console.log(nf.format(12500));

// Relative time formatting
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-1, "day"));
console.log(rtf.format(2, "hour"));
