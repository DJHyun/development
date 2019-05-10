// 3.promise.js
// 다 만들면 커피를 줄게라는 약속을 할거임
// 중간에 무슨일이 생기면 알려줄거임


// resolve에 성공시 넘겨줄 객체
// reject에 무슨일이 생길시 발생시킬 에러를 담음
const orderCoffee = (order) => new Promise((resolve, reject) => {
    let coffee

    setTimeout(() => {
        // 다 만들면 coffee를 넘겨줄게
        if (order === undefined) {
            reject('손님 주문 안하셨는데요?')
        }
        coffee = order
        resolve(coffee)
    }, 1000);
})

orderCoffee('Americano')
    .then((coffee) => {// 그리고 
        console.log(`${coffee} 잘 마실게요!`)
    })
    .catch((error) => {
        console.log(error)
    })

// promise chinning
orderCoffee('Americano') // Promise
    .then((coffee) => {
        console.log(coffee)
        return orderCoffee('Latte')
    }) // Promise 새롭게 만들수 있음
    .then(coffee => {
        console.log(coffee)
        console.log("여기서 끝 ?")
    }) // 순차적으로 실행
    .then(coffee => {
        console.log(coffee)
    })

const XHR = new XMLHttpRequest()
const URL = 'http://koreanjson.com/posts/1'

XHR.open('GET', URL)
XHR.send()

XHR.addEventListener('load', (event) => {
    const rawData = event.target.response
    const parsedData = JSON.parse(rawData)
    console.log(parsedData)
})

const URL = 'https://koreanjson.com/posts/1'
fetch(URL)
    .then((response) => { //응답 결과를 Object로 parsing
        return response.json()
    })
    .then((object) => {
        console.log(object)
    })