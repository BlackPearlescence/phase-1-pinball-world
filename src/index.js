fetch("http://localhost:3000/games")
    .then((resp) => resp.json())
    .then ((gameItems = []) => {
        for(let game of gameItems){
            renderGame(game);
        }
        renderFirstGame(gameItems[0]);
    })

const gameImagePlaceholder = document.querySelector("#detail-image");
const gameNamePlaceholder = document.querySelector("#detail-title");
const highScorePlaceholder = document.querySelector("#detail-high-score");
const highScoreDict = {}

function renderFirstGame(game){
    gameImagePlaceholder.src = game.image;
    gameNamePlaceholder.textContent = game.name;
    highScorePlaceholder.textContent = game.high_score;
}

function renderGame(game){
    const gameList = document.querySelector(".game-list");
    const gameNameManuEntry = document.createElement("p");
    gameNameManuEntry.textContent = `${game.name} (${game.manufacturer_name})`;
    gameList.append(gameNameManuEntry);
    highScoreDict[game.name] = game.high_score;

    gameNameManuEntry.addEventListener("click", (e) =>{
        gameImagePlaceholder.src = game.image;
        gameNamePlaceholder.textContent = game.name;
        highScorePlaceholder.textContent = parseInt(highScoreDict[gameNamePlaceholder.textContent]);
    })

    const highScoreFormSubmit = document.querySelector("#high-score-form");
    // const highScoreForm = document.querySelector("#high-score-form");

    // highScoreForm.addEventListener("submit",(e)=>{
    //     e.preventDefault();
    // })
    highScoreFormSubmit.addEventListener("submit",(e)=>{
        e.preventDefault();
        const scoreInput = document.querySelector("#score-input");
        highScorePlaceholder.textContent = parseInt(scoreInput.value);
        highScoreDict[gameNamePlaceholder.textContent] = parseInt(scoreInput.value);
        
    })
}