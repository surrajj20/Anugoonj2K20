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
        }, 300);
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

// aboutus section start
var i = 0;
function read() {
    if (!i) {
        document.getElementById("more").style.display = "inline";
        document.getElementById("dots").style.display = "none";
        document.getElementById("read").innerHTML = "Read Less";
        i = 1;
    }
    else {
        document.getElementById("more").style.display = "none";
        document.getElementById("dots").style.display = "inline";
        document.getElementById("read").innerHTML = "Read More";
        i = 0;

    }
}
//aboutus section end