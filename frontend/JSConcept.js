

let user =[
    { name: "john", city: "mumbai"},
    { name: "Sam", city: "Pune"},
    { name: "Danny", city: "mumbai"}

]
// console.log(user)

function getData(){
    setTimeout(() => {
 let op ="";
 user.forEach((data,index)=>
 op  += `<li>${data.name}</li>`
)
document.body.innerHTML=op
    }, 1000);
}
// getData()

// function insertdata(data){
//     setTimeout(() => {
//        user.push(data)
//     }, 4000);
// }

// insertdata({name:'Dipak', city: "pune"})
//-------------------------------------------------------------
// function insertdata(data,callback){
//     setTimeout(() => {
//         user.push(data);
//         callback()
//     }, 2000);
// }

// insertdata({name: 'Dipak', city: "Pune"},getdata)
//================================================================

function insertadata(data){
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            user.push(data)
            let err=false;

            if(!err) {
                resolve();
            }
            else {
                reject('something went wring')
            }
        },3000)
    })
}

insertadata({ name:"Dipak",city:"Pune"}).then(getData)