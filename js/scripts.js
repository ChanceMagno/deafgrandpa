$(document).ready(function() {
  $("#formOne").submit(function() {
    var person1Input = $("input#saysomething").val();

    $(".inputtedUser").text(person1Input.toUpperCase());
    $("#story").show();

    event.preventDefault();
  });
});
