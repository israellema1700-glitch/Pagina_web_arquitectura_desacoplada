const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");
const answers = { q1: "b", q2: "a", q3: "a", q4: "a", q5: "a", q6: "a" };

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!quizForm.reportValidity()) return;
  const formData = new FormData(quizForm);
  const score = Object.entries(answers).reduce((total, [question, answer]) => {
    return total + (formData.get(question) === answer ? 1 : 0);
  }, 0);
  quizResult.textContent = `Resultado: ${score} de ${Object.keys(answers).length} respuestas correctas.`;
});

quizForm.addEventListener("reset", () => {
  quizResult.textContent = "";
});
