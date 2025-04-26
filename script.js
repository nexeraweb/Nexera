const legalContent = {
    privacy: {
        title: "Privacy Policy",
        content: `
        <h4 class="text-xl font-semibold mb-4">1. Information We Collect</h4>
        <p class="text-gray-300 mb-6">We collect the following information when you use our contact form or interact with our services: your name, email address, Instagram handle, and any message content you provide. We do not collect any sensitive personal information or payment details through our website.</p>

        <h4 class="text-xl font-semibold mb-4">2. How We Use Your Information</h4>
        <p class="text-gray-300 mb-6">Your information is used solely to respond to your inquiries, provide requested services, and maintain communication regarding your projects. We may use your email address to send you important updates about our services or your specific project.</p>

        <h4 class="text-xl font-semibold mb-4">3. Information Security</h4>
        <p class="text-gray-300 mb-6">We implement industry-standard security measures to protect your information. All communication through our website is encrypted, and we regularly update our security protocols to ensure your data remains safe.</p>

        <h4 class="text-xl font-semibold mb-4">4. Your Rights</h4>
        <p class="text-gray-300 mb-6">You have the right to request access to your personal information, correct any inaccuracies, or request deletion of your data. Contact us at nexera.works@gmail.com for any privacy-related concerns.</p>
        `
    },
    terms: {
        title: "Terms of Service",
        content: `
        <h4 class="text-xl font-semibold mb-4">1. Service Agreement</h4>
        <p class="text-gray-300 mb-6">By using our website and services, you agree to these terms. Our services include web development, mobile app development, UI/UX design, and digital marketing solutions. We reserve the right to modify or terminate services at our discretion.</p>

        <h4 class="text-xl font-semibold mb-4">2. Client Responsibilities</h4>
        <p class="text-gray-300 mb-6">Clients are responsible for providing accurate project requirements, timely feedback, and necessary materials for project completion. Any delays in providing required information may affect project timelines.</p>

        <h4 class="text-xl font-semibold mb-4">3. Intellectual Property</h4>
        <p class="text-gray-300 mb-6">Upon full payment, clients receive ownership rights to the final deliverables. Nexera retains the right to showcase completed projects in our portfolio unless explicitly agreed otherwise.</p>

        <h4 class="text-xl font-semibold mb-4">4. Project Terms</h4>
        <p class="text-gray-300 mb-6">Project timelines, deliverables, and payment terms will be specified in individual project agreements. We maintain the right to suspend services if payment terms are not met.</p>
        `
    },
    cookie: {
        title: "Cookie Policy",
        content: `
        <h4 class="text-xl font-semibold mb-4">1. What Are Cookies</h4>
        <p class="text-gray-300 mb-6">Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
        <h4 class="text-xl font-semibold mb-4">2. Types of Cookies We Use</h4>
        <p class="text-gray-300 mb-6">We use essential cookies that are necessary for the website to function, analytical cookies to understand how visitors interact with our website, and marketing cookies to deliver personalized content.</p>
        <h4 class="text-xl font-semibold mb-4">3. Managing Cookies</h4>
        <p class="text-gray-300 mb-6">You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some features may not function as intended.</p>
        <h4 class="text-xl font-semibold mb-4">4. Updates to This Policy</h4>
        <p class="text-gray-300 mb-6">We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
`
}
};
function showLegalModal(type) {
const modal = document.getElementById('legalModal');
const title = document.getElementById('modalTitle');
const content = document.getElementById('modalContent');
title.textContent = legalContent[type].title;
content.innerHTML = legalContent[type].content;
modal.classList.remove('hidden');
document.body.style.overflow = 'hidden';
}
function closeLegalModal() {
const modal = document.getElementById('legalModal');
modal.classList.add('hidden');
document.body.style.overflow = 'auto';
}
document.addEventListener('DOMContentLoaded', function() {
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
window.scrollTo({
top: target.offsetTop - 80,
behavior: 'smooth'
});
}
});
});
// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
header.classList.add('py-2');
header.classList.remove('py-4');
} else {
header.classList.add('py-4');
header.classList.remove('py-2');
}
});
});
function scrollToContact(event) {
if(event) event.preventDefault();
const contactSection = document.querySelector('#contact');
const nameInput = document.querySelector('#name');
contactSection.scrollIntoView({ behavior: 'smooth' });
setTimeout(() => {
nameInput.focus();
}, 1000);
}
document.addEventListener('DOMContentLoaded', function() {
// Counter animation
const counters = document.querySelectorAll('.counter-animation');
const options = {
threshold: 0.5
};
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const target = entry.target;
const value = parseInt(target.innerText);
let count = 0;
const duration = 2000;
const increment = Math.ceil(value / (duration / 30));
const interval = setInterval(() => {
count += increment;
if (count >= value) {
target.innerText = value;
clearInterval(interval);
} else {
target.innerText = count;
}
}, 30);
observer.unobserve(target);
}
});
}, options);
counters.forEach(counter => {
observer.observe(counter);
});
});

function showMobileMenu() {
    const modal = document.getElementById('mobileMenuModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    const modal = document.getElementById('mobileMenuModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function handleMobileMenuClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const target = document.querySelector(href);
    closeMobileMenu();
    if (target) {
        setTimeout(() => {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }, 300);
    }
}