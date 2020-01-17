let teaser = document.querySelector(".teaser-sec video");
let overlay = document.querySelector(".teaser-sec .overlay");

function playTeaser()
{
    if(overlay.classList.contains("clicked"))
    {
        teaser.pause();
        overlay.classList.remove("clicked");
    }
    else
    {
        setTimeout(()=>
        {
            teaser.play();
        }, 300);
        overlay.classList.add("clicked");
    }
    
}