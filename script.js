$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoWidth:true,
        nav: true,
        dots: false,
        Object: true
        
        
    })
    $('.owl-carousel').owlCarousel({
       
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".mobile_menu_btn").addEventListener("click", function () {
        document.querySelector(".mobile_menu").classList.toggle("hidden");
        

    });
    document.body.addEventListener("click", function (e) {
        if(e.target.closest(".dropbtn")){
            return;
            }
        if (!e.target.closest(".mobile_menu_btn")) {
            document.querySelector(".mobile_menu").classList.add("hidden");
            
        }
    });
   
});
