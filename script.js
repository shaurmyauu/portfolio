document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    const skills = document.querySelectorAll('.skill');

    function animateSkills() {
        skills.forEach(skill => {
            const skillWidth = skill.getAttribute('data-width');
            skill.style.width = '0'; 
            setTimeout(() => {
                skill.style.width = skillWidth; 
            }, 300);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.disconnect();
            }
        });
    });

    observer.observe(document.querySelector('.skills-container'));


    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Lightbox functionality
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImg.src = image.src;
    lightbox.classList.add('show'); // Добавляем класс 'show' для плавного появления
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('show'); // Убираем класс 'show' для плавного скрытия
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show'); // Закрытие при клике вне изображения
  }
});
