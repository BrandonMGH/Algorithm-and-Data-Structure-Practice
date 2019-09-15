
// ** SIMPLE ARRAY SUM ** //
function ArraySum(a) {
    let total = 0;
    for (i = 0; i < a.length; i++) {
        total += a[i];
    }
    return total
}

const arr = [1, 2, 3, 4, 5, 10, 22]

ArraySum(arr)

// ** COMPARE THE TRIPLETS ** // 

function compareTriplets(a, b) {
    let storage = [0, 0]

    for (let i in a) {
        if (a[i] > b[i]) {
            storage[0]++;
        }
        else if (a[i] < b[i]) {
            storage[1]++;
        }

    }

    return storage
}

const arrOne = [5, 5, 5, 5, 5]
const arrTwo = [6, 1, 6, 1, 6]

// console.log(compareTriplets(arrOne,arrTwo))


// function compareTriplets(a, b) {
//     let score = [];
//     let aTotal = 0;
//     let bTotal = 0;

//     for (let i in a) {
//         if (a[i] > b[i]) {
//             aTotal++
//         } else if (a[i] < b[i]) {
//             bTotal++
//         }
//     }
//     score.push(aTotal, bTotal);
//     return score;
// }


compareTriplets(arrOne, arrTwo)

// ** A VERY BIG SUM CHALLENGE ** //

const largeArray = [5, 1000000, 1000000, 1000000, 1000000]

function aVeryBigSum(a) {
    let total = 0;
    for (let i in a) {
        total += a[i];
    }
    return total
}

aVeryBigSum(largeArray)

// ** SOCK MERCHANT ** //

sortArr = [8, 7, 2, 3, 4, 7, 8, 2]



function sockMerchant(n, ar) {
    let sockPairs = 0;
    let sortedArr = ar.sort();
    for (let i = 0; i < n - 1; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            sockPairs++;
            i += 1;
        }
    }
    return sockPairs
}

sockMerchant(8, sortArr)

// ** COUNTING VALLEYS ** //

let stepsCount = ["D", "D", "U", "D", "D"]

function countingValleys(n, s) {
    let valleyCount = 0;
    let currentlevel = 0



    for (let i = 0; i < n; i++) {
        if (s[i] === "U") {
            currentlevel += 1;
            if (currentlevel === 0) {
                valleyCount += 1;
            }

        }
        else {
            currentlevel -= 1;
        }
    }
    return valleyCount

}



countingValleys(5, stepsCount)

// ** JUMPING ON CLOUDS ** //

let cloudArray = [0, 0, 1, 0, 0, 1, 0]

function jumpingOnClouds(c) {
    let moveCount = 0;
    for (let i = 0; i < c.length - 1;) {
        if (i + 2 === c.length || c[i + 2] === 1) {
            moveCount += 1;
            i++;

        } else {
            moveCount += 1;
            i += 2

        }
    }
    return moveCount;
}

jumpingOnClouds(cloudArray)

//** DIAGONAL DIFFERENCE */

diagonalArr =
    [
        [5, 4, 5],
        [2, 3, 8],
        [9, 5, 1]]


function diagonalDifference(arr) {
    // Write your code here
    let m = arr.length
    let DiagonalOne = 0;
    let DiagonalTwo = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            if (i === j) {
                DiagonalOne += arr[i][j]
            }
            if (i + j === m - 1) {
                DiagonalTwo += arr[i][j]
            }
        }
    }
    return Math.abs(DiagonalOne - DiagonalTwo)
}

diagonalDifference(diagonalArr)

// ** BREAKING THE RECORDS ** //

let scores = [52, 27, 28, 12, 30]

function breakingRecords(scores) {
    let scoreMin = scores[0];
    let scoreMax = scores[0];
    let newMin = 0
    let newMax = 0

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < scoreMin) {
            scoreMin = scores[i];
            newMin++;
        }
        if (scores[i] > scoreMax) {
            scoreMax = scores[i]
            newMax++;
        }
    }
    return [newMin, newMax]

}



