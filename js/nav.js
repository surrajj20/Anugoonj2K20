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
