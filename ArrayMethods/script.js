
// forEach()
// The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array. It takes a callback function as an argument and applies it to each element of the array.

// const num = [4,5,8,9,5,4,23,1]
// num.forEach((items, index, valu)=>{
//     console.log(items , index , valu);
// })
// let sumofnum = 0
// num.forEach((items)=>{
//     sumofnum+= items
// })
// console.log(sumofnum);


// const letter = ['a', 'b', 'a', 'c', 'b', 'd', 'c', 'a']

// let count = {}

// letter.forEach((items)=>{
//     if (count[items]) {
//         count[items]++
//     }
//     else[
//         count[items] = 1
//     ]
// })
// console.log(count);


// function showNums(items, index, valu) {
//     console.log(items , index , valu);    
// }



// map()
// In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.

// const nums = [2,3,4,5,6,7]
// const products = [
//     {
//         name: "t-shirts",
//         prize: 300,
//         count: 10
//     },
//     {
//         name: "pents",
//         prize: 500,
//         count: 12
//     },
//     {
//         name: "watches",
//         prize: 200,
//         count: 5
//     }
// ]
// const doubleNums = products.map((item)=>{
//     return item.prize*item.count
// })
// function dub(value, index, arr) {
//     return value*2
// }
// function muldub(value, index, arr) {
//     return value*index
// }

// console.log(doubleNums);

// const totalproductvalue = products.map(item =>({
//     name: item.name,
//     totalvalueofproducts: item.prize*item.count     
// }))
// console.log(totalproductvalue);


// change srting into number
// const str = ['1', '2', '3', '4', '5', '6']

// const number = str.map(Number)

// console.log(number);
// console.log(str);

// console.log(typeof str);
// console.log(typeof number);


// filter()
// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

// const num = [1,2,3,4,5,6,7,8]

// const even = num.filter(isEven)

// function isEven(value) {
//     return value % 2 === 0 
// }
// const odd = num.filter(isOdd)

// function isOdd(value) {
//     return value % 2 != 0 
// }

// console.log(odd);


// const people = [
//     {
//         name: 'John',
//         age: 21
//     },
//     {
//         name: 'shown',
//         age: 15
//     },
//     {
//         name: 'johnny',
//         age: 22
//     },
//     {
//         name: 'Naruto',
//         age: 18
//     }
// ]

// const adults = people.filter((people)=>{
//     return people.age >= 18
// })

// console.log(adults);

// const number = [1,2,3,2,1,4,5,6,3,4,8,9]

// const nums = number.filter((value, index, arr)=>{
//     return arr.indexOf(value) === index
// })

// console.log(nums);



// reduce()
// The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.

// const number = [1,2,3,4,5,6,7,8]

// const sumofnum = number.reduce(sum, 0)

// function sum(accumulator, value) {
//     return accumulator + value
// }

// console.log(sumofnum);

// const letter = ['H','A','P','P','Y']

// const sumofletter = letter.reduce(sum)

// function sum(accumulator, value) {
//     return accumulator + value
// }

// console.log(sumofletter);



// const number = [1,2,3,4,5,6,7,8]

// const maxnum = number.reduce(max, -Infinity)

// function max(accumulator, value) {
//     if (accumulator > value) {
//         return accumulator
//     }
//     else{
//         return value
//     }
// }

// console.log(maxnum);


// const products = [
//     {
//         name: "t-shirts",
//         prize: 300,
//         count: 10
//     },
//     {
//         name: "pents",
//         prize: 500,
//         count: 12
//     },
//     {
//         name: "watches",
//         prize: 200,
//         count: 5
//     }
// ]

// const totalvalue = products.reduce((acc, items)=>{
//     return acc + items.prize * items.count
// },0)

// console.log(totalvalue);


// slice()
// The slice() method in JavaScript returns a portion of an array into a new array. It provides a way to copy an array without modifying its original values.

// const num = [1,2,3,4,5,6,7,8]

// const numtwo = num.slice(2, 5)
// const numthree = num.slice(-4)
// const numfour = num.slice(2)

// console.log(numtwo);
// console.log(numthree);
// console.log(numfour);

// const studs = ["Sem", "John", "Lucky", "Sasuke", "Minato"]

// const winners = studs.slice(0, 4)

// console.log(winners);



// splice()
// In JavaScript, splice() is a method that can be used to change the contents of an array by removing or replacing existing elements and/or adding new elements. 

const num = [1,2,3,4,5,6,7,8,9]

// num.splice(3, 4)
const deletenum = num.splice(3, 4, 10, 11, 12)

console.log(num);
console.log(deletenum);

