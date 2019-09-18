// ** Code Wars Movie Theater Seat Problem ** //

let arrOne = [1,2,3,4,5,6,7,8,9,10,11]

let arrTwo = [1,3,5]

let movieTheaterSeat = (nCols, nRows, col, row ) =>{
    return (nCols - col + 1) * (nRows - row);
    
};
console.log(movieTheaterSeat(16, 11, 3, 2))