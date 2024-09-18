
/* 
settle means resolve or reject

resolve means promise has settled successfully
reject means promise has not settled successfully
*/


// async function getData () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(307);
//         }, 5500)
//     })
// }


async function getData () {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()      
    console.log(data);
}



async function main() {
    console.log("First log");

    console.log("Second log");

    console.log("Third log");

    console.log("Load Data ");

    let Data = await getData()

    console.log(Data);

    console.log("process data");

    console.log("Start Task 2");
        
}

main()

// Data.then((v)=>{
//     console.log(Data);
//     console.log("Process Data");
//     console.log(v);
    
// })



