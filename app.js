console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count > 0) {
    for(let i = 1; i <= count; i++) {
      if(i % 2 != 0) {
        console.log(i);
      }
    }
  } else {
    console.log("Please enter a valid number");
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  if(userName && age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age < 16){
      console.log(belowSixteen);
    } else {
       console.log(aboveSixteen);
    }
  } else {
      console.log("Please enter a valid name and age");
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) {
  let msg = "";
  if (x == 0 && y == 0) {
    msg = "Origin";
  } else if (x == 0) {
      msg = "Y-Axis";
  } else if ( y == 0) {
      msg = "X-Axis";
  } else if ( x > 0) {
      if(y > 0 ) {
        msg = "Quadrant 1";
      } else {
          msg = "Quadrant 4";
      }
  } else if (x < 0) {
      if(y > 0) {
        msg = "Quadrant 2";
      } else {
        msg = "Quadrant 3";
      }
  }
  console.log(msg);
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isTriangle(a, b, c){
  if ((a + b <= c || a + c <= b || b + c <= a)) {
    return "Invalid Triangle";
  } else if (a == b && b == c && c == a) {
        return `(${a},${b},${c}) is an equalateral triangle`;
    } else if ( a != b && a != c && b != c) {
        return `(${a},${b},${c}) is an scalene triangle`;
    } else {
        return `(${a},${b},${c}) is a isoceles triangle`;
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsage(planLimit, day, usage) {
  let planLength = 30;
  let daysLeft = planLength - day;
  let dataRemaining = planLimit - usage;
  let expectedAvgData = (planLimit/planLength).toFixed(2);
  let avgDataUsed = (usage/day).toFixed(2);
  let projectedDataUsg = ((avgDataUsed * daysLeft) - dataRemaining).toFixed(2);
  let remainingDataAvg = (dataRemaining/daysLeft).toFixed(2);

  let msg = day + " days used, " + daysLeft + " days remaining." +
            "\n" + "Expected average daily use: " + expectedAvgData + " GB/day.";

  if (avgDataUsed > expectedAvgData) {
    msg += "\n" + "You are EXCEEDING your average daily use (" + avgDataUsed + " GB/day)," +
          "\n" + "continuing this high usage, you'll exceed your data plan by " + projectedDataUsg + " GB." +
          "\n" + "To stay below your data plan, use no more than " + remainingDataAvg + " GB/day.";
  } else if (avgDataUsed <= expectedAvgData) {
      msg += "\n" + "Your daily average of " + avgDataUsed + " is less than the expected average of " + expectedAvgData + " GB/day." +
            "\n" + "You have " + dataRemaining + " GB left for the remainder of the month.";
  }
  console.log(msg);
}