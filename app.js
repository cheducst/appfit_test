const STORAGE_KEY = "personal-training-app-pdf-days-v3";

const sampleState = {
  selectedWorkoutId: "costas-ombros",
  selectedProgressExercise: "",
  activeView: "plans",
  workouts: [
    {
      id: "biceps-peito",
      name: "Bíceps + Peito",
      group: "Bíceps, peito, core e pernas",
      day: "Dia 1",
      notes: "Fonte: PDF BÍCEPS + PEITO.",
      exercises: [
        {
          id: "hiperextensao-lombar-solo",
          name: "Hiperextensao de Lombar Solo",
          muscle: "Core",
          notes: "Intervalo: 30s.",
          sets: buildSets(2, 10, "0kg")
        },
        {
          id: "superman-bastao",
          name: "Superman com Bastão",
          muscle: "Core",
          notes: "Intervalo: 30s.",
          sets: buildSets(2, 10, "0kg")
        },
        {
          id: "abdominal-supra-pes-altos",
          name: "Abdominal Supra no Solo Pés Altos",
          muscle: "Abdomen",
          notes: "Intervalo: 45s.",
          sets: buildSets(3, 15, "0kg")
        },
        {
          id: "supino-maquina-pegada-neutra",
          name: "Supino Maquina (Pegada Neutra)",
          muscle: "Peito",
          notes: "Intervalo: 60s.",
          sets: buildSets(4, 12, "Carga máxima")
        },
        {
          id: "supino-polia-alta",
          name: "Supino na Polia Alta",
          muscle: "Peito",
          notes: "Intervalo: 60s.",
          sets: buildSets(3, 15, "0kg")
        },
        {
          id: "peck-deck",
          name: "Peck Deck",
          muscle: "Peito",
          notes: "Intervalo: 60s.",
          sets: buildSets(4, 12, "0kg")
        },
        {
          id: "rosca-scott-martelo-alternado",
          name: "Rosca Scott Martelo Alternado com Halteres",
          muscle: "Bíceps",
          notes: "Intervalo: 60s.",
          sets: buildSets(4, 15, "0kg")
        },
        {
          id: "rosca-direta-polia-barra-w",
          name: "Rosca Direta na Polia (Barra W)",
          muscle: "Bíceps",
          notes: "Intervalo: 60s.",
          sets: buildSets(3, 15, "0kg")
        },
        {
          id: "leg-press-horizontal",
          name: "Leg Press Horizontal",
          muscle: "Pernas",
          notes: "Intervalo: 90s.",
          sets: buildSets(5, 10, "Moderada")
        }
      ]
    },
    {
      id: "ombros-triceps",
      name: "Ombros + Tríceps",
      group: "Ombros, tríceps, core e pernas",
      day: "Dia 2",
      notes: "Fonte: PDF OMBRO E TRÍCEPS.",
      exercises: [
        {
          id: "mobilidade-core-ombros-triceps",
          name: "Mobilidade de Core",
          muscle: "Core",
          notes: "Cada movimento 5 vezes, em duas séries.",
          sets: buildSets(2, 5, "0kg")
        },
        {
          id: "encolhimento-ombros-barra-reta",
          name: "Encolhimento de Ombros com Barra Reta",
          muscle: "Ombros",
          notes: "Intervalo: 30s.",
          sets: buildSets(2, 15, "0kg")
        },
        {
          id: "elevacao-lateral-unilateral-polia",
          name: "Elevação Lateral Unilateral na Polia Baixa neutra",
          muscle: "Ombros",
          notes: "Intervalo: 60s.",
          sets: buildSets(3, 12, "0kg")
        },
        {
          id: "desenvolvimento-maquina-pronada",
          name: "Desenvolvimento Máquina (Pegada Pronada)",
          muscle: "Ombros",
          notes: "Intervalo: 60s.",
          sets: buildSets(3, 12, "0kg")
        },
        {
          id: "desenvolvimento-arnold-sentado",
          name: "Desenvolvimento Arnold Sentado",
          muscle: "Ombros",
          notes: "Intervalo: 60s. Progressão 10, 12 e 15x.",
          sets: [
            { reps: 10, load: "0kg", done: false },
            { reps: 12, load: "0kg", done: false },
            { reps: 15, load: "0kg", done: false }
          ]
        },
        {
          id: "elevacao-frontal-polia-corda",
          name: "Elevação Frontal na Polia com Corda",
          muscle: "Ombros",
          notes: "Intervalo: 60s.",
          sets: buildSets(4, 8, "0kg")
        },
        {
          id: "triceps-barra-polia",
          name: "Tríceps Barra Encostado na Polia",
          muscle: "Tríceps",
          notes: "Intervalo: 60s.",
          sets: buildSets(5, 8, "Carga máxima")
        },
        {
          id: "triceps-frances-polia-barra-reta",
          name: "Tríceps Francês na Polia com Barra Reta",
          muscle: "Tríceps",
          notes: "Intervalo: 90s.",
          sets: buildSets(3, 12, "0kg")
        },
        {
          id: "triceps-testa-polia-barra-reta",
          name: "Tríceps Testa na Polia com Barra Reta",
          muscle: "Tríceps",
          notes: "Intervalo: 60s. Progressão 10, 12 e 15x.",
          sets: [
            { reps: 10, load: "0kg", done: false },
            { reps: 12, load: "0kg", done: false },
            { reps: 15, load: "0kg", done: false }
          ]
        },
        {
          id: "cadeira-extensora",
          name: "Cadeira Extensora",
          muscle: "Pernas",
          notes: "Intervalo: 60s.",
          sets: buildSets(5, 10, "Carga moderada")
        },
        {
          id: "abducao-quadril-maquina",
          name: "Abdução de Quadril Máquina",
          muscle: "Pernas",
          notes: "Intervalo: 60s.",
          sets: buildSets(3, 15, "0kg")
        }
      ]
    },
    {
      id: "costas-ombros",
      name: "Costas + Ombros",
      group: "Costas, ombros, core e pernas",
      day: "Dia 3",
      notes: "Fonte: PDF COSTA E OMBROS.",
      exercises: [
        {
          id: "mobilidade-core-costas-ombros",
          name: "Mobilidade de Core",
          muscle: "Core",
          notes: "2 séries de 5 repetições cada movimento. Intervalo: 30s.",
          sets: buildSets(2, 5, "0kg")
        },
        {
          id: "barra-fixa-pegada-aberta",
          name: "Barra Fixa (Pegada Aberta)",
          muscle: "Costas",
          notes: "Intervalo: 40s.",
          sets: buildSets(3, 10, "0kg")
        },
        {
          id: "crucifixo-inverso-maquina",
          name: "Crucifixo Inverso Máquina",
          muscle: "Ombros",
          notes: "Intervalo: 60s.",
          sets: buildSets(4, 12, "0kg")
        },
        {
          id: "face-pull",
          name: "Face Pull",
          muscle: "Ombros",
          notes: "Intervalo: 60s.",
          sets: buildSets(3, 12, "0kg")
        },
        {
          id: "puxada-neutra-triangulo",
          name: "Puxada Neutra triangulo",
          muscle: "Costas",
          notes: "Intervalo: 60s.",
          sets: buildSets(4, 12, "0kg")
        },
        {
          id: "crucifixo-inverso-polia-alta",
          name: "Crucifixo Inverso na Polia Alta",
          muscle: "Ombros",
          notes: "Intervalo: 60s.",
          sets: buildSets(3, 12, "0kg")
        },
        {
          id: "puxada-aberta-barra-reta",
          name: "Puxada Aberta Barra reta",
          muscle: "Costas",
          notes: "Intervalo: 60s.",
          sets: buildSets(3, 15, "0kg")
        },
        {
          id: "pullover-anilha",
          name: "Pullover com Anilha",
          muscle: "Costas",
          notes: "Intervalo: 60s.",
          sets: buildSets(4, 10, "0kg")
        },
        {
          id: "aducao-quadril-maquina",
          name: "Adução de Quadril Máquina",
          muscle: "Pernas",
          notes: "Intervalo: 45s.",
          sets: buildSets(4, 15, "0kg")
        },
        {
          id: "mesa-flexora",
          name: "Mesa Flexora",
          muscle: "Pernas",
          notes: "Intervalo: 50s.",
          sets: buildSets(4, 10, "0kg")
        }
      ]
    }
  ],
  history: [],
  profile: {
    nick: "",
    weight: "",
    height: "",
    age: "",
    registration: ""
  }
};

let state = loadState();
let editorMode = null;
let editorContext = {};

let timerState = {
  remaining: 0,
  total: 0,
  label: "",
  running: false,
  intervalId: null,
  done: false
};

const exerciseImageMap = {
  "mobilidade-core-costas-ombros": {
    url: "https://loremflickr.com/800/520/core,exercise,gym/all?lock=300",
    source: "Flickr"
  },
  "barra-fixa-pegada-aberta": {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pull-ups_exercise_from_back.jpg?width=900",
    source: "Wikimedia Commons"
  },
  "crucifixo-inverso-maquina": {
    url: "https://loremflickr.com/800/520/rear,delt,fly,gym/all?lock=301",
    source: "Flickr"
  },
  "face-pull": {
    url: "https://loremflickr.com/800/520/face,pull,cable,gym/all?lock=302",
    source: "Flickr"
  },
  "puxada-neutra-triangulo": {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/PulldownMachineExercise.JPG?width=900",
    source: "Wikimedia Commons"
  },
  "crucifixo-inverso-polia-alta": {
    url: "https://loremflickr.com/800/520/cable,rear,delt,gym/all?lock=303",
    source: "Flickr"
  },
  "puxada-aberta-barra-reta": {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Back_Pull_down.jpg?width=900",
    source: "Wikimedia Commons"
  },
  "pullover-anilha": {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Barbell_front_raise_pullover_1.svg?width=900",
    source: "Wikimedia Commons"
  },
  "aducao-quadril-maquina": {
    url: "https://loremflickr.com/800/520/hip,adduction,machine,gym/all?lock=304",
    source: "Flickr"
  },
  "mesa-flexora": {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/LyingLegCurlMachineExercise.JPG?width=900",
    source: "Wikimedia Commons"
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  pageTitle: $("#pageTitle"),
  todayWorkoutSelect: $("#todayWorkoutSelect"),
  weeklyHistory: $("#weeklyHistory"),
  todayProgress: $("#todayProgress"),
  todayExercises: $("#todayExercises"),
  workoutList: $("#workoutList"),
  historyStats: $("#historyStats"),
  historyList: $("#historyList"),
  progressExerciseSelect: $("#progressExerciseSelect"),
  progressChart: $("#progressChart"),
  progressDetails: $("#progressDetails"),
  editorDialog: $("#editorDialog"),
  editorForm: $("#editorForm"),
  dialogTitle: $("#dialogTitle"),
  dialogBody: $("#dialogBody"),
  deleteButton: $("#deleteButton"),
  profileNick: $("#profileNick"),
  profileWeight: $("#profileWeight"),
  profileHeight: $("#profileHeight"),
  profileAge: $("#profileAge"),
  profileRegistration: $("#profileRegistration"),
  restTimer: $("#restTimer"),
  restTimerBar: $("#restTimerBar"),
  restTimerLabel: $("#restTimerLabel"),
  restTimerTime: $("#restTimerTime"),
  restTimerToggle: $("#restTimerToggle")
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(sampleState);
  try {
    const parsed = JSON.parse(saved);
    return { ...structuredClone(sampleState), ...parsed };
  } catch {
    return structuredClone(sampleState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function buildSets(count, reps, load) {
  return Array.from({ length: count }, () => ({ reps, load, done: false }));
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function selectedWorkout() {
  return state.workouts.find((workout) => workout.id === state.selectedWorkoutId) || state.workouts[0];
}

function formatDate(isoDate) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(new Date(`${isoDate}T12:00:00`));
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function numericLoad(load) {
  const match = String(load ?? "").replace(",", ".").match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function loadLabel(load) {
  const value = String(load ?? "").trim();
  if (!value) return "0kg";
  if (/^0(\.0+)?\s*kg?$/i.test(value)) return "Registrar carga";
  return /\d/.test(value) && !/kg/i.test(value) ? `${value} kg` : value;
}

function imageForExercise(exercise) {
  if (exercise.imageUrl) {
    return {
      url: exercise.imageUrl,
      source: "Foto editada"
    };
  }
  if (exerciseImageMap[exercise.id]) return exerciseImageMap[exercise.id];
  const keywords = exercise.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ",")
    .replace(/^,|,$/g, "");
  return {
    url: `https://loremflickr.com/800/520/${keywords},gym,exercise/all?lock=${hashString(exercise.id)}`,
    source: "Flickr"
  };
}

function hashString(value) {
  return String(value).split("").reduce((hash, char) => hash + char.charCodeAt(0), 500);
}

function imageForWorkout(workout) {
  if (workout.imageUrl) return workout.imageUrl;
  const keywords = `${workout.group || workout.name || "treino"}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ",")
    .replace(/^,|,$/g, "");
  return `https://loremflickr.com/480/640/${keywords},gym,workout/all?lock=${hashString(workout.id)}`;
}

function exerciseWeightSummary(exercise) {
  const labels = Array.from(new Set(exercise.sets.map((set) => loadLabel(set.load))));
  return labels.length === 1 ? labels[0] : labels.join(" / ");
}

function render() {
  saveState();
  renderNavigation();
  renderWeeklyHistory();
  renderToday();
  renderPlans();
  renderHistory();
  renderProgress();
  renderProfile();
}

function renderNavigation() {
  const labels = { today: "Hoje", plans: "Treinos", history: "Historico", progress: "Evolucao", profile: "Perfil" };
  elements.pageTitle.textContent = labels[state.activeView] || "Hoje";
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.id === `${state.activeView}View`));
  $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === state.activeView));
}

function renderToday() {
  const workout = selectedWorkout();
  elements.todayWorkoutSelect.innerHTML = state.workouts.map((item) => (
    `<option value="${item.id}" ${item.id === workout?.id ? "selected" : ""}>${escapeHtml(item.day)} - ${escapeHtml(item.name)}</option>`
  )).join("");

  if (!workout) {
    elements.todayProgress.innerHTML = "<p class=\"empty-state\">Crie um treino para comecar.</p>";
    elements.todayExercises.innerHTML = "";
    return;
  }

  const sets = workout.exercises.flatMap((exercise) => exercise.sets);
  const done = sets.filter((set) => set.done).length;
  const percent = sets.length ? Math.round((done / sets.length) * 100) : 0;
  elements.todayProgress.innerHTML = `
    <div class="exercise-head">
      <div>
        <h3>${escapeHtml(workout.name)}</h3>
        <p class="muted">${escapeHtml(workout.group || workout.day || "Treino")}</p>
      </div>
      <div class="today-progress-meta">
        <span class="today-progress-percent">${percent}%</span>
        <span class="pill">${done}/${sets.length} series</span>
      </div>
    </div>
    <div class="bar-track" role="progressbar" aria-label="Progresso do treino" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
      <div class="bar-fill" style="width:${percent}%"></div>
    </div>
    <p class="today-progress-label muted">${percent >= 100 ? "Treino concluido! 🎉" : `${percent}% do treino concluido`}</p>
    <div class="inline-actions">
      <button class="button primary" type="button" data-action="finish-session">Finalizar sessao</button>
      <button class="button" type="button" data-action="edit-workout" data-workout-id="${workout.id}">Editar treino</button>
    </div>
  `;

  elements.todayExercises.innerHTML = workout.exercises.map((exercise) => renderExerciseCard(workout, exercise)).join("");
}

function renderExerciseCard(workout, exercise) {
  const doneCount = exercise.sets.filter((set) => set.done).length;
  const image = imageForExercise(exercise);
  const weightSummary = exerciseWeightSummary(exercise);
  const restSeconds = parseIntervalSeconds(exercise.notes) || 60;
  return `
    <article class="exercise-card">
      <div class="exercise-media is-clickable" data-action="expand-image" data-image-url="${escapeAttr(image.url)}" data-image-alt="${escapeAttr(exercise.name)}" role="button" tabindex="0" aria-label="Ampliar foto de ${escapeAttr(exercise.name)}">
        <img src="${escapeAttr(image.url)}" alt="${escapeAttr(exercise.name)}" loading="lazy" onerror="this.closest('.exercise-media').classList.add('is-fallback'); this.remove();">
        <span class="exercise-media-fallback-label">${escapeHtml(exercise.name)}</span>
      </div>
      <div class="exercise-head">
        <div>
          <h3>${escapeHtml(exercise.name)}</h3>
          <p class="muted">${escapeHtml(exercise.notes || exercise.muscle || "Sem observacoes")}</p>
          <div class="meta-row">
            <span class="pill">${escapeHtml(exercise.muscle || "Geral")}</span>
            <span class="pill weight-pill">Carga: ${escapeHtml(weightSummary)}</span>
            <span class="pill">${doneCount}/${exercise.sets.length} concluidas</span>
          </div>
        </div>
        <div class="exercise-actions">
          <button class="icon-button small" type="button" data-action="start-rest" data-seconds="${restSeconds}" data-label="${escapeAttr(exercise.name)}" aria-label="Iniciar descanso">⏱</button>
          <button class="icon-button small" type="button" data-action="edit-exercise" data-workout-id="${workout.id}" data-exercise-id="${exercise.id}" aria-label="Editar exercicio">...</button>
        </div>
      </div>
      <div class="set-list">
        ${exercise.sets.map((set, setIndex) => `
          <div class="set-row ${set.done ? "is-done" : ""}">
            <span class="set-index">${setIndex + 1}</span>
            <div class="set-main">
              <p class="set-title">${set.reps || 0}x · ${escapeHtml(loadLabel(set.load))}</p>
              <p class="set-note">${set.done ? "Serie concluida" : "Toque para marcar quando terminar"}</p>
            </div>
            <button class="check" type="button" data-action="toggle-set" data-workout-id="${workout.id}" data-exercise-id="${exercise.id}" data-set-index="${setIndex}" aria-label="Alternar serie">${set.done ? "✓" : ""}</button>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderWeeklyHistory() {
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const counts = Array(7).fill(0);
  state.history.forEach((session) => {
    const jsDay = new Date(`${session.date}T12:00:00`).getDay();
    const index = (jsDay + 6) % 7;
    counts[index] += 1;
  });
  const total = counts.reduce((sum, count) => sum + count, 0);

  elements.weeklyHistory.innerHTML = `
    <h3>Dias da semana treinados</h3>
    <p class="muted">${total ? `${total} sessoes registradas no historico.` : "Finalize treinos para preencher o historico."}</p>
    <div class="week-strip" aria-label="Historico de treinos por dia da semana">
      ${days.map((day, index) => {
        const count = counts[index];
        const trained = count > 0;
        return `
        <div class="week-strip-item">
          <span class="week-strip-label">${day.toUpperCase()}</span>
          <span class="week-strip-badge ${trained ? "is-trained" : ""}" aria-label="${day}: ${count} sessoes">${count}</span>
        </div>
      `;
      }).join("")}
    </div>
  `;
}

function renderPlans() {
  if (!state.workouts.length) {
    elements.workoutList.innerHTML = "<p class=\"empty-state\">Nenhum treino cadastrado.</p>";
    return;
  }

  elements.workoutList.innerHTML = state.workouts.map((workout) => {
    const setCount = workout.exercises.reduce((total, exercise) => total + exercise.sets.length, 0);
    return `
      <article class="workout-tile" data-action="start-workout" data-workout-id="${workout.id}" role="button" tabindex="0" aria-label="Iniciar treino ${escapeAttr(workout.name)} agora">
        <div class="workout-tile-media">
          <img src="${escapeAttr(imageForWorkout(workout))}" alt="${escapeAttr(workout.name)}" loading="lazy" onerror="this.closest('.workout-tile-media').classList.add('is-fallback'); this.remove();">
          <span class="workout-tile-chip workout-tile-chip-day">${escapeHtml(workout.day || "Sem dia")}</span>
          <span class="workout-tile-chip workout-tile-chip-count">${workout.exercises.length} exerc.</span>
        </div>
        <button class="workout-tile-edit" type="button" data-action="edit-workout" data-workout-id="${workout.id}" aria-label="Editar treino">✎</button>
        <div class="workout-tile-body">
          <h3>${escapeHtml(workout.name)}</h3>
          <p class="muted">${escapeHtml(workout.group || "Grupo nao informado")} · ${setCount} series</p>
          <div class="workout-tile-footer">
            <button class="button primary workout-tile-cta" type="button" data-action="start-workout" data-workout-id="${workout.id}">Treinar <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function moveExercise(workoutId, exerciseId, direction) {
  const workout = state.workouts.find((item) => item.id === workoutId);
  if (!workout) return;
  const index = workout.exercises.findIndex((item) => item.id === exerciseId);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= workout.exercises.length) return;
  const [moved] = workout.exercises.splice(index, 1);
  workout.exercises.splice(target, 0, moved);
  render();
}

function renderHistory() {
  const totalSessions = state.history.length;
  const totalVolume = state.history.reduce((sum, session) => sum + session.totalVolume, 0);
  const totalSets = state.history.reduce((sum, session) => sum + session.doneSets, 0);
  const lastSession = state.history[0];

  elements.historyStats.innerHTML = `
    <div class="stat"><span class="muted">Sessoes</span><b>${totalSessions}</b></div>
    <div class="stat"><span class="muted">Series feitas</span><b>${totalSets}</b></div>
    <div class="stat"><span class="muted">Volume total</span><b>${Math.round(totalVolume)} kg</b></div>
    <div class="stat"><span class="muted">Ultima</span><b>${lastSession ? formatDate(lastSession.date) : "--"}</b></div>
  `;

  if (!state.history.length) {
    elements.historyList.innerHTML = "<p class=\"empty-state\">Finalize um treino para criar o historico.</p>";
    return;
  }

  elements.historyList.innerHTML = state.history.map((session) => `
    <article class="history-card">
      <div class="history-head">
        <div>
          <h3>${escapeHtml(session.workoutName)}</h3>
          <p class="muted">${formatDate(session.date)} · ${session.doneSets} series · ${Math.round(session.totalVolume)} kg</p>
        </div>
        <span class="pill">${session.exercises.length} exercicios</span>
      </div>
      <div class="meta-row">
        ${session.exercises.map((exercise) => `<span class="pill">${escapeHtml(exercise.name)} ${escapeHtml(exercise.loadLabel || `${exercise.bestLoad}kg`)}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderProgress() {
  const names = Array.from(new Set(state.history.flatMap((session) => session.exercises.map((exercise) => exercise.name))));
  elements.progressExerciseSelect.innerHTML = names.length
    ? names.map((name) => `<option value="${escapeAttr(name)}">${escapeHtml(name)}</option>`).join("")
    : "<option value=\"\">Sem historico</option>";

  const selected = names.includes(state.selectedProgressExercise) ? state.selectedProgressExercise : names[0] || "";
  elements.progressExerciseSelect.value = selected;

  const rows = state.history
    .slice()
    .reverse()
    .map((session) => {
      const exercise = session.exercises.find((item) => item.name === selected);
      if (!exercise) return null;
      return exercise.bestLoad > 0 ? { date: session.date, load: exercise.bestLoad, reps: exercise.totalReps, volume: exercise.volume } : null;
    })
    .filter(Boolean);

  if (!rows.length) {
    elements.progressChart.innerHTML = "<p class=\"empty-state\">Finalize treinos para ver a evolucao.</p>";
    elements.progressDetails.innerHTML = "";
    return;
  }

  const maxLoad = Math.max(...rows.map((row) => row.load), 1);
  elements.progressChart.innerHTML = `
    <h3>${escapeHtml(selected)}</h3>
    <p class="muted">Maior carga registrada por sessao.</p>
    <div class="chart-bars">
      ${rows.map((row) => `
        <div class="chart-row">
          <span>${formatDate(row.date)}</span>
          <div class="bar-track" aria-hidden="true"><div class="bar-fill" style="width:${Math.max(6, Math.round((row.load / maxLoad) * 100))}%"></div></div>
          <strong>${row.load} kg</strong>
        </div>
      `).join("")}
    </div>
  `;

  elements.progressDetails.innerHTML = rows.slice().reverse().map((row) => `
    <article class="history-card">
      <h3>${formatDate(row.date)}</h3>
      <p class="muted">${row.reps}x · ${Math.round(row.volume)} kg de volume</p>
    </article>
  `).join("");
}

function renderProfile() {
  elements.profileNick.value = state.profile?.nick || "";
  elements.profileWeight.value = state.profile?.weight ?? "";
  elements.profileHeight.value = state.profile?.height ?? "";
  elements.profileAge.value = state.profile?.age ?? "";
  elements.profileRegistration.value = state.profile?.registration || "";
}

function updateProfile() {
  state.profile = {
    nick: elements.profileNick.value,
    weight: elements.profileWeight.value,
    height: elements.profileHeight.value,
    age: elements.profileAge.value,
    registration: elements.profileRegistration.value
  };
  saveState();
}

function parseIntervalSeconds(notes) {
  const match = String(notes || "").match(/(\d+)\s*s\b/i);
  return match ? Number(match[1]) : null;
}

function formatTimer(seconds) {
  const safe = Math.max(0, Math.round(seconds));
  const minutes = String(Math.floor(safe / 60)).padStart(2, "0");
  const remaining = String(safe % 60).padStart(2, "0");
  return `${minutes}:${remaining}`;
}

function startRestTimer(seconds, label) {
  const duration = Math.max(5, Number(seconds) || 60);
  clearInterval(timerState.intervalId);
  timerState = {
    remaining: duration,
    total: duration,
    label: label || "Descanso",
    running: true,
    intervalId: null,
    done: false
  };
  elements.restTimer.hidden = false;
  elements.restTimer.classList.remove("is-done");
  document.body.classList.add("timer-open");
  updateTimerDisplay();
  timerState.intervalId = setInterval(tickRestTimer, 1000);
}

function tickRestTimer() {
  if (!timerState.running) return;
  timerState.remaining -= 1;
  if (timerState.remaining <= 0) {
    timerState.remaining = 0;
    timerState.running = false;
    timerState.done = true;
    clearInterval(timerState.intervalId);
    elements.restTimer.classList.add("is-done");
    alertRestFinished();
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  elements.restTimerLabel.textContent = timerState.done ? `${timerState.label} · descanso concluido` : timerState.label;
  elements.restTimerTime.textContent = formatTimer(timerState.remaining);
  const percent = timerState.total ? Math.max(0, Math.round((timerState.remaining / timerState.total) * 100)) : 0;
  elements.restTimerBar.style.width = `${percent}%`;
  elements.restTimerToggle.textContent = timerState.running ? "⏸" : "▶";
  elements.restTimerToggle.setAttribute("aria-label", timerState.running ? "Pausar cronometro" : "Retomar cronometro");
}

function toggleRestTimer() {
  if (timerState.done) return;
  timerState.running = !timerState.running;
  if (timerState.running) timerState.intervalId = setInterval(tickRestTimer, 1000);
  else clearInterval(timerState.intervalId);
  updateTimerDisplay();
}

function adjustRestTimer(delta) {
  if (!timerState.total && !timerState.remaining) return;
  timerState.remaining = Math.max(0, timerState.remaining + delta);
  timerState.total = Math.max(timerState.total, timerState.remaining);
  if (timerState.remaining > 0 && timerState.done) {
    timerState.done = false;
    timerState.running = true;
    elements.restTimer.classList.remove("is-done");
    clearInterval(timerState.intervalId);
    timerState.intervalId = setInterval(tickRestTimer, 1000);
  }
  updateTimerDisplay();
}

function closeRestTimer() {
  clearInterval(timerState.intervalId);
  elements.restTimer.hidden = true;
  document.body.classList.remove("timer-open");
}

function alertRestFinished() {
  playBeep();
  if (navigator.vibrate) navigator.vibrate([220, 90, 220, 90, 220]);
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    [0, 0.28, 0.56].forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.0001, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.35, now + offset + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + 0.24);
    });
    setTimeout(() => ctx.close(), 1200);
  } catch (err) {
    // Web Audio indisponivel neste navegador; segue apenas com vibracao/visual.
  }
}

function renderWorkoutEditorExerciseRows(workout) {
  if (!workout.exercises.length) return '<p class="muted workout-tile-empty">Nenhum exercicio ainda.</p>';
  return workout.exercises.map((exercise, index) => `
    <div class="order-row">
      <input class="input order-name-input" name="exercise-name-${exercise.id}" value="${escapeAttr(exercise.name)}" aria-label="Nome do exercicio">
      <div class="order-controls">
        <button class="icon-button small" type="button" data-action="editor-move-exercise-up" data-exercise-id="${exercise.id}" ${index === 0 ? "disabled" : ""} aria-label="Mover exercicio para cima">↑</button>
        <button class="icon-button small" type="button" data-action="editor-move-exercise-down" data-exercise-id="${exercise.id}" ${index === workout.exercises.length - 1 ? "disabled" : ""} aria-label="Mover exercicio para baixo">↓</button>
      </div>
    </div>
  `).join("");
}

function refreshWorkoutEditorExerciseList() {
  const workout = state.workouts.find((item) => item.id === editorContext.workoutId);
  const container = document.getElementById("workoutEditorExerciseList");
  if (!workout || !container) return;
  container.innerHTML = renderWorkoutEditorExerciseRows(workout);
}

function wireImageFileInput(fileInputId, urlInputId, previewId, removeButtonId) {
  const fileInput = document.getElementById(fileInputId);
  const urlInput = document.getElementById(urlInputId);
  const preview = document.getElementById(previewId);
  const removeButton = removeButtonId ? document.getElementById(removeButtonId) : null;
  if (!fileInput || !urlInput || !preview) return;

  const updatePreview = () => {
    if (urlInput.value) {
      preview.src = urlInput.value;
      preview.style.display = "block";
      if (removeButton) removeButton.style.display = "";
    } else {
      preview.style.display = "none";
      preview.removeAttribute("src");
      if (removeButton) removeButton.style.display = "none";
    }
  };

  preview.addEventListener("click", () => {
    if (preview.src) openLightbox(preview.src, preview.alt);
  });
  preview.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && preview.src) {
      event.preventDefault();
      openLightbox(preview.src, preview.alt);
    }
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      urlInput.value = reader.result;
      updatePreview();
    };
    reader.readAsDataURL(file);
  });

  if (removeButton) {
    removeButton.addEventListener("click", () => {
      urlInput.value = "";
      fileInput.value = "";
      updatePreview();
    });
  }
}

function openLightbox(src, alt) {
  const overlay = document.getElementById("imageLightbox");
  const img = document.getElementById("imageLightboxImg");
  if (!overlay || !img) return;
  img.src = src;
  img.alt = alt || "Foto ampliada";
  overlay.hidden = false;
}

function closeLightbox() {
  const overlay = document.getElementById("imageLightbox");
  const img = document.getElementById("imageLightboxImg");
  if (!overlay) return;
  overlay.hidden = true;
  if (img) img.removeAttribute("src");
}

function openWorkoutEditor(workoutId) {
  const workout = state.workouts.find((item) => item.id === workoutId);
  editorMode = workout ? "edit-workout" : "new-workout";
  editorContext = { workoutId };
  elements.dialogTitle.textContent = workout ? "Editar treino" : "Novo treino";
  elements.deleteButton.hidden = !workout;
  elements.dialogBody.innerHTML = `
    <label class="label">Nome
      <input class="input" name="name" required value="${escapeAttr(workout?.name || "")}">
    </label>
    <div class="form-row">
      <label class="label">Grupo
        <input class="input" name="group" value="${escapeAttr(workout?.group || "")}">
      </label>
      <label class="label">Dia
        <input class="input" name="day" value="${escapeAttr(workout?.day || "")}">
      </label>
    </div>
    <label class="label">Observacoes
      <textarea class="textarea" name="notes">${escapeHtml(workout?.notes || "")}</textarea>
    </label>
    <label class="label">Foto de capa
      <input class="input" type="file" accept="image/*" id="workoutImageFileInput">
    </label>
    <input type="hidden" name="imageUrl" id="workoutImageUrlInput" value="${escapeAttr(workout?.imageUrl || "")}">
    ${workout?.imageUrl ? `<img src="${escapeAttr(workout.imageUrl)}" alt="Previa da capa" id="workoutImagePreview" class="image-preview is-clickable" tabindex="0" role="button" aria-label="Ampliar foto">` : `<img id="workoutImagePreview" class="image-preview is-clickable" style="display:none;" tabindex="0" role="button" aria-label="Ampliar foto">`}
    <button class="button ghost" type="button" id="workoutImageRemoveButton" style="${workout?.imageUrl ? "" : "display:none;"}">Remover foto</button>
    <p class="muted">Toque na foto para ampliar. Se nenhuma for enviada, usamos uma sugestao automatica.</p>
    ${workout ? `
    <label class="label">Exercicios
      <span class="muted" style="font-weight:400;">Renomeie ou mude a ordem</span>
    </label>
    <div class="exercise-order-list" id="workoutEditorExerciseList">
      ${renderWorkoutEditorExerciseRows(workout)}
    </div>
    <button class="button ghost" type="button" data-action="add-exercise" data-workout-id="${workout.id}">Adicionar exercicio</button>
    ` : ""}
  `;
  if (!elements.editorDialog.open) elements.editorDialog.showModal();
  wireImageFileInput("workoutImageFileInput", "workoutImageUrlInput", "workoutImagePreview", "workoutImageRemoveButton");
}

function openExerciseEditor(workoutId, exerciseId) {
  const workout = state.workouts.find((item) => item.id === workoutId);
  const exercise = workout?.exercises.find((item) => item.id === exerciseId);
  editorMode = exercise ? "edit-exercise" : "new-exercise";
  editorContext = { workoutId, exerciseId };
  elements.dialogTitle.textContent = exercise ? "Editar exercicio" : "Novo exercicio";
  elements.deleteButton.hidden = !exercise;
  const sets = exercise?.sets.length ? exercise.sets : [{ reps: 10, load: 0, done: false }, { reps: 10, load: 0, done: false }, { reps: 10, load: 0, done: false }];
  elements.dialogBody.innerHTML = `
    <label class="label">Nome
      <input class="input" name="name" required value="${escapeAttr(exercise?.name || "")}">
    </label>
    <label class="label">Musculo
      <input class="input" name="muscle" value="${escapeAttr(exercise?.muscle || "")}">
    </label>
    <label class="label">Observacoes
      <textarea class="textarea" name="notes">${escapeHtml(exercise?.notes || "")}</textarea>
    </label>
    <label class="label">Foto do exercicio
      <input class="input" type="file" accept="image/*" id="exerciseImageFileInput">
    </label>
    <input type="hidden" name="imageUrl" id="exerciseImageUrlInput" value="${escapeAttr(exercise?.imageUrl || "")}">
    ${exercise?.imageUrl ? `<img src="${escapeAttr(exercise.imageUrl)}" alt="Previa da foto" id="exerciseImagePreview" class="image-preview is-clickable" tabindex="0" role="button" aria-label="Ampliar foto">` : `<img id="exerciseImagePreview" class="image-preview is-clickable" style="display:none;" tabindex="0" role="button" aria-label="Ampliar foto">`}
    <button class="button ghost" type="button" id="exerciseImageRemoveButton" style="${exercise?.imageUrl ? "" : "display:none;"}">Remover foto</button>
    <p class="muted">Toque na foto para ampliar. Se nenhuma for enviada, usamos uma sugestao automatica.</p>
    <div class="stack" id="setEditorList">
      ${sets.map((set, index) => renderSetEditor(set, index)).join("")}
    </div>
    <button class="button" type="button" data-action="append-set">Adicionar serie</button>
  `;
  if (!elements.editorDialog.open) elements.editorDialog.showModal();
  wireImageFileInput("exerciseImageFileInput", "exerciseImageUrlInput", "exerciseImagePreview", "exerciseImageRemoveButton");
}

function renderSetEditor(set, index) {
  return `
    <div class="set-editor" data-set-editor>
      <label class="label">X
        <input class="input" name="set-reps-${index}" inputmode="numeric" type="number" min="0" value="${set.reps || 0}">
      </label>
      <label class="label">Carga
        <input class="input" name="set-load-${index}" value="${escapeAttr(set.load || "0kg")}">
      </label>
      <button class="icon-button small" type="button" data-action="remove-set" aria-label="Remover serie">x</button>
    </div>
  `;
}

function submitEditor(event) {
  event.preventDefault();
  try {
    const data = new FormData(elements.editorForm);

    if (editorMode === "new-workout" || editorMode === "edit-workout") {
      const existing = state.workouts.find((item) => item.id === editorContext.workoutId);
      const payload = {
        name: clean(data.get("name")) || "Novo treino",
        group: clean(data.get("group")),
        day: clean(data.get("day")),
        notes: clean(data.get("notes")),
        imageUrl: clean(data.get("imageUrl"))
      };
      if (existing) {
        Object.assign(existing, payload);
        existing.exercises.forEach((exercise) => {
          const renamed = data.get(`exercise-name-${exercise.id}`);
          if (renamed !== null) {
            const trimmed = clean(renamed);
            if (trimmed) exercise.name = trimmed;
          }
        });
      } else {
        const workout = { id: uid("workout"), ...payload, exercises: [] };
        state.workouts.push(workout);
        state.selectedWorkoutId = workout.id;
      }
    }

    if (editorMode === "new-exercise" || editorMode === "edit-exercise") {
      const workout = state.workouts.find((item) => item.id === editorContext.workoutId);
      const existing = workout?.exercises.find((item) => item.id === editorContext.exerciseId);
      const setRows = $$("[data-set-editor]");
      const sets = setRows.map((row, index) => ({
        reps: Number(data.get(`set-reps-${index}`)) || 0,
        load: clean(data.get(`set-load-${index}`)) || "0kg",
        done: existing?.sets[index]?.done || false
      }));
      const payload = {
        name: clean(data.get("name")) || "Novo exercicio",
        muscle: clean(data.get("muscle")),
        notes: clean(data.get("notes")),
        imageUrl: clean(data.get("imageUrl")),
        sets: sets.length ? sets : [{ reps: 10, load: 0, done: false }]
      };
      if (workout) {
        if (existing) Object.assign(existing, payload);
        else workout.exercises.push({ id: uid("exercise"), ...payload });
      }
    }
  } catch (err) {
    console.error("Falha ao salvar:", err);
  } finally {
    elements.editorDialog.close();
    render();
  }
}

function deleteCurrent() {
  if (editorMode === "edit-workout") {
    state.workouts = state.workouts.filter((item) => item.id !== editorContext.workoutId);
    state.selectedWorkoutId = state.workouts[0]?.id || "";
  }
  if (editorMode === "edit-exercise") {
    const workout = state.workouts.find((item) => item.id === editorContext.workoutId);
    workout.exercises = workout.exercises.filter((item) => item.id !== editorContext.exerciseId);
  }
  elements.editorDialog.close();
  render();
}

function finishSession() {
  const workout = selectedWorkout();
  if (!workout) return;
  const exercises = workout.exercises.map((exercise) => {
    const doneSets = exercise.sets.filter((set) => set.done);
    const numericLoads = doneSets.map((set) => numericLoad(set.load));
    const bestLoad = numericLoads.length ? Math.max(...numericLoads) : 0;
    const bestSet = doneSets[numericLoads.indexOf(bestLoad)] || doneSets[0];
    return {
      name: exercise.name,
      bestLoad,
      loadLabel: bestSet ? loadLabel(bestSet.load) : "0kg",
      totalReps: doneSets.reduce((sum, set) => sum + (Number(set.reps) || 0), 0),
      volume: doneSets.reduce((sum, set) => sum + ((Number(set.reps) || 0) * numericLoad(set.load)), 0)
    };
  }).filter((exercise) => exercise.totalReps > 0);

  const doneSets = workout.exercises.flatMap((exercise) => exercise.sets).filter((set) => set.done).length;
  const totalVolume = exercises.reduce((sum, exercise) => sum + exercise.volume, 0);
  if (!doneSets) return;

  state.history.unshift({
    id: uid("session"),
    date: todayIso(),
    workoutId: workout.id,
    workoutName: workout.name,
    doneSets,
    totalVolume,
    exercises
  });
  workout.exercises.forEach((exercise) => exercise.sets.forEach((set) => { set.done = false; }));
  state.activeView = "history";
  render();
}

function clearToday() {
  const workout = selectedWorkout();
  workout?.exercises.forEach((exercise) => exercise.sets.forEach((set) => { set.done = false; }));
  render();
}

function handleAction(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  const workoutId = target.dataset.workoutId;
  const exerciseId = target.dataset.exerciseId;

  if (action === "toggle-set") {
    const workout = state.workouts.find((item) => item.id === workoutId);
    const exercise = workout?.exercises.find((item) => item.id === exerciseId);
    const set = exercise?.sets[Number(target.dataset.setIndex)];
    if (set) {
      set.done = !set.done;
      if (set.done && exercise) {
        startRestTimer(parseIntervalSeconds(exercise.notes) || 60, exercise.name);
      }
    }
    render();
  }
  if (action === "start-rest") {
    startRestTimer(Number(target.dataset.seconds) || 60, target.dataset.label || "Descanso");
  }
  if (action === "expand-image") {
    openLightbox(target.dataset.imageUrl, target.dataset.imageAlt);
  }
  if (action === "move-exercise-up") moveExercise(workoutId, exerciseId, -1);
  if (action === "move-exercise-down") moveExercise(workoutId, exerciseId, 1);
  if (action === "editor-move-exercise-up" || action === "editor-move-exercise-down") {
    const direction = action === "editor-move-exercise-up" ? -1 : 1;
    moveExercise(editorContext.workoutId, exerciseId, direction);
    refreshWorkoutEditorExerciseList();
    return;
  }
  if (action === "finish-session") finishSession();
  if (action === "edit-workout") openWorkoutEditor(workoutId);
  if (action === "add-exercise") openExerciseEditor(workoutId);
  if (action === "edit-exercise") openExerciseEditor(workoutId, exerciseId);
  if (action === "start-workout") {
    state.selectedWorkoutId = workoutId;
    state.activeView = "today";
    render();
  }
  if (action === "append-set") {
    const list = $("#setEditorList");
    list.insertAdjacentHTML("beforeend", renderSetEditor({ reps: 10, load: "0kg" }, list.children.length));
  }
  if (action === "remove-set") {
    target.closest("[data-set-editor]")?.remove();
    renumberSetInputs();
  }
}

function renumberSetInputs() {
  $$("[data-set-editor]").forEach((row, index) => {
    const [reps, load] = row.querySelectorAll("input");
    reps.name = `set-reps-${index}`;
    load.name = `set-load-${index}`;
  });
}

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeView = button.dataset.view;
    render();
  });
});

document.addEventListener("click", handleAction);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target.closest('[role="button"][data-action]');
  if (!target) return;
  event.preventDefault();
  target.click();
});
elements.todayWorkoutSelect.addEventListener("change", (event) => {
  state.selectedWorkoutId = event.target.value;
  render();
});
elements.progressExerciseSelect.addEventListener("change", (event) => {
  state.selectedProgressExercise = event.target.value;
  renderProgress();
  saveState();
});
$("#newWorkoutButton").addEventListener("click", () => openWorkoutEditor());
$("#quickAddButton").addEventListener("click", () => {
  if (state.activeView === "today" && selectedWorkout()) openExerciseEditor(selectedWorkout().id);
  else openWorkoutEditor();
});
$("#clearTodayButton").addEventListener("click", clearToday);
$("#closeDialogButton").addEventListener("click", () => elements.editorDialog.close());
$("#cancelButton").addEventListener("click", () => elements.editorDialog.close());
elements.deleteButton.addEventListener("click", deleteCurrent);
$("#saveEditorButton").addEventListener("click", submitEditor);
$("#imageLightboxClose").addEventListener("click", closeLightbox);
$("#imageLightbox").addEventListener("click", (event) => {
  if (event.target.id === "imageLightbox") closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
elements.editorForm.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
    event.preventDefault();
    submitEditor(event);
  }
});

[elements.profileNick, elements.profileWeight, elements.profileHeight, elements.profileAge, elements.profileRegistration].forEach((input) => {
  input.addEventListener("input", updateProfile);
});

$("#restTimerToggle").addEventListener("click", toggleRestTimer);
$("#restTimerMinus").addEventListener("click", () => adjustRestTimer(-15));
$("#restTimerPlus").addEventListener("click", () => adjustRestTimer(15));
$("#restTimerClose").addEventListener("click", closeRestTimer);

render();