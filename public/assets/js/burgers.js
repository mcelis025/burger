// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
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

  $(".burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
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
