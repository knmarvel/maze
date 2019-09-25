const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

createRows();
let playerRow = 9;
let playerColumn = 0;
createPlayer(playerRow,playerColumn);
console.log(playerRow, playerColumn)
document.addEventListener('keydown', playerDirections)

function createRows(){
    for(let rowCounter = 0; rowCounter < map.length; rowCounter ++) {
        let divId = "row" + rowCounter;
      createDivElement(divId, "row"," ", "whereTheMazeGoes")
      createCellValues(rowCounter, divId);
    }
}
function createCellValues(rowCounter, divId) {
    for(let cellCounter = 0; cellCounter < map[rowCounter].length; cellCounter++)   {
        let divCoordinates = "Row" + rowCounter +" " + "Cell" + cellCounter;
        let className2 = map[rowCounter].charAt(cellCounter);
        createDivElement(divCoordinates, "mazeCell", className2, divId)
    }
}

function createDivElement(divCoordinates, className, className2, parentDivId) {
    let divElement = document.createElement("div");
    divElement.id = divCoordinates;
    divElement.className = className +" "+ className2
    divElement.innerHTML = "";
    document.getElementById(parentDivId).appendChild(divElement);
    
    }

function createPlayer(horizontal, vertical) {
    let divId = "Row" + horizontal + " " + "Cell" + vertical;
    divElement = document.createElement("div");
    divElement.id = "playerToken";
    divElement.className = "playerToken";
    divElement.innerHTML = '<img src="images/player.png" height ="25px" alt = "player token">';
    document.getElementById(divId).appendChild(divElement);


}



function playerDirections(e) {
    if ( e.code === "ArrowDown")    {
        console.log("down",playerRow,playerColumn)
        down()}
    else if ( e.code === "ArrowUp")    {
        console.log("up",playerRow,playerColumn)
        up()}
    else if ( e.code === "ArrowLeft")    {
        console.log("left",playerRow,playerColumn)
        left();}
    else if ( e.code === "ArrowRight")    {
        console.log("right",playerRow,playerColumn)
        right()
    }
    else {
        alert("That's not an arrow key.")
    }
}


function down(){
    let playerRowCheck = playerRow+1;
    let playerColumnCheck = playerColumn;
    console.log(playerRowCheck, playerColumnCheck);
    if(checkForWallWin(playerRowCheck,playerColumnCheck) === "")   {
        playerRow = playerRowCheck;
        playerColumn = playerColumnCheck
        movePlayer (playerRow, playerColumn);
    }

}

function up(){
    let playerRowCheck = playerRow-1;
    let playerColumnCheck = playerColumn;
    console.log(playerRowCheck, playerColumnCheck);
    if(checkForWallWin(playerRowCheck,playerColumnCheck) === "")   {
        playerRow = playerRowCheck;
        playerColumn = playerColumnCheck
        movePlayer (playerRow, playerColumn);
    }

}

function left(){
    let playerRowCheck = playerRow;
    let playerColumnCheck = playerColumn-1;
    console.log(playerRowCheck, playerColumnCheck);
    if(checkForWallWin(playerRowCheck,playerColumnCheck) === "")   {
        playerRow = playerRowCheck;
        playerColumn = playerColumnCheck
        movePlayer (playerRow, playerColumn);
    }

}
function right(){
    console.log(playerRow, playerColumn)
    let playerRowCheck = playerRow;
    let playerColumnCheck = playerColumn+1;
    console.log(playerRowCheck, playerColumnCheck);
    if(checkForWallWin(playerRowCheck,playerColumnCheck) === "")   {
        playerRow = playerRowCheck;
        playerColumn = playerColumnCheck;
        movePlayer (playerRow, playerColumn);
    }

}
let wallWinChecker = "";
function checkForWallWin(playerRowCheck, playerColumnCheck) {
    wallWinChecker = map[playerRowCheck].charAt(playerColumnCheck);
    console.log(wallWinChecker)
   if (wallWinChecker === "W" || wallWinChecker === "S") {
       alert("The way is shut. It was made by those who are Dead, and the Dead keep it, until the time comes. The way is shut.")
       return wallWinChecker;
   }
   else if(wallWinChecker === "F") {
       alert("You figured it out! Congratulations, you made it out of the maze! Click OK to start again!")
       window.location.reload()
   }
   else {
       wallWinChecker = "";
       return wallWinChecker;
   }
}

function movePlayer(horizontal, vertical)   {
    let divId = "Row" + horizontal + " " + "Cell" + vertical;
    let player = document.getElementById("playerToken");
    document.getElementById(divId).appendChild(player);

}