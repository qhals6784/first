$(function(){
    /* 네비게이션 */
    $('ul.gnb>li,.nav_bg').hover(function(){
        $('ul.sub,.nav_bg').stop().slideDown();
    },function(){
        $('ul.sub,.nav_bg').stop().slideUp();
    })


    /* 메인배너 */
    let slideI = 0;
    const slideLength = $('.main_banner ul.slide li').length - 1;
    $('.main_banner ul.slide li').eq(slideI).siblings().hide();
    $('.slideNum em').eq(slideI).siblings().hide();
    let inter = setInterval(goSlide, 3000);
    function goSlide() {
        if (slideI < slideLength) {
            slideI++;
        } else {
            slideI = 0;
        }
        rollingSlide();
    }
    function backSlide() {
        if (slideI == 0) {
            slideI = slideLength;
        } else {
            slideI--;
        }
        rollingSlide();
    }
    function rollingSlide() {
        $('.main_banner ul.slide li').eq(slideI).siblings().fadeOut();
        $('.main_banner ul.slide li').eq(slideI).fadeIn();
        $('.slideNum em').eq(slideI).siblings().fadeOut(0);
        $('.slideNum em').eq(slideI).fadeIn(0);
    }

    $('.pause_btn').click(function(){
        clearInterval(inter);
        $(this).fadeOut(0);
        $('.play_btn').fadeIn(0);
    });
    $('.play_btn').click(function(){
        $(this).fadeOut(0);
        $('.pause_btn').fadeIn(0);
        clearInterval(inter);
        backSlide();
        inter = setInterval(goSlide,3000)
    })
    $('.left_btn').click(function(){
        clearInterval(inter);
        backSlide();
        inter = setInterval(backSlideSlide,3000)
    })
    $('.right_btn').click(function(){
        clearInterval(inter);
        goSlide();
        inter = setInterval(goSlide,3000)
    })
    /* 메인배너 끝 */

    /* 날짜 변경 */
    function getToday() {
        let now = new Date();
        let year = now.getFullYear()
        let day = now.getMonth()+1
        let date = now.getDate();
        document.getElementById('year_mon').innerHTML = year + '.0'+ day
        document.getElementById('now').innerHTML = date;
    }
    getToday();

})/* ready end */