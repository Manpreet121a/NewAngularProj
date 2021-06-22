const one = () => { return "This is first"};

const two = () => { 

    setTimeout(() =>{
     return "I am two";
     
    },3000);
}

const tres = () => {

    return " I am three";
}


const callMe = () =>{
let valone = one();
console.log(valone);

let valtwo = two();
console.log(valtwo);

let valthree = tres();
console.log(valthree);

}

