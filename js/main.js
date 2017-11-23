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
        case "noteCount":
            const count = localStorage.getItem("noteCount");
            return count; 
            break;
        default:
            return "Request Failed";
    } 
}

function createTestNote(){
    localStorage.setItem("noteTitle-ID-1", btoa("Test Notitie"));
    localStorage.setItem("noteDescription-ID-1", btoa("Dit is een test notitie die lokaal is opgeslagen.<br>Wanneer je dit ziet werkt alles naar behoren."));
    localStorage.setItem("noteCount" , parseInt(localStorage.getItem('noteCount')) + 1);
    localStorage.setItem("noteTitle-ID-2", btoa("Test Notitie 2"));
    localStorage.setItem("noteDescription-ID-2", btoa("Dit is een test hele andere notitie die lokaal is opgeslagen.<br>Wanneer je dit ziet werkt alles naar behoren."));
    localStorage.setItem("noteCount" , parseInt(localStorage.getItem('noteCount')) + 1);
    console.log("Test items aangemaakt op ID 1 en ID 2. Bestaande notitie is mogelijk overschreven.");
}

function showNote(id){
    let pageContent = "<div class='is-not-selectable' onclick='showHomepage()'>Terug</div><div class='container--title'>" + getNoteData("title", id) + "</div>" + getNoteData("description", id);
    const containerDiv = document.getElementById("container");
    containerDiv.innerHTML = pageContent;
    console.log("Notitie Tonen - " + getNoteData(id, "title"));
}

function showHomepage(){
    window.location = window.location;
}

function renderNotes(){
    const noteCount = parseInt(localStorage.getItem('noteCount')) + 1;
    const notesDiv = document.getElementById('notes');
    for (var i = 1; i < noteCount; i++) {
        notesDiv.innerHTML = notesDiv.innerHTML + "<div class='container__item is-not-selectable cursor-is-pointer' onclick='showNote("+i+")' unselectable='on'><span class='container__item--title'>" + getNoteData("title", i) + "</span><br><span class='container__item--desc'>Dit is een voorbeeld notitie.</span></div>";
    }
    console.log(noteCount + " notities ingeladen.");    
}

renderNotes();
