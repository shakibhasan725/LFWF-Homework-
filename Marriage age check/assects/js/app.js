
const form = document.getElementById('from_create');
const msg = document.getElementById('footer');
const iname = document.getElementById('iname');
const iage = document.getElementById('ibyear');
const names = document.getElementById('name');
const age = document.querySelector('input[name="byear"]');
const gender = document.querySelectorAll('input[name="gender"]');

form.onsubmit = (e)=>{
    e.preventDefault();


    const name = document.getElementById('name');
    const age = document.querySelector('input[name="byear"]');
    const gender = document.querySelectorAll('input[name="gender"]');
    

//gender---------------------------------
    let gendern = '';

    gender.forEach( items => {
    
        if(items.checked){
            gendern = items.value ;
        }
    })
    

    if( name.value == '' || age.value == '' || gendern == ''){
        msg.innerHTML = setAlert('All fields are required');
    }else if(numberCheck(age.value) == false){
        msg.innerHTML = setAlert('Invalid Age !')
    }else{
        msg.innerHTML = biyerAgeCal(age.value , gendern , name.value)
    } 
}

names.onblur=()=>{
    if(names.value == ''){
        iname.innerHTML = `* Name is required  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        /svg>`;
        iname.style.color = 'red'
    }
}
age.onblur=()=>{
    if(age.value == ''){
        ibyear.innerHTML = `* Age is required  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>`;
        ibyear.style.color = 'red'
    }
}

names.onkeyup = () =>{
    iname.innerHTML = `Success <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>` ; 
    iname.style.color = 'green' ;

}
age.onkeyup = () =>{
    if(numberCheck(age.value) == false){
        ibyear.innerHTML = `* Invalid Age  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
         </svg>`;
        ibyear.style.color = 'red'
    }else{
        iage.innerHTML = `Success <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>` ; 
        iage.style.color = 'green' ;
    }

}

    





