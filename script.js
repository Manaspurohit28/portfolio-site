// Smooth scrolling for internal links
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

// Add scroll effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});


// Add dynamic background particles effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.background = 'rgba(255, 215, 0, 0.3)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.animation = 'float 6s linear infinite';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Add floating particles animation
const floatKeyframes = `
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = floatKeyframes;
document.head.appendChild(style);

// Create particles periodically
setInterval(createParticle, 800);

// Add contact form functionality (placeholder)
document.querySelectorAll('.contact-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const contactType = this.querySelector('i').classList[1];
        let message = '';
        
        switch(contactType) {
            case 'fa-phone':
                message = 'Ready to call!';
                break;
            case 'fa-envelope':
                message = 'Email client would open here!';
                break;
            case 'fa-linkedin':
                message = 'LinkedIn profile would open here!';
                break;
            case 'fa-github':
                message = 'GitHub profile would open here!';
                break;
            case 'fa-twitter':
                message = 'Twitter profile would open here!';
                break;
            default:
                message = 'Contact method activated!';
        }
        
        // Show a custom notification
        showNotification(message);
    });
});

// Custom notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ffd700, #ffed4a);
        color: #0a0a0a;
        padding: 15px 25px;
        border-radius: 10px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add resume download functionality
function downloadResume() {
    showNotification('Resume download would start here!');
}

// Add project view functionality
function viewProject(projectName) {
    showNotification(`${projectName} would open in a new tab!`);
}

// Enhanced scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('.main-content').scrollIntoView({
            behavior: 'smooth'
        });
    });
}


// Certificate dropdown functionality
const toggleBtn = document.getElementById('toggle-certificates');
const extraWrapper = document.getElementById('certificates-extra');
toggleBtn.addEventListener('click', () => {
    extraWrapper.classList.toggle('expanded');
    toggleBtn.textContent = extraWrapper.classList.contains('expanded') ? 'Show Less' : 'Show More';
});

function updateScrollProgress() {
    // Create progress bar
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    scrollProgress.id = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    // Create animated bunny
    const bunny = document.createElement('img');
    bunny.src = 'images/hello_bunny.gif'; // Running bunny gif (transparent)
    bunny.style.cssText = `
        position: fixed;
        top: -10px;
        left: 0;
        height: 40px;
        z-index: 1001;
        pointer-events: none;
        transition: left 0.1s ease;
    `;
    bunny.id = 'scroll-bunny';
    document.body.appendChild(bunny);

    // Scroll event
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        scrollProgress.style.width = scrollPercent + '%';

        // Move bunny
        const windowWidth = window.innerWidth;
        const bunnyPosition = (scrollPercent / 100) * windowWidth;
        bunny.style.left = `calc(${bunnyPosition}px - 20px)`; // Adjust for image width
    });
}

// Initialize
updateScrollProgress();




//typing animation:

var typed = new Typed(".hero-subtitle",{
        strings: ["Software Developer","Traveller","Adaptive","Visionary","Limitless","Introspective","Logical","Focused","Adventurous","Independent","Curious"],
        typeSpeed : 50,
        backSpeed : 50,
        loop : true
    })





// Skills data with logos and customizable links
        const skillsData = [
            {
                name: 'Python',
                category: 'Programming',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                link: 'https://www.python.org/',
                color: '#3776AB'
            },
            {
                name: 'C',
                category: 'Programming',
                logo: 'images/icons8-c.svg',
                link: 'https://your-portfolio.com/python-projects',
                color: '#3776AB'
            },
            {
                name: 'C++',
                category: 'Programming',
                logo: 'images/icons8-c++.svg',
                link: 'https://your-portfolio.com/python-projects',
                color: '#3776AB'
            },
            {
                name: 'HTML',
                category: 'Programming',
                logo: 'images/icons8-html.svg',
                link: 'https://your-portfolio.com/python-projects',
                color: '#3776AB'
            },
            {
                name: 'CSS',
                category: 'Programming',
                logo: 'images/icons8-css.svg',
                link: 'https://your-portfolio.com/python-projects',
                color: '#3776AB'
            },
            {
                name: 'JavaScript',
                category: 'Programming',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                link: 'https://your-portfolio.com/javascript-projects',
                color: '#F7DF1E'
            },
            {
                name: 'Node.js',
                category: 'Backend',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                link: 'https://your-portfolio.com/nodejs-projects',
                color: '#339933'
            },
            {
                name: 'MySQL',
                category: 'Database',
                logo: 'images/icons8-my-sql.svg',
                link: 'https://your-portfolio.com/mongodb-projects',
                color: '#47A248'
            },
            {
                name: 'PostgreSQL',
                category: 'Database',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                link: 'https://your-portfolio.com/postgresql-projects',
                color: '#336791'
            },
            {
                name: 'Docker',
                category: 'DevOps',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                link: 'https://your-portfolio.com/docker-projects',
                color: '#2496ED'
            },
            {
                name: 'Git',
                category: 'Version Control',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                link: 'https://github.com/your-username',
                color: '#F05032'
            },
            {
                name: 'Microsoft Word',
                category: 'Microsoft Office',
                logo: 'images/icons8-microsoft-word.svg',
                link: 'https://your-portfolio.com/jenkins-projects',
                color: '#D33833'
            },
            {
                name: 'Microsoft Excel',
                category: 'Microsoft Office',
                logo: 'images/icons8-excel.svg',
                link: 'https://your-portfolio.com/jenkins-projects',
                color: '#D33833'
            },
            {
                name: 'Microsoft PowerPoint',
                category: 'Microsoft Office',
                logo: 'images/icons8-microsoft-powerpoint.svg',
                link: 'https://your-portfolio.com/jenkins-projects',
                color: '#D33833'
            },
            {
                name: 'Visual Studio Code',
                category: 'IDE',
                logo: 'images/icons8-visual-studio-code.svg',
                link: 'https://github.com/your-username',
                color: '#F05032'
            }
        ];

        // Function to create skill items
        function createSkillItems() {
            const skillsGrid = document.getElementById('skillsGrid');
            
            skillsData.forEach((skill, index) => {
                const skillItem = document.createElement('a');
                skillItem.className = 'skill-item';
                skillItem.href = skill.link;
                skillItem.target = '_blank';
                skillItem.rel = 'noopener noreferrer';
                
                // Add staggered animation delay
                skillItem.style.opacity = '0';
                skillItem.style.transform = 'translateY(30px)';
                skillItem.style.transition = `all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.1}s`;
                
                skillItem.innerHTML = `
                    <div class="skill-content">
                        <div class="skill-logo">
                            ${skill.logo ? 
                                `<img src="${skill.logo}" alt="${skill.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                 <i class="${skill.icon || 'fas fa-code'}" style="display: none;"></i>` :
                                `<i class="${skill.icon || 'fas fa-code'}"></i>`
                            }
                        </div>
                        <div class="skill-info">
                            <div class="skill-name">${skill.name}</div>
                            <div class="skill-category">${skill.category}</div>
                        </div>
                    </div>
                    <i class="fas fa-external-link-alt skill-link-icon"></i>
                    <div class="skill-particles">
                        <div class="particle"></div>
                        <div class="particle"></div>
                        <div class="particle"></div>
                    </div>
                `;
                
                skillsGrid.appendChild(skillItem);
                
                // Trigger animation
                setTimeout(() => {
                    skillItem.style.opacity = '1';
                    skillItem.style.transform = 'translateY(0)';
                }, 100 + (index * 100));
            });
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            createSkillItems();
            
            // Add hover effects for skill items
            document.querySelectorAll('.skill-item').forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.boxShadow = `
                        0 20px 40px rgba(255, 215, 0, 0.2),
                        0 10px 25px rgba(0, 0, 0, 0.4)
                    `;
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                });
            });
        });


// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    themeToggleBtn.textContent = '🌙';
} else {
    themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});