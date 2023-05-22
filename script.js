console.log("fuck you world >:(")

let score = [win= 0, lose=0, tie=0];

let computer = getComputerChoice();

let user = getUserChoise();

comparison(computer, user,score);





function getComputerChoice(){
    let number = Math.random(0, 1);
    let cpmove;
    if (number <= 1/3){
        cpmove = "rock";
    } else if (number >1/3 && number <=2/3){
        cpmove = "paper";
    } else {
        cpmove = "scissors";
    }
    console.log(number);
    console.log(cpmove);

    return cpmove;
}

function getUserChoise(){
    let input = prompt();
    userMove = input.toLowerCase();
    console.log(userMove);
    return userMove;
}

function comparison(computer, user, score){
    if(user === "rock" && computer === "paper"){
        console.log("You lose :(");
        score.lose ++;
        console.log(`score: win ${score.win},lose: ${score.lose}, tie: ${score.tie}`)
    }else if (user === "rock" && computer === "scissors"){
        console.log("You Win :)");
        score.win ++;
        console.log(`score: win ${score.win},lose: ${score.lose}, tie: ${score.tie}`)
    }else if(user==="rock" && computer === "rock"){
        console.log("Tie :|");
        score.tie ++;
        console.log(`score: win ${score.win},lose: ${score.lose}, tie: ${score.tie}`)
    }

    if(user === "paper" && computer === "paper"){
        console.log("Tie :|")
    }else if (user === "paper" && computer === "scissors"){
        console.log("You Lose :(")
    }else if(user==="paper" && computer === "rock"){
        console.log("You Win :)")
    }

    if(user === "scissors" && computer === "paper"){
        console.log("You Win :)")
    }else if (user === "scissors" && computer === "scissors"){
        console.log("Tie :|")
    }else if(user==="scissors" && computer === "rock"){
        console.log("You Lose :(")
    }
}

function game(){

}