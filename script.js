let details = navigator.userAgent;

let regexp = /android|iphone|kindle|ipad/i;

let isMobileDevice = regexp.test(details);

const mdlViewer = document.getElementById('desktop');

if (isMobileDevice) {
  mdlViewer.style.display = 'none'
  // Handles loading the events for <model-viewer>'s slotted progress bar
  const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
      event.target.removeEventListener('progress', onProgress);
    } else {
      progressBar.classList.remove('hide');
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);
} else {
  function on() {
    document.getElementById("overlay").style.display = "flex";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
}
