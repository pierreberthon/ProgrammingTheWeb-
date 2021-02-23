$(".button").on('click', function() {
  const tvShows = []
  $.getJSON('https://api.tvmaze.com/search/shows?q=silicon-valley', function(myDataset) {
    myDataset.forEach((element) => {
      tvShows.push(element);
      $('body').append("<p>" + element.show.runtime + "</p>");
      $('body').append("<p>" + element.show.name + "</p>");
      $('body').append("<p>" + element.show.summary + "</p>");
    });
  });
});