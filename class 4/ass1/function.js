

function ageCal( age ){
    let position ;

    if( age >= 1 && age <= 9){
        position = 'Children' ; 
    } else if( age >= 10 && age <= 19 ){
        position = 'Teenagers' ;
    } else if( age >= 20 && age <= 40 ){
        position = 'Young People' ;
    }else if( age >= 41 && age <= 80 ){
        position = 'Old People';
    }
    return position ;
}