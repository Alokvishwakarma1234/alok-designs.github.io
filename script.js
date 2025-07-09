document.addEventListener('DOMContentLoaded', function() {

    // हीरो सेक्शन एनिमेशन को कंट्रोल करने के लिए
    const heroSection = document.querySelector('.hero');
    if(heroSection) {
        // 2 सेकंड के बाद 'details-visible' क्लास जोड़ें
        setTimeout(() => {
            heroSection.classList.add('details-visible');
        }, 2000); // 2000 मिलीसेकंड = 2 सेकंड
    }

    // बाकी का स्क्रॉल एनिमेशन का कोड (यह पहले से हो सकता है)
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }
});