// 1.callback.js

// addEventListener('load', (event) =>{

// })

const numbers = [4,5,6]

const sum = (a, b) => {
    return a + b
}

const log = (str) => {
    return console.log(str)
}

// 숫자로 된 배열을 받아서 모두 더함
const numbersAddEach = (numbers) => { // [1,2,3]
    let sum = 0
    for (const number of numbers) {
        sum += number
    }
    return sum
}

// 숫자로 된 배열을 받아서 모두 뺌
const numberSubEach = (numbers) => {
    let sum = 0
    for (const number of numbers) {
        sum -= number
    }
    return sum
}

// 숫자로 된 배열을 받아서 모두 곱함
const numberMulEach = (numbers) => {
    let sum = 1
    for (const number of numbers) {
        sum *= number
    }
    return sum
}

const numbersEach = (numbers, callback) => {
    for (const number of numbers) {
        callback(number)
    }
}

let check = 0
numbersEach(numbers, (number) =>{
    check += number
})

log(check)
log('------------------------')

let check_two = 0
// ES6 이후로 도입된 Array Helper Method
numbers.forEach((number) => {
    check_two += number
})

log(check_two)






