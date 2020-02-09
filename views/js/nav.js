const nav = document.querySelector('nav');
const main = document.querySelector('body');
function closeNav()
{
    nav.classList.remove('nav-open');
    setTimeout(()=>{
        document.querySelector('nav').style="display:none;"
    },900);
}

function openNav()
{
    nav.style="";
    setTimeout(()=>{
    nav.classList.add('nav-open');
    },100);
}

window.addEventListener('hashchange', (e)=>
{

    if(window.location.hash === '#nav')
        openNav();
    else if(e.oldURL.split('#')[1] ==='nav')
        closeNav();
});

function preloader()
{
    document.querySelector(".preloader").classList.remove("preloader");
    setTimeout(()=>{
        document.querySelector('nav').style="display:none;";
        document.querySelector(".pre-preloader").classList.remove("pre-preloader");
    },900);
}