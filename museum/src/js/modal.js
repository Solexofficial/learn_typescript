const modalTicketsBtn = document.querySelector('#modal-tickets-btn');
const $modal = document.querySelector('#modal');
const $modalCloseBtn = document.querySelector('.modal-close');
const $modalContent = document.querySelector('.modal-content');

modalTicketsBtn.addEventListener('click', e => {
  e.preventDefault();
  $modal.classList.add('open');
  setTimeout(() => {
    $modal.style.left = '0';
  }, 100);
  $modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
});

$modal.addEventListener('click', e => {
  e.stopPropagation();
  const { target } = e;
  if (target === $modal || target === $modalCloseBtn) {
    modalClose();
  }
});

const modalClose = () => {
  $modal.classList.remove('open');
  setTimeout(() => {
    $modal.style.left = '-100vw';
  }, 100);
  $modal.style.backgroundColor = 'rgba(0,0,0,0)';
};
