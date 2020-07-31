$(window).scroll(function () {
    var t = $('.target').offset().top; // ターゲットの位置取得
    var p = t - $(window).height();  // 画面下部からのターゲットの位置
    if ($(window).scrollTop() > p) {
        $('.target').addClass('BG-BLUE');
        console.log("added");
    } else {
        $('.target').removeClass('BG-BLUE');
        console.log("removed");
    }
})


window.addEventListener('load', handleEffect())
window.addEventListener('scroll', this.handleEffect())

function handleEffect() {
    // get el
    let target = document.getElementsByClassName('target')

    for (var i = 0; i < target.length; i++) {
        console.log('i', i)
        let t_height = target[i].offsetHeight
        let t_classN = target[i].className

        // get target-position => distance from screen-top-position
        let offsetY = target[i].getBoundingClientRect().top

        // screen-height
        let screenHeight = window.outerHeight

        // judge of target-position in or out
        let t_position = offsetY - screenHeight


        // console.log('target = ', target)         : ターゲット一覧
        // console.log('t_height = ', t_height)     : ターゲットの高さ
        // console.log('offsetY = ', offsetY)       : スクリーン上部からターゲットまでの距離
        // console.log('t_position = ', t_position) : スクリーン下部からターゲットまでの距離


        /*
         * 1. -screenHeight <= (t_position + t_height ) : スクリーン上部とターゲットの下部までの距離
         *    ※マイナスなのは、スクリーン内に入るとt_positionはマイナスになるため
         *    
         * 2. t_position < 0 : スクリーン下部からターゲットまでの距離が、0未満 => スクリーン内に到達
         * 　
         */
        if (-screenHeight <= (t_position + t_height) && t_position < 0) { // 画面内
            if (t_classN.indexOf('fadeIn') == -1) { // fadeInなし
                t_classN = t_classN + ' fadeIn'      // fadeInクラス追加
            } else if (t_classN.indexOf('fadeOut') !== -1) {
                t_classN = t_classN.replace(/fadeOut/g, 'fadeIn') // fadeInに置き換え
            }
        } else { // 画面外
            if (t_classN.indexOf('fadeOut') == -1) { // fadeoutなし
                t_classN = t_classN + ' fadeOut'
            } else if (t_classN.indexOf('fadeIn') !== -1) {
                t_classN = t_classN.replace(/fadeIn/g, 'fadeOut')
            }
        }
        target[i].className = t_classN
    }
}