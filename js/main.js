
$('.card-owl').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
            dots:true,
        }
    }
});


// Testimonial Slider 
$('.testimonials').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots:false,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
         320:{
          items:1,
            nav:false,
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
});


$('.other-debts').owlCarousel({
    loop:true,
    margin:35,
    nav:true,
    dots:false,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        320:{
            items:1,
          nav:false,  
        },
        600:{
            items:3,
            nav:false,
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})