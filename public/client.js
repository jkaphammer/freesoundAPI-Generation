// const button = document.getElementById('sound-test')

// button.addEventListener('click', function () {
//     fetch('http://localhost:3000/api')
//         .then(function (response) {
//             // Check if the response status is OK (status code 200)
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             // Parse the JSON content
//             return response.json();
//         })
//         .then(function (data) {
//             // Handle the JSON data
//             console.log(data);
//         })
//         .catch(function (err) {
//             console.error(err);
//         });
// });

function getRandomInterval(min, max) {
  return Math.random() * (max - min) + min;
}

// document.getElementById('playButton').addEventListener('click', playRandomSound);

function playRandomSound() {
  const cacheCheck = Date.now(); // prevents same sound from getting cached
  fetch('/api/sound')
    .then(response => response.json())
    .then(data => {
      const soundUrl = data.previews['preview-hq-mp3'];
      const audio = new Audio(`${soundUrl}?cacheBuster=${cacheCheck}`);

      // prints sound object info to console
      console.log("SOUND PLAYED");
      console.log(data);

      // plays the sound
      audio.play();

      // Set a timeout to stop playback after 5 seconds
      const playbackDuration = 6500; // in milliseconds
          
      // Set an event listener for the 'ended' event to stop playback
      audio.addEventListener('ended', () => {
          audio.pause();
          audio.currentTime = 0; // Reset audio to the beginning
        });

      // Set a timeout to ensure playback stops even if 'ended' event is not fired
      setTimeout(() => {
          audio.pause();
          audio.currentTime = 0; // Reset audio to the beginning
        }, playbackDuration);
    })
    .catch(error => console.error('Error:', error));
}
// Set up a recurring interval to play the sound
setInterval(() => {
  playRandomSound();
}, getRandomInterval(6000, 15000)); // Random interval between 5 and 15 seconds