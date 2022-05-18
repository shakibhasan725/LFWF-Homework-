

let rollss = parseInt(prompt('Roll Number Please?'));


//-----------------students info ----------------//
    
for(dataf of student_info){
   if( rollss === dataf.roll){
        console.log(`
        ===============================
        Name: ${dataf.name}
        Class: ${dataf.class}
        Roll: ${dataf.roll}
        Age: ${dataf.age}
        `);
    }
}

//----------------------------results -----------------------//




    for(data of result){
        if( rollss === data.roll){
            let bn = data.bangla;
            let en = data.english;
            let math = data.math;
            let ssc = data.s_science;
        console.log(`
        =================================================
        Subjects   Marks     Gpa     Grade        CGPA      
        Bangla     ${bn}         ${getGpa(bn)}       ${getGrade(bn)}             
        English    ${en}         ${getGpa(en)}       ${getGrade(en)}          ${calCgpa(getGpa(bn),getGpa(en),getGpa(math),getGpa(ssc))}
        Math       ${math}         ${getGpa(math)}       ${getGrade(math)}            
        S_Sciene   ${ssc}         ${getGpa(ssc)}      ${getGrade(ssc)}             
        ==================================================
        `);
    };
    
};










