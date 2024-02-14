const questions = [
    {
      question: "What is my favourite colour? (Your eye colour not included)",
      options: ["Magenta", "Blue", "Galben", "Portocaliu"],
      correctAnswer: "Magenta",
      score: 5,
      colors: ["#8b008b", "Blue", "#efcc00", "#ffa500"]
    },
    {
      question: "What is my oldest sisters name?",
      options: ["Vivian", "Julia", "Rebecca", "Emily"],
      correctAnswer: "Emily",
      score: 2.5,
      colors: ["Green", "Green", "Green", "Green"]
    },
    {
        question: "What was the date when we went to 520 Sushi?",
        options: ["October 21st", "October 14th", "October 20th", "November 4th"],
        correctAnswer: "October 21st",
        score: 7.5,
        colors: ["#B07C4F", "#CB6015", "#800500", "#653818"]
      }

  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let count = 0;
  
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const scoreDisplay = document.getElementById('score');
  const finalScore = document.getElementById('finalScore');
  const nextButton = document.getElementById('next-btn');
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function showQuestion() {
    count = 0;
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.style.backgroundColor = currentQuestion.colors[count];
      button.addEventListener('click', () => checkAnswer(option));
      optionsContainer.appendChild(button);
      count++;
    });
    questionContainer.style.display = 'block';
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      score+=currentQuestion.score;
    }
    scoreDisplay.textContent = score;
    finalScore.textContent = score;
    const scoreAnimation = document.createElement('span');
      scoreAnimation.textContent = "+"+(2*currentQuestion.score);
      scoreAnimation.classList.add('score-animation');
      scoreDisplay.appendChild(scoreAnimation);
      setTimeout(() => {
        scoreDisplay.removeChild(scoreAnimation);
      }, 10000); // Duration of the animation
    }
  
  function showResult() {
    questionContainer.style.display = 'none';
      resultContainer.style.display = 'block';
      setTimeout(function() {
        // Change the URL to the desired local page
        window.location.href = 'valentine2.html';
    }, 5000); 
  }
  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  optionsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      checkAnswer(event.target.textContent);
      showNextQuestion();
    }
  });
  
  // Start quiz
  showQuestion();
  


  
