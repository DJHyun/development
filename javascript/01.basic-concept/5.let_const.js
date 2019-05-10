let name = 'name' // 변수 : 재할당이 가능함
name = 'json'
console.log(name)

const gender = 'man'// 상수 : 변하지 않음
// gender = 'woman'
// console.log(gender)

function test(){
    const color = 'red'
    car = 'asdf'
    if (true){
        console.log(color)
        let car = '소나타'
    }
    console.log(car)
}


test()

console.log(car)