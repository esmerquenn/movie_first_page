$(document).ready(function(){
    $('.carousel').carousel();
  });
function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("Images/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    const movieTitle = document.querySelector('.movie-title');
    movieTitle.src = `Images/${title}-title.png`;

    contents.forEach(content => {
        content.classList.add('active');
    });
}
