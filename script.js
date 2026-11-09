const menuButton = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navbar.classList.remove('active');
    menuButton.querySelector('i').className = 'bx bx-menu';
}

menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    navbar.classList.toggle('active', isOpen);
    menuButton.querySelector('i').className = isOpen ? 'bx bx-x' : 'bx bx-menu';
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
    }
});

document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 769px)').addEventListener('change', closeMenu);

function updateNavigation() {
    const position = window.scrollY + 150;
    let activeId = sections[0]?.id;
    sections.forEach(section => {
        if (position >= section.offsetTop) activeId = section.id;
    });
    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
    header.classList.toggle('sticky', window.scrollY > 100);
}

window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();

document.querySelector('#current-year').textContent = new Date().getFullYear();

document.querySelectorAll('.social-media a').forEach(link => {
    if (link.protocol === 'https:') {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    }
    const label = link.protocol === 'mailto:' ? 'Email Adi' : new URL(link.href).hostname.replace('www.', '');
    link.setAttribute('aria-label', label);
});
document.querySelector('.footer-iconTop a').setAttribute('aria-label', 'Back to top');

document.querySelector('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
        data.get('message'),
        '',
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        data.get('phone') ? `Phone: ${data.get('phone')}` : '',
    ].filter(line => line !== null).join('\r\n');
    window.location.href = `mailto:adi.jusic.11@gmail.com?subject=${encodeURIComponent(data.get('subject'))}&body=${encodeURIComponent(body)}`;
});
