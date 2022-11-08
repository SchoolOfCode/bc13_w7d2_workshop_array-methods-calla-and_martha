let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const three = 3
const five = 5
const sixty = 60
const ninety = 90

let niceNumbers = someNumbers.some(function(number) {
    if (number % 3 === 0) {
        return three
    } if (number % 5 === 0) {
        return five 
    } if (number % 60 === 0) {
        return sixty
    } if (number % 90 === 0) {
        return ninety
    }
})

console.log(niceNumbers)