breakingRecords(scores)

// ** STAIRCASE ** //

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }

}

staircase(4)

function solve(meal_cost, tip_percent, tax_percent) {
    let tipAmount = 12 * (tip_percent / 100)
    let taxAmount = 12 * (tax_percent / 100)

    return Math.round(meal_cost + tipAmount + taxAmount)
}

solve(20.75, 10, 3)

//** FIND NUMBER SAMPLE TEST PROBLEM **//

findNumArr = [5, 1, 2, 3, 4]


function findNumber(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (k === arr[i]) {
            return "YES"
        } else {
            return "NO"
        }
    }

}

findNumber(findNumArr, 1)

// ** WRITE IN BALLOT ** // 

ballotArr = ["Alex", "Michael", "Harry", "Dave", "Michael", "Victor", "Harry", "Alex", "Mary", "Mary"]

function writeIn(ballot) {
    const candidateObj = {};
    let winners = [];
    let maxVotes = 0;

    for (let i of ballot) {
        candidateObj[i] = (candidateObj[i] || 0) + 1;
    }


    for (let j of ballot) {
        if (candidateObj[j] > maxVotes) {
            maxVotes = candidateObj[j];
            winners = [j];
        }
        else if (candidateObj[j] === maxVotes) {
            winners.push(j);
        }
    }

    if (winners.length === 1) {
        return winners[0];
    }
    winners.sort();
    return winners[winners.length - 1];


}

writeIn(ballotArr)

// ** Day 3:  Intro to Conditional Statements ** 

function main(n) {
    if (n % 2 === 1) {
        return "Weird"
    } else if (n % 2 !== 1 && n >= 2 && n <= 5) {
        return "Not Weird"
    } else if (n % 2 !== 1 && n >= 6 && n <= 20) {
        return "Weird"
    } else {
        return "Not Weird"
    }
}

main(8)

//**PLUS MINUS **//

plusMinusArr = [-12, 2, 2, 0]

function plusMinus(arr) {
    let plusMinusTotal = [0, 0, 0]
    let adjustedTotal = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            plusMinusTotal[0]++;

        } else if (arr[i] < 0) {
            plusMinusTotal[1]++;

        } else {
            plusMinusTotal[2]++;

        }
    }

    for (let j = 0; j < plusMinusTotal.length; j++) {
        adjustedTotal.push(plusMinusTotal[j] /= arr.length)
    }

    console.log(plusMinusTotal[0].toFixed(6))
    console.log(plusMinusTotal[1].toFixed(6))
    console.log(plusMinusTotal[2].toFixed(6))
}



// ** MINI-MAX SUM ** //

minMaxArr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
    let maxIndex = Math.max(...arr)
    let minIndex = Math.min(...arr)
    let arrSum = arr.reduce((a, b) => a + b, 0)
    let minFinal = arrSum - maxIndex
    let maxFinal = arrSum - minIndex

    console.log(minFinal, maxFinal)


}



// ** Birthday Cake Candles ** //

birthdayCakeCandlesArr = [4, 5, 5]

function birthdayCakeCandles(ar) {
    let tallestCandles = 0;
    for (i = 0; i < ar.length; i++) {
        if (ar[i] === Math.max(...ar)) {
            tallestCandles++;
        }
    }
    return tallestCandles

}

birthdayCakeCandles(birthdayCakeCandlesArr)


