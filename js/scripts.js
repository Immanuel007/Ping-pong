$(document).ready(function(){
 $("form").click(function(event){
   event.preventDefault();
   var number =$("#number").val();
   var result = parseInt(number);
   user(result);
   my.forEach(function(result){
   $("#outcome").append("<li>" + result + "</li>");
 });
});
});

// business logic
var my=[];
 function user(result){
   for(index=1;index<=result;index++){

 if (index % 15 === 0) {
   my.push("pingpong");
}
 else if (index % 3 === 0){
   my.push("ping");
}
 else if (index % 5 === 0){
   my.push("pong");
 }
 else {
   my.push(index);
 }
}
}

$(document).ready(function(){
 $("button").click(function(){
   alert("Awesome!:)");
   alert("Let's start");
   alert("All the best dear user")
 });
 $("finished").click(function(){
   alert("Enjoyed the game?");
   alert("please give us your feedback about the game and subscribe to our channel");
   alert("Thankyou in advance");
 });
});
