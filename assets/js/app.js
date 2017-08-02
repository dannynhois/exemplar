



var articleList = [];

function createRandomArticles () {
  return {
    title: faker.lorem.sentence(),
    text: faker.lorem.paragraphs()
  };
}

// create random articles
for (var i = 0; i < 5; i++) {
  articleList.push(createRandomArticles());
}

// create div variables
var divArticleList = $('#article-list');
var divArticleCurrent = $('#article-current');

// populate article list
articleList.forEach((article, index) => {
  var html = "<div class='article-title' value='" + index + "'>";
  html += article.title;
  html += '</div>';

  divArticleList.append(html);
});

// display current article
function displayCurrentArticle (article) {
  var html = '<h4>' + article.title + '</h4>';
  html = html + '<div>' + article.text + '</div>';
  divArticleCurrent.html(html);
}

// add click listener to each article title
divArticleList.on('click', '.article-title', function(){
  var currentIndex = $(this).attr('value');
  displayCurrentArticle(articleList[currentIndex]);
})

//*********************************************get button input********************
     $("#newButton").on("click", function(event) {
          // prevent form from trying to submit/refresh the page
       event.preventDefault();

       var comment = $("input").val().trim();
            console.log(comment);

            // var comment1 = $("<button>").text(comment);
            //     comment1.addClass("setButtons", comment);
            //     comment1.attr("data-subject",comment);
            //$("#pageButtons").append(comment1);//***************************
    });

//****************************************youtube*************************
 function start() {
        // Initializes the client with the API key and the Translate API.
        gapi.client.init({
          'apiKey': 'AIzaSyDE9ssybqcSunbGxGxv7UC9VquDqzcW8LY',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
        }).then(function() {
          // Executes an API request, and returns a Promise.
          // The method name `language.translations.list` comes from the API discovery.
          return gapi.client.language.translations.list({
            q: 'hello world',
            source: 'en',
            target: 'de',
          });
        }).then(function(response) {
          console.log(response.result.data.translations[0].translatedText);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      };

      // Loads the JavaScript client library and invokes `start` afterwards.
      gapi.load('client', start);

var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',//****************
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

  