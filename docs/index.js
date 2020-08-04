$(function () {

  // Initialize variables　変数宣言
  var $window = $(window);
  var windowWidth = window.innerWidth;//スクロールバーを含んだ値で画面サイズを取得
  var windowHeight = window.innerHeight;
  console.log("ウィンドウ幅" + windowWidth, "ウィンドウ高さ" + windowHeight);
  $('#windowHeight').text($(window).height());
  $('#windowWidth').text($(window).width());


  var emp1 = document.getElementById('empty-1');
  var $canvas1 = document.getElementById("defaultCanvas0");



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
        div.style.opacity = 0.3;
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
        div.style.opacity = 1.0;
      } else if (scroll >= windowHeight * (i + allSectionDivs - 1) && scroll < windowHeight * (i + allSectionDivs)) {
        if (i < divs_section2.length - 11) {//登ってくるとき見えないブロックの数分ひく
          div.style.opacity = 0.2;
        }
        if (i == divs_section2.length - 1) {//次のelseで最後の一つだけ残るように処理しているので登ってくる時は見えないように
          div.style.opacity = 0.0;
        }
      } else {
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
        div.style.opacity = 1.0;
      } else if (scroll >= windowHeight * (i + allSectionDivs_2 - 1) && scroll < windowHeight * (i + allSectionDivs_2)) {

        div.style.opacity = 0.1;

      } else {

        if (i != divs_section3.length - 1) {
          div.style.opacity = 0.0;
        }

      }
    });

    $(window).scroll(function () {
      if (window.scrollY > windowHeight * 24) {
        boardFlg = true;
        if (boardFlg != boardFlg_before) {

          console.log("p color changed");
          document.getElementById("wrapper").style.color = "#FFFFFF";
        }

      }
    });

  });


  var boardFlg = false;
  var boardFlg_before = false;


  var sketch1 = function (p) {
    p.setup = function () {
      p.createCanvas(windowWidth, windowHeight);
      p.noStroke();
    };

    p.draw = function () {

      if (boardFlg != boardFlg_before) {
        p.background(16, 92, 56);
        console.log("background changed");

      }
      boardFlg_before = boardFlg;
    };
  };

  var sketch2 = function (p) {
    p.setup = function () {
      p.createCanvas(windowWidth, windowHeight);
      p.noStroke();

    };

    p.draw = function () {

    };
    p.mouseDragged = function () {
      if (boardFlg == true) {

        p.fill(16, 92, 56);
        p.ellipse(p.mouseX, p.mouseY, 10, 10);
      }
    }
  };

  new p5(sketch1, "canvasContainer1");
  new p5(sketch2, "canvasContainer2");

});//$(function () のけつ






/*function setup() {
  var canvas1 = createCanvas(windowWidth, windowHeight, P2D);
  var canvas2 = createCanvas(windowWidth, windowHeight, P2D);
  canvas1.parent('canvasContainer1');
  canvas2.parent('canvasContainer2');
  canvas1.style('z-index', '-1');//キャンバスを背景にする
  canvas2.style('z-index', '-1');//キャンバスを背景にする
  background(215, 100);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {


  if (boardFlg != boardFlg_before) {
    background("#105c38");

  }
  boardFlg_before = boardFlg;
}


function mouseDragged() {
  if (window.scrollY > windowHeight * 24) {
    noStroke();
    fill(130, 180, 110);
    ellipse(mouseX, mouseY, 10, 10);
  }
}*/