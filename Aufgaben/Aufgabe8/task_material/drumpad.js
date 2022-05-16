window.addEventListener("load", addClickListenerDrumpad);
function playSample(soundQuelle) {
    var sound = new Audio(soundQuelle);
    sound.play();
}
function addClickListenerDrumpad() {
    document.querySelector("#button1").addEventListener("click", function () { playSample("./assets/A.mp3"); });
    document.querySelector("#button2").addEventListener("click", function () { playSample("./assets/C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function () { playSample("./assets/F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function () { playSample("./assets/G.mp3"); });
    document.querySelector("#button5").addEventListener("click", function () { playSample("./assets/hithat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function () { playSample("./assets/kick.mp3"); });
    document.querySelector("#button7").addEventListener("click", function () { playSample("./assets/laugh-1.mp3"); });
    document.querySelector("#button8").addEventListener("click", function () { playSample("./assets/laugh-2.mp3"); });
    document.querySelector("#button9").addEventListener("click", function () { playSample("./assets/snare.mp3"); });
}
var beat = ["./assets/kick.mp3"];
//# sourceMappingURL=drumpad.js.map