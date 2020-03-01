function eventslider()
{
 
    let links = document.querySelectorAll(".slide-link");
    let slides = document.querySelectorAll(".slide-event")
    let activeEvent;
    links.forEach((currentChild)=>{
        currentChild.addEventListener("click",()=>
        {   
            links.forEach((x)=>{
                x.classList.remove("active-slide-link");
            });

            // for(let j=0; j< links.)
            currentChild.classList.add("active-slide-link");

            activeEvent = currentChild.id.split('-')[0];
            slides.forEach((x)=>{
                x.classList.remove("active-slide");
            });
            document.querySelector("#"+activeEvent+"-slide").classList.add("active-slide");

        });
    });
}

eventslider();

function eventDetails()
{
    let slides = document.querySelectorAll(".event");
    let body = document.querySelector("body");
    slides.forEach((tile)=>
    {
        tile.children[0].addEventListener('click',()=>
        {
            window.location.hash = '#event-details'
            let tileImage = tile.children[1].children[0];

                body.style = "overflow-y: hidden"
                tileImage.style=`top:${tile.offsetTop - window.pageYOffset}px; left: ${tile.offsetLeft - window.pageXOffset}px; display:block; height: ${tile.offsetHeight}px; width : ${tile.offsetWidth}px;`;
                tile.classList.toggle("active-tile");
                 setTimeout(()=>
                 {
                    tileImage.style=`top:0px; left: 0px; display:block;`;
                 },0);

                tile.children[1].style=`top:${window.pageYOffset}px; left: ${window.pageXOffset}px; display:block;`;
     
        });

            tile.children[1].children[1].addEventListener('click', ()=>
            {
                window.history.back();
            })

        // if(tile.children[1].children[1])
        //     tile.children[1].children[1].addEventListener('click', ()=>
        //     {   let tileImage = tile.children[1].children[0];
        //         body.style="";
        //         tileImage.style="";
        //         tile.children[1].style="";
        //         tile.classList.toggle("active-tile");
        //     })
    });

    window.addEventListener('hashchange',(e)=>
    {
        if(window.location.hash != '#event-details' && e.oldURL.split('#')[1] === 'event-details')
        
        {
            slides.forEach((tile)=>
            {
                let tileImage = tile.children[1].children[0];
                body.style="";
                tileImage.style="";
                tile.children[1].style="";
                tile.classList.remove("active-tile");
            });
        }
    });

}
eventDetails();




function lazyload()
{
    if(window.innerWidth > 600) {
        let imgs = document.querySelectorAll("img[data-srcset]");
        imgs.forEach((img)=>
        {
            img.srcset= img.attributes.getNamedItem("data-srcset").value;
        });
    }
   
}