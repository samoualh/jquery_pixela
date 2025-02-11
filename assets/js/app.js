function displayShows(q, shows) {
    $("#results").html(`<h2>${shows.length} ${shows.length == 1 ? "result" : "results"} for ${q}</h2>`);
  
    for (const s of shows) {
      const show = s.show;
      let html = `<h3>${show.name}</h3>`;
  
      if (!show.image) {
        html += `<div><img src="https://placehold.co/210x295" alt="${show.name}"></div>`;
      } else {
        html += `<div><img src="${show.image.medium}" alt="${show.name}"></div>`;
      }
  
      if (!show.summary) {
        html += "<p><em>No summary.</em></p>";
      } else {
        html += show.summary;
      }
  
      if (show.officialSite) {
        html += `<p><a href="${show.officialSite}">Visit official site</a></p>`;
      }
  
      $("#results").append(html);
    }
  
    $("#results").show();
  }
  
  $("#search").on("submit", function (e) {
    e.preventDefault();
  
    const q = $("#q").val();
  
    if (!q.trim()) {
      alert("Please enter a show name to search");
      return;
    }
  
    $.get(`https://api.tvmaze.com/search/shows?q=${q}`)
      .done(function (data) {
        console.log(data);
  
        if (!data.length) {
          alert(`No result for "${q}"`);
          return;
        }
  
        displayShows(q, data);
        $("#q").val("");
      })
      .fail(function (error) {
        console.log(error);
        alert(error.statusText);
      });
  });