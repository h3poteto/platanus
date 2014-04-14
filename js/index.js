$(function(){
  setTimeout(function(){
    $('#alert_side').fadeIn(500);
  }, 2000);
  
  $(".modal_link").click(function(){
    $("#modalback").show();
    $("#modalwindow").show();
    $("#modalback").height($("#wrap").height() + 50);
  });
  $("#modalback").click(function(){
    $("#modalback").hide();
    $("#modalwidnow").hide();
  });

});