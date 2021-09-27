// utils
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const $galleryContainer = document.querySelector('#gallery-container');
const $galleryImages = document.querySelectorAll('.gallery-img');
const shuffleImages = shuffle([...$galleryImages]);

for (let i = 0; i < shuffleImages.length; i++) {
  $galleryContainer.appendChild(shuffleImages[i]);
}
