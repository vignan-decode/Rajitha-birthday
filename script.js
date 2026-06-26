function startSurprise() {

    document.getElementById("messageBox").innerHTML =
    "<h2>Happy birthday to my dearest, lovely girl, Rajitha! ❤️</h2>";

    let speech = new SpeechSynthesisUtterance(
        "Happy birthday to my dearest, lovely girl, Raajitha!"
    );

    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);

    document.getElementById("character").style.left = "50px";
}