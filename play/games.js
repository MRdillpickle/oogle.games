let gameFrame = document.querySelector("iframe");
let gameTitle = document.querySelector("#title");

function cachQuery() {
    qureyGameURL = location.search.split("?game=");
    qureyTable = [qureyGameURL[1]];
    return qureyTable
}

function preload() {
    gameURL = cachQuery();
    gameFrame.src = gameURL[0];
    gameTitle.innerHTML = gameURL;
}
window.addEventListener("DOMContentLoaded", preload, false);