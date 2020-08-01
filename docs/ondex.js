$(function () {

    // Initialize variables　変数宣言
    var $window = $(window);
    var windowWidth = window.innerWidth;//スクロールバーを含んだ値で画面サイズを取得
    var windowHeight = window.innerHeight;
    console.log("ウィンドウ幅" + windowWidth, "ウィンドウ高さ" + windowHeight);
    $('#windowHeight').text($(window).height());
    $('#windowWidth').text($(window).width());


    var emp1 = document.getElementById('empty-1');


    //ウィンドウのリサイズ
    function showWindowSize() {

        windowWidth = window.innerWidth;//スクロールバーを含んだ値で画面サイズを取得
        windowHeight = window.innerHeight;
        console.log("ウィンドウ幅" + windowWidth, "ウィンドウ高さ" + windowHeight);
    }

    $(window).resize(showWindowSize);


    const divs = document.querySelectorAll('.sentence');

    divs.forEach((div, i) => {
        console.log(div);
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            //console.log(div, scroll);
            //console.log("imgPos：" + imgPos, "scroll：" + scroll);
            if (scroll >= windowHeight * i && scroll < windowHeight * (i + 1)) {
                console.log("in if");
                div.style.opacity = 1.0;
            } else if (scroll >= windowHeight * (i - 1) && scroll < windowHeight * (i)) {
                console.log("in else if");
                div.style.opacity = 0.5;
            } else {
                console.log("in else");
                div.style.opacity = 0.0;
            }
        });


    });


});


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, P2D);
    canvas.style('z-index', '-1');//キャンバスを背景にする
    background(255);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}