//BUSINESS LOGIC
var Input = 0;;
var Output = []

function generator () {
  for (var i = 1; i <= Input; i++) {
    Output.push(i);
    for (var j = 0; j < Output.length; j++) {
      if ( Output[j] % 15 === 0){
        Output.splice(j,1,"ping-pong");
      } else if (Output[j] % 3 === 0) {
        Output.splice(j,1,"ping");
      } else if (Output[j] % 5 === 0) {
        Output.splice(j,1,"pong");
      };
      $("#result").append("<li>"+Output[j]+"</li>")
    }

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
