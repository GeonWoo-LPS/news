// cc646fdf106947678f84ccf276fbdd99

'use strict';
let search = document.getElementById('search');
let news = document.getElementById('news');
let result = document.getElementById('result');

button.addEventListener('click', function () {
  let xhr = new XMLHttpRequest();
  xhr.open(
    'get',
    `https://newsapi.org/v2/everything?q=${news.value}&apiKey=cc646fdf106947678f84ccf276fbdd99`,
    true
  );
});
