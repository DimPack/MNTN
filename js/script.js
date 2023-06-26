function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
/////////////////SLIDER////////////////////////////
$(document).ready(function(){
    $('.slider').slick(
        {
            arrows:false,
            dots:true,
            easing:'ease-in-out',
            autoplay: true,
            speed: 2500,
            autoplaySpeed: 5000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
 
        }
    );

});
function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var read_more = document.getElementById("read_more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        read_more.innerHTML = "read more";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        read_more.innerHTML = "hidden";
        more.style.display = "inline";
    }
}

function readMore_02() {
    var dots = document.getElementById("dots_02");
    var more = document.getElementById("more_02");
    var read_more = document.getElementById("read_more_02");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        read_more.innerHTML = "read more";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        read_more.innerHTML = "hidden";
        more.style.display = "inline";
    }
}

function readMore_03() {
    var dots = document.getElementById("dots_03");
    var more = document.getElementById("more_03");
    var read_more = document.getElementById("read_more_03");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        read_more.innerHTML = "read more";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        read_more.innerHTML = "hidden";
        more.style.display = "inline";
    }
}
