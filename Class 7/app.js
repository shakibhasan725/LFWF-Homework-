const student_data = [
    {
        name: 'Shakib Hasan',
        class: 12,
        roll: 578030,
        location: 'bogura',
        age: 20,
        fees: 1200,
     },
    {
        name: 'Rakib Hasan',
        class: 1,
        roll: 30,
        location: 'bogura',
        age: 6,
        fees: 1206,
     },
    {
        name: 'Shihab Hasan',
        class: 1,
        roll: 2,
        location: 'bogura',
        age: 6,
        fees: 1206,
     },
    {
        name: 'Sabbir Hasan',
        class: 1,
        roll: 3,
        location: 'bogura',
        age: 6,
        fees: 1206,
     },
    {
        name: 'Sumaiya',
        class: 12,
        roll: 578020,
        location: 'sylhet',
        age: 18,
        fees: 1200,
        gender: 'female',
     },
    {
        name: 'Julie',
        class: 12,
        roll: 578040,
        location: 'sylhet',
        age: 19,
        fees: 1200,
        gender: 'female',
     },
    {
        name: 'smrity',
        class: 12,
        roll: 578060,
        location: 'sylhet',
        age: 16,
        fees: 1200,
        gender: 'female',
     },
    {
        name: 'Ratna',
        class: 14,
        roll: 578030,
        location: 'bogura',
        age: 40,
        fees: 1200,
     },
    {
        name: 'Rasen',
        class: 1,
        roll: 6,
        location: 'bogura',
        age: 5,
        fees: 1200,
     },
    {
        name: 'sahadat',
        class: 1,
        roll: 10,
        location: 'bogura',
        age: 10,
        fees: 1200,
     },
    {
        name: 'rifat Hasan',
        class: 12,
        roll: 578090,
        location: 'sylhet',
        age: 20,
        fees: 1200,
        gender: 'male',
     },
    {
        name: 'ronok Hasan',
        class: 12,
        roll: 578000,
        location: 'bogura',
        age: 25,
        fees: 1200,
     },
    {
        name: 'rafi Hasan',
        class: 12,
        roll: 5780210,
        location: 'sylhet',
        age: 10,
        fees: 1200,
     },
    {
        name: 'jahid Hasan',
        class: 1,
        roll: 12,
        location: 'bogura',
        age: 6,
        fees: 1200,
     },
    {
        name: 'nasim Hasan',
        class: 1,
        roll: 13,
        location: 'bogura',
        age: 12,
        fees: 1200,
     },
    {
        name: 'sumon Hasan',
        class: 1,
        roll: 15,
        location: 'bogura',
        age: 11,
        fees: 1200,
     },
    {
        name: 'shadhin Hasan',
        class: 1,
        roll: 15,
        location: 'bogura',
        age: 11,
        fees: 1200,
     }
    ];

   console.log(`----------------------------------------------`); 
   console.log(`-------Total Admission Fees------------------`); 
//---------------------- Total Admission fees-----------------//
    
    let total_fees = 0;
    
    for(data of student_data){
        total_fees += data.fees
    }

    console.log(`Total Admission Fees: ${total_fees}`);


//-------------------------------------------------------------//

    console.log(`----------------------------------------------`); 
    console.log(`---------All Female students-------------------`);
    
 //-------------------------------------------------------------//  
 
 let total_female = 0;
 for(data of student_data){
     if(data.gender == 'female'){
         console.log(`
         Name: ${data.name}
         Class: ${data.class}
         Age: ${data.age}
         Gender: ${data.gender}
         Location: ${data.location}
         `);
         total_female++
     };
 };

 console.log(`Total Female students = ${total_female}`);
 
 console.log(`----------------------------------------------`);
 


 //-------------------------------------------------------------//   
 //--------------------Class 12 students-----------------------//
 
 console.log(`---------------Class 12 students--------------`);

 console.log(`----------------------------------------------`);
 //-------------------------------------------------------------//
 
 let total_class12 = 0;

 for(data of student_data){
     if(data.class == 12){
         console.log(`
         Name: ${data.name}
         Class: ${data.class}
         Age: ${data.age}
         Location: ${data.location}
         `);
         total_class12++
     }
 }

console.log(`Total students of class 12 = ${total_class12}`);

console.log(`----------------------------------------------`);


//-------------------------------------------------------------//   
 //---------------Students of sylhet---------------------------// 
 console.log(`---------Students of sylhet--------------------`);
 console.log(`----------------------------------------------`);

 let total_sylhet = 0;
 for(data of student_data){
     if(data.location == 'sylhet'){
         console.log(`
         Name: ${data.name}
         Class: ${data.class}
         Age: ${data.age}
         Location: ${data.location}
         `);
         total_sylhet++
     }
    
 }
 console.log(`Total students of Sylhet = ${total_sylhet}`);
 console.log(`----------------------------------------------`);

 //-------------------------------------------------------------//   
 //-----------------Student between 10 - 25 age----------------//
 
 console.log(`------------Student between 10 - 25 age----------`);

 let total_age = 0;
 for(data of student_data){
     if(data.age >= 10 && data.age <= 25){
         console.log(`
         Name: ${data.name}
         Class: ${data.class}
         Age: ${data.age}
         Location: ${data.location}
         `);
         total_age++
     }
 }

console.log(`Total Students of age between 10-25 = ${total_age}`);





 //-------------------------------------------------------------//   
 //-------------------------------------------------------------//   
   