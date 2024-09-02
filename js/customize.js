$(function(){
  var _tabItemLength=$(".tab .tab_item li").length;
  $(".tab .tab_item li").css({
    width: (100/_tabItemLength)+'%'
  });
  $(".tab_content").not(":first").hide();
  $(".tab .tab_item li").click(function(e){
    var _index=$(this).index();
    $(".tab .tab_item li").removeClass("active");
    $(this).addClass('active');
    $(".tab .tab_container .tab_content").hide().eq(_index).show();
    e.preventDefault();
  });
  $(".b_nav ul ul").hide();
  $(".b_nav a.member").click(function(e) {
    $(this).next('ul').toggle();
    $(this).addClass('active');
    e.preventDefault();
  });

  $("a.icon_download").click(function(e) {
    $("body").addClass("noscroll");
    $(".wrapper").prepend('<div class="message_block"><div class="message"><a href="#" class="message_close"></a><p>本應用程式下載檔案將放置本機<em>「個人藏書」</em>> <em>「HyRead Journal」</em>資料夾內。</p><div class="btn_grp"><input type="button"  class="btn" value="確定" /></div></div></div>')
    e.preventDefault();
  });
  $(".a.logout").click(function(e) {
    $("body").addClass("noscroll");
    $(".wrapper").prepend('<div class="message_block"><div class="message"><a href="#" class="message_close"></a><p>確定您要登出系統？<br/>所有下載期刊都放置本機<em>「個人藏書」</em>> <em>「HyRead Journal」</em>資料夾內。</p><div class="btn_grp"><input type="button" class="btn" value="確定" /><input type="reset" class="btn" value="取消" /></div></div></div>')
    e.preventDefault();
  });
  $(".journal_tb a.icon_collect").click(function(e) {
    $("body").addClass("noscroll");
    if ($(this).hasClass('active')) {
      $(".wrapper").prepend('<div class="message_block"><div class="message"><a href="#" class="message_close"></a><p>本期刊已收藏，是否移除收藏？</p><div class="btn_grp"><input type="button" class="btn" value="是" /><input type="reset" class="btn" value="否" /></div></div></div>')
    } else {
      $(".wrapper").prepend('<div class="message_block"><div class="message"><a href="#" class="message_close"></a><p>本期刊尚未收藏，確定是否收藏？</p><div class="btn_grp"><input type="button" class="btn" value="是" /><input type="reset" class="btn" value="否" /></div></div></div>')
    }
    e.preventDefault();
  });
  $(".article_tb a.icon_collect").click(function(e) {
    $("body").addClass("noscroll");
    if ($(this).hasClass('active')) {
      $(".wrapper").prepend('<div class="message_block"><div class="message"><a href="#" class="message_close"></a><p>本篇幕已收藏，是否移除收藏？</p><div class="btn_grp"><input type="button" class="btn" value="是" /><input type="reset" class="btn" value="否" /></div></div></div>')
    } else {
      $(".wrapper").prepend('<div class="message_block"><div class="message"><a href="#" class="message_close"></a><p>本篇目尚未收藏，確定是否收藏？</p><div class="btn_grp"><input type="button" class="btn" value="是" /><input type="reset" class="btn" value="否" /></div></div></div>')
    }
    e.preventDefault();
  });
  $("a.message_close").click(function(e) {
    $(".message_block").remove();
    $("body").removeClass("noscroll");
    e.preventDefault();
  });
  $("body").on("click", ".message_block", function() {
    $(".message_block").remove();
  });

  $('.gotop').click(function(){ 
    $('html,body').animate({scrollTop:0}, 333);
  });

  $(".news_block .news_content").hide();
  $(".news_block .news_title").click(function(e) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').next(".news_content").slideUp();
    } else {
      $(".news_block .news_title").removeClass('active').next(".news_content").slideUp();
      $(this).addClass('active').next(".news_content").slideDown();
    }
  });

});