// ** DAY 4: Classes vs Instances ** //
function Person(initialAge) {
    // Add some more code to run some checks on initialAge
    if (initialAge >= 0) {
        let age = initialAge;

    } else {
        initialAge = 0;
        console.log("Age is not valid, setting age to 0.");
    }

    this.amIOld = (age) => {
        // Do some computations in here and print out the correct statement to the console
        if (initialAge < 13) {
            console.log("You are young.");
        } else if (initialAge >= 13 && initialAge < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    };
    this.yearPasses = (age) => {
        // Increment the age of the person in here
        initialAge = initialAge + 1;
    };
}

// ** Day 5: Loops ** //

function Loops(num) {
    for (let i = 2; i < 11; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

// Loops(2)


// ** IF/ELSE TYPES PRACTICE ** //

let testWord = 'Hello'

let testStatement = testWord || "default" // this statement works as a an if/else statement by determining if the testWord variable is "truthy" or falsey.  If truthy, testWord will be printed out, otherwise, the string "Default" will be printed out

console.log(testStatement)


let athleteFinalPosition = '15th place';

switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!')
        break;
    case 'second place':
        console.log('You get the silver medal!')
        break;
    case 'third place':
        console.log('you get the bronze medal!')
        break;
    default:
        console.log('No medal awarded.');
        break;

}

// ** REPEATED STRINGS ** //

repeatedStringArr = ['a', 'b', 'c']


function repeatedString(s, n) {
    let x = Math.floor(n / s.length);
    let count = (s.split("a").length - 1) * x;
    let rem = n % s.length;

    for (var i = 0; i < rem; i++) {
        if (s.charAt(i) === "a") {
            count++;
        }
    }
    return count;
}



// ** ADJACENT ELEMENT PRODUCT ** // 

inputArrayArr = [1, 2, 3, 4]

function adjacentElementsProduct(inputArray) {
    let maxValue = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] * inputArray[i + 1] > maxValue) {
            maxValue = inputArray[i] * inputArray[i + 1]
        }
    }
    return maxValue
}

console.log(adjacentElementsProduct(inputArrayArr))

// ** DAY 6: Let's Review ** //

processDataArr = "hello"

function processData(input) {
    let inputCopy = input.split('\n').slice(1);
    console.log(inputCopy)
    inputCopy.forEach((str) => {
        let evenArr = []
        let oddArr = []
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 1) {
                oddArr.push(str[i])
            } else if (i % 1 !== 1) {
                evenArr.push(str[i])
            }
        }
        console.log(`${evenArr} ${oddArr}`)
    });
}

processData(processDataArr)

// ** Time Conversion ** //

const standardTime = "12:00:00AM"

function timeConversion(s) {
    let AMPM = s.slice(-2);
    let militaryTime = s.slice(0, -2).split(':')
    console.log(AMPM)
    console.log(militaryTime)
    if (AMPM === "AM" && militaryTime[0] === "12") {
        militaryTime[0] = "00"
    } else {
        militaryTime[0] = (militaryTime[0] % 12) + 12
    }
    return militaryTime.join(":")

}

console.log(timeConversion(standardTime))

// ** DAY 7: ARRAYS ** // 

const reverseArr = [1, 2, 3, 4]

function reverseArray(arr) {
    var reversed = arr.reverse().join(' ')
    console.log(reversed)
}

reverseArray(reverseArr)

// ** DAY 8: Dictionaries and Maps **//

function processData(input) {
    input = input.split('\n')
    var N = parseInt(input[0])

    var phonebook = []
    for (var k = 0; k < N; k++) {
        var line = input[k + 1]
        line = line.split(' ')
        phonebook[line[0]] = line[1]
    }

    for (var k = N + 1; k < input.length; k++) {
        var num = (phonebook[input[k]])
        if (num !== undefined) {
            console.log(input[k] + '=' + num)
        } else {
            console.log('Not found')
        }
    }

}


// ** Grading Students ** //

const gradesArr = [47, 45, 68, 52, 32, 88, 91]

function gradingStudents(grades) {
    let finalGrades = []

    for (let i = 0; i < grades.length; i++) {
        let roundedGrade = Math.ceil(grades[i] / 5) * 5
        if (grades[i] > 37 && roundedGrade - grades[i] < 3) {
            finalGrades.push(roundedGrade)
        } else {
            finalGrades.push(grades[i])
        }
    }
    return finalGrades.map((n) => {
        console.log(n);
    })


}



gradingStudents(gradesArr)


// ** Day 9: Recursion 3 ** //

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }

}

factorial(3)

// ** Apple and Orange ** //

