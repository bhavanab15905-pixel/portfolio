/**
 * Portfolio JavaScript
 * Modern Sleek Interactions: Typewriter, Theme Toggle, ScrollSpy, Skill Filter
 */

document.addEventListener('DOMContentLoaded', () => {
  // ================= 1. Theme Toggle (Dark / Light) =================
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('portfolio-theme');

  // Check saved preference or system preference
  if (savedTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else if (savedTheme === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('portfolio-theme', 'light');
    }
  });

  // ================= 2. Mobile Menu Toggle =================
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Close menu when clicking on nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  // ================= 3. Header Scroll Effect =================
  const header = document.getElementById('header');

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // ================= 4. Typewriter Effect =================
  const typewriterElement = document.getElementById('typewriter');
  const phrases = [
    'AI & Machine Learning Specialist',
    'Full-Stack Web Developer',
    'Data Analytics Enthusiast',
    'Computer Science Engineer',
    'Real-World Problem Solver'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of word
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typewriterElement) {
    typeEffect();
  }

  // ================= 5. Skills Category Filtering =================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ================= 6. Copy Code Snippet Button =================
  const copyBtn = document.getElementById('copy-code-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeSnippet = `class Engineer:
    def __init__(self):
        self.name = "Bhavana"
        self.college = "AJIET, Mangalore"
        self.degree = "B.E. CSE (AI & ML)"
        self.cgpa = 8.95
        self.skills = ["Python", "Java", "Web Dev", "Machine Learning", "Data Analytics"]
        self.passion = "Solving real-world problems"

    def status(self):
        return "Ready to create an impact! 🚀"

me = Engineer()
print(me.status())`;

      navigator.clipboard.writeText(codeSnippet).then(() => {
        copyBtn.className = 'fa-solid fa-check';
        copyBtn.style.color = 'var(--accent-emerald)';
        setTimeout(() => {
          copyBtn.className = 'fa-regular fa-copy';
          copyBtn.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy code snippet: ', err);
      });
    });
  }

  // ================= 7. ScrollSpy Active Nav Link =================
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const sectionLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (sectionLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionLink.classList.add('active-link');
        } else {
          sectionLink.classList.remove('active-link');
        }
      }
    });
  };

  window.addEventListener('scroll', scrollActive);

  // ================= 8. Contact Form Handling =================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all required fields.';
        formStatus.className = 'form-status error';
        return;
      }

      // Show sending state
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';
      submitBtn.disabled = true;

      // Simulate sending / preparing mailto
      setTimeout(() => {
        formStatus.innerHTML = `Thank you, <strong>${name}</strong>! Your message has been prepared. Opening your default mail client...`;
        formStatus.className = 'form-status success';
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Sent!</span>';

        // Trigger mailto fallback so user can send immediately
        const mailtoUri = `mailto:bhavana.student@ajiet.edu.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Bhavana,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
        window.location.href = mailtoUri;

        // Reset button and form after delay
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnHTML;
          submitBtn.disabled = false;
          contactForm.reset();
        }, 4000);
      }, 900);
    });
  }

  // ================= 9. Dynamic Current Year =================
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
