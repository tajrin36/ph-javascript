function calculateTax(income, expenses) {
  if (income >= expenses && income >= 0 && expenses >= 0) {
    const difference = income - expenses;
    const result = difference * 0.2;
    return result;
  } else {
    return "Invalid Input";
  }
}

function sendNotification(email) {
  const input = email.split("@");
  const username = input[0];
  const domainName = input[1];

  if (email.includes("@") !== true) {
    return "Invalid Email";
  } else {
    const outputMessage = `${username} sent you an email from ${domainName}`;
    return outputMessage;
  }
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  } else if (name[0] >= "0" && name[0] <= 9) {
    return true;
  } else if (name[name.length - 1] >= "0" && name[name.length - 1] <= "9") {
    return true;
  }
  for (let i = 1; i < name.length - 1; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      return true;
    }
  }
  return false;
}


function calculateFinalScore(obj) {
  if (typeof obj != "object") {
    return "Invalid Input ";
  }

  let result = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true) {
    result = result + 20;
  } else if (obj.isFFamily === false) {
    result = result + 0;
  }

  if (result >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) === false ||
    typeof serialNumber != "number"
  ) {
    return "Invalid Input";
  }

  let sum = 0;
  for (const times of waitingTimes) {
    sum = sum + times;
  }
  const count = waitingTimes.length;
  const average = Math.round(sum / count);
  const serial = serialNumber - 1;
  const remaining = serial - count;
  const result = average * remaining;

  return result;
}
