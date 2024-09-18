// Promises is a solution of callback hell. Promises is a "promise of code excution". The code either excute or fails in both case the client will be notified 

// Done some tasks in parallely in promises

// let promise = new Promise(function (resolve, reject){
//     // alert("Hello Boi! this promise")
//     alert("Adi")
//     resolve(77)
// })

// console.log("Boi! One");

// setTimeout(function (){
//     console.log("Boi! Two");
// }, 2000)

// console.log("Boi! Three");
// console.log(promise);

// let pro = new Promise ((resolve, reject)=>{
//     console.log("Promise is padding");
//     setTimeout(()=>{
//         console.log("Hello Boi! this promise");
//     }, 7000)
// })


// const cart = ["Shoes", "Kurta", "Watche", "Toy"]

// createOrder = (cart, (orderId)=>{
//     proceedToPayment(orderId)
// })

// // Using promises
// const prom = createOrder(cart)
// prom.then((orderId)=>{
//     proceedToPayment(orderId)
// })


// const GIT_ACC = "https://api.github.com/users/Aditiyasingh07"

// const user = fetch(GIT_ACC)

// console.log(user);

// user.then((data)=>{
//     console.log(data);
// })



const cart = ["Shoes", "Kurta", "Watche", "Toy"]

createOrder = (cart, (orderId)=>{
    proceedToPayment(orderId, ()=>{
        showOrderSummary(paymentInfo, ()=>{
            updateWalletBalance()
        })
    })
})

// Use promises chaing
createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo)=> showOrderSummary(paymentInfo))
.then((paymentInfo)=>updateWalletBalance(paymentInfo))
