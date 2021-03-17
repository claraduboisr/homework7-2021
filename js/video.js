var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	var volume_video = document.querySelector("#slider").value;
	document.getElementById("volume").innerHTML = volume_video;

});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= (0.05 * video.playbackRate)
	console.log("New speed is (slower): ", video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate += (0.05 / video.playbackRate)
	console.log("New speed is (faster): ", video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Orginial location ", video.currentTime);

	if (video.currentTime >= video.duration) {
		video.currentTime = 0
		console.log("New location ", video.currentTime);
	} else {
		video.currentTime += 15;
		console.log("New location ", video.currentTime);
	}
	video.play();
});

document.querySelector("#mute").addEventListener("click", function () {
	
	if (video.muted == true) {
		video.muted=false
		document.querySelector("#mute").innerHTML = "Mute";

	} else {
		video.muted=true
		document.querySelector("#mute").innerHTML = "Unmute";
	}

});

/*The oninput event occurs when an element gets user input.*/
slider.oninput = function(){
  document.getElementById("volume").innerHTML = document.getElementById("slider").value;
  video.volume = this.value/100;
  console.log (video.volume)
}

document.querySelector("#vintage").addEventListener("click", function () {
	document.querySelector("Video").className='oldSchool';

});

document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector("Video").classList.remove("oldSchool");

});
