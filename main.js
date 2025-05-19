
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-times');
            });
            
            const navLinksAll = document.querySelectorAll('.nav-links a');
            navLinksAll.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                });
            });
            
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            let currentSlide = 0;
            const slideCount = slides.length;
            
            function goToSlide(n) {
                slider.style.transform = `translateX(-${n * 100}%)`;
                currentSlide = n;
                
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === n);
                });
            }
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => goToSlide(index));
            });
            
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slideCount;
                goToSlide(currentSlide);
            }
            
            let slideInterval = setInterval(nextSlide, 5000);
            
            slider.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            slider.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextSlide, 5000);
            });
            
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will contact you shortly.');
                this.reset();
            });
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    document.querySelector('header').style.background = 'rgba(26, 26, 26, 0.95)';
                    document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
                } else {
                    document.querySelector('header').style.background = '#1a1a1a';
                    document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            });
        });
    