$(document).ready(function()
{
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var ping-pong = parseInt($("input#number").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
