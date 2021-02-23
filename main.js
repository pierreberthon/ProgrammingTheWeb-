$("img").hover( function() {
  this.setAttribute("style", "opacity: 0.7;");
  }, function () {
  this.removeAttribute("style")
  }
);

$("button").on('click', function() {
  var id = Number.parseInt(this.getAttribute("id"), 10)
  $.getJSON('https://api.tvmaze.com/search/shows?q=silicon-valley', function(myDataset) {
    myDataset.forEach((element) => {
      console.log(element.show.id)
      if (element.show.id === id) {
        $(".description").html("");
        $(".description").append("<h4>" + element.show.name + "</h4>");
        $(".description").append("<ul>" + "<li> Score: " + element.score + "</li>" + "<li> Language: " + element.show.language + "</li>" + "<ul>");
        $(".description").append("<p>" + element.show.summary + "</p>");
      };
    });
  });
});
