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
let layers = document.querySelectorAll(".layer .active-layer");


function right()
{
    document.querySelector(".instructions").classList.add("remove");
    layers = document.querySelectorAll(".layer.active-layer");
    for(let i=0; i < layers[0].childElementCount; i++)
    {
        layers[0].children[i].classList.add("animate")
    }
    for(let i=0; i < layers[1].childElementCount; i++)
    {
        layers[1].children[i].classList.add("animate")
    }
    document.querySelector(".gallery-heading").classList.add("animate");
    
    if(translateVal < 3)
        translateVal++;
        
    layers[0].style="transform: translateX( -" + 200*translateVal+"vw); transform-origin:" + translateVal+"px;";
    layers[1].style="transform: translateX( -" + 200*translateVal+"vw); transform-origin:" + translateVal+"px;";

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
    
    layers = document.querySelectorAll(".layer.active-layer");

    for(let i=0; i < layers[0].childElementCount; i++)
    {
        layers[0].children[i].classList.add("animate")
    }
    for(let i=0; i < layers[1].childElementCount; i++)
    {
        layers[1].children[i].classList.add("animate")
    }
    document.querySelector(".gallery-heading").classList.add("animate");

    if(translateVal > 0)
        translateVal--;
    if(translateVal==0)
        document.querySelector(".instructions").classList.remove("remove");
    layers[0].style="transform: translateX( -" + 200*translateVal+"vw); transform-origin:" + translateVal+"px;";
    layers[1].style="transform: translateX( -" + 200*translateVal+"vw); transform-origin:" + translateVal+"px;";

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


function gotcha()
{
    document.querySelector(".review-container").classList.add("submitted");
    window.setTimeout(()=>
    {
        document.querySelector('.review-container.submitted .review-text > h1').style="display:none";
        document.querySelector('.review-container.submitted .review-text > h3').style="display:none";
        document.querySelector('.review-container.submitted form').style="display:none";
        document.querySelector('.review-container.submitted .review-text .submitted-text').style="display:none"
    }, 500);

}

