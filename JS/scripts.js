//BUSINESS LOGIC
var Input = 0;
var result = 0;

function generator () {
  $("#result").text("");
  if (Input <= 0) {
    alert("Please put in positive integers")
  } else {
    for (var i = 1; i <= Input; i++) {
      result = i.toString();
      if ( i % 15 === 0){
        result = "ping-pong"
      } else if (i % 3 === 0) {
        result = "ping"
      } else if (i % 5 === 0) {
        result = "pong"
      }
      $("#result").append("<li>"+result+"</li>")
    };
  };
};

//USER INTERFACE
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    Input = parseInt($("#userinput").val());
    generator(Input);
  });
});
