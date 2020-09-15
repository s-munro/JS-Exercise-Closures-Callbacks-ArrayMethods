// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter2 references count outside of the function's scope, and continuously counts higher so long as you don't refresh the page.  Counter1 references counterMaker, which has count=0 inside of the function and uses counter() (using closure) to count higher.  This means that each time you run counterMaker, it will reset the count at 0, and just count to 1.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter1 uses a closure, because its a function nested within a function, and function 2 is using closure to reference count, since count isn't directly defined within function 2.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter 2 would be preferable when you want to continuously count higher, say a baseball game.  counter1 would be optimal when you want the score to reset.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let scoredPoints = Math.floor(Math.random() * 3);
  return scoredPoints;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, num) {
  let scoreBoard = {
    Home: 0,
    Away: 0
  };
  for (let i = 0; i < num; i++) {
    scoreBoard.Home = scoreBoard.Home + inning();
    scoreBoard.Away = scoreBoard.Away + inning();
  }
  return scoreBoard;
}
console.log(finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(printInnScore, inning, numInnings) {
  let homeTeam = 0;
  let awayTeam = 0;
  for (let i = 0; i < numInnings; i++) {
    function printInnScore() {}
  }
}