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



  var obj = document.getElementById('sentece-1');
  var obj2 = document.getElementById('sentece-2');
  var $obj2 = $('#sentece-2');
  var obj3 = document.getElementById('sentece-3');
  var obj4 = document.getElementById('sentece-4');
  var obj5 = document.getElementById('sentece-5');
  var obj6 = document.getElementById('sentece-6');
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
    var clientRect = obj2.getBoundingClientRect();
    var y = clientRect.top;

    console.log(y, $obj2.offset().top);
    if ($(this).scrollTop() >= windowHeight * 6) {
      obj6.style.opacity = 1.0;
      obj5.style.opacity = 0.0;
      console.log("sentence-6");
    } else if ($(this).scrollTop() >= windowHeight * 5) {
      obj6.style.opacity = 0.0;
      obj5.style.opacity = 1.0;
      obj4.style.opacity = 0.0;
      console.log("sentence-5");
    } else if ($(this).scrollTop() >= windowHeight * 3) {
      obj5.style.opacity = 0.0;
      obj4.style.opacity = 1.0;
      /* obj3.style.opacity = 0.0;*/
      console.log("sentence-4");
    } else if ($(this).scrollTop() >= windowHeight * 2) {
      obj4.style.opacity = 0.0;
      obj3.style.opacity = 1.0;
      obj2.style.opacity = 0.0;
      console.log("sentence-3");
    } else if ($(this).scrollTop() >= windowHeight) {
      obj3.style.opacity = 0.0;
      obj2.style.opacity = 1.0;
      obj.style.opacity = 0.0;
      console.log("sentence-2");
    } else {
      console.log("sentence-1");
      obj6.style.opacity = 0.0;
      obj5.style.opacity = 0.0;
      obj4.style.opacity = 0.0;
      obj3.style.opacity = 0.0;
      obj2.style.opacity = 0.0;
      obj.style.opacity = 1.0;
    }
  }

  $('.block-one').scroll(function () {
    console.log($(this).scrollTop() + 'px');
  });

  $(window).scroll(scroll);

  $(document).on('mousemove', (event) => {

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