document.addEventListener('DOMContentLoaded', () => {
  const numberElement = document.querySelector('.number');
  const pageNumber = window.location.pathname.split('/').pop().split('.')[0];
  numberElement.textContent = `#${pageNumber}`;

  const buttonElement = document.querySelector('.button');
  buttonElement.addEventListener('click', () => {
    const nextPage = Number(pageNumber) + 1;
    window.location.href = `${nextPage}.html`;
  });

  document.addEventListener('keydown', (event) => {
    const currentNumber = Number(pageNumber);

    if (event.key === 'ArrowRight' && currentNumber < 100) {
      const nextPage = currentNumber + 1;
      window.location.href = `${nextPage}.html`;
    } else if (event.key === 'ArrowLeft' && currentNumber > 1) {
      const prevPage = currentNumber - 1;
      window.location.href = `${prevPage}.html`;
    }
  });
});

