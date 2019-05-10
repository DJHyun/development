// userAxios.js

// 1. 나는 뭘 했음 // Implement login logic // 동사
// 2. blank
// 3. Install module ...
// ~

// fetch , XMLHttpRequest 대신에 -> axios 사용
// const URL = 'https://dog.ceo/api/breeds/image/random'
// axios.get(URL) // AJAX CALL -> promise를 return함
//     .then(response => {
//         const imageURL = response.data.message
//         const imageBox = document.querySelector('#img-div')
//         const image = document.createElement('img')
//         image.src = imageURL
//         imageBox.appendChild(image)
//     })

// 위 코드를 async-await로 바꾸기
const URL = 'https://dog.ceo/api/breeds/image/random'
const getData = async () => {
    const response = await axios.get(URL)//데이터를 불러온다
    const imageURL = response.data.message

    const imageBox = document.querySelector('#img-div')
    const image = document.createElement('img')
    image.src = imageURL
    imageBox.appendChild(image)
}

for (i = 0; i < 999; i++) {
    getData()
}