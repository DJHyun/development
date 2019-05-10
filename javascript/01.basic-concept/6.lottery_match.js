const luckyNumber = [5, 7, 32, 2, 36, 26]
const _ = require('lodash')

function match() {
    let count = 0
    while (count.) {
        
        let count = 0
        const numbers = _.range(1, 46)
        const picks = _.sampleSize(numbers, 6)// 6개의 랜덤 번호 = > 배열
        
        for (num of luckyNumber) {
            if (_.includes(picks, num)) {
                count = count + 1
            }
        }
        if (count >= 6){
            console.log(count)
        }
    }
}

match()