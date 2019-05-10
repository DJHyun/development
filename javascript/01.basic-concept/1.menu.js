var _ = require('lodash')
var menus = ["짜장면","짬뽕","볶음밥"] // Array 배열

var pick = _.sample(menus)
console.log(`오늘의 메뉴는 ${pick}`) // String 안에 변수를 넣고 싶을 때