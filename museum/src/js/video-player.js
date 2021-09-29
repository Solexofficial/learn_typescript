const videoPlayerTime = document.querySelector('#player-time');
const videoPlayerVolume = document.querySelector('#player-volume');

const videoControls = [videoPlayerTime, videoPlayerVolume];

videoControls.forEach(el =>
  el.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #fff 100%)`;
  })
);
