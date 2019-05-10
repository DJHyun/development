const URL = "http://13.125.249.144:8080/ssafy/seoul/3/posts"
const XHR = new XMLHttpRequest()
const post = JSON.stringify({
	"post":{
		"title": "Sample POST reqeust",
		"content": "Send this request via XMLHTTPRequest",
		"author": "Master Tester"
	}
})
XHR.open('POST', URL);
XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
XHR.send(post)
XHR.addEventListener('load', e => {
    const rawData = e.target.response;
    // rawdata 를 콘솔에 출력한다.
    console.log(rawData)
})