// //Variable
// var x = 10
// let y = 20
// const z = 30

// //Data Type
// let num = 100 //number
// let str = "Hello" //String
// let bool = true //Boolean
// let arr = [1,2,3] //Array
// let obj = { name: "John Doe", age: 30 } //Object 

//  //Construture
// if(x > 5){
//     console.log("x มากกว่า 5")
// } else if(x === 5) {
//     console.log("x เท่ากับ 5")
// } else {
//     console.log("x น้อยกว่า 5")
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }

// function greet(name) {
//     return "Hello, "+ name
// }
// console.log(greet("Nine"))

// // const greet = (name) => {
// //     return "Hello, "+ name
// // }
// // console.log(greet("Art"))

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
//     email: "johndoe@email.com",
//     fullName: function() {
//         return this.firstName + " " + this.lastName
//     }
// }

// let numbers = [1,"2",2,"4",3,4,"3",5]
// console.log("Nember: ",numbers)
// let filtered = numbers.filter(n => n > 2 & typeof n === "string")
// console.log("Filter: ",filtered)


// // let month = ["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
// // console.log(filtered)

// // try {
// //     let result = greet("Art")
// // } catch (error) {
// //     console.log(error)
// // }

function fahrenheitToCelsius(fahrenheit) {
    console.log("Farenheit: "+fahrenheit+" Celcius: "+(fahrenheit-32) * 5/9) 
    console.log("---------- #1 ----------")
}

function oddEven(number) {
    if (number % 2 === 0) {
        console.log("This Number is Even")  
        console.log("---------- #2 ----------")
    } else {
        console.log("This Number is Odd")
        console.log("---------- #2 ----------")  
    }
}

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log("Sum of Array "+arr+" = "+sum)
    console.log("---------- #3 ----------")  
}

function sortMintoMax(arr) {
    console.log("Sort of Array "+arr+" = "+arr.sort((a,b) => a-b)) 
    console.log("---------- #4 ----------") 
}

function pyramid(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i)
        numbers = ''
        let num = 2 * i - 1
        for (let j = 1; j <= num; j++) {
            numbers += j
        }
        console.log(spaces + numbers) 
    }
    console.log("---------- #5 ----------")
}

let arr = [4,24,5,155,7]
fahrenheitToCelsius(100)
oddEven(3)
sumArray(arr)
sortMintoMax(arr)
pyramid(5)