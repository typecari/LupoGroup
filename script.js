// ==========================================
// Modern 2026 Interactions
// ==========================================

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    });

    // Cursor interactions with interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .service-box');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ==========================================
// Navigation
// ==========================================
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
menuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const spans = menuToggle.querySelectorAll('span');
    
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.transform = '';
    }
});

// Close menu when clicking nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle?.querySelectorAll('span');
        spans?.forEach(span => {
            span.style.transform = '';
        });
    });
});

// ==========================================
// Smooth Scroll
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Scroll Animations
// ==========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-box, .value-item, .process-step').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// ==========================================
// Form Handling
// ==========================================
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Validate
    if (!validateForm(data)) {
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="animation: spin 1s linear infinite;">
            <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0-2a9 9 0 110 18 9 9 0 010-18z" fill="currentColor" opacity="0.3"/>
            <path d="M10 1a9 9 0 019 9h-2a7 7 0 00-7-7V1z" fill="currentColor"/>
        </svg>
        Sending...
    `;
    submitBtn.disabled = true;
    
    try {
        // Simulate API call (replace with your backend)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Form submitted:', data);
        
        // Show success
        contactForm.style.display = 'none';
        successMessage.classList.add('show');
        
        // Optional: Send to backend
        // await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again or contact us directly.');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// Form Validation
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(data.email)) {
        showError('Please enter a valid email address');
        return false;
    }
    
    if (data.website && data.website !== '') {
        try {
            new URL(data.website);
        } catch {
            showError('Please enter a valid website URL');
            return false;
        }
    }
    
    if (!data.fullName || !data.email || !data.company || !data.service || !data.challenge) {
        showError('Please fill in all required fields');
        return false;
    }
    
    return true;
}

function showError(message) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ef4444;
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add CSS for toast animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Floating label effect
const formFields = document.querySelectorAll('.form-field input, .form-field select, .form-field textarea');

formFields.forEach(field => {
    // Check on load if field has value
    if (field.value && field.value !== '') {
        const label = field.nextElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.top = '-2px';
            label.style.fontSize = '12px';
            label.style.color = 'var(--primary)';
            label.style.fontWeight = '600';
        }
    }
    
    field.addEventListener('input', () => {
        const label = field.nextElementSibling;
        if (label && label.tagName === 'LABEL') {
            if (field.value || field === document.activeElement) {
                label.style.top = '-2px';
                label.style.fontSize = '12px';
                label.style.color = 'var(--primary)';
                label.style.fontWeight = '600';
            }
        }
    });
    
    field.addEventListener('blur', () => {
        const label = field.nextElementSibling;
        if (label && label.tagName === 'LABEL' && !field.value) {
            label.style.top = '50%';
            label.style.fontSize = '15px';
            label.style.color = 'var(--gray-600)';
            label.style.fontWeight = '400';
        }
    });
});

// ==========================================
// Parallax Effect
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    }
});

// ==========================================
// Service Box Interactions
// ==========================================
document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ==========================================
// Analytics Tracking (Optional)
// ==========================================
function trackEvent(category, action, label) {
    // Uncomment if using Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
    console.log(`Track: ${category} - ${action} - ${label}`);
}

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-text, .nav-cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackEvent('CTA', 'click', e.target.textContent.trim());
    });
});

// Track form submission
contactForm?.addEventListener('submit', () => {
    trackEvent('Form', 'submit', 'Contact Form');
});

// Track service box clicks
document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('click', () => {
        const serviceName = box.querySelector('h3').textContent;
        trackEvent('Service', 'click', serviceName);
    });
});

// ==========================================
// Performance Optimization
// ==========================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Console Message
// ==========================================
console.log(
    '%c🐺 Lupo Consulting',
    'font-size: 24px; font-weight: bold; color: #00679A;'
);
console.log(
    '%cWebsite built with modern 2026 design standards',
    'font-size: 14px; color: #666;'
);
console.log(
    '%cInterested in working with us? Contact: info.lupogroup@gmail.com',
    'font-size: 12px; color: #999;'
);

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ Website loaded successfully');
    
    // Add loaded class to body for CSS transitions
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
