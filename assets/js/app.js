



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


$("#searchButton").on("click", function(event) {
// prevent form from trying to submit/refresh the page
event.preventDefault();
//get the search term
var searchTerm = $("input").val().trim();
//console.log(searchTerm);
//add search term to iframe format
var iframe = '<iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/?listType=search&list='+searchTerm+'"frameborder="0" allowfullscreen></iframe>'
//console.log(iframe1);
//add iframe to html
$("#ytNew").append(iframe);
});
  