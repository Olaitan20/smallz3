const alertButton = document.getElementById('alertButton');
const Popup = document.getElementById('Popup');
const myForm = document.getElementById('myForm');
const successMessage = document.getElementById('successMessage');

alertButton.addEventListener('click', function() {
  Popup.style.display = 'block';
});

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  successMessage.style.display = 'block';
  myForm.reset();
});

Popup.addEventListener('click', function(event) {
  if (event.target === Popup) {
    Popup.style.display = 'none';
    successMessage.style.display = 'none';
  }
});
var video = document.getElementById("bg-video");

// Adjust the playback rate of the video
video.playbackRate = 0.8; // Set the desired playback rate (e.g., 0.5 for half speed)

// To dynamically change the speed at a later point, you can use JavaScript to modify the playbackRate property
video.playbackRate = 0.7;

document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById('video-background');
  video.muted = true;
  video.play();
});