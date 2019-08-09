$(document).ready(function() {
  let curr = 1;
  let end = 7;
  display(1);

  function display(x) {
    var projects = $("#stuff").children(); 
    for (var i = 0; i < end; i++) {
      $(projects[i]).hide(); 
    }
    $(projects[x-1]).show();
    showDot(x-1); 
  }

  function showDot(x) {
    $(".dot").removeClass("active"); 
    $(".dot:eq(" + String(x) +")").addClass("active"); 
  }

  $("#next").click(function() { 
    curr++;
    if (curr > end) {
      $("#next").css("opacity", 0.5); 
      $("#prev").css("opacity", 1);
      curr = end;
    } else {
      $("#next").css("opacity", 1);
      $("#prev").css("opacity", 1);
    }
    display(curr);
  });

  $("#prev").click(function() {
    curr--;
    if (curr < 1) {
      $("#prev").css("opacity", 0.5);
      $("#next").css("opacity", 1);
      curr = 1;
    } else {
      $("#prev").css("opacity", 1);
      $("#next").css("opacity", 1);
    }
    display(curr);
  });

  $(".dot:eq(0)").click(function() {
    $(this).addClass("active");
    $("#prev").css("opacity", 1);
    $("#next").css("opacity", 1);
    curr = 1;
    display(curr);
  });

  $(".dot:eq(1)").click(function() {
    $(this).addClass("active");
    $("#prev").css("opacity", 1);
    $("#next").css("opacity", 1);
    curr = 2;
    display(curr);
  });

  $(".dot:eq(2)").click(function() {
    $(this).addClass("active");
    $("#prev").css("opacity", 1);
    $("#next").css("opacity", 1);
    curr = 3;
    display(curr);
  });

  $(".dot:eq(3)").click(function() {
    $(this).addClass("active");
    $("#prev").css("opacity", 1);
    $("#next").css("opacity", 1);
    curr = 4;
    display(curr);
  });

  $(".dot:eq(4)").click(function() {
    $(this).addClass("active");
    $("#prev").css("opacity", 1);
    $("#next").css("opacity", 1);
    curr = 5;
    display(curr);
  });

  $(".dot:eq(5)").click(function() {
    $(this).addClass("active");
    $("#prev").css("opacity", 1);
    $("#next").css("opacity", 1);
    curr = 6;
    display(curr);
  });

  $(".dot:eq(6)").click(function() {
    $(this).addClass("active");
    $("#prev").css("opacity", 1);
    $("#next").css("opacity", 1);
    curr = 7;
    display(curr);
  });

  $(".dot:eq(7)").click(function() {
    $(this).addClass("active");
    $("#prev").css("opacity", 1);
    $("#next").css("opacity", 1);
    curr = 8;
    display(curr);
  });

});
