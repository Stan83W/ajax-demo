const form = document.querySelector('#search-movies');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // <-- to prevent <form>'s native behaviour
  const input = event.currentTarget.querySelector('.form-control');
  results.innerHTML = '';
  searchMovies(input.value);
});



const searchMovies = (query) => {
  fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<li>
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
        </li>`;
        results.insertAdjacentHTML("beforeend", movie);
      });
    });
};
