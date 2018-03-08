// This code will run as soon as the page loads
$(document).ready(function() {

    var questionsArr = [{
            question: "Almost 200 years ago, the world's first computer programmer was born. Who was she?",
            choices: ["Ada Lovelace", "Henrietta Swan Leavitt", "Grace Hopper"],
            answer: 0,
            gif: "images/c_s_wu.gif",
        },
        {
            question: "Who was the first prime minister of her country to also have a science degree?",
            choices: ["Julia Gillard", "Margaret Thatcher", "Yulia Tymoshenko"],
            answer: 1,
            gif: "images/k_johnson.gif",
        },
        {
            question: "Marie Curie became the first woman to win a Nobel Prize for her work on: ",
            choices: ["Penicillin", "Genetics", "Radioactivity"],
            answer: 2,
            gif: "images/l_hyman.gif",
        },
        {
            question: "How did Fe del Mundo become the first woman admitted to Harvard Medical School in 1936?",
            choices: ["She dressed as a professor", "She snuck in", "Officials thought she was a man"],
            answer: 2,
            gif: "images/m_m_brooks.gif",
        },
        {
            question: "In the 1960s chemist Stephanie Kwolek discovered what material that was five times stronger than steel?",
            choices: ["Teflon", "Kevlar", "Graphene"],
            answer: 1,
            gif: "images/m_s_morgan.gif",
        },
    ]

    var correctAnswer = 0;
    var incorrectAns = 0;
    var questionsAsked = 0;
    var userGuess;
    // Countdown set to inactive.
    var countdownActive = false;
    // Countdown object.
    var timerObj = {
        // Timer set to 20 seconds.
        time: 20,
        // Timer start function begins countdown.
        start: function() {
            if (!countdownActive) {
                var interval = setInterval(timerObj.decrement, 1000);
                $("#countdown").text("<p >" + timerObj.time + " seconds left!</p>");
                countdownActive = true;
            };
        },
        // Timer stops when time reaches 0.
        timeOut: function() {
            if (timer === 0) {
                incorrectAns++;
                countdownActive = false;
                clearInterval(interval);
                $("#imageHolder").html("<img src=assets/images/timeout.gif");
            };
        },
        // Decrement function
        decrement: function() {
            timerObj.time--;
        },
    };

    $("#start").on("click", function() {
        startGame();
        console.log("clickclickclick");
        // Set up game display.
        $("#gameDisplay").empty();
        $("#image-holder").empty();
        $("#question-holder").empty();
        $("#answer-holder").empty();
        timerObj.start();
    });

    function displayQuestion() {

        // Initiate countdown function.
        timerObj.start();
        // Loop iterates through each question.
        for (i = 0; i < questionsArr.length; i++) {
            // Generate random question from array.
            randomQuestion = Math.floor(Math.random() * questionsArr.length);
            // Variable defining current question.
            currentQuestion = questionsArr[randomQuestion];
        }
        // Removes current question from array of questions.
        questionsArr.splice(currentQuestion);


        // Question is displayed in question-holder div.
        $("#question-holder").html(currentQuestion.question);
        console.log(currentQuestion);

        $("#answer-holder").append("<h2>" + currentQuestion.question + "</h2>")

        //  userGuess.addClass("choices-holder").attr("value", j).text(questionsArr.choices[j]);
        //   $("#answer-holder").append(userGuess);
        // for (var j = 0; j < questionsArr[j]; j++) {
        //
        // userGuess.addClass("choices-holder").attr("value", j).text(questionsArr.choices[j]);
        // $("#gameDisplay").append(userGuess);
        console.log("Here are the choices!");
        questionsAsked += 1;
        console.log(questionsAsked)
    };


    // Increases quantity of displayed questions.


    function answerChoice() {
        userGuess = $(this).attr("value");
        displayAnswer();
    };

    function startGame() {
        displayQuestion();
    };

    function displayAnswer() {
        // Sets up game display for answer.
        $("#gameDisplay").empty();
        // If user chooses correct answer.
        if (answerChoice == questionsArr.answer) {
            randomImage = Math.floor(Math.random() * questionArr.gif);
            $("image-holder").html(randomImage);
            correctAnswer += 1;

        } else {
            $("image-holder").html("<img src=assets/images/wrong_answer.gif");
            $("answer-holder").html("The correct answer was " + questionsArr.choices[questionArr.answer] + ".");
            incorrectAnswer += 1;
        }


        function displayResults() {
            $("#game").empty()
        }


        function restartGame() {
            $("#game").empty()
        }



        $("#start").on("click", startGame);

    };
})