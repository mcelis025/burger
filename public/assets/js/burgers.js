$(function() {
  $(".changeDevoured").on("click", function(event) {
    var id = $(this).data("id");
    
    var newBurger = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $("#subOrder").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
