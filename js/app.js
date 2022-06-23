// console.log('hey');
$(document).ready(function(){
    // console.log('hi');

    //Start Header

        //Start nav

            $('.navbuttons').click(function(){
                $('.navbuttons').toggleClass('crossxs');
            } );
                
           //for nav
           $(window).scoll(function(){
                // console.log('hay');
                let getscolltop = $(this).scollTop();


                if(getscolltop >= 200){
                    $('.navbar').addClass('navmenus');
                }else{
                    $('.navbar').removeClass('navmenus');
                }
           });

        //End nav

    //End Header
});