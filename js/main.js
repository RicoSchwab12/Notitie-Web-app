//Main.js
//Created by Rico

console.log("[R]-Notes Core v1.0");

function getNoteData(infotype, noteID){
    switch (infotype){
        case "title":
            const titleID = "noteTitle-ID-" + noteID;
            const title = localStorage.getItem(titleID);
            return atob(title);
            break;
        case "description":
            const descriptionID = "noteDescription-ID-" + noteID;
            const description = localStorage.getItem(descriptionID);            
            return atob(description);
            break;
        default:
            return "Request Failed";
    }
    let 
}

function createTestNote(){
    localStorage.setItem("noteTitle-ID-1", btoa("Test Notitie"));
    localStorage.setItem("noteDescription-ID-1", btoa("Dit is een test notitie die lokaal is opgeslagen.<br>Wanneer je dit ziet werkt alles naar behoren."));
    console.log("Test items aangemaakt op ID 1. Bestaande notitie is mogelijk overschreven.")
}

function showNote(){
    let pageContent = "<div class='is-not-selectable' onclick='showHomepage()'>Terug</div><div class='container--title'>" + getNoteData("title", "1") + "</div>" + getNoteData("description", "1");
    const containerDiv = document.getElementById("container");
    containerDiv.innerHTML = pageContent;
}

function showHomepage(){
    window.location = window.location;
}