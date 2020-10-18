window.onload = function () {
    alert("change the two videos to be the same height, and click anywhere on the webpage to unmute video")
    //surpassing chrome autoplay restriction 

    document.addEventListener('click', (e) => {
        // any click will force both videos to unmute
        document.getElementById("left-video").muted = false;
        document.getElementById("right-video").muted = false;

    });



    //slider input to adjust brightness and audio
    rangeInput = document.getElementById("slider-adjust");
    videoContainer = document.getElementsByClassName('video-player')[1]; //pointing to video-night.mp4
    videoContainer0 = document.getElementsByClassName('video-player')[0]; //pointing to video-day.mp4
    videoContainer.volume = 0; //set the initial video-night video volume to 0; 

    rangeInput.addEventListener("input", function () {
        //console.log(rangeInput.value);
        videoContainer.style.filter = "brightness(" + rangeInput.value + "%)"; //adjust brightness
        videoContainer.volume = rangeInput.value / 100; //adjust volume of video-night.mp4
        videoContainer0.volume = 1 - rangeInput.value / 100; //counter-adjust volume of video-day.mp4
    });

    //click exit button to show slider 
    var exitButton = document.getElementById("button-click-01");
    var enterButton = document.getElementById("button-click-02");
    var slider = document.getElementById('brightness-slider');

    if (exitButton) {
        exitButton.addEventListener('click', (e) => {
            //exitButton switch to enterButton
            exitButton.style.display = "none";
            enterButton.style.display = "inline-block";
            //slider appears
            slider.style.display = "block";
            //video's brightness and volume sets to 0
            videoContainer.style.filter = "brightness(0%)";
            rangeInput.value = "0";
            document.getElementById("icon-logo").classList.replace("fa-eye", "fa-eye-slash");




        })
    }
    if (enterButton) {
        enterButton.addEventListener('click', (e) => {
            enterButton.style.display = "none";
            exitButton.style.display = "inline-block";
            slider.style.display = "none";
            videoContainer.style.filter = "brightness(0%)";
            rangeInput.value = "0";
            //console.log(rangeInput.value);3
            document.getElementById("icon-logo").classList.replace("fa-eye-slash", "fa-eye");

        })
    }



}