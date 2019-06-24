var inquirer = require('inquirer');
var chalk = require('chalk')

var zombies = 6;
var userHealth = 70;

function playRound(){
  inquirer.prompt([{
    type: "list",
    name: "userGuess",
    message: `Try to stay ${chalk.red('alive')}! Guess a number between ${chalk.red('one')} and ${chalk.red('five')}`,
    choices: ['1','2','3','4','5']
  }]).then(function(guess){
    console.log(guess);
    var target = Math.floor(Math.random() * 5);
    // Check if the user guessed that number
    console.log(guess.userGuess);
    console.log(target);
    //target = 1;
    if(guess.userGuess == target){
      // We hit the zombie
      console.log("You strike down one of the shambling hoard!")
      zombies--;

    } else {
      // the zombie hit us
      console.log("A zombie strikes you!")
      userHealth -= zombies * Math.floor(Math.random() * 3)

    }
    console.log(`Only ${chalk.red(zombies)} zombies remain`)
    console.log(`You have ${chalk.green(userHealth)} hp remaining`)


    if(zombies <= 0){
      console.log("You escape to live another day... YOU WIN");
    } else if(userHealth <= 0){
      console.log("You join the shambling hoard, perhaps the next player will be more careful");
    } else {
      makeChoice()
    }



    // if they did, lower the zombies by one
    // otherwise, take a random amount of damage based on how many zombies are left
  })
}
function makeChoice(){
  inquirer.prompt([{
    type: "list",
    name: "fruitQuestion",
    message: `${chalk.red('Fight a zombie')} or try and get ${chalk.blue('delicious fruit')}`,
    choices: ['fight', 'fruit']
  }]).then(function(response){
    if(response.fruitQuestion === "fight"){
      playRound()
    } else {
      playFruitRound()
    }
  })
}
function playFruitRound(){
  inquirer.prompt([{
    type: "list",
    name: "userGuess",
    message: `Try to grab the ${chalk.blue('delicious fruit')}, pick a number between ${chalk.blue('one')} and ${chalk.blue('seven')}`,
    choices: ['1','2','3','4']
  }]).then(function(guess){
    console.log(guess);
    var target = Math.floor(Math.random() * 4);
    // Check if the user guessed that number
    console.log(guess.userGuess);
    console.log(target);
    //target = 1;
    if(guess.userGuess == target){
      // We hit the zombie
      console.log("You grab the fruit and recover 10 health")
      userHealth += 10
    } else {
      // the zombie hit us
      console.log("A zombie strikes you!")
      userHealth -= zombies * Math.floor(Math.random() * 3)

    }
    console.log(`Only ${chalk.red(zombies)} zombies remain`)
    console.log(`You have ${chalk.green(userHealth)} hp remaining`)


    if(zombies <= 0){
      console.log("You escape to live another day... YOU WIN");
    } else if(userHealth <= 0){
      console.log("You join the shambling hoard, perhaps the next player will be more careful");
    } else {
      makeChoice()
    }



    // if they did, lower the zombies by one
    // otherwise, take a random amount of damage based on how many zombies are left
  })
}

makeChoice();
