var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log('Autoplay is set to false');
	console.log('Looping is set to false');

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
video = document.getElementById('player1');

// Play the video and update the volume information.  
let playButton = document.getElementById('play');
let volumeDisplay = document.getElementById('volume');
playButton.addEventListener('click', function(){
	video.play();
	let volumeValue = video.volume;
	volumeDisplay.innerHTML = `${volumeValue * 100}%`;
	console.log('Play Video');
});

// Pause
let pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', function(){
	video.pause();
	console.log('Pause Video');
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
let slowerButton = document.getElementById('slower');
slowerButton.addEventListener('click', function(){
	video.playbackRate *= 0.90;
	console.log('Slow down video');
	console.log("Speed is " + video.playbackRate);
});


//Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
let fasterButton = document.getElementById('faster');
fasterButton.addEventListener('click', function(){
	video.playbackRate /= 0.90;
	console.log('Speed up video');
	console.log("Speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
let skipButton = document.getElementById('skip');
skipButton.addEventListener('click', function(){
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}else{
		video.currentTime += 10;
	}
	console.log('Skip ahead');
	console.log("Video current time is " + video.currentTime);
});


// Mute
let muteButton = document.getElementById('mute');
muteButton.addEventListener('click', function(){
	if(!video.muted){
		video.muted = true;
		muteButton.textContent = 'Unmute';
		console.log('Mute');
	}else{
		video.muted = false;
		muteButton.textContent = 'Mute';
		console.log('Unmute');
	}
});

// Change the volume based on the slider and update the volume information.
let slider = document.getElementById('slider');
slider.addEventListener('change', function(){
	video.volume = slider.value / 100;
	volumeDisplay.innerHTML = `${slider.value}%`;
	console.log('The current value is ' + video.volume);
	console.log(volumeDisplay);
});

// Style
let vintageButton = document.getElementById('vintage');
let origButton = document.getElementById('orig');
vintageButton.addEventListener('click', function(){
	video.setAttribute('class', 'video oldSchool');
});
origButton.addEventListener('click', function(){
	video.setAttribute('class', 'video');
});

