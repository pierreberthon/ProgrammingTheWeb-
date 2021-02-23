$(".button").on('click', function() {
  const tvShows = []
  $.getJSON('https://api.tvmaze.com/search/shows?q=silicon-valley', function(myDataset) {
    myDataset.forEach((element) => {
      console.log(element.show);
      tvShows.push(element);
    });
  });
});