const appleArr = [2, 3, -4]
const orangeArr = [3, -2, -4]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleinRangeCount = 0
    let orangesinRangeCount = 0
    apples.map((arr) => {
        if (arr + a <= t && arr + a >= s) {
            appleinRangeCount++;
        }
    });

    oranges.map((arr) => {
        if (arr + b <= t && arr + b >= s) {
            orangesinRangeCount++;
        }
    });

    console.log(appleinRangeCount)
    console.log(orangesinRangeCount)
}

countApplesAndOranges(7, 10, 4, 12, appleArr, orangeArr)

// ** Day 10: Binary Numbers ** //


function main(n) {

    let finalTally = [];
    let baseTwoIntArr = []
    let baseTwoInt = (n.toString(2))
    let baseTwoIntSplit = baseTwoInt.split('0')
    baseTwoIntSplit.map((x) => {
        baseTwoIntArr.push((x))
    })
    finalTally = baseTwoIntArr.sort(function (a, b) { return b - a })
    console.log(finalTally[0].length)





}

main(14)

// ** Kangaroo ** // 

function kangaroo(x1, v1, x2, v2) {
    return (!(x2 > x1 && v2 > v1) && !(x2 < x1 && v2 < v1) && ((x1 - x2) % (v2 - v1) === 0)) ? 'YES' : 'NO';
}

console.log(kangaroo(3, 2, 6, 4))

// ** 2D array practice** // 

let twoDArrOne = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]
let twoDArrTwo = [2, 4]
let twoDArrThree = [3, 6]

function twoDArray(arrOne) {
    let count = 0;
    for (i = 0; i < arrOne.length; i++) {
        for (j = 0; j < arrOne[i].length; j++) {
            console.log(arrOne[i][j])
        }
    }
}

twoDArray(twoDArrOne)

// ** Day 11: 2D Arrays **//
// TO BE CONTINUED //

// ** Day 12: Day 12: Inheritance ** //

class Tester {
    constructor(firstName, lastName, id, scores) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.scores = scores
    }
}


class Student extends Tester {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores
    }


    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let avg_score = this.scores.reduce(getSum) / this.scores.length
        if (avg_score >= 90) {
            return 'O'
        } else if (avg_score >= 80) {
            return 'E'
        } else if (avg_score >= 70) {
            return 'A'
        } else if (avg_score >= 55) {
            return 'P'
        } else if (avg_score >= 40) {
            return 'D'
        } else {
            return 'T'
        }
    }
}

function getSum(total, num) {
    return total + num
}



const Brandon = new Student("Brandon", "Harris", 89248942, [100, 29, 58, 20])
Brandon.calculate();


// Constructor Test // 
class TestConstructor {
    constructor(testOne, testTwo) {
        this.testOne = testOne;
        this.testTwo = testTwo;
        this.isTestOneTrue = function () {
            if (testOne && testTwo) {
                console.log("Both conditions are true");
            }
            else if (testOne || testTwo) {
                console.log("One condition true");
            }
            else {
                console.log("Neither condition is true");
            }
        };
    }
}



var testConstOne = new TestConstructor(true, true)
var testConstTwo = new TestConstructor(false, true)
var testConstThree = new TestConstructor(false, false)

testConstOne.isTestOneTrue();
testConstTwo.isTestOneTrue();
testConstThree.isTestOneTrue();

// ** ES6 Javascript Constructor Test using Super and Extends ** //

class Dog extends TestConstructor {
    constructor(testOne, testTwo) {
        super(testOne, testTwo);
    }
    dogName() {
        console.log(`this dog's name is ${this.testOne}`)
    }

    dogRan() {
        console.log(`${this.testOne} likes to ${this.testTwo}`)
    }
}

const dog = new Dog("Fred", "Eat")

dog.dogName();
dog.dogRan();

// ** Day 13: Abstract Classes **// 

class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price

    }
}

