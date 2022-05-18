function getCConverter(currency, amount){
    
    let rate;


 

    /** If দিয়ে না কাজ করার কারন comment এ জানিয়ে দিয়েন প্লিস */
/** 
    if(currency = 'USD' ){
        rate = 86 ;
    }else if(currency = 'CAD' ){
        rate = 68 ;
    }else if(currency = 'Pound' ){
        rate = 111 ;
    }else if(currency = 'Euro' ){
        rate = 93 ;
    }



    console.log(`
    ${amount} ${currency} = ${+amount * rate} BDT;
    
    `)
*/

    switch(currency){
        case 'USD' : 
        rate = 86 ;
        break;

        case 'CAD' : 
        rate = 68 ;
        break;

        case 'Pound' : 
        rate = 111 ;
        break;

        case 'Euro' : 
        rate = 93 ;
        break;


    }

    console.log(`
    ${amount} ${currency} = ${rate*amount} BDT;
            `)   

    
}