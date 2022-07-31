
const setAlert = ( msg , type = 'danger') => {
    return `<p class ="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"</p>`;


}


const numberCheck = (num)=>{
    let ptrn = /^[0-9]{1,3}$/;
    return ptrn.test(num);
}




const biyerAgeCal = (age , gen , name)=>{

    let biyerage = 0;

    if(gen == 'male'){
        biyerage = 21;
        sonman = 'Vaiya';
    }else{
        biyerage = 18;
        sonman ='Apu';
    }

    if(gen == 'male'){
        if( age >= biyerage){
           return setAlert(`Hi ${name} ${sonman},Apni Biyer Junno Prustut.` , 'success')
        }else{
           return setAlert(`Hi ${name} ${sonman},Apni Biyer Junno Prustut na. Apni ${biyerage - age} year opekkha koren` , 'warning')
        }
    }else if(gen == 'female'){
        if(age >= biyerage){
            return setAlert(`Hi ${name} ${sonman},Apni Biyer Junno Prustut.` , 'success')
        }else{
            return setAlert(`Hi ${name} ${sonman},Apni Biyer Junno Prustut na. Apni ${biyerage - age} year opekkha koren` , 'warning')
        }
        
    }
}