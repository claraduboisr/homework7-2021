var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%"

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

	if (video.duration - video.currentTime > 15) {
		video.currentTime += 15;
		console.log("New location " + video.currentTime)
	}
	else{
		video.currentTime = 0;
		console.log("New location " + video.currentTime)
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

document.querySelector("#slider").addEventListener("click", function(){
	document.getElementById("volume").innerHTML = document.querySelector("#slider").value;
	video.volume = document.getElementById("volume").innerHTML / 100;
	document.getElementById("volume").innerHTML = document.getElementById("volume").innerHTML + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
	document.querySelector("Video").className='oldSchool';
});

document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector("Video").classList.remove("oldSchool");

});
