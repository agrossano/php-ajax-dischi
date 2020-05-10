function printAlbum(album) {
  var template = Handlebars.compile($("#template").html());
  for (var key in album) {
    var currentAlbum = (album[key]);
    var context = {
      poster: currentAlbum.poster,
      title: currentAlbum.title,
      author: currentAlbum.author,
      year: currentAlbum.year
    };
    $('.albums').append(template(context))
  }
}


function apiCall() {
  $.ajax({
    url: "api/api.php",
    success: function (data) {
      printAlbum(data)
    },
    error: function (error) {
      alert('errore');
    },
  })
}


function artistFilter() {
  var SearchedAuthor = $(".search").val();
  //console.log(author)
  $.ajax({
    url: "api/artistfilter.php",
    method: 'GET',
    data: {
      artist: SearchedAuthor
    },
    success: function (data) {
      $('.albums').html('');
      printAlbum(data);

    },
    error: function (error) {
      $('.albums').html('');
      $('.albums').append('Nessuna corrispondenza')
    }
  })

}


function init() {
  apiCall();
  $(".cerca").click(artistFilter);
  $(".input").keypress(function (e) {
    if (e.which == 13) {
      artistFilter();
    };
  });
}

$(document).ready(init);