window.addEventListener("load", addClickListenerDrumpad);

function playSample(soundQuelle: string): void {
    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

function addClickListenerDrumpad(): void {
    document.querySelector("#button1").addEventListener("click", function (): void { playSample("./assets/A.mp3"); });
    document.querySelector("#button2").addEventListener("click", function (): void { playSample("./assets/C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function (): void { playSample("./assets/F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function (): void { playSample("./assets/G.mp3"); });
    document.querySelector("#button5").addEventListener("click", function (): void { playSample("./assets/hithat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function (): void { playSample("./assets/kick.mp3"); });
    document.querySelector("#button7").addEventListener("click", function (): void { playSample("./assets/laugh-1.mp3"); });
    document.querySelector("#button8").addEventListener("click", function (): void { playSample("./assets/laugh-2.mp3"); });
    document.querySelector("#button9").addEventListener("click", function (): void { playSample("./assets/snare.mp3"); });
}

var beat: string[] = ["./assets/kick.mp3"];