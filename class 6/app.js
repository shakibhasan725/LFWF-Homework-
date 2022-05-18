const student_data = [
    ['Shakib','1','18','12','Male','bogura',1800],
    ['Rakib','2','30','14','Male','bogura',1800],
    ['Rejoan','3','18','14','Male','bogura',1400],
    ['jenith','12','18','14','Female','bogura',1300],
    ['sumaiya','13','18','5','Female','bogura',1100],
    ['Rifa','1','184','5','Female','bogura',1800],
    ['Mushrat','11','18','12','Female','bogura',1400],
    ['shadhin','13','18','12','Male','bogura',1600],
    ['nasim','13','18','5','Male','bogura',1000],
    ['sumn','111','18','5','Female','sylhet',1400],
    ['badal','133','3','12','Male','bogura',1600],
    ['robbani','111','15','12','Male','bogura',1400],
    ['julie','111','18','12','Female','sylhet',1300],
    ['rifat','1123','13','12','Male','sylhet',1600],
    ['mokaber','1113','18','12','Male','bogura',1900],
    ['rasel','111','18','5','Male','bogura',1100],
    ['fiza','133','5','12','Male','bogura',1000],
    ['amrin','1113','18','12','Male','bogura',1200],
    ['jobayer','1132','18','12','Male','bogura',1300],
    ['nishat','121','18','5','Female','bogura',1100],
    ['modina','1123','18','12','Female','bogura',150],
    ['yesmin','131','8','12','Female','sylhet',1100],
    ['shuihab','1312','15','12','Male','bogura',1200],
    ['soabin','113','18','5','Male','bogura',160],
    ['Ssfdd','1132','17','12','Male','bogura',500],
    ['Sikdar','1321','25','12','Male','bogura',1200],
    ['Afab','1312','21','12','Male','bogura',1820],
    ['dun','1213','1','12','Male','bogura',1100],
    ['shhariar','1321','18','12','Male','bogura',1400],

]
//-------------------------------total admission fees --------------------------//
let admission_fees = 0;
student_data.sort().map((data, index) => {
    admission_fees+= +data[6]

});
console.log(`
    Total admission fees = ${admission_fees}
-----------------------------------------------------------------------
`); 

//------------------------------------All female students ------------------------------//

let female_student=0;
console.log(`-------------------- All Female Student -------------`);
student_data.sort().map((data, index) => {
    
    if( data[4] == 'Female'){
        console.log(`
  
        Name: ${data[0]};
        Roll: ${data[1]};
        Class: ${data[2]};
        Gender: ${data[4]};
        `);
        female_student++
    }
    

})
console.log(` Total Female student = ${female_student}`);

//------------Classwise student --------------//
console.log(`----------------------------------------------------`);
console.log(`----------------------------------------------------`)

// Class 12 student //
console.log(`------------Student of class 12 -------------`);

let classt = 0;

student_data.sort().map((data, index) =>{
    if(data[3] == 12){
        console.log(`
        Name: ${data[0]};
        Roll: ${data[1]};
        Class: ${data[3]};
        Location: ${data[5]}; 
        `);
        classt++
    }

});
console.log(`Total student of class 12 = ${classt}`);
console.log(`----------------------------------------------------`);

//------------------ Class 5 students --------------------//
console.log(`------------Student of class 5 -------------`);
let class5 = 0;

student_data.sort().map((data, index) =>{
    if(data[3] == 5){
        console.log(`
        Name: ${data[0]};
        Roll: ${data[1]};
        Class: ${data[3]};
        Location: ${data[5]}; 
        `);
        class5++
    }
});
console.log(`Total student of class 5 = ${class5}`);
console.log(`----------------------------------------------------`);
console.log(`----------------------------------------------------`);
//-----------------students of class 14 ------------------------//
console.log(`------------Student of class 14 -------------`);
let class14 = 0;

student_data.sort().map((data, index) => {

    if(data[3] == 14){
        console.log(`
        Name: ${data[0]};
        Roll: ${data[1]};
        Class: ${data[3]};
        Location: ${data[5]}; 
        `);
        class14++
    }
});
console.log(`Total student of class 14 = ${class14}`);

console.log(`----------------------------------------------------`);
// Locationwise resut //
console.log(`----------------------------------------------------`);
let locarion = 0
console.log(`Students of Sylhet `);

student_data.sort().map((data, index) =>{
    if(data[5] == 'sylhet'){
        console.log(`
        Name: ${data[0]};
        Roll: ${data[1]};
        Class: ${data[3]};
        Location: ${data[5]}; 
        `)
        locarion++
    }
});
console.log(`Total students of Sylhet = ${locarion}`);
console.log(`----------------------------------------------------`);
console.log(`----------------------------------------------------`);
let locarionb = 0
console.log(`Students of Bogura `);

student_data.sort().map((data, index) =>{
    if(data[5] == 'bogura'){
        console.log(`
        Name: ${data[0]};
        Roll: ${data[1]};
        Class: ${data[3]};
        Location: ${data[5]}; 
        `)
        locarionb++
    }
});
console.log(`Total students of Bogura = ${locarionb}`);

console.log(`----------------------------------------------------`);
console.log(`----------------------------------------------------`);
// Students between 10-25 ----//

console.log(`----------------------------------------------------`);
console.log(`----------------------------------------------------`);

let age = 0;

student_data.sort().map((data, index) =>{
    if(data[2] >= 10 && data[2] <=25){
        console.log(`
        Name: ${data[0]};
        Roll: ${data[1]};
        Class: ${data[3]};
        Age ${data[2]}; 
        `);
        age++
    };


});
console.log(`Total Students between age 10-25 years old =  ${age}`);








