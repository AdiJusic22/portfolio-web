import '../style.css';

function requiredElement<T extends Element>(selector: string): T {
    const element = document.querySelector<T>(selector);
    if (!element) throw new Error(`Missing required element: ${selector}`);
    return element;
}

const menuButton = requiredElement<HTMLButtonElement>('#menu-icon');
const menuIcon = requiredElement<HTMLElement>('#menu-icon i');
const navbar = requiredElement<HTMLElement>('.navbar');
const header = requiredElement<HTMLElement>('.header');
const sections = document.querySelectorAll<HTMLElement>('section[id]');
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.navbar a');

function setMenu(isOpen: boolean): void {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    navbar.classList.toggle('active', isOpen);
    menuIcon.className = isOpen ? 'bx bx-x' : 'bx bx-menu';
}

menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
    }
});
document.addEventListener('click', event => {
    if (event.target instanceof Node && !header.contains(event.target)) setMenu(false);
});
window.matchMedia('(min-width: 769px)').addEventListener('change', () => setMenu(false));

function updateNavigation(): void {
    const position = window.scrollY + header.offsetHeight + 80;
    let activeId = sections[0]?.id;
    sections.forEach(section => {
        if (position >= section.offsetTop) activeId = section.id;
    });
    navLinks.forEach(link => {
        const isActive = link.hash === `#${activeId}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
    header.classList.toggle('sticky', window.scrollY > 100);
}

let navigationFramePending = false;
window.addEventListener('scroll', () => {
    if (navigationFramePending) return;
    navigationFramePending = true;
    requestAnimationFrame(() => {
        updateNavigation();
        navigationFramePending = false;
    });
}, { passive: true });
window.addEventListener('resize', updateNavigation);
window.addEventListener('load', updateNavigation);
void document.fonts.ready.then(updateNavigation);
updateNavigation();

requiredElement<HTMLElement>('#current-year').textContent = String(new Date().getFullYear());
document.querySelectorAll<HTMLAnchorElement>('.social-media a').forEach(link => {
    if (link.protocol === 'https:') {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    }
    link.setAttribute('aria-label', link.protocol === 'mailto:'
        ? 'Email Adi'
        : new URL(link.href).hostname.replace('www.', ''));
});
requiredElement<HTMLAnchorElement>('.footer-iconTop a').setAttribute('aria-label', 'Back to top');

const contactForm = requiredElement<HTMLFormElement>('#contact-form');
contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const field = (name: string): string => String(data.get(name) ?? '').trim();
    const body = [
        field('message'), '',
        `Name: ${field('name')}`,
        `Email: ${field('email')}`,
        ...(field('phone') ? [`Phone: ${field('phone')}`] : []),
    ].join('\r\n');
    window.location.href = `mailto:adi.jusic.11@gmail.com?subject=${encodeURIComponent(field('subject'))}&body=${encodeURIComponent(body)}`;
});
