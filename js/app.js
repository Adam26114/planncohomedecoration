// console.log('hey');
$(document).ready(function(){
    // console.log('hi');

    //Start Header

        //Start nav

            $('.navbuttons').click(function(){
                $('.navbuttons').toggleClass('crossxs');
            } );
                
           //for nav
           $(window).scroll(function(){
                // console.log('hay');
                let getscrolltop = $(this).scrollTop();
                // console.log(getscrolltop);

                if(getscrolltop >= 200){
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
            $('.filters').hide();
            $('.filters').not('.'+getattvalue).hide('slide',500);
            $('.filters').filter('.'+getattvalue).show('slide',500);
        }
    });

    //For image overlay (or) lightbox2
    lightbox.option({
        showImageNumberLabel:false
    })
    //End properties 

    //Start Adv Section

    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 900){
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else{
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");
        }
    });

    //End Adv Section
});