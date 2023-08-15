const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(()=>{


    let currenttime = new Date();
    hrs.innerText =  currenttime.getHours();
    min.innerText = currenttime.getMinutes();
    sec.innerText = currenttime.getSeconds();
},1000);