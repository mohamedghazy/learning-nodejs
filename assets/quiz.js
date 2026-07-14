/**
 * Lightweight quiz widget for teaching lessons.
 * Usage: Add elements with data-quiz attributes, then call initQuizzes().
 *
 * HTML structure:
 * <div class="quiz" data-answer="2">
 *   <p class="quiz-question">What does readFile return without encoding?</p>
 *   <button class="quiz-option" data-index="0">A string</button>
 *   <button class="quiz-option" data-index="1">A number</button>
 *   <button class="quiz-option" data-index="2">A Buffer</button>
 *   <button class="quiz-option" data-index="3">An array</button>
 *   <p class="quiz-feedback"></p>
 * </div>
 */

function initQuizzes() {
  document.querySelectorAll('.quiz').forEach(quiz => {
    const correctIndex = quiz.dataset.answer;
    const feedback = quiz.querySelector('.quiz-feedback');
    const options = quiz.querySelectorAll('.quiz-option');

    options.forEach(btn => {
      btn.addEventListener('click', () => {
        // Reset all
        options.forEach(b => {
          b.classList.remove('correct', 'incorrect');
          b.disabled = true;
        });

        if (btn.dataset.index === correctIndex) {
          btn.classList.add('correct');
          feedback.textContent = '✓ Correct!';
          feedback.className = 'quiz-feedback success';
        } else {
          btn.classList.add('incorrect');
          options[correctIndex].classList.add('correct');
          feedback.textContent = '✗ Not quite. The highlighted answer is correct.';
          feedback.className = 'quiz-feedback error';
        }
      });
    });
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuizzes);
} else {
  initQuizzes();
}
