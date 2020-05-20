const enviarTweet = document.querySelector('tweet-write__boton');
const formulario = document.querySelector('form');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((resp) => {
    resp.map((data) => {
      let { name, username } = data;
      let array = [];
      array.push(data.name);
      array.map((user) => {
        user;
      });
    });
  });
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const textArea = document.querySelector('.tweet-write__area').value;
  if (textArea == '') {
  } else {
    const tweet = document.createElement('div');
    const tweetUser = document.createElement('div');
    tweetUser.className = 'tweet__user';
    tweet.className = 'tweet';
    const img = document.createElement('img');
    numero = Math.floor(Math.random() * 100);
    img.src = `https://picsum.photos/${numero}`;
    img.className = 'tweet__img';
    const pName = document.createElement('p');
    pName.className = 'tweet__name';
    pName.innerHTML = `<span>Ezequiel Pereyra</span> @Ezhepereyra . 5min`;
    const pDescriptions = document.createElement('p');
    pDescriptions.className = 'tweet__descriptions';
    pDescriptions.textContent = textArea;
    tweet.appendChild(img);
    tweetUser.appendChild(pName);
    tweetUser.appendChild(pDescriptions);
    const divIcons = document.createElement('div');
    divIcons.className = 'content-tweet__icons';
    const icons = `
   <i class="tweet__icons fas fa-retweet"></i>
                <i class="tweet__icons fas fa-share-square"></i>
                <i class="tweet__icons far fa-thumbs-up"></i>
                <i class="tweet__icons far fa-star"></i>
  `;
    divIcons.innerHTML = icons;
    tweetUser.appendChild(divIcons);
    tweet.appendChild(tweetUser);

    document.querySelector('.content__tweets').prepend(tweet);
    formulario.reset();
  }
});
