// Online Learning Platform - JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        // Form validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate login
        console.log('Login attempt:', { email });
        alert('Login successful! Welcome back.');
        
        // Clear form
        this.reset();
    });
}

// Signup Form Handler
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input');
        const fullName = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;
        const confirmPassword = inputs[3].value;
        
        // Form validation
        if (!fullName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        // Simulate signup
        console.log('Signup attempt:', { fullName, email });
        alert('Account created successfully! Welcome to LearnHub.');
        
        // Clear form
        this.reset();
    });
}

// Course enrollment handler
const enrollButtons = document.querySelectorAll('.btn-enroll');
enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseCard = this.closest('.course-card');
        const courseTitle = courseCard.querySelector('h3').textContent;
        const coursePrice = courseCard.querySelector('.price').textContent;
        
        if (confirm(`Enroll in "${courseTitle}" for ${coursePrice}?`)) {
            alert('Enrollment successful! Check your email for course access.');
            console.log('Enrolled in:', courseTitle);
        }
    });
});

// Explore Courses button handler
const exploreBtn = document.querySelector('.hero .btn-primary');
if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
            coursesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Initialize page
console.log('Online Learning Platform initialized');
console.log('Ready for user interaction');
