// Grab the elements we need to control the simulation
const solarSystem = document.querySelector('.solar-system');
const toggleBtn = document.getElementById('toggle-btn');
const speedSlider = document.getElementById('speed-slider');

let isPaused = false;

// Pause/resume: toggling the "paused" class flips animation-play-state
// on every orbit, planet and moon via the CSS rule defined in styles.css
toggleBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  solarSystem.classList.toggle('paused', isPaused);
  toggleBtn.textContent = isPaused ? 'Resume' : 'Pause';
});

// Speed control: updates the global --speed CSS custom property.
// Every animation-duration in the stylesheet is defined as
// calc(<base-duration> / var(--speed)), so this single variable
// speeds up or slows down the whole system at once.
speedSlider.addEventListener('input', (event) => {
  const speed = event.target.value;
  document.documentElement.style.setProperty('--speed', speed);
});
