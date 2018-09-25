
//everything Nested in one function
function init() {

    console.log('hello'); //Is JS Connected?
   
    var $play = $('#start');
    var $countdown = $("#timer-display");
    
    //Variables for timer
    var timeRemaining = 31;
    var timerOn = false;
    var timerId = false;

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
  
    $play.on('click', () => {
      if (!timerOn) {
        timerOn = true;
        timerId = setInterval(countDownLogic, 1000);
      }
    });
  
  }
 
  $(init);

  
  

  