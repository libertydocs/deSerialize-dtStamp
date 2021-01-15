const unixTime = 1610650800;
const date = new Date(unixTime * 1000);

console.log("UTCString: ", date.toUTCString("en-US"));
console.log("locale: ", date.toLocaleDateString("en-US"));
console.log("dateString: ", date.toDateString("en-US"));
console.log("unixDate: ", date); //log