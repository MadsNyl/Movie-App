const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

fetch('/movies', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}).then(res => res.json()).then(data => {
    console.log(data);
    data.results.forEach(data => {
        const container = document.getElementById('container');
        const movieElement = document.createElement('div');
        movieElement.classList.add('movieContainer');

        movieElement.innerHTML = `
            <img class="movieIMG" id="img" src="${IMG_PATH + data.poster_path}" alt="">
            <div class="movieInfoContainer">
                <h1>${data.title}</h1>
                <p>${data.vote_average}</p>
            </div>
            <div class="overview">${data.overview}</div>
        `;

        container.appendChild(movieElement);
    });
});




