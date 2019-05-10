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

const getCoffee = async () => {
    const coffee = await orderCoffee('Americano')
    console.log(coffee) // Americano
}

getCoffee()

const getData = async () => {
    const URL = 'https://koreanjson.com/posts/1'
    const response = await fetch(URL)//데이터를 불러온다
    const data = await response.json()//파싱하겠다
    console.log(data)
}
getData()