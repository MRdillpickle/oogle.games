let gamePage = "play/games.html";

function openGAME(gameURL) {
    if (gameURL) {
        window.location = gamePage + "?game=" + gameURL + "#endurl";
    }
}