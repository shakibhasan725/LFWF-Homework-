//------------------ Email pattern ------------------------------//
//--------------------------------------------------------------//
console.log('-------------------Email pattern-------------------------------');
let email = "sakib082249@gmail.com";

let pettern = /^[a-z0-9_.]*@[a-z]{2,7}\.[a-z]{2,6}$/;
console.log(pettern.test(email));

//------------------ Email pattern ------------------------------//
//------------------------------- ------------------------------//
//-------------------Username pattern---------------------------//
//------------------------------- ------------------------------//
console.log('-------------------username pattern-------------------------------');
let user = "sakibhasan_72";

let pattern = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
console.log(pattern.test(user));



//--------------------------------------------------------------//
//-------------------Username pattern---------------------------//
//-------------------Bangladeshi phone number pattern---------------------------//
console.log('-------Bangladeshi phone number pattern----------------------');
let phone = "+8801734214000";

let pttern = /^\+8801|01[0-9]{9}$/;
console.log(pttern.test(phone));
//---------------------------------------------------------------------//
//-----------------------password pattern -----------------------------//
console.log('----------------Password Pattern----------------------');
let pass = "SaKiB45#@%";

let ptern = /^[a-zA-z0-9*&%$#@!]{8,}$/;
console.log(ptern.test(pass));

//-----------------------password pattern -----------------------------//
//---------------------------------------------------------------------//
//-----------------------Zipcode pattern -----------------------------//
//---------------------------------------------------------------------//
console.log('-------------------------Zipcode Pattern--------------');
let zip = "5810";

let ptrn = /^[0-9]{4}$/;
console.log(ptrn.test(zip));
//-----------------------Zipcode pattern -----------------------------//
