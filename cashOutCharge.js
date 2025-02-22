function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }

  const cashOutCharge = 1.75 / 100;
  const allTotal = money * cashOutCharge;

  return allTotal.toFixed(4);
}
