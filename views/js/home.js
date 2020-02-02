let teaser = document.querySelector(".teaser-sec video");
let overlay = document.querySelector(".teaser-sec .overlay");

function playTeaser() {
    if (overlay.classList.contains("clicked")) {
        teaser.pause();
        overlay.classList.remove("clicked");
    }
    else {
        setTimeout(() => {
            teaser.play();
            overlay.classList.add("animated");
        }, 400);
        overlay.classList.add("clicked");
        
    }

}


$('.overlay').each(function () {
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})

