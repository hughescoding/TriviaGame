
//everything nested in one function
function init() {

    console.log('hello'); //Is JS Connected?
   
    var $game = $('#start');
    var $countdown = $("#timer-display");
    
    //Variables for timer
    var timeRemaining = 31;
    var timerOn = false;
    var timerId = false;
    
    //variables for answers
    var numCorrect = 0
    var answers = ["#q1true", "#q2false", "#q3false", "#q4true", "#q5true", "#q6true"]
    
   

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
          console.log('time is up!');
          $(showAnswers);
        } else {
          console.log('Counting..');
        }
      }
    }
  
    $game.on('click', () => {
      if (!timerOn) {
        timerOn = true;
        timerId = setInterval(countDownLogic, 1000);
      }
    });
    
    //Log the button click
    $("button").click(function() {
      console.log(this.id); 
      var userSelection = [];
      //userSelection[i++] = $(this).attr('id');
      
      
  });

  }
 
  $(init);
  
  