class MyBook extends Book {
    constructor(title, author, price) {
        super(title, author, price);
    }
    display() {
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Price: ${this.price}`)
    }
}

const BookOne = new MyBook("Atlas Shrugged", "Ayd Rand", "$9.99")
BookOne.display();

// ** Daily Interview Pro Question 1 ** //

let numFindArr = [5, 2, 5, 6, 2, 3]

function numberFind(arr, k) {

    let result = false;
    for (var i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result = arr[i] + arr[j] == k;
            console.log(`${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`);
            if (result) {
                break;
            }
        }
        return result;
    }
}

console.log(numberFind(numFindArr, 7))


// ** Day 14: Scope ** 

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }

}



n1 = new Node("Node 1")

console.log(n1)

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertLast(data) {
        let node = new Node(data);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const nodeLast = new LinkedList();

nodeLast.insertLast("nodeOne")
nodeLast.insertLast("nodeTwo")
nodeLast.insertLast("nodeThree")

nodeLast.printListData();

// ** Day 16: Exceptions - String to Integer ** // 

function stringToInt(s) {
    let n = parseInt(s)
    console.log(n)
    if (!isNaN(n)) {
        return n
    } else {
        console.log("Bad boy")
    }
}

stringToInt("")

function stringToIntAlt(s) {
    let n = parseInt(s)
    try {
        !isNaN(n)
        console.log(n)
    }
    catch (err) {
        console.log('Bad String')
    }
}

stringToIntAlt("jksafjksaf")

class Calculator {
    constructor(n, p) {
        this.n = n
        this.p = p
    }

    power() {
        if (this.n < 0 || this.p < 0) {
            return "neither n or p can be a negative integer"
        } else {
            return Math.pow(this.n, this.p)
        }

    }
}

const calcOne = new Calculator(5, 2)

console.log(calcOne.power())

// ** Day 18: Queues and Stacks ** //

let stringOne = "hello"

class StackQueue {
    constructor() {
        this.arrOne =  []
        this.arrTwo = []
    }
    push(item) {
        this.arrOne.push(item);
        this.arrTwo.push(item); 
    }
    dequeue() {
            return this.arrOne.shift();
    }
    pop() {
        return this.arrTwo.pop();
    }
    isEmpty() {
        return this.arrOne.length == 0;
    }

}

const stackQueueOne = new StackQueue()

stackQueueOne.push(stringOne)
console.log(stackQueueOne.arrOne)
console.log(stackQueueOne.dequeue())
console.log(stackQueueOne.pop()) 




function Solution(){
    let stack = [],
        queue = [];

    this.pushCharacter = ((a) => { return stack.push(a) });
    this.enqueueCharacter = ((b) => { return queue.push(b) });
    this.popCharacter = (() => { return stack.pop() });
    this.dequeueCharacter = (() => { return queue.shift() });
}


// ** Day 25: Running Time and Complexity ** // 

function primeFinder(num){
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return "Not prime";
        }
    }
    if (num > 1){
        return "Prime"
    };
}

console.log(primeFinder(2))

// ** PROTOTYPAL INHERITANCE ** // 

let car = function(model, mileage){
    this.model = model
    this.mileage = mileage
}

car.prototype.getCarInfo = function (){
    let carInfo = [this.model, this.mileage]
    return carInfo
}

let Nissan = new car("Nissan", 29241)
let Maserati = new car("Maserati", 53323)
console.log(Nissan.getCarInfo())
console.log(Maserati.getCarInfo())

function consoleLog(Param){
    console.log(Param)
}


function callBackFunction (paramOne, paramTwo, CB){
    let sum = paramOne + paramTwo
    CB(sum)
}

let callBackFunctionParam = function (param){
    console.log(param)
}

callBackFunction(10,15,callBackFunctionParam)

// ** Day 26: Nested Logic ** //

function processData(input) {
     const lines = input.split("\n")
   console.log(input)
} 

processData('09042019')

// Extra Long Factorials //

function extraLongFactorials(n) {
    let num = 1
    let count
    for (count = n; count > 1; count--){
        num *= count
    }
  return num 
  }
  
console.log(extraLongFactorials(25));



