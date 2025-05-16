// قائمة الهاتف
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// تأثير التمرير للنافبار
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.padding = '15px 10%';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '20px 10%';
    }
});

// تحميل الصفحة بسلاسة
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Slider للـ Skills
const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const slideCount = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
});

// التمرير التلقائي
let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}, 3000);

// إيقاف التمرير التلقائي عند التوقف على Slider
const skillsSlider = document.querySelector('.skills-slider');
skillsSlider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

skillsSlider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }, 3000);
});