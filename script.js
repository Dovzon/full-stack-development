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
