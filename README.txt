aze

Today, you will create a JavaScript game that displays a maze, and lets the player use the cursor keys to move through it one step at a time. The maze is a 2D array of cells which are either floors (passable) or walls (impassable).

maze.gif

Here is JavaScript data representing the maze above. Each "W" is a wall, "S" marks the start position, and "F" marks the finish. Spaces are empty cells that the player can walk through.

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

Guidance

    Make each cell of the maze a DIV.
    Make each row of the maze a DIV using "display: flex;"
    Either A) use an absolutely-positioned DIV to represent the player's current position in the maze, or B) have your player DIV appended to a cell DIV for the same reason.
    You need to keep track of (or retrieve on demand) the player's current position in the maze (row index and column index). You could do this one of several ways. You could keep a persistent record of the player's position in, say, a global array or object whose sole job is keeping track of the player's current position. You could constantly update your map array to reflect your player's movement (move the "S" around). You could keep your indexes in data attributes in your HTML and access them through player DIV's "parentElement" property (in the case of 3B). Or you could do a little math on the player DIV's current position on the screen, relative to the start element's current position on the screen and the size of your cells (in the case of 3A).
    Movement can be performed a couple different ways: In the case of 3A, change the absolute position of the player DIV. Or, in the case of 3B, append the player DIV to the next cell DIV. (You could use "document.querySelector()", and the CSS selector for attributes to get the next cell element by the indexes you set on it via data attributes.)

Requirements

    The player must start on the start square.
    Set up an event handler(s) to move your player DIV around the same way you did for the previous assessment on keyboard events.
    Don't allow the player to move into a wall or outside the boundary of the maze.
    When the player moves onto the finish square, show the user that they have won (don't use console.log or alert for this).

For an extra challenge

Add CSS3 animations to allow the player to move smoothly from one grid cell to the next.

You can add the following CSS attribute to the DIV representing the player:

animation-duration: 100ms;

You can create classes with associated CSS3 animations representing the directions of motion, for example:

@keyframes slideRight {
from {margin-left: -33px;}
to {margin-left: 0;}
}
.slideRight {animation-name: slideRight;}

You may find that you need to remove the class associated with the previous animation before you can add it back and get it to run again. You may find it helpful to use window.setTimeout to specify a function to remove the animation classes (after allowing enough of a timeout for the animation to complete).

 Maze
Maze
Criteria 	Ratings 	Pts
This criterion is linked to a Learning Outcome Maze and player are displayed on the page.
	
	
3.0 pts
This criterion is linked to a Learning Outcome Player can be moved through the maze by arrow keys.
	
	
3.0 pts
This criterion is linked to a Learning Outcome Player cannot move onto walls or outside of the maze.
	
	
3.0 pts
This criterion is linked to a Learning Outcome User is notified once the player reaches the finish square.
	
	
1.0 pts
Total Points: 10.0