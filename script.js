// Form Validation and Handling

// Student Form Handler
const studentForm = document.getElementById('studentSignupForm');
if (studentForm) {
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }
        
        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            studentId: document.getElementById('studentId').value,
            phone: document.getElementById('phone').value,
            department: document.getElementById('department').value,
            year: document.getElementById('year').value,
            role: 'student'
        };
        
        console.log('Student Registration Data:', formData);
        alert('Student registration successful! (Frontend only - no backend connected)');
        
        // In a real application, you would send this data to a backend API
        // fetch('/api/register', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });
    });
}

// Professor Form Handler
const professorForm = document.getElementById('professorSignupForm');
if (professorForm) {
    professorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }
        
        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            facultyId: document.getElementById('facultyId').value,
            phone: document.getElementById('phone').value,
            department: document.getElementById('department').value,
            designation: document.getElementById('designation').value,
            specialization: document.getElementById('specialization').value,
            qualification: document.getElementById('qualification').value,
            experience: document.getElementById('experience').value,
            role: 'professor'
        };
        
        console.log('Professor Registration Data:', formData);
        alert('Professor registration successful! (Frontend only - no backend connected)');
    });
}

// Alumni Form Handler
const alumniForm = document.getElementById('alumniSignupForm');
if (alumniForm) {
    alumniForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }
        
        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            alumniId: document.getElementById('alumniId').value,
            phone: document.getElementById('phone').value,
            graduationYear: document.getElementById('graduationYear').value,
            degree: document.getElementById('degree').value,
            department: document.getElementById('department').value,
            currentCompany: document.getElementById('currentCompany').value,
            jobTitle: document.getElementById('jobTitle').value,
            industry: document.getElementById('industry').value,
            newsletter: document.getElementById('newsletter').checked,
            role: 'alumni'
        };
        
        console.log('Alumni Registration Data:', formData);
        alert('Alumni registration successful! (Frontend only - no backend connected)');
    });
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Smooth animations on page load
    const cards = document.querySelectorAll('.role-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Input validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Add real-time validation feedback
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });
});
