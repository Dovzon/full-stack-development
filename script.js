document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to features
    const diveBtn = document.getElementById('diveBtn');

    diveBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const targetElement = document.querySelector('.features');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Popup functionality for main popup
    const contentText = document.querySelector('.content-inner p');
    const popupWrapper = document.getElementById('popupWrapper');
    const closeBtn = document.getElementById('closeBtn');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    contentText.addEventListener('click', function () {
        popupWrapper.classList.add('open');
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function () {
        popupWrapper.classList.remove('open');
        document.body.removeChild(overlay);
        document.body.style.overflow = 'auto';
    });

    // Function for opening and closing popups
    function togglePopup(index) {
        const overlayElement = document.getElementById(`overlay${index}`);
        if (overlayElement) {
            overlayElement.style.display = overlayElement.style.display === 'block' ? 'none' : 'block';
        }
    }

    // Event listeners for closing popups using "X" buttons
    for (let i = 1; i <= 5; i++) {
        const popupTrigger = document.getElementById(`popupTrigger${i}`);
        const closeButton = document.getElementById(`closeButton${i}`);

        if (popupTrigger && closeButton) {
            popupTrigger.addEventListener('click', () => togglePopup(i));
            closeButton.addEventListener('click', () => togglePopup(i));
        }
    }
});
