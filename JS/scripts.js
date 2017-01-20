//BUSINESS LOGIC
var Input = 0;
var result = 0;

function generator () {
  for (var i = 1; i <= Input; i++) {
    console.log(i);
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
