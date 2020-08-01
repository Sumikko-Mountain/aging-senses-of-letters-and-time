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

  var allSectionDivs = 0;
  const divs_section1 = document.querySelectorAll('.section-1');
  allSectionDivs += divs_section1.length;
  console.log(divs_section1, divs_section1.length, allSectionDivs);

  divs_section1.forEach((div, i) => {

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= windowHeight * i && scroll < windowHeight * (i + 1)) {
        // console.log("in if" + i);
        div.style.opacity = 1.0;
      } else if (scroll >= windowHeight * (i - 1) && scroll < windowHeight * i) {
        // console.log("in else if");
        div.style.opacity = 0.1;
      } else {
        // console.log("in else");
        if (i != divs_section1.length - 1) {//最後の一つは消えないようにして、見えてる状態で上に送る iは０から加算さレてるので配列長と一つずれてる
          div.style.opacity = 0.0;
        }

      }
    });
  });

  const divs_section2 = document.querySelectorAll('.section-2');
  allSectionDivs += 1;//section間の余白ようdiv１つ分の高さを追加
  //allSectionDivs += divs_section2.length;
  console.log(divs_section2, divs_section2.length, allSectionDivs);
  divs_section2.forEach((div, i) => {

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= windowHeight * i + allSectionDivs && scroll < windowHeight * (i + allSectionDivs + 1)) {
        console.log("in if" + i);
        div.style.opacity = 1.0;
      } else if (scroll >= windowHeight * (i + allSectionDivs - 1) && scroll < windowHeight * i + allSectionDivs) {
        console.log("in else if");
        div.style.opacity = 0.5;
      } else {
        console.log("in else");
        if (i != divs_section2.length - 1) {
          div.style.opacity = 0.0;
        }

      }
    });
  });





});//$(function () のけつ


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, P2D);
  canvas.style('z-index', '-1');//キャンバスを背景にする
  background(255);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}