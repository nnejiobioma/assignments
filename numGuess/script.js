var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 2) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play() {
  var user_guess = document.getElementById("guess").value;
  if (user_guess < 0.5 || user_guess > 2) {
    alert("Please enter a number between 0.5 and 2.");
  } else {
    guessed_nums.push(user_guess);
    no_of_guesses += 0.5;

    if (user_guess < answer) {
      msg1.textContent = "Oh! 🤔 your guess is too low.";
      msg2.textContent = "No. of guesses: " + no_of_guesses;
      msg3.textContent = "Guessed numbers are: " + guessed_nums;
    } else if (user_guess > answer) {
      msg1.textContent = "Oh!🤔 your guess is too high.";
      msg2.textContent = "No. of guesses: " + no_of_guesses;
      msg3.textContent = "Guessed numbers are: " + guessed_nums;
    } else if (user_guess == answer) {
      msg1.textContent = "Hurray!!!! You Win!!";
      msg2.textContent = "The number was: " + answer;
      msg3.textContent =
        "You guessed it in " +
        no_of_guesses +
        " guesses. Please move to next stage";
      // document.getElementById("my_btn").disabled = true;
    }
  }
}
