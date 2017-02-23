$(document).ready(function(){
  var friends=[];
  friends.push("Mary","John","Dan");
  friends.forEach(function(friend){
    document.write("Hello "+friend+ "<br>");
  })
})
