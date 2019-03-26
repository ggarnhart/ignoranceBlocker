$("body").append(`<div class="injection">
<div class="col col-md">
  <div class="jumbotron text-center">
    <img src="https://media.canadianunderwriter.ca/uploads/2017/08/cuw-alert-icon.png" class="warning" />
    <h1 class='greg-header'>Warning</h1>
    <p class='greg-text'>
      This site has been marked as
      <span class="bold">ignorant.</span> Visitors are frequently subject to
      false claims, misinformation, and lies.
    </p>
    <br>
    <button class="greg-button good-button" id="safeSite">Take me to a safe site</button>
    <button class="greg-button bad-button" id="dismiss">
      I accept the risk of ignorance
    </button>
    <br>
    <br>
  </div>
</div>
</div>
`);

$("#dismiss").click(function() {
  $(".injection").css("display", "none");
});

$("#safeSite").click(function() {
  var safe_sites = [
    "https://nytimes.com",
    "https://www.wsj.com/",
    "https://www.washingtonpost.com/",
    "https://www.npr.org/",
    "https://www.cnn.com/",
    "https://www.bbc.com/news",
    "https://www.economist.com/",
    "https://www.newyorker.com/",
    "https://www.foreignaffairs.com/",
    "https://www.theatlantic.com/",
    "https://www.politico.com/",
    "https://time.com",
    "https://www.csmonitor.com/",
    "https://www.latimes.com/",
    "https://www.usatoday.com/",
    "https://www.cnn.com/",
    "https://www.bloomberg.com/businessweek"
  ];
  var site = safe_sites[Math.floor(Math.random() * safe_sites.length)];
  window.location.replace(site);
});
