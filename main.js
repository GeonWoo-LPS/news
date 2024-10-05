// cc646fdf106947678f84ccf276fbdd99

'use strict';
let search = document.getElementById('search');
let news = document.getElementById('news');
let result = document.getElementById('result');

search.addEventListener('click', function () {
  let xhr = new XMLHttpRequest();
  xhr.open(
    'get',
    `https://newsapi.org/v2/everything?q=${news.value}&apiKey=cc646fdf106947678f84ccf276fbdd99`,
    true
  );
  xhr.onload = function () {
    let getResult = xhr.responseText;
    let resultObj = JSON.parse(getResult);
    let article = resultObj['articles'];
    let resultTxt = '';
    for (let i = 0; i < article.length; i++) {
      let title = article[i]['title'];
      let author = article[i]['author'];
      let publishedAt = article[i]['publishedAt'];
      let url = article[i]['url'];
      let description = article[i]['description'];
      let urlToImage = article[i]['urlToImage'];

      resultTxt += `
      <div class='contents'>
        <div class="textWrap">
        <h4>${title}</h4>
        <span>${author}-${publishedAt}-</span>
        <a href="#" onclick="window.open('${url}', '_blank', 'left=1000, top=500, width=1000, height=600')">more</a>
        <p>${description}</p>
      </div>
        <img src='${urlToImage}'>
      </div>
      `;
    }
    result.innerHTML = resultTxt;
  };
  xhr.send();
});
