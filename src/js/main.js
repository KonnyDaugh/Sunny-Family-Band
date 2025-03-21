import '../sass/style.scss';

const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuAbout = document.querySelector('.menu__about');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuAbout.addEventListener('click', () => {
    menu.classList.remove('active');
});

let currentAudio = null;

document.querySelectorAll('.audio-player').forEach(player => {
    const audio = player.querySelector('audio');
    const playIcon = player.querySelector('.playIcon');
    const pauseIcon = player.querySelector('.pauseIcon');

function togglePlay() {
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause(); // Останавливаем другой играющий аудиофайл
        currentAudio.closest('.audio-player').querySelector('.playIcon').style.display = "block";
        currentAudio.closest('.audio-player').querySelector('.pauseIcon').style.display = "none";
    }
    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        currentAudio = audio; // Запоминаем текущий аудиофайл
    } else {
        audio.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        currentAudio = null;
        }
    }

    playIcon.addEventListener("click", togglePlay);
    pauseIcon.addEventListener("click", togglePlay);
});

// document.getElementById("scrollToPlaylist").addEventListener("click", function() {
// document.getElementById("playlist").scrollIntoView({ behavior: "smooth" });
// });