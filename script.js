const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    const setMenu = (open) => {
        navLinks.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };

    setMenu(false);

    navToggle.addEventListener('click', () => {
        setMenu(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenu(false));
    });

    // Close the menu with Escape, or when the screen grows past the mobile breakpoint
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMenu(false);
    });
    window.matchMedia('(min-width: 841px)').addEventListener('change', (e) => {
        if (e.matches) setMenu(false);
    });
}

// Staggered nav link reveal and active-link detection
document.addEventListener('DOMContentLoaded', () => {
    const links = Array.from(document.querySelectorAll('.nav-links a'));
    if (!links.length) return;

    // set small staggered delays and then add a class to trigger CSS transitions
    links.forEach((link, i) => {
        link.style.transitionDelay = `${i * 70}ms`;
    });
    // trigger the mount animation
    requestAnimationFrame(() => navLinks.classList.add('mounted'));

    // mark active link based on current pathname
    const path = location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        // consider links like 'index.html' or '/index.html'
        const linkFile = href.split('/').pop();
        if (linkFile === path) link.classList.add('active');
    });
});

// Animate project cards and home feature cards into view with a small stagger
const animItems = Array.from(document.querySelectorAll('.project-card, .features article'));
if (animItems.length) {
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animItems.forEach((item, i) => {
            item.style.transitionDelay = `${i * 80}ms`;
            io.observe(item);
        });
    } else {
        // Fallback: just reveal all items
        animItems.forEach((item, i) => {
            item.style.transitionDelay = `${i * 80}ms`;
            item.classList.add('in-view');
        });
    }
}
