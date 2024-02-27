//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [//PC用の画像
        { src: 'img/header1@2x.jpg'},
        { src: 'img/header2@2x.jpg'},
        { src: 'img/header3@2x.jpg'}
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: 'img/header1.jpg' },
        { src: 'img/header2.jpg' },
        { src: 'img/header3.jpg' }
      ];
    }



//クリックしたらナビが右から左に出現
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});



//Vegas全体の設定

$('#slider').vegas({
    overlay: true,
    transition: 'blur',
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 10000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'kenburns',//スライドアニメーションの種類。
    slides: responsiveImage,//画像設定を読む
  });// JavaScript Document
