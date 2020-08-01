$(function () {
    var FADE_TIME = 150; // ms
    var TYPING_TIMER_LENGTH = 1400; // ms


    // Initialize variables　変数宣言
    var $window = $(window);
    var windowWidth = window.innerWidth;//スクロールバーを含んだ値で画面サイズを取得
    var windowHeight = window.innerHeight;
    console.log("ウィンドウ幅" + windowWidth, "ウィンドウ高さ" + windowHeight);
    $('#windowHeight').text($(window).height());
    $('#windowWidth').text($(window).width());


    var $obj2 = $('#sentece-2');

    var obj1 = document.getElementById('sentece-1');
    var obj2 = document.getElementById('sentece-2');
    var obj3 = document.getElementById('sentece-3');
    var obj4 = document.getElementById('sentece-4');
    var obj5 = document.getElementById('sentece-5');
    var obj6 = document.getElementById('sentece-6');
    var obj7 = document.getElementById('sentece-7');
    var obj8 = document.getElementById('sentece-8');
    var obj9 = document.getElementById('sentece-9');
    var obj10 = document.getElementById('sentece-10');
    var obj11 = document.getElementById('sentece-11');
    var obj12 = document.getElementById('sentece-12');
    var obj13 = document.getElementById('sentece-13');
    var obj14 = document.getElementById('sentece-14');

    var emp1 = document.getElementById('empty-1');




    //デフォルトでは状態を表すフラグをfasleにしておく
    var connected = false;//接続状態
    var typing = false;//タイピング状態
    var lastTypingTime;//タイピング判定に利用

    //ウィンドウのリサイズ
    function showWindowSize() {
        /*$('#windowHeight').text($(window).height());
        $('#windowWidth').text($(window).width());*/
        windowWidth = window.innerWidth;//スクロールバーを含んだ値で画面サイズを取得
        windowHeight = window.innerHeight;
        console.log("ウィンドウ幅" + windowWidth, "ウィンドウ高さ" + windowHeight);
    }

    $(window).resize(showWindowSize);

    //スクロール
    function scroll() {
        /*var clientRect = obj2.getBoundingClientRect();
        var y = clientRect.top;
        console.log(y, $obj2.offset().top);*/


    }

    const divs = document.querySelectorAll('.sentence');
    //const divs_block = document.querySelectorAll('.block');

    /* $(window).scroll(function () {
  
          divs.forEach((div, i) => {
              console.log(div);
              var imgPos = $(this).offset().top;
  
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              console.log("imgPos：" + imgPos, "scroll：" + scroll);
              if (scroll > imgPos - windowHeight + windowHeight / 5) {
                  $("div", this).css("opacity", "1");
                  $("p", this).css("opacity", "1");
              } else {
                  $("div", this).css("opacity", "0");
                  $("p", this).css("opacity", "1");
              }
          });
      });*/


    // $('.sentence div, .sentence p').css("opacity", "0");//エフェクトクラスのついたdivの子要素のdivとp
    //$('.block div').css("opacity", "0");
    divs.forEach((div, i) => {
        console.log(div);
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            //console.log(div, scroll);
            //console.log("imgPos：" + imgPos, "scroll：" + scroll);
            if (scroll >= windowHeight * i && scroll < windowHeight * (i + 1)) {
                console.log("in if");
                //$('.block div').css("opacity", "1");
                div.style.opacity = 1.0;
            } else {
                console.log("in else");
                //$('.block div').css("opacity", "0");
                div.style.opacity = 0.0;
            }
        });


    });


    //$('.block div, .block p').css("opacity", "0");//エフェクトクラスのついたdivの子要素のdivとp
    /*$(window).scroll(function () {
        divs_block.forEach((div, i) => {

            var scroll = $(window).scrollTop();

            if (scroll >= windowHeight * i && scroll < windowHeight * (i + 1)) {
                console.log("in if");
                $("div", this).css("opacity", "1");
                $("p", this).css("opacity", "1");
            } else {
                console.log("in else");
                $("div", this).css("opacity", "0");
                $("p", this).css("opacity", "0");
            }

        });
    });*/









});


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, P2D);
    canvas.style('z-index', '-1');//キャンバスを背景にする
    background(255);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}