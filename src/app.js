function callApi() {
  $.ajax({
    url: "db.php",
    success: function (data) {
      for (let key in data) {
        var album = (data[key]);
        var template = Handlebars.compile($("#template").html());
        var context = {
          poster: album.poster,
          title: album.title,
          author: album.author,
          year: album.year
        };
        $('.albums').append(template(context))
      }
    },
    error: function (error) {
      alert('errore');
    },
  })
}


function init() {
  callApi();
}

$(document).ready(init);