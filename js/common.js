$(function(){
  var curl = window.location;
  var menu_url = "./menu/left.html";
  var pos = curl.href.indexOf("event");
  if( pos != -1 ){
    menu_url = curl.href.substring(0,pos) + "menu/left.html";
  }

  $("#leftbox").load(menu_url,function(){

    // left menu select
    var url = window.location;
    if( url.href.indexOf("event") != -1 ){
      SelectMenu("event");
    }else if( url.href.indexOf("member") != -1 ){
      SelectMenu("member");
    }else if( url.href.indexOf("contact") != -1 ){
      SelectMenu("contact");
    }else if( url.href.indexOf("link") != -1 ){
      SelectMenu("link");
    }else{
      SelectMenu("index");
    }

    // height change
    $("#leftbox").height($("#mainbox").height());

    
  });


  // background change
  var rdmimg=[];
  rdmimg[0]='./back_piano_1.jpg';
  rdmimg[1]='./back_violin_2.jpg';
  rdmimg[2]='./back_fl_1.jpg';
  rdmimg[3]='./back_fl_2.jpg';
  rdmimg[4]='./back_guitar_1.jpg';
  rdmimg[5]='./back_piano_2.jpg';
  rdmimg[6]='./back_violin_1.jpg';
  var rdmhead=Math.floor( rdmimg.length*Math.random());
  $('#mainbox').css("background-image", "url(" +rdmimg[rdmhead]+")");
});

function SelectMenu( page ){
  $('#leftbox').children('h4').each(function(){
    var $h = $(this);
    var $a = $h.children('a');
    var href = $a.prop('href');
    if( href.indexOf(page) != -1 ){
      $h.removeClass('menu_not');
      $h.addClass('menu_select');
      $a.removeClass('link_menu');
      $a.addClass('link_menu_select');
    }
  });
}