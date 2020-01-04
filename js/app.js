/*COUNTDOWN STARTS*/

function showTime() {
    var currDate = new Date();
    var remDate = new Date(2020, 1, 6);

    var currTime = currDate.getTime();
    var remTime = remDate.getTime();

    var time = remTime - currTime;

    var s = Math.floor(time / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h = h % 24;
    m = m % 60;
    s = s % 60;

    if (h < 10)
        h = "0" + h;
    if (m < 10)
        m = "0" + m;
    if (s < 10)
        s = "0" + s;

    document.getElementById("days").innerText = d;
    document.getElementById("seconds").innerText = s;
    document.getElementById("minutes").innerText = m;
    document.getElementById("hours").innerText = h;

    setTimeout(showTime, 1000);
}

/*COUNTDOWN ENDS*/


/* GALLERY STARTS */

// let row1 = document.getElementsByClassName('row-1')[0]
// let row2 = document.getElementsByClassName('row-2')[0]
// let body= document.querySelector("body")

// let gallery = document.getElementsByClassName("gallery")[0]
// row1.style= 'transform:translateX(calc(100vw - '+row1.offsetWidth+'px))'

// const initReading = body.getBoundingClientRect().y - row1.getBoundingClientRect().y;
// let currReading;
// let i =0;
// window.addEventListener("scroll",(e)=>
// {
//      currReading = body.getBoundingClientRect().y - row1.getBoundingClientRect().y;
//      row1.style = "transform: translateX(calc(100vw - " + (row1.offsetWidth- initReading + currReading) +"px))";
//      row2.style = "transform: translateX("+(- initReading + currReading)+"px)";
// });


/* GALLERY END*/


// NAV BAR 
const nav = document.querySelector('nav');
const main = document.querySelector('body');
function closeNav()
{
    main.style = "overflow-x: hidden";
    nav.classList.remove('nav-open');
    setTimeout(()=>{
        document.querySelector('nav').style="display:none;"
    },900);
}

function openNav()
{
    main.style = "overflow: hidden";
    nav.style="";
    setTimeout(()=>{
    nav.classList.add('nav-open');
    },100);
}
