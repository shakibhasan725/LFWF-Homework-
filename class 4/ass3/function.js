
/**
 * Get GPA From Marks.
 * 
 */



function getGpa( marks ){

    let gpa;

    if( marks >= 0 && marks <= 32){
        gpa = 0.00 ;
    }
    else if( marks >= 33 && marks <= 39){
        gpa = 1.00 ;
    }
    else if( marks >= 40 && marks <= 49){
        gpa = 2.00 ;
    }
    else if( marks >= 50 && marks <= 59){
        gpa = 3.00 ;
    }
    else if( marks >= 60 && marks <= 69){
        gpa = 3.50 ;
    }
    else if( marks >= 70 && marks <= 79){
        gpa = 4.00 ;
    }
    else if( marks >= 80 && marks <= 100){
        gpa = 5.00 ;
    }

    return gpa;
}

/**
 * Get Grade From Marks.
 * 
 */

 function getGrade( marks ){

    let grade;

    if( marks >= 0 && marks <= 32){
        grade = 'F' ;
    }
    else if( marks >= 33 && marks <= 39){
        grade = 'D' ;
    }
    else if( marks >= 40 && marks <= 49){
        grade = 'C' ;
    }
    else if( marks >= 50 && marks <= 59){
        grade = 'B' ;
    }
    else if( marks >= 60 && marks <= 69){
        grade = 'A-' ;
    }
    else if( marks >= 70 && marks <= 79){
        grade = 'A' ;
    }
    else if( marks >= 80 && marks <= 100){
        grade = 'A+' ;
    }

    return grade;
}