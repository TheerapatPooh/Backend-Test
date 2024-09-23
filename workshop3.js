function formatArray(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if(typeof value === 'string') {
            for (let j = 0; j < value.length; j++) {
                let num = parseInt(value[j])
                if(!isNaN(num)) {
                    newArray.push(num)
                }
            }
        }
        else if(typeof value === 'number') {
            newArray.push(value)
        }
    }
    return newArray
}

function binaryConvert(binary) {
    return parseInt(binary.replace(/\s/g,''), 2)
}

function intConvert(int) {
    return (int >>> 0).toString(2)
}
//#1
function sumArray(arr) {
    const formatArr = formatArray(arr)
    let sum = 0
    for (let i = 0; i < formatArr.length; i++) {
        sum += formatArr[i]
    }
    console.log("Sum Of Array: " + sum)
}
//#2
function swappedPosition(arr, postion1, postion2) {
    if (arr.length >= postion1 && arr.length >= postion2 && postion1 >= 0 && postion2 >= 0) {
        let temp = arr[postion1]
        arr[postion1] = arr[postion2]
        arr[postion2] = temp
        console.log("New Array: " + arr)
    }
}
//#3
function compareScore(score1, score2) {
    let totalScore1 = 0
    let totalScore2 = 0
    if(score1.length === score2.length) {
        for (let i = 0; i < score1.length; i++) {
            if(score1[i] > score2[i]) {
                totalScore1 += 1
            }
            else if(score1[i] < score2[i]) {
                totalScore2 += 1
            }      
        }
        console.log("Total Score: " + [totalScore1, totalScore2])
    }
    console.log('Invalid Value')
}
//#4
function sumMinAndMax(arr) {
    let max = Math.max(...formatArray(arr))
    let min = Math.min(...formatArray(arr))
    console.log("Sum Max and Min : " + (max + min) )
}
//#5
function rotation(arr, round) {
    for (let i = 0; i < round; i++) {
        arr.unshift(arr.pop())
    }
    console.log('New Array: ' + arr)
}

function findMax(arr) {
    const formatArr = formatArray(arr)
    let maxValue = Math.max(...formatArr)
    console.log('Max Value: ' + maxValue)
}


function sortArray(arr, order = 'ac') {
    let formatArr = formatArray(arr)
    if(order === 'asc') {
        const sort = formatArr.sort((a,b) => a-b)
        console.log('Sort Array : ' + sort)
    }
    else {
        const sort = formatArr.sort((a,b) => b-a)
        console.log('Sort Array: ' + sort)
    }
}




let arr = [3,5,5,1,2]
let student = ['Mhee', 'Est', 'Art']
let Alice = [1,2,3]
let Bob = [7,1,3]
let array = [1,2,3,4,5]
// compareScore(Alice,Bob)
// sumArray(arr)
// sumMinAndMax(arr)
// rotation(array,3)
// findMax(arr)
// sortArray(arr)
// swappedPosition(student,1,0)

console.log(intConvert(128))
console.log(binaryConvert('1000 0000'))