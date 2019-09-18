// ** Bubble Sort Practice ** // 

const bubbleSortArr = [5,2,-3,2,6,8,10]

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

console.log(bubbleSort(bubbleSortArr))

//** Ascending Order Function **//

const unsortedArr = [1,3,6,9]

let ascendingArr = (arr) => {
    let ascArr = true 
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > arr[i + 1]){
            ascArr = false;
           

        } 
    }
    return ascArr
}

console.log(ascendingArr(unsortedArr))