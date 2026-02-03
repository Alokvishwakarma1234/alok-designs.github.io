document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginCard = document.getElementById('login-card');
    const dashboard = document.getElementById('dashboard');
    const navButtons = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.panel');

    if (loginForm && loginCard && dashboard) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            loginCard.setAttribute('hidden', '');
            dashboard.removeAttribute('hidden');
        });
    }

    const activatePanel = (targetId) => {
        navButtons.forEach((button) => {
            button.classList.toggle('active', button.dataset.target === targetId);
        });

        panels.forEach((panel) => {
            panel.classList.toggle('active', panel.id === targetId);
        });
    };

    navButtons.forEach((button) => {
        button.addEventListener('click', () => {
            activatePanel(button.dataset.target);
        });
    });
});
