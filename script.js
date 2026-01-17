document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu interactivity
    const hamburgerButton = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');

    if (hamburgerButton && navList) {
        hamburgerButton.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Close the menu when a nav link is clicked (for better mobile UX)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // Comfort level range update
    const comfortRange = document.getElementById('comfort-level');
    const comfortValue = document.getElementById('comfort-level-value');
    if (comfortRange && comfortValue) {
        comfortRange.addEventListener('input', (e) => {
            comfortValue.textContent = e.target.value;
        });
    }

    // Simple button handlers to simulate behavior
    const planBtn = document.getElementById('plan-journey');
    if (planBtn) {
        planBtn.addEventListener('click', () => {
            const destination = document.getElementById('destination').value;
            const disability = document.getElementById('disability-type').value;
            alert(`Planning journey to ${destination || 'an unknown destination'} for ${disability || 'unspecified needs'}.`);
        });
    }

    const emergencyBtn = document.getElementById('emergency-call');
    if (emergencyBtn) emergencyBtn.addEventListener('click', () => alert('Dialing emergency contact...'));

    const checkInBtn = document.getElementById('check-in');
    if (checkInBtn) checkInBtn.addEventListener('click', () => alert('Checked in successfully.'));

    const sendMsgBtn = document.getElementById('send-message');
    if (sendMsgBtn) sendMsgBtn.addEventListener('click', () => {
        const message = document.getElementById('message').value;
        const recipient = document.getElementById('recipient').value || 'recipient';
        alert(`Sending message to ${recipient}: ${message || '(empty message)'}`);
    });

    const findVolBtn = document.getElementById('find-volunteers');
    if (findVolBtn) findVolBtn.addEventListener('click', () => {
        const location = document.getElementById('location').value;
        const assistance = document.getElementById('assistance-needed').value;
        alert(`Searching for volunteers near ${location || 'unspecified location'} for ${assistance || 'unspecified assistance'}`);
    });

    // Stub buttons for navigation features
    const voiceNavBtn = document.getElementById('voice-nav');
    if (voiceNavBtn) voiceNavBtn.addEventListener('click', () => alert('Voice navigation started (stub).'));
    const signLangBtn = document.getElementById('sign-lang');
    if (signLangBtn) signLangBtn.addEventListener('click', () => alert('Sign-language output (stub).'));
});