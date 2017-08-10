$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      if (gender === 'male' && age <= 40) {
        $('#younglady').show();
        $("#oldlady,#youngman,#oldman").hide();
      } else if (gender === 'male' && age > 40) {
        $('#oldlady').show();
        $("#younglady,#youngman,#oldman").hide();
      } else if (gender === 'female' && age <= 40) {
        $('#youngman').show();
        $("#oldlady,#younglady,#oldman").hide();
      } else if (gender === 'female' && age > 40) {
        $('#oldman').show();
        $("#oldlady,#youngman,#younglady").hide();
      } else {
        $('#other').show();
      }
    } else {
      alert('Please enter your age.');
    };
    event.preventDefault();
  });
});
