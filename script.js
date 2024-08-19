document.addEventListener('DOMContentLoaded', () => {
    // Плавное появление сайта
    document.body.classList.add('loaded');

    // Анимация навыков
    const skills = document.querySelectorAll('.skill');

    function animateSkills() {
        skills.forEach(skill => {
            const skillWidth = skill.getAttribute('data-width');
            skill.style.width = '0'; // Изначально скрываем полоску
            setTimeout(() => {
                skill.style.width = skillWidth; // Анимация полоски при прокрутке
            }, 300);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.disconnect(); // Отключаем наблюдателя после анимации
            }
        });
    });

    observer.observe(document.querySelector('.skills-container'));

    // Плавная прокрутка при нажатии на ссылки в меню
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
