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
  console.log(divs_section1, divs_section1.length, allSectionDivs);

  divs_section1.forEach((div, i) => {

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= windowHeight * i && scroll < windowHeight * (i + 1)) {
        //真ん中に到達してから次のブロックが来るまで
        // console.log("in if" + i);
        div.style.opacity = 1.0;
      } else if (scroll >= windowHeight * (i - 1) && scroll < windowHeight * i) {
        //可視範囲に下から入ってきて真ん中に到達するまで
        // console.log("in else if");
        div.style.opacity = 0.1;
      } else {
        //それ以外では見せない
        // console.log("in else");
        if (i != divs_section1.length - 1) {//最後の一つは消えないようにして、見えてる状態で上に送る iは０から加算さレてるので配列長と一つずれてる
          div.style.opacity = 0.0;
        }

      }
    });
  });
  allSectionDivs += divs_section1.length;


  const divs_section2 = document.querySelectorAll('.section-2');
  allSectionDivs += 1;//section間の余白ようdiv１つ分の高さを追加

  console.log(divs_section2, divs_section2.length, allSectionDivs);
  divs_section2.forEach((div, i) => {

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= windowHeight * (i + allSectionDivs) && scroll < windowHeight * (i + allSectionDivs + 1)) {
        console.log("in if" + i);
        div.style.opacity = 1.0;
      } else if (scroll >= windowHeight * (i + allSectionDivs - 1) && scroll < windowHeight * (i + allSectionDivs)) {
        console.log("in else if");
        if (i < divs_section2.length - 5) {
          div.style.opacity = 0.5;
        }
        if (i == divs_section2.length - 1) {
          div.style.opacity = 0.0;
        }
      } else {
        console.log("in else");
        if (i != divs_section2.length - 1) {
          div.style.opacity = 0.0;
        }

      }
    });
  });

  var allSectionDivs_2 = allSectionDivs + divs_section2.length;// allSectionDivsをそのまま継ぎ足していくとどうも事故る　なぜだ

  const divs_section3 = document.querySelectorAll('.section-3');
  allSectionDivs_2 += 1;//section間の余白ようdiv１つ分の高さを追加

  console.log(divs_section3, divs_section3.length, allSectionDivs_2);
  divs_section3.forEach((div, i) => {

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= windowHeight * (i + allSectionDivs_2) && scroll < windowHeight * (i + allSectionDivs_2 + 1)) {
        console.log("in if" + i);
        div.style.opacity = 1.0;
      } else if (scroll >= windowHeight * (i + allSectionDivs_2 - 1) && scroll < windowHeight * (i + allSectionDivs_2)) {
        console.log("in else if");

        div.style.opacity = 0.5;

      } else {
        console.log("in else");
        if (i != divs_section3.length - 1) {
          div.style.opacity = 0.0;
        }

      }
    });
  });


});//$(function () のけつ


var boardFlg = false;
var boardFlg_before = false;
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, P2D);
  canvas.style('z-index', '-1');//キャンバスを背景にする
  //background(255);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
/*
function draw() {

  if (window.scrollY > windowHeight * 16) {
    boardFlg = true;
    if (boardFlg != boardFlg_before) {
      background(130, 180, 110);
    }

  }
  boardFlg_before = boardFlg;
}

function mouseDragged() {
  if (window.scrollY > windowHeight * 16) {
    noStroke();
    fill(130, 180, 110);
    ellipse(mouseX, mouseY, 10, 10);
  }
}*/