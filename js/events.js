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