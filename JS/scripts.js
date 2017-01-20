//BUSINESS LOGIC
var Input = 0;

//USER INTERFACE
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    Input = parseInt($("#userinput").val());
  });
});
