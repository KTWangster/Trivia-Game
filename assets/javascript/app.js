// This code will run as soon as the page loads
$(document).ready(function() {
    var questionsArr = [{
            question: "Almost 200 years ago, the world's first computer programmer was born. Who was she?",
            choices: ["Ada Lovelace", "Henrietta Swan Leavitt", "Grace Hopper"],
            answerVal: 0,
            answer: "Ada Lovelace",
            gif: "images/c_s_wu.gif",
        },
        {
            question: "Who was the first prime minister of her country to also have a science degree?",
            choices: ["Julia Gillard", "Margaret Thatcher", "Yulia Tymoshenko"],
            answerVal: 1,
            answer: "Margaret Thatcher",
            gif: "images/k_johnson.gif",
        },
        {
            question: "Marie Curie became the first woman to win a Nobel Prize for her work on: ",
            choices: ["Penicillin", "Genetics", "Radioactivity"],
            answerVal: 2,
            answer: "Radioactivity",
            gif: "images/l_hyman.gif",
        },
        {
            question: "How did Fe del Mundo become the first woman admitted to Harvard Medical School in 1936?",
            choices: ["She dressed as a professor", "She snuck in", "Officials thought she was a man"],
            answerVal: 2,
            answer: "Officials thought she was a man",
            gif: "images/m_m_brooks.gif",
        },
        {
            question: "In the 1960s chemist Stephanie Kwolek discovered what material that was five times stronger than steel?",
            choices: ["Teflon", "Kevlar", "Graphene"],
            answerVal: 1,
            answer: "Kevlar",
            gif: "images/m_s_morgan.gif",
        },
    ]

    var correctAnswer = 0;
    var incorrectAns = 0;
    // Goes through questions array in order from 0.
    var questionsAsked = 0;
    var userGuess;
    // Countdown set to inactive.
    var countdownActive = false;

    var interval;
    // Countdown object.
    var timerObj = {
        time: 30,
        // Decrement function
        decrement: function() {
            timerObj.time--;
            $("#gameDisplay").append($("<h2>").addClass("countdown").text(timerObj.time + " seconds left!"));
            if (timerObj.time === 0) {
                incorrectAns++;
                countdownActive = false;
                clearInterval(interval);
                $("#gameDisplay").empty().addClass("image-holder").append('<img id="timeOutImg" src="assets/images/timeout.gif" />')
                    .append("The answer was: " + currentQuestion.answer);
            };
        },
        // Timer start function begins countdown.
        start: function() {
            if (!countdownActive) {
                interval = setInterval(timerObj.decrement, 1000);
                countdownActive = true;

            };
        },
        // Timer stops when time reaches 0.
        //    timeOut: function() {

        //   },
    };

    $("#start").on("click", function() {
        displayQuestion();
        console.log("clickclickclick");
    });

    function displayQuestion() {
        $("#gameDisplay").empty();
        // Initiate countdown function.
        timerObj.start();
        console.log(timerObj);
        // Displays timer in a new "countdown" class.
        //$("#countdown").append($("<h3>").addClass("countdown").html(timerObj + "seconds left!"));
        currentQuestion = questionsArr[questionsAsked]

        // Place question in new "question" class.
        $("#gameDisplay").append($("<h2>").addClass("question").html(currentQuestion.question));
        // Loop iterates through each question.
        for (i = 0; i < currentQuestion.choices.length; i++) {
            // Place answer choices in a new "choices" class.
            $("#gameDisplay").append($("<h3>").addClass("choices").attr("value", i).html(currentQuestion.choices[i]));
        }
        // Question is displayed in question-holder div.
        console.log(currentQuestion);
        console.log("Here are the choices!");
        questionsAsked += 1;
        console.log(questionsAsked)
    };


    // Increases quantity of displayed questions.

    function answerChoice() {
        userGuess = $(this).attr("value");
        displayAnswer();
    };

    function displayAnswer() {
        // Sets up game display for answer.
        $("#gameDisplay").empty();
        // If user chooses correct answer.
        if (answerChoice == questionsArr.answer) {
            randomImage = Math.floor(Math.random() * questionArr.gif);
            $("gameDisplay").html(randomImage);
            correctAnswer += 1;

        } else {
            $("#gameDisplay").html("<img src=assets/images/wrong_answer.gif");
            $("#gameDisplay").html("The correct answer was " + questionsArr.choices[questionArr.answer] + ".");
            incorrectAnswer += 1;
        }

        // Displays results.
        function displayResults() {
            $("#gameDisplay").empty()
                .append($("<button>").attr("id", "restart").html("Play Again"))
                .append($("<h2>").html("Here are your results: "))
                .append($("<h3>").html("Correct: " + correctAnswer))
                .append($("<h3>").html("Incorrect: " + incorrectAnswer))

        }


        function restartGame() {
            $("#gameDisplay").empty()
            correctAnswer = 0;
            incorrectAns = 0;
            questionsAsked = 0;
            displayQuestion();
        }

    };
});