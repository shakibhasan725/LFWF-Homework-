let name = prompt('Your name please?')
let marks = prompt('Your marks please?')

if ( marks >= 0  && marks <= 32 ){
    console.log(`Hi ${name}, You have got F and your GPPA is 0.00`)
}else if (marks >= 33 && marks < 40){
    console.log(`Hi ${name}, You have got D and your GPPA is 1.00`)
}else if ( marks >= 40 && marks < 50 ){
    console.log(`Hi ${name}, You have got c and your GPPA is 2.00`)
}else if( marks >= 50 && marks < 60 ){
    console.log(`Hi ${name}, You have got B and your GPPA is 3.00`)
}else if( marks >= 60 && marks < 70 ){
    console.log(`Hi ${name}, You have got A- and your GPPA is 3.5 `)
}else if( marks >= 70 && marks < 80 ){
    console.log(`Hi ${name}, You have got A and your GPPA is 4.00`)
}else if( marks >= 80 && marks <= 100 ){
    console.log(`Hi ${name}, You have got A+ and your GPPA is 5.00`)
}else {
    console.log(`Hi ${name}, You have got invalid result`)
}