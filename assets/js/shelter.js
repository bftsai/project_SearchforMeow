$(document).ready(function () {
    //h1 animate
    $('.shelter').data("aos","fade-up");
    if(jQuery(window).width()<992){
        $('h1,.shelterIcon').addClass('animate__animated animate__bounceInDown');
        $('.shelter .row').eq(3).find('.col-10').addClass('aos-init').attr("data-aos","fade-up");
    }else{
        $('h1,.shelterIcon').removeClass('animate__animated animate__bounceInDown');
    }
    //aos
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
    //dropdown
    $('.dropBtn').click(function (e) { 
        e.preventDefault();
        $('.expand_more').toggleClass('active');
    });
    $('.item0').click(function (e) { 
        e.preventDefault();
        $('.dropBtn').text("全部");
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item1').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "北部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "中部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "南部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "東部" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    $('.item5').click(function (e) { 
        e.preventDefault();
        $( ".dropBtn" ).text( "離島" );
        $('.dropBtn').append("<span>expand_more</span>").find('span').addClass('material-symbols-outlined expand_more active');
        setTimeout(() => {
            $('.material-symbols-outlined').removeClass('active');
        }, 20);
    });
    //add favorite
    $('.favor').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('addFavor zoom');
        setTimeout(() => {
            $(this).removeClass('zoom');
        }, 20);
    });
    //look pic
    //one
    $('.one .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/1/1.png").css("width","100%");
    });
    $('.one .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/1/2.png").css("width","100%");
    });
    $('.one .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/1/3.png").css("width","100%");
    });
    $('.one .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //two
    $('.two .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/2/1.png").css("width","100%");
    });
    $('.two .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/2/2.png").css("width","100%");
    });
    $('.two .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://www.pet.gov.tw/Upload/pic/S1675848916403.png").css("width","100%");
    });
    $('.two .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //three
    $('.three .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/3/1.png").css("width","100%");
    });
    $('.three .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/3/2.png").css("width","100%");
    });
    $('.three .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/3/3.png").css("width","100%");
    });
    $('.three .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //four
    $('.four .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/4/1.png").css("width","100%");
    });
    $('.four .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/4/2.png").css("width","100%");
    });
    $('.four .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/4/3.png").css("width","100%");
    });
    $('.four .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //five
    $('.five .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/5/1.png").css("width","100%");
    });
    $('.five .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/5/2.png").css("width","100%");
    });
    $('.five .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/5/3.png").css("width","100%");
    });
    $('.five .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //six
    $('.six .picItem1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/6/1.png").css("width","100%");
    });
    $('.six .picItem2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/6/2.png").css("width","100%");
    });
    $('.six .picItem3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","../assets/images/shelter/6/3.png").css("width","100%");
    });
    $('.six .picItem4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').attr("src","https://fakeimg.pl/541x300/?retina=1&text=準備中&font=noto").css("width","100%");
    });
    //pagination
    $('.pageMark').click(function (e) { 
        e.preventDefault();
        $(this).addClass('paginationActive');
        $(this).parent().siblings().find('a').removeClass('paginationActive');
    });
    $('.backPage').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('.paginationActive').parent().prev().find('.pageMark').addClass('paginationActive');
        $(this).parent().siblings().find('.paginationActive').parent().next().find('.pageMark').removeClass('paginationActive');
    });
    $('.nextPage').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('.paginationActive').parent().next().find('.pageMark').addClass('paginationActive');
        $(this).parent().siblings().find('.paginationActive').parent().prev().find('.pageMark').removeClass('paginationActive');
    });
});
