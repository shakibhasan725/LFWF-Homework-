function getBmi( weight, height){
    let bmi = weight/(height*height) ;
    
    if( bmi < 18.5 && bmi > 0 ){
        console.log(`
        Your BMI is ${bmi} And you are Underweight.
        `)
    }else if( bmi >= 18.5 && bmi <= 24.9 ){
        console.log(`
        Your BMI is ${bmi} And you are  Normal weight.
        `)
    }else if( bmi >= 25.0 && bmi <= 29.9 ){
        console.log(`
        Your BMI is ${bmi} And you are Over weight.
        `)
    }else if( bmi >= 30 && bmi <= 34.9 ){
        console.log(`
        Your BMI is ${bmi} And you are  Obesity Class 1.
        `)
    }else if( bmi >= 35 && bmi <= 39.9 ){
        console.log(`
        Your BMI is ${bmi} And you are  Obesity Class 2.
        `)
    }else if( bmi >= 40 ){
        console.log(`
        Your BMI is ${bmi} And you are  Obesity Class 3.
        `)
    }else if( bmi = 0 ){
        console.log(`
        Sorry You don't have any wieight. 
        `)
    }
}