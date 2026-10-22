const topics = [
  { id: "que-es", label: "Qué es" },
  { id: "flujo", label: "Cómo funciona" },
  { id: "historia", label: "Historia" },
  { id: "caracteristicas", label: "Características" },
  { id: "ventajas", label: "Ventajas" },
  { id: "desventajas", label: "Desventajas" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "sectores", label: "Sectores" }
];

const questionBank = {
  "que-es": [
    {
      prompt: "¿Qué significa desacoplar una aplicación?",
      options: ["Separar responsabilidades y comunicarlas mediante contratos", "Eliminar todas las conexiones entre sus partes", "Usar una sola base de datos para todo", "Evitar que existan interfaces de usuario"],
      answer: 0,
      explanation: "El desacoplamiento reduce dependencias internas, pero los componentes todavía colaboran mediante interfaces o APIs."
    },
    {
      prompt: "¿Qué límite suele separar al frontend del backend?",
      options: ["El color de la página", "Un contrato de API que define solicitudes y respuestas", "El nombre del repositorio", "Una copia de la misma aplicación"],
      answer: 1,
      explanation: "El contrato de API permite que cliente y servidor evolucionen sin depender de sus detalles internos."
    }
  ],
  flujo: [
    {
      prompt: "En una petición REST, ¿qué hace normalmente el frontend?",
      options: ["Accede directamente a las tablas del servidor", "Envía una solicitud HTTP a un endpoint de la API", "Despliega el backend", "Sustituye la lógica de negocio"],
      answer: 1,
      explanation: "El frontend solicita una operación a la API; el backend valida, ejecuta la lógica y devuelve una respuesta."
    },
    {
      prompt: "¿Qué canal conviene para eventos bidireccionales en tiempo real?",
      options: ["Una imagen PNG", "Una hoja de estilos", "WebSockets", "Una consulta SQL desde el navegador"],
      answer: 2,
      explanation: "WebSockets mantienen un canal persistente para intercambiar mensajes en ambas direcciones."
    }
  ],
  historia: [
    {
      prompt: "¿Cuál describe mejor la evolución histórica de estos diseños?",
      options: ["Aparecieron en un único año con una sola herramienta", "Evolucionaron desde cliente-servidor, capas y servicios hacia APIs web modernas", "Nacieron únicamente con las bases de datos NoSQL", "Reemplazaron toda forma de arquitectura anterior"],
      answer: 1,
      explanation: "La separación de responsabilidades evolucionó gradualmente; no tiene un único inventor o fecha de origen."
    },
    {
      prompt: "¿Qué popularizó aún más el uso de APIs desacopladas?",
      options: ["La web moderna, el móvil y los servicios en la nube", "La desaparición de Internet", "El uso de páginas sin servidor ni cliente", "La obligación de escribir todo en un mismo lenguaje"],
      answer: 0,
      explanation: "Web, móvil y nube impulsaron clientes diversos que necesitan consumir capacidades comunes mediante APIs."
    }
  ],
  caracteristicas: [
    {
      prompt: "¿Qué característica favorece la evolución independiente?",
      options: ["Contratos explícitos y responsabilidades bien delimitadas", "Dependencias ocultas entre todas las capas", "Desplegar siempre todo junto", "Compartir detalles internos entre equipos"],
      answer: 0,
      explanation: "Límites y contratos claros reducen el acoplamiento y facilitan cambiar un componente sin rehacer los demás."
    },
    {
      prompt: "¿Qué es importante para mantener compatible una API?",
      options: ["Cambiar respuestas sin avisar", "Versionar cambios y documentar el contrato", "Hacer que el frontend consulte la base de datos", "Quitar validaciones"],
      answer: 1,
      explanation: "La documentación, las pruebas de contrato y un versionado responsable evitan romper a los consumidores."
    }
  ],
  ventajas: [
    {
      prompt: "¿Qué significa escalar horizontalmente por separado?",
      options: ["Añadir instancias al componente que tiene más demanda", "Aumentar siempre todos los componentes a la vez", "Duplicar los datos en cada navegador", "Eliminar el balanceador"],
      answer: 0,
      explanation: "Los componentes pueden recibir capacidad según su carga, evitando escalar todo el sistema por igual."
    },
    {
      prompt: "¿Qué ventaja aporta tener clientes separados del backend?",
      options: ["Un API puede servir a clientes web, móviles y otros integradores", "El sistema nunca necesita mantenimiento", "No hace falta autenticación", "Todas las solicitudes son instantáneas"],
      answer: 0,
      explanation: "Una API bien diseñada puede atender varios clientes sin duplicar toda la lógica de negocio."
    }
  ],
  desventajas: [
    {
      prompt: "¿Qué complejidad suele aumentar al separar componentes?",
      options: ["La coordinación, observabilidad e integración entre servicios", "La facilidad para cambiar un color", "La resolución de nombres de variables locales", "La creación de archivos HTML"],
      answer: 0,
      explanation: "La comunicación distribuida requiere monitoreo, trazas, gestión de errores y pruebas de integración."
    },
    {
      prompt: "¿Qué riesgo introduce la comunicación por red?",
      options: ["Latencia, desconexiones y fallos parciales", "Que ya no se necesiten contratos", "Que la aplicación no pueda tener interfaz", "Que todos los lenguajes se vuelvan iguales"],
      answer: 0,
      explanation: "La red puede fallar o responder lentamente; se necesitan límites de tiempo, reintentos y degradación controlada."
    }
  ],
  tecnologias: [
    {
      prompt: "¿Cuál es un framework de frontend que puede consumir una API?",
      options: ["React", "PostgreSQL", "Redis", "Docker Compose"],
      answer: 0,
      explanation: "React es una biblioteca de interfaz. PostgreSQL y Redis son tecnologías de datos; Docker empaqueta servicios."
    },
    {
      prompt: "¿Qué pareja contiene una base relacional y una documental?",
      options: ["PostgreSQL y MongoDB", "React y Vue", "Spring y FastAPI", "Docker y Kubernetes"],
      answer: 0,
      explanation: "PostgreSQL es relacional y MongoDB orientada a documentos; la elección depende del modelo y las necesidades de datos."
    },
    {
      prompt: "¿Cuál es un framework backend escrito para Python?",
      options: ["FastAPI", "Angular", "Svelte", "Redis"],
      answer: 0,
      explanation: "FastAPI permite construir APIs con Python; Java Spring, Node.js y .NET son otras opciones backend comunes."
    }
  ],
  sectores: [
    {
      prompt: "¿En qué sector es útil separar catálogo, pagos e inventario?",
      options: ["Comercio electrónico", "Edición de texto sin conexión", "Relojes analógicos", "Impresión doméstica"],
      answer: 0,
      explanation: "En comercio electrónico, estas capacidades pueden tener cargas, reglas y ciclos de cambio diferentes."
    },
    {
      prompt: "¿Qué caso aprovecha WebSockets en una arquitectura distribuida?",
      options: ["Actualización en vivo de entregas o notificaciones", "Cambiar el formato de una imagen", "Guardar el HTML en disco", "Elegir el color del logotipo"],
      answer: 0,
      explanation: "Logística, colaboración, medios y atención al cliente usan eventos en vivo para mantener información actualizada."
    }
  ]
};

