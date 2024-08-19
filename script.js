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
