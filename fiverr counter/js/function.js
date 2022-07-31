
const setAlert = ( msg , type = 'danger') => {
    return `<p class ="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"</p>`;


}


const numberCheck = (num)=>{
    let ptrn = /^[0-9]{1,}$/;
    return ptrn.test(num);
}







