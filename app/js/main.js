$(document).ready(function(){
    $('#home-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
    $('#contact-member-carousel').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4,
                autoplay:false,
                loop:false
            }
        }
    });
    $('[data-fancybox = "iframe"]').fancybox({
        toolbar  : false,
        smallBtn : true,
        iframe : {
            preload : false
        }
    });
});