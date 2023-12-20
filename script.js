document.addEventListener('DOMContentLoaded', function () {
    const diveBtn = document.getElementById('diveBtn');

    diveBtn.addEventListener('click', function (event) {
      event.preventDefault();

      const targetElement = document.querySelector('.features');

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
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
  });
  