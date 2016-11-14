'use strict';

var articles = [];

function Article (opts) {
  // TODO: Use the js object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`
  this.author = opts.author;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);

  /* TODO: Now use jQuery to fill in the rest of the current
  template clone with properties from this particular Article instance.
  We need to fill in:
    1. author name,
    2. author url,
    3. article title,
    4. article body, and
    5. publication date. */
    // Display the date as a relative number of 'days ago'
    $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
    $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

    /* TODO: This cloned article is no longer a template,
    as it now has real data attached to it! We need to account
    for that before this current article gets rendered to our
    DOM. */
    return $newArticle;
};

ourLocalData.sort(function(firstElement, secondElement) {
  return (new Date(secondElement.publishedOn)) - (new Date(firstElement.publishedOn));
});

ourLocalData.forEach(function(theCurrentArticleObject) {
  articles.push(new Article(theCurrentArticleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
