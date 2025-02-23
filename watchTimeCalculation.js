function calculateWatchTime(watchTimes) {
  if (!Array.isArray(watchTimes)) {
    return "Invalid";
  }

  let totalSecond = 0;
  for (let time of watchTimes) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    totalSecond += time;
  }
  const hours = Math.floor(totalSecond / 3600);
  const remainingSeconds = totalSecond % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = totalSecond % 60;

  return { hour: hours, minute: minutes, second: seconds };
}

