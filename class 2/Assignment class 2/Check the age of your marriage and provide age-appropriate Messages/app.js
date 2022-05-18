
let name = prompt('Your name please?')
let age = prompt('Your age please?')



if(age>=21){
    console.log(`Hi ${name} ,You can marry.`)
}else{
    console.log(`Hi ${name} ,You are not able to marry.You have to wait ${ 21 - age}, Year.`)
}
