

$('#fullpage').fullpage({
    //options here
    responsiveWidth: 1200,/*brackpoint 1024px*/
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,//좌우에 영역지정 메뉴
    navigationPosition: 'left',//right 기본값
    navigationTooltips: ['smn', 'perfume', 'lotion', 'bath', 'forhome', 'package', 'heritage'],
    showActiveTooltip: true,//false 기본값
    onLeave: function (origin, destination, direction, trigger) {
        if (destination === 2 || destination === 3 || destination === 4 || destination === 5 || destination === 6 || destination === 7) {
            $("#header,#fp-nav").addClass("active");
            $("#header .gnb li a").addClass("active");
        } else {
            $("#header,#fp-nav").removeClass("active");
            $("#header .gnb li a").removeClass("active");
        }
    },
});

//perfume
$(".per_right li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".perfume_list li").eq(num).fadeIn().siblings().hide();
});
//per_bg_list
$(".per_right li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".per_bg_list li").eq(num).fadeIn().siblings().hide();
});
//per_right
const per_right = new Swiper(".per_right", {
    slidesPerView: 3,
    grid: {
        rows: 1,
    },
    breakpoints: {
        500: {
            slidesPerView: 5,
            grid: {
                rows: 1,
            },
        },
        1000: {
            slidesPerView: 1,
            grid: {
                rows: 8,
            },
        },
    },
});

//package
const package_list = new Swiper(".package_list", {
    slidesPerView: 5, //한 줄에 보이는 슬라이드 갯수
    spaceBetween: 30, //슬라이드 사이 간격 px단위
    autoplay: {
        delay: 2000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    breakpoints: {
        0: {
            slidesPerView: 3, // 한줄에 보이는 슬라이드 갯수
        },
        500: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },
});

//per_ed
$(".per_more").click(function () {
    $(".1").slideToggle();
});
$(".per_more2").click(function () {
    $(".2").slideToggle();
});
$(".per_more3").click(function () {
    $(".3").slideToggle();
});

//mgnb
$("#header .btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
});
$(".mgnb_wrap .btn_close").click(function () {
    $(".mgnb_wrap").fadeOut();
});










