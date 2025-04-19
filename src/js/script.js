import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../sass/style.scss';

const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuLinks = document.querySelectorAll('.menu__list a');

burger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.classList.add('lock');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('lock');
});

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        
        // Если это якорь (а не внешняя ссылка)
        if (targetId.startsWith("#")) {
            event.preventDefault(); // Отключаем стандартное поведение
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        }

        // В любом случае: закрываем меню и разблокируем прокрутку
        menu.classList.remove('active');
        document.body.classList.remove('lock');
    });
});

new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
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

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.about__wrap-tab');
    const contents = document.querySelectorAll('.about__content');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const lang = tab.getAttribute('data-lang');

        // Удаляем и добавляем active класс
        tabs.forEach((btn) => btn.classList.remove('active'));
        tab.classList.add('active');

        // Показываем нужный языковой блок
        contents.forEach((content) => {
          content.style.display =
            content.getAttribute('data-lang') === lang ? 'block' : 'none';
        });
      });
    });

    // Активируем по умолчанию английский таб
    const defaultTab = document.querySelector('.about__wrap-tab[data-lang="en"]');
    if (defaultTab) defaultTab.click();
  });