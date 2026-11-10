function gradeQuiz() {
    let score = 0;
    let totalQuestions = 4;

    // --- Question 1 (Radio): Correct answer is 'html' ---
    let q1Selected = document.querySelector('input[name="q1"]:checked');
    let q1Feedback = document.getElementById('q1-feedback');
    if (q1Selected && q1Selected.value === 'html') {
        score++;
        q1Feedback.textContent = "Correct!";
        q1Feedback.className = "feedback correct";
    } else {
        q1Feedback.textContent = "Incorrect. The correct answer is HTML.";
        q1Feedback.className = "feedback incorrect";
    }

    // --- Question 2 (Radio): Correct answer is 'h2o' ---
    let q2Selected = document.querySelector('input[name="q2"]:checked');
    let q2Feedback = document.getElementById('q2-feedback');
    if (q2Selected && q2Selected.value === 'h2o') {
        score++;
        q2Feedback.textContent = "Correct!";
        q2Feedback.className = "feedback correct";
    } else {
        q2Feedback.textContent = "Incorrect. The correct answer is H2O.";
        q2Feedback.className = "feedback incorrect";
    }

    // --- Question 3 (Checkboxes): Correct options are 'chrome', 'edge', 'firefox' ---
    let q3Checkboxes = document.querySelectorAll('input[name="browsers"]:checked');
    let q3Feedback = document.getElementById('q3-feedback');
    let q3Values = Array.from(q3Checkboxes).map(cb => cb.value);
    
    // Check if exactly chrome, edge, and firefox are chosen (and nothing else like photoshop)
    let q3Correct = q3Values.length === 3 && 
                    q3Values.includes('chrome') && 
                    q3Values.includes('edge') && 
                    q3Values.includes('firefox');
    if (q3Correct) {
        score++;
        q3Feedback.textContent = "Correct!";
        q3Feedback.className = "feedback correct";
    } else {
        q3Feedback.textContent = "Incorrect. The correct browsers are Google Chrome, Microsoft Edge, and Mozilla Firefox.";
        q3Feedback.className = "feedback incorrect";
    }

    // --- Question 4 (Checkboxes): Correct options are 'red', 'green', 'blue' ---
    let q4Checkboxes = document.querySelectorAll('input[name="colors"]:checked');
    let q4Feedback = document.getElementById('q4-feedback');
    let q4Values = Array.from(q4Checkboxes).map(cb => cb.value);

    // Check if exactly red, green, and blue are chosen (and nothing else like yellow)
    let q4Correct = q4Values.length === 3 && 
                    q4Values.includes('red') && 
                    q4Values.includes('green') && 
                    q4Values.includes('blue');
    if (q4Correct) {
        score++;
        q4Feedback.textContent = "Correct!";
        q4Feedback.className = "feedback correct";
    } else {
        q4Feedback.textContent = "Incorrect. The correct primary colors of light are Red, Green, and Blue.";
        q4Feedback.className = "feedback incorrect";
    }

    // --- Display Final Score ---
    let scoreDisplay = document.getElementById('score-display');
    scoreDisplay.style.display = 'block';
    scoreDisplay.textContent = `You earned ${score} out of ${totalQuestions} points!`;
}

function resetQuiz() {
    // Clear feedback text and hide score box when reset is clicked
    let feedbacks = document.querySelectorAll('.feedback');
    feedbacks.forEach(f => {
        f.textContent = '';
        f.className = 'feedback';
    });
    let scoreDisplay = document.getElementById('score-display');
    scoreDisplay.style.display = 'none';
    scoreDisplay.textContent = '';
}