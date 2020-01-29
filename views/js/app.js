/*COUNTDOWN STARTS*/

function showTime() {
    var currDate = new Date();
    var remDate = new Date(2020, 1, 17);

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
let translateVal =0;
let layers = document.querySelectorAll(".layer");
function right()
{
    for(let i=0; i < layers[0].childElementCount; i++)
    {
        layers[0].children[i].classList.add("animate")
    }
    for(let i=0; i < layers[1].childElementCount; i++)
    {
        layers[1].children[i].classList.add("animate")
    }
    document.querySelector(".gallery-heading").classList.add("animate");
    
    
    translateVal +=200;
    layers[0].style="transform: translateX( -" +translateVal+"vw);";
    layers[1].style="transform: translateX( -" +translateVal+"vw);";

    window.setTimeout(()=> {
        for(let i=0; i < layers[0].childElementCount; i++)
        {
            layers[0].children[i].classList.remove("animate")
        }

        for(let i=0; i < layers[1].childElementCount; i++)
        {
            layers[1].children[i].classList.remove("animate")
        }
        document.querySelector(".gallery-heading").classList.remove("animate");
    }, 1600)
}

function left()
{

    for(let i=0; i < layers[0].childElementCount; i++)
    {
        layers[0].children[i].classList.add("animate")
    }
    for(let i=0; i < layers[1].childElementCount; i++)
    {
        layers[1].children[i].classList.add("animate")
    }
    document.querySelector(".gallery-heading").classList.add("animate");

    translateVal -=200;
    layers[0].style="transform: translateX( -" +translateVal+"vw);"
    layers[1].style="transform: translateX( -" +translateVal+"vw);"

    window.setTimeout(()=> {
        for(let i=0; i < layers[0].childElementCount; i++)
        {
            layers[0].children[i].classList.remove("animate")
        }

        for(let i=0; i < layers[1].childElementCount; i++)
        {
            layers[1].children[i].classList.remove("animate")
        }
        document.querySelector(".gallery-heading").classList.remove("animate");

    }, 1600)
}


/* GALLERY END*/

