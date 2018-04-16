const btnMobileNav = document.getElementById('btn-mobile-nav');
const menu = document.querySelector('#header nav');

btnMobileNav.addEventListener('click',function(){
    
    if (btnMobileNav.className == "off"){
        menu.style.right = "0";
        btnMobileNav.className = "on";
        
    }
    else if (btnMobileNav.className == "on"){
        menu.style.right = "-100%";
        btnMobileNav.className = "off";
    }
    
});