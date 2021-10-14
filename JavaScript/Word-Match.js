alert("Welcome!!!");
alert("You have 60seconds to score:- 25 points");

document.getElementById("startreset").onclick = function(){
    if(this.innerText === "Start"){
       loader();
       this.innerText = "Reset";
    }else if (this.innerText === "Reset") {
        location.reload();
    }

} 


//Declaration of variables
let score = 0;
let timeRemaining = 60;  // timeleft
// var timer; //action
// var WordMatch;//correctAnswer
let gamePlay;//playing





/* 
Function Declaration
1. reveal
2. conceal
3. 
 */

//Writing the function
//reveal
function reveal(Id){
    document.getElementById(Id).style.display ="block";

}
//conceal
function conceal(Id){
    document.getElementById(Id).style.display ="none";
}

var words = [
    "lagos", "Abia", "Imo", 
    "Osun", "Anambra", "Edo", 
    "Enugu", "Oyo", "Ibadan", 
    "kano", "lokoja", "kaduna", 
    "kastina", "kebbi", "Borno",
    "Portugese","Kogi", "Abuja", 
    "Abeokuta", "Ogun", "Delta", 
    "Importance", "psychology", "Economics", 
    "Markurdi", "Development", "Consistency", 
    "Geography", "Earthquake", "Transmission", 
];


//Initialise Game

function loader(){
    //load word from array
    showWord(words);
    reveal("score");
    //Start matching on word input
    document.getElementById("wordInput").addEventListener("input", startMatch);
    // Call countdown every second
    setInterval(countDown, 1000);
    //check status of the game
    setInterval(checkStatus, 50)


}

// Pick & show random word 
function showWord(words){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    document.getElementById("wordDisplayed").innerHTML = words[randIndex];

}


//Start word Match
function startMatch(){
    if (matchWords()){
        gamePlay = true;
        showWord(words);
        document.getElementById("wordInput").value ='';
        
        score++;

    }
    document.getElementById("scoreValue").innerHTML = score;

}

//Match currentWord to word Input
function matchWords(){
    if (document.getElementById("wordInput").value === document.getElementById("wordDisplayed").innerHTML) {
        conceal("different");
        reveal("match");
        setTimeout(function(){
            conceal("match");
        }, 1000);
        return true;
    }else {
        reveal("different");
        conceal("match");
        setTimeout(function(){
            conceal("different");
        }, 1000);
        return false;
    }
}

// Countdown Timer
function countDown(){
    //Make sure time is not run out 
    if(timeRemaining > 0 ){
        //Decrement 
        --timeRemaining;
    }else if (timeRemaining === 0){
        //Game is over
        gamePlay = false;
        conceal("different");
        conceal("match");
        conceal("score");
    }
    // Show time
    document.querySelector("#countDownTime").innerHTML = timeRemaining;   
    
}

//Check game Status
function checkStatus() {
    if (!gamePlay && timeRemaining === 0) {
        reveal("gameOver");
        document.getElementById("gameOver").innerHTML = "<p class = 'mt-5' style = 'text-transform: uppercase;'>Game Over!!</p><p style = 'font-family: monospace;'>Your score is " + score +" </p>";
 
    }
}



/* 

function beginCountDown(){

    timer = setInterval(function(){
        --timeRemaining;
        reveal("countDown");
        document.getElementById("countDownTime").innerText = timeRemaining;
        if(timeRemaining == 0){

            //stop the count down
            endCountDown();

 
            //Display the Game Over section
            reveal("gameOver");

            gamePlay == false;
            clearPath();


            document.getElementById("gameOver").innerHTML = "<p class = 'mt-5'>Game Over!!</p><p style = 'font-family: monospace; text-transform: uppercase;'>Your score is " + 0 +" </p>";


        }    
    }, 1000);    
}    
function endCountDown(){
    clearInterval(timer);
}    

function clearPath(){
    conceal("countDownTime");
    conceal("different");
    conceal("match");
    conceal("score");
    conceal("words");
}    
 */

/* 

//Commencing game play
document.getElementById("startReset").onclick = function(){
    display();

    //check if the game has started
    if(gamePlay == false){
        //startplaying
        gamePlay == true;

        score = 0;
        
        document.getElementById("scoreValue").innerText = score;
        
        beginCountDown();
        
        this.innerText = "Reset";


        document.getElementById("countDownTime").innerText = timeRemaining;
    
        conceal("gameOver");
        
    } else { 
        location.reload();

        

    }    

}

 */
/* 


function display(){
    
    var z = words.length;
    var t = 0;
    var speed = 50;
    var random = Math.floor(Math.random() * z);
    if (t < words[random].length){
        setTimeout(function(){
            document.getElementById("words").innerText += words[random].charAt(t)
            t++;
        }, speed)
    
    }

}    
 */

/* The charAt() method returns the character at the specified index in a string. 
The index of the first character is 0, the second character is 1, and so on. 
Tip: The index of the last character in a string is string. length-1, the second last character is string.
*/
/* 

for(i=1; i<=10; i++){
    document.getElementById("submit").onclick = function(){
        if(gamePlay == true){
            if(document.getElementById("innerInput").value == selection ){
                ++score;
                document.getElementById("scoreValue").innerText = score;
                conceal("different");
                reveal("match");
                setTimeout(function(){

                    reveal("match");
                }, 1000);


            }else{
                reveal("different");
                conceal("match");
                setTimeout(function(){
                    conceal("different");
                }, 1000);
            }
        }

    }
}
 */

//Start Count down time
/* 
function beginCountDown(){
    timer = setInterval(function(){
        --timeRemaining;
        reveal("countDownTime");
        document.getElementById("countDownTime").innerText = timeRemaining;
        if(timeRemaining == 0){

            //stop the count down
            endCountDown();


            //Display the Game Over section
            reveal("gameOver");

            gamePlay == false;
            clearPath();


            document.getElementById("gameOver").innerHTML = "<p class = 'mt-5'>Game Over!!</p><p style = 'font-family: monospace; text-transform: uppercase;'>Your score is " + 0 +" </p>";
        }    
    }, 1000);    
}    

 */// endCountdown

 /* 
function endCountDown(){
    clearInterval(timer);
}    




 */





