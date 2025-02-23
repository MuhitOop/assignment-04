function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }
  const invalidStartChars = [".", "-", "_", "+", "@"];
  const atCount = email.split("@").length - 1;
  if (
    invalidStartChars.includes(email[0]) ||
    email.includes(" ") ||
    atCount !== 1 ||
    !email.endsWith(".com")
  ) {
    return false;
  }

  return true;
}

