
//everything nested in one function
function init() {

  console.log("hello"); //Is JS Connected?

  var $game = $("#start");
  var $countdown = $("#timer-display");

  //Variables for timer
  var timeRemaining = 31;
  var timerOn = false;
  var timerId = false;

  //variables for answers
  var numCorrect = 0
  var answers = ["start", "q1true", "q2false", "q3false", "q4true", "q5true", "q6true"]
  var userSelection = []

  //hide the answers function
  function hideAnswers() {
    $(".answers").hide();
  }
  //show the answers function
  function showAnswers() {
    $(".answers").show();
  }

  $(hideAnswers);

  //countdown function  
  function countDownLogic() {

    if (timeRemaining > 0) {
      --timeRemaining;
      $countdown.html(timeRemaining);
      console.log(timeRemaining);

      // when countdown hits zero
      if (timeRemaining === 0) {
        alert("time is up!");

        var length = Math.min(answers.length, userSelection.length);
        //Because my countdown logic also records the "start" click, I had to set a negative value to get the answer count right!
        var countMatched = -1, countNotMatched = -1;

        for (var index = 0; index < length; index++) {
          if (answers[index] == userSelection[index])
            countMatched++;
          else if (userSelection.indexOf(answers[index]) >= 0)
            countNotMatched++;
        }
        console.log(countMatched);
        console.log(countNotMatched);
        //I dont remember going over how to make a second line of text in alert during class, stackoverflow to the resue! \n does the trick.
        alert("You got" + " " + countMatched + " " + "correct!" + "\nReview your answers below")
        $(showAnswers);
      } else {
        console.log("Counting..");
      }
    }
  }

  $game.on("click", () => {
    if (!timerOn) {
      timerOn = true;
      timerId = setInterval(countDownLogic, 1000);
    }
  });

  //Log the button click
  $("button").click(function () {
    console.log(this.id);
    userSelection.push(this.id);
    console.log(userSelection);
  });
  //Obviously this is not very dry code for the button hide, I intend to research other ways to do this, i ran out of time and it does function.
  $(function () {
    $("#q1true , #q1false").on("click", function () {
      $("#q1false , #q1true").hide();
    });
  });
  $(function () {
    $("#q2true , #q2false").on("click", function () {
      $("#q2false , #q2true").hide();
    });
  });
  $(function () {
    $("#q3true , #q3false").on("click", function () {
      $("#q3false , #q3true").hide();
    });
  });
  $(function () {
    $("#q4true , #q4false").on("click", function () {
      $("#q4false , #q4true").hide();
    });
  });
  $(function () {
    $("#q5true , #q5false").on("click", function () {
      $("#q5false , #q5true").hide();
    });
  });
  $(function () {
    $("#q6true , #q6false").on("click", function () {
      $("#q6false , #q6true").hide();
    });
  });




}

$(init);


