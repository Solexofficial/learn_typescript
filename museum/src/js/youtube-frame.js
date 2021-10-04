const $videoSlider = document.querySelector('#video-slider');
document.addEventListener('DOMContentLoaded', function () {
  console.log('####: loaded');
  $videoSlider.innerHTML = `
  <div class="video-slide">
                <iframe
                  loading="lazy"
                  src="https://www.youtube.com/embed/aWmJ5DgyWPI"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="video-slide">
                <iframe
                  loading="lazy"
                  src="https://www.youtube.com/embed/Vi5D6FKhRmo"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="video-slide">
                <iframe
                  loading="lazy"
                  src="https://www.youtube.com/embed/NOhDysLnTvY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              `;
});
