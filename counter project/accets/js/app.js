

const button = document.getElementById('count');

const output = document.getElementById('data');
const back = document.getElementById('back');
const reset = document.getElementById('reset');
const audio1 = document.getElementById('countn');
const audio2 = document.getElementById('a2');
const audio3 = document.getElementById('a1');
const audio4 = document.getElementById('eror');

const erorr = document.getElementById('text');

let count = 0; 

button.onclick = () => {
    count++

    if( count <= 10 ){
        
      output.innerHTML = count ;
        audio1.play();
        erorr.innerHTML='';
    }else{
        count = 10;
        erorr.innerHTML= 'You cannot go more'
        audio4.play();

    }
}

back.onclick = () => {

    count--
    
    if( count >= 0 ){
        
    output.innerHTML = count ;
        audio2.play();
        erorr.innerHTML='';
    }else{
        count = 0;
        erorr.innerHTML= 'You cannot go more'
        audio4.play();
    }
}

reset.onclick = () => {

    audio3.play();
    count = 0 ;
    output.innerHTML= count;
    erorr.innerHTML = '';
}


