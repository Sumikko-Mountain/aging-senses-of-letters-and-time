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

  var $year_1 = $('.year_1.unit');
  var $year_2 = $('.year_2.unit');

  var obj = document.getElementById('sentece_1');
  var obj2 = document.getElementById('sentece_2');
  var $obj2 = $('#sentece_2');
  var obj3 = document.getElementById('sentece_3');
  var obj4 = document.getElementById('sentece_4');
  var obj5 = document.getElementById('sentece_5');
  var obj6 = document.getElementById('sentece_6');





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
    if ($(this).scrollTop() >= windowHeight * 5) {
      obj6.style.opacity = 1.0;
      obj5.style.opacity = 0.0;
      console.log("sentence_6");
    } else if ($(this).scrollTop() >= windowHeight * 4) {
      obj5.style.opacity = 1.0;
      obj4.style.opacity = 0.0;
      console.log("sentence_5");
    } else if ($(this).scrollTop() >= windowHeight * 3) {
      obj4.style.opacity = 1.0;
      obj3.style.opacity = 0.0;
      console.log("sentence_4");
    } else if ($(this).scrollTop() >= windowHeight * 2) {
      obj3.style.opacity = 1.0;
      obj2.style.opacity = 0.0;
      console.log("sentence_3");
    } else if ($(this).scrollTop() >= windowHeight) {
      obj2.style.opacity = 1.0;
      obj.style.opacity = 0.0;
      console.log("sentence_2");
    } else {
      console.log("sentence_1");
      obj.style.opacity = 1.0;
    }
  }

  $('.block-one').scroll(function () {
    console.log($(this).scrollTop() + 'px');
  });

  $(window).scroll(scroll);

  $(document).on('mousemove', (event) => {

  });


  /*
 
  // Sets the client's username　ユーザー名のセット
  const setUsername = function () {
    username = cleanInput($usernameInput.val().trim());//usernameInputの値を取得し、文字列の両端の空白を削除
    //CleanInputメソッドはピリオド (.)、アット記号 (@)、ハイフン (-) を除く英数字以外のすべての文字を取り除き、残りの文字列を返す、カナも平気っぽい
 
    // If the username is valid usernameが空じゃなかったら
    if (username) {
      $loginPage.fadeOut();//<li class="login page">をF.O.して
      $setWordsPage.show();
      $loginPage.off('click');//このように対象要素.off( イベント名, セレクタ )とすることで、クリックイベント処理を動的に削除できる
      $NGwordInput.focus();

    }
  }
 
  //Enterキーで進めることがわからないユーザーもいるかもしれないのと、統一感のためにユーザー名の提出にもボタンをおいた
  $('#submitName').click(() => {
    console.log('submit name');
 
    $loginPage.fadeOut();//<li class="login page">をF.O.して
    $setWordsPage.show();
    $loginPage.off('click');//このように対象要素.off( イベント名, セレクタ )とすることで、クリックイベント処理を動的に削除できる
    $NGwordInput.focus();

 
  });

  const addMessageElement = (el) => {
    var $el = $(el);
 
    if (options.fade) {//options.fade == trueのとき
      $el.hide().fadeIn(FADE_TIME);//メッセージをFADE_TIMEでF.I
    }
  
    $messages[0].scrollTop = $messages[0].scrollHeight;
    
  }
 
  // Prevents input from having injected markup マークアップが注入された入力を防ぐ
  const cleanInput = (input) => {
    return $('<div/>').text(input).html();//?
  }
 
  // Updates the typing event
  const updateTyping = () => {
    if (connected) {
      if (!typing) {//直前の状態がtyping==falseだったら
        typing = true;//typingフラグをtrueにする

      }
      lastTypingTime = (new Date()).getTime();
 
      setTimeout(() => { //setTimeout(関数function, 一定時間の指定[, 引数1, 引数2, …])
        var typingTimer = (new Date()).getTime();//現在の日時を取得してtypingTimerに格納
        var timeDiff = typingTimer - lastTypingTime;//現在と最後にタイピングしていた時との差を取る
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {//その差がTYPING_TIMER_LENGTHより長く、（まだ）タイピング中（の判定）だったら
          socket.emit('stop typing');//タイピングをやめたとみなしstop typingイベントを送信
          typing = false;//フラグをfalseに書き換える
        }
      }, TYPING_TIMER_LENGTH);
    }
  }
 

  /*
  // Keyboard events
 
  $window.keydown(event => {
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {//meta kye　はMacintoshでは、Commandキー、WindowsではWindowsキー
      $currentInput.focus();
    }
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {//ENTERキーを押したとき
      if (username) {//3つすべてが決まっていたら=既にchat内にいたら　usernameだけでも作動はする　if (username && NGword && HAPPYword) {
        sendMessage();
        typing = false;
      } else {
        setUsername();
      }
    }
  });
 
  $inputMessage.on('input', () => {
    updateTyping();
  });
 
  // Click events
 
  // Focus input when clicking anywhere on login page
  $loginPage.click(() => {
    $currentInput.focus();
  });
 
  $setWordsPage.click(() => {
    // $NGwordInput.focus();
  });
 
  // Focus input when clicking on the message input's border
  $inputMessage.click(() => {
    $inputMessage.focus();
  });*/



});
