console.log("Index.js");




// Menu Secondaire
const gaming = document.getElementById('gaming');
const drink = document.getElementById('drink');
const music = document.getElementById('music');

gaming.addEventListener('mouseenter', function(){
    gaming.style.width = "50%";
    drink.style.width = "25%";
    music.style.width = "25%";

    gaming.addEventListener('mouseleave', function(){
        console.log("Je sors de l'élément 1");
        gaming.style.width = "33.33%";
        drink.style.width = "33.33%";
        music.style.width = "33.33%";
        
    });
});

drink.addEventListener('mouseenter', function () {
    drink.style.width = "50%";
    gaming.style.width = "25%";
    music.style.width = "25%";

    drink.addEventListener('mouseleave', function () {
        console.log("Je sors de l'élément 2");
        gaming.style.width = "33.33%";
        drink.style.width = "33.33%";
        music.style.width = "33.33%";
    });
});

music.addEventListener('mouseenter', function () {
    music.style.width = "50%";
    drink.style.width = "25%";
    gaming.style.width = "25%";

    music.addEventListener('mouseleave', function () {
        console.log("Je sors de l'élément 3");
        gaming.style.width = "33.33%";
        drink.style.width = "33.33%";
        music.style.width = "33.33%";
        
    });
});

// Slider

const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const slide4 = document.getElementById('slide4');
const slides = document.getElementsByClassName('slides');

slide1.addEventListener('click', function(){
    console.log('CLick');


    slide1.className="slides slideMax";
    slide2.className = "slides slideMin";
    slide3.className = "slides slideMin";
    slide4.className = "slides slideMin";

    slide1.style.order ="1";
    slide2.style.order ="2";
    slide3.style.order ="3";
    slide4.style.order ="4";
});

slide2.addEventListener('click', function () {
    console.log('CLick');


    slide1.className = "slides slideMin";
    slide2.className = "slides slideMax";
    slide3.className = "slides slideMin";
    slide4.className = "slides slideMin";

    slide2.style.order = "1";
    slide3.style.order = "2";
    slide4.style.order = "3";
    slide1.style.order = "4";
});

slide3.addEventListener('click', function () {
    console.log('CLick');


    slide1.className = "slides slideMin";
    slide2.className = "slides slideMin";
    slide3.className = "slides slideMax";
    slide4.className = "slides slideMin";

    slide3.style.order = "1";
    slide4.style.order = "2";
    slide1.style.order = "3";
    slide2.style.order = "4";
});

slide4.addEventListener('click', function () {
    console.log('CLick');


    slide1.className = "slides slideMin";
    slide2.className = "slides slideMin";
    slide3.className = "slides slideMin";
    slide4.className = "slides slideMax";

    slide4.style.order = "1";
    slide1.style.order = "2";
    slide2.style.order = "3";
    slide3.style.order = "4";
});
