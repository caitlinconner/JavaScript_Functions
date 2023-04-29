console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        } 
        if (count < 0) {
            count *= -1;
        }
    }
}


// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

// checkAge("Caitlin", 28);

// //Exercise 3

function Quadrant(x,y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x != 0 && y == 0) {
        return "x axis";
    } else if (x == 0 && y != 0) {
        return "y axis";
    } else {
        return "Origin";
    }
}

//as switch case:

// function Quadrant(x,y) {
//     switch (true) {
//         case x > 0 && y > 0:
//             return "Quadrant 1";
//         case x < 0 && y > 0: 
//             return "Quadrant 2";
//         case x < 0 && y < 0: 
//             return "Quadrant 3";
//         case x > 0 && y < 0: 
//             return "Quadrant 4";
//         case x != 0 && y == 0: 
//             return "x axis";
//         case x == 0 && y != 0: 
//             return "y axis";
//         default:
//             return "Origin";
//         }
//     }

// console.log(Quadrant(0,5));

//Exercise 4

function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return "Equilateral Triangle.";
        } else if (a == b || b == c || a == c) {
            return "Isosceles Triangle.";
        } else {
            return "Scalene Triangle.";
        }
    } else {
    } return "Not a valid triangle.";
}

// console.log(checkTriangle(2, 3, 4));


//Exercise 5

function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
}

    console.log(`${day} day(s) used, ${remainingDays} day(s)
    remaining. Average projected use: ${projectedAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day,
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)}
    GB from your data limit. To stay below your data plan, use no more than
    ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
}
 

dataUsageFeedback(50, 10, 25);