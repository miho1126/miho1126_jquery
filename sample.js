$(function(){
  $('#js-click-btn').on('click',function(){
    $(this).addClass('large-btn');
  })

   //ボタンの色変更

   $('#js-hover-btn').mouseover(function(){
    $(this).addClass('opacity')
   }).mouseleave(function(){
     $(this).removeClass('opacity')
   });
   console.log($('#js-hover-btn'));


  // これ使う！！！！！　消える！出現！　一回決して置かないと表示されないからこれは2つで１セット。
  // 出現
  $('#js-show-btn').on('click',function(){
   //  ミリビョウ
   // alideUpも可能
   // slideDownも可能
    $('#js-target-element').fadeIn(2000)
  });
// 消える
   $('#js-hide-btn').on('click',function(){
    //  ミリビョウ
    // alideUpも可能
     $('#js-target-element').fadeOut(2000)
   });

  //  要素の追加
  // 要素の外に追加したい場合。
   $('#js-add-btn').on('click',function(){
    //  ボタンの前にボタンが追加される。
    //  $(this).before('<li class="btn">ボタンの前に追加</li>')
    // ボタンの後ろにボタンが追加される。
    $(this).after('<li class="btn">ボタンの後ろに追加</li>')
   });

   $('#js-add-btn2').on('click',function(){
    //  ボタンの中のリストを作ることでボタンの中の上に前後を追加できる。
    //  $(this).prepend('<li>前</li>');
    $(this).append('<li>後</li>');
    // 余談　ーー
    // $('.q-box').append('<p>文章追加</p>');
   });

//toggleメニュー,siblings:兄弟の意味、本人は入らない。
// $('.js-toggle','')カンマで2つとか指定できる。
   $('.js-toggle').on('click',function(){
     $(this).toggleClass('on');
    //関東以外の要素がスライドでトグルで隠れている。1つずつがスライドする。
     $(this).siblings().slideToggle();
   });



});




