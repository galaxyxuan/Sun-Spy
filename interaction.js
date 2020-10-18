window.onload = function () {

    //slider input to adjust brightness 
    rangeInput = document.getElementById("slider-adjust");
    videoContainer = document.getElementsByClassName('video-player')[1];
    videoContainer.volume = 0;

    rangeInput.addEventListener("input", function () {
        console.log(rangeInput.value);
        videoContainer.style.filter = "brightness(" + rangeInput.value + "%)";
        videoContainer.volume = rangeInput.value / 100;
    });

    //click exit button to show slider 
    var exitButton = document.getElementById("button-click-01");
    var enterButton = document.getElementById("button-click-02");
    var slider = document.getElementById('brightness-slider');

    if (exitButton) {
        exitButton.addEventListener('click', (e) => {
            exitButton.style.display = "none";
            enterButton.style.display = "block";
            slider.style.display = "block";
            videoContainer.style.filter = "brightness(0%)";
            console.log(rangeInput.value);
            rangeInput.value = "0";

        })
    }
    if (enterButton) {
        enterButton.addEventListener('click', (e) => {
            enterButton.style.display = "none";
            exitButton.style.display = "block";
            slider.style.display = "none";
            videoContainer.style.filter = "brightness(0%)";
            rangeInput.value = "0";
            console.log(rangeInput.value);

        })
    }



}