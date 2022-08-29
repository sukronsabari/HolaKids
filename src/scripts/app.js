/* navbar */
const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerCloseBtn = document.querySelector('.close-hamburger-btn');
const linksContainer = document.querySelector('.links-container');

hamburgerBtn.addEventListener('click', function(event) {
    linksContainer.classList.toggle('open-nav');
});

hamburgerCloseBtn.addEventListener('click', function(event) {
    linksContainer.classList.remove('open-nav');
});

/* FAQs btn */
const faqBtns = document.querySelectorAll('.faq-btn');
for (const faqBtn of faqBtns) {
    faqBtn.addEventListener('click', function(event) {
        const faqElement = event.currentTarget.parentElement.parentElement;
        
        faqElement.classList.toggle('faq-open');
    })
}

/* navbar active on scroll */
const sections = document.querySelectorAll('[data-section]');
const navbarHeight = document.querySelector('.navbar-container').offsetHeight;

function navActive() {
    const scrollHeight = window.scrollY;

    for (const section of sections) {
        const sectionHeight = section.offsetHeight;
        const sectionTopPosition = section.offsetTop - navbarHeight;
        const sectionId = section.getAttribute('id');

        let isScrollOnSectionArea = scrollHeight <= (sectionHeight + sectionTopPosition);
        let link = document.querySelector(`.links li a[href="#${sectionId}"]`);

        if (scrollHeight >= sectionTopPosition && isScrollOnSectionArea) {
            if (link) {
                link.classList.add('active');
            }
        } else {
            if (link) {
                link.classList.remove('active');
            }
        }
    }
}

window.addEventListener('scroll', navActive);