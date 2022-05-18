


let name = prompt('Name?');
let clas = prompt('Class?');
let roll = prompt('Roll?');
let bn = prompt('Marks in Bangla?');
let en = prompt('Marks in English?');
let math = prompt('Marks in Math?');
let phy = prompt('Marks in Physics?');
let che = prompt('Marks in Chemestry?');
let bio = prompt('Marks in Biology?');
let ssc = prompt('Marks in S_Sciece?');




console.log(`
    Name : ${name}
    Roll: ${roll}
    Class: ${clas}
    =============================================>
    Subjects        Marks        Gpa                    Grade 
    Bangla          ${bn}        ${getGpa(bn)}          ${getGrade(bn)}
    English         ${en}        ${getGpa(en)}          ${getGrade(en)}
    Math            ${math}      ${getGpa(math)}        ${getGrade(math)}
    Physics         ${phy}       ${getGpa(phy)}         ${getGrade(phy)}
    Chamestry       ${che}       ${getGpa(che)}         ${getGrade(che)}
    Biology         ${bio}       ${getGpa(bio)}         ${getGrade(bio)}
    S_Sciene        ${ssc}       ${getGpa(ssc)}         ${getGrade(ssc)}
`
);