const wheel = document.querySelector("#wheel-disk");
const spinButton = document.querySelector("#spin-button");
const selectedTopic = document.querySelector("#selected-topic");
const questionTitle = document.querySelector("#question-title");
const answerList = document.querySelector("#answer-list");
const answerFeedback = document.querySelector("#answer-feedback");
const quizProgress = document.querySelector("#quiz-progress");
const scoreValue = document.querySelector("#scoreboard strong");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let rotation = 0;
let score = 0;
let round = 0;
let activeQuestion;
let answered = false;

spinButton.addEventListener("click", () => {
  if (spinButton.disabled) return;

  const topicIndex = Math.floor(Math.random() * topics.length);
  const topic = topics[topicIndex];
  const questions = questionBank[topic.id];
  activeQuestion = questions[Math.floor(Math.random() * questions.length)];
  answered = false;
  spinButton.disabled = true;
  spinButton.textContent = "Girando...";
  selectedTopic.textContent = topic.label.toUpperCase();
  questionTitle.textContent = "La ruleta está girando...";
  answerList.replaceChildren();
  answerFeedback.textContent = "";
  quizProgress.textContent = "Prepárate para responder.";

  const nextFullTurn = Math.ceil((rotation + 1080) / 360) * 360;
  rotation = nextFullTurn - topicIndex * 45;
  wheel.style.transform = `rotate(${rotation}deg)`;

  const revealQuestion = () => {
    round += 1;
    questionTitle.textContent = activeQuestion.prompt;
    answerList.innerHTML = activeQuestion.options.map((option, index) => `
      <button class="answer-choice" type="button" data-choice="${index}">
        <b>${String.fromCharCode(65 + index)}</b><span>${option}</span>
      </button>`).join("");
    spinButton.disabled = false;
    spinButton.textContent = "Girar otra vez";
    quizProgress.textContent = `Ronda ${round} · selecciona una respuesta para sumar puntos.`;
  };

  window.setTimeout(revealQuestion, reducedMotion.matches ? 30 : 4700);
});

answerList.addEventListener("click", (event) => {
  const selectedAnswer = event.target.closest("[data-choice]");
  if (!selectedAnswer || answered || !activeQuestion) return;

  answered = true;
  const choice = Number(selectedAnswer.dataset.choice);
  const isCorrect = choice === activeQuestion.answer;
  answerList.querySelectorAll("[data-choice]").forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.choice) === activeQuestion.answer) button.classList.add("is-correct");
    else if (button === selectedAnswer && !isCorrect) button.classList.add("is-wrong");
  });

  if (isCorrect) {
    score += 1;
    scoreValue.textContent = String(score);
    answerFeedback.textContent = `¡Correcto! ${activeQuestion.explanation}`;
  } else {
    answerFeedback.textContent = `La respuesta correcta está marcada en verde. ${activeQuestion.explanation}`;
  }
  quizProgress.textContent = `Ronda ${round} · ${score} ${score === 1 ? "acierto" : "aciertos"}.`;
});
