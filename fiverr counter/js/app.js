


const countersubmit = document.querySelector(".counter");
const output = document.getElementById("output1")


countersubmit.onsubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const {date, time} = Object.fromEntries(form_data.entries());
    
    const counters = setInterval (() =>{
        

    // time //

            let start_time = Date.now();
            let end_time = new Date(date+ ' ' +time);
            let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));


            let total_sec = Math.floor(order_time / 1000);
            let total_min = Math.floor( total_sec / 60 );
            let total_hour = Math.floor(total_min / 60);
            let total_day = Math.floor(total_hour / 24);

            
            let hour = total_hour - ( total_day * 24);
            let min = total_min - (total_day * 24 * 60) - (hour * 60);
            let sec = total_sec - ( total_day * 24 * 60 * 60) - ( hour * 60 * 60) - (min * 60);

            if( total_sec <= 0){
                clearInterval(counters);
            };




            output.innerHTML = `<tr>
                                <td>${total_day}</td>
                                <td>${hour}</td>
                                <td>${min}</td>
                                <td>${sec}</td>
                            </tr>
                    `

            },1000);
}

            



