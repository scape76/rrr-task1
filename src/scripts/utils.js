export function getCreatedTimeToString(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export const getDatesFromString = (str) =>
(str.match(/\d{1,2}([\/.-])\d{1,2}\1\d{4}/g) || []).join(" ");
