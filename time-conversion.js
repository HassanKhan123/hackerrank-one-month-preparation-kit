const timeConversion = time => {
  let newTime = time.slice(0, time.length - 2);
  let splitTime = newTime.split(":");
  let hour = Number(newTime.split(":")[0]);
  if (time.includes("PM") && hour < 12) hour += 12;
  else if (time.includes("AM") && hour == 12) hour -= 12;

  splitTime[0] = hour < 12 ? "0" + hour : hour;

  splitTime = splitTime.join(":");

  console.log(splitTime);
};

timeConversion("04:59:59AM");
