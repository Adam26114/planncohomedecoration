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

    //Stat Properties
    $('.propertylists').click(function(){
        //fot active item

        // $('this').addClass("activeitems");
        // $('this').siblings().removeClass('activeitems');

        $(this).addClass("activeitems").siblings().removeClass('activeitems');

        //fot filter

        let getattvalue = $(this).attr('data-filter');
        // console.log(getattvalue);

        if(getattvalue === 'all'){
            $('.filters').show('slide',500);
        }else{
            $('.filters').not('.'+getattvalue).hide('slide',500);
            $('.filters').filter('.'+getattvalue).show('slide',500);
        }
    });
    //End properties 
});