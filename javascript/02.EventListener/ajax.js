// AJAX(Asynchronous(비동기) Javascript and XML)
// 화면이 변하지 않고 요청을 수행하는 방법
// XHR(XMLHttpRequest) => 모든 브라우저에 built in 되어있는 객체(node에서는 사용 X)
// fetch => ES6 이후로 나온 ajax 함수

const XHR = new XMLHttpRequest()
const URL = 'https://www.koreanjson.com/posts/1'

XHR.open('GET',URL)
XHR.send()

XHR.addEventListener('load', event => {
    const rawData = event.target.response
    const parseData = JSON.parse(rawData)

    console.log(parseData.content)
}) // 요청이 끝났을 때