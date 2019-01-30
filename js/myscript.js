$(function(){
   
   'use strict';

    $('.header .overlay').each(function(){
       $(this).css('paddingTop' , ($(window).height() - $('.bxslider li').height()) / 2);
    });
   
   $(window).resize(function(){

        $('.header .overlay').each(function(){
            $(this).css('paddingTop' , ($(window).height() - $('.bxslider li').height()) / 2);
        });
       /* slider.each(function(){ 
        $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2);  
    });*/
       
   });
   
   $('.links li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
   /* slider.each(function(){ 
        $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2);  
    });*/
    
    
    $('.bxslider').bxSlider({
        pager: false,
        default: 500
    });
    
    
    /*smotoh scroll */
    $('.nav-item a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).text()).offset().top
        },700)
    })
    
            /* auto Slider */
    $(function autoSlider(){


        $('.slider .active').each(function(){
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            }
            
            else{
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    });
    
                /*  trigger mixitup */
    //$('#galary').mixItUp();
    var mixer = mixitup('#galary');

    
                /*  scroll  */

    $('#navId a').click(e => {
        e.preventDefault();
        $(this).tab('show');
    });
});
