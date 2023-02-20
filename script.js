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
