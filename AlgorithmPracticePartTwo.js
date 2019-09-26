// ** Code Wars Movie Theater Seat Problem ** //

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let arrTwo = [1, 3, 5]

let movieTheaterSeat = (nCols, nRows, col, row) => {
    return (nCols - col + 1) * (nRows - row);

};
console.log(movieTheaterSeat(16, 11, 3, 2))

// ** Code Wars Maskify Problem ** //

// function maskify(str) {   
//     for (var i = 0; i < str.length; i++) {
//         console.log(str.charAt(i));
//       }

// }

// maskify(2424)

// ** Robin Healthcare interview coding challenge  ** //

let ArrOne = [1, 3, 4, 5, 6, 8, 10, 11, 13]
let SumOne = 14
let ArrTwo = [1,2,3,4,5]
let SumTwo = 4
let ArrThree = [2,34,5,6,8,343,6,34,6,23,23,432]
let SumThree = 8

let sumEqual = (Arr, X) => {
    let sumArr = []  
    for (let i = 0; i < Arr.length; i++) {  
        for (let j = i + 1; j < Arr.length; j++) {  
            if (Arr[i] + Arr[j] === X) {  
                sumArr.push([i],[j]) 
            }
        }
    }
    return sumArr 
}

console.log(sumEqual(ArrOne, SumOne))

// ** CODE BREAK DOWN ** // 
// ** empty array that will hold the array index pair values whose sum equals the value of X ** //
// ** first loop that starts at the first index[0] of the Arr array ** //
// ** second loop that starts at the second index[1] of the Arr array ** //
// ** Conditional statement that checks if the sum of two different index values in Arr Array equal the value of X**//
//** if any of the compared index value sums equal the value of x, the indices are pushed into the sumArr array   **//
//** Once all the loops are run through and index values pushed to the sumArr array, the sumArr array is returned */



// ** Rules of Divisibility ** // 
function thirt (num) {
    const sequence=[1,10,9,12,3,4]
    
        if (num.length > 6){
            let adjustedArr = (num.reduce((a, b) => a + b)
            )
            console.log(adjustedArr)
            String()
            for(let i = 0; i < adjustedArr.length; i ++){
                for( let j = 0; j < sequence.length; j ++){
                    console.log(`${adjustedArr[i]} / ${sequence[j]}`)
                }
            }
        }else {
            
        }

    }
    



let arr  = [3,5,3,3,5,5,6,3]

thirt (arr)

// ** Spin Words ** //

// ** MY SOLUTION ** // 

function spinWords(words){
   let sliced = words.split(" ")
   let randomSliceIndex = Math.floor(Math.random() * sliced.length)
   let slicedString = sliced[randomSliceIndex].split("");
   let reversedString = slicedString.reverse()
   let joinString = reversedString.join().replace(/,/g, ""); 
// 
    sliced[randomSliceIndex] = joinString

    return finalSliced = sliced.join().replace(/,/g, " "); 

//    console.log(randomSliceIndex)
//    console.log(slicedString)
//    console.log(finalSliced)
   
   
  }


// ** MORE ELEGANT SOLUTION ** //

function spinWords(word){
  
    let wordArr = word.split(' ')
    console.log(wordArr)
    
    const reverseString = (string) => {
      return string.split("").reverse().join("")
    }
    
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i].length >= 5) {
        const word = wordArr[i]
        wordArr[i] = reverseString(word)
      }
    }
    
    return wordArr.join(' ')
  }

  console.log(spinWords("I think I got it right"))