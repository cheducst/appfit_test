const STORAGE_KEY = "personal-training-app-pdf-days-v3";

const sampleState = {
  selectedWorkoutId: "costas-ombros",
  selectedProgressExercise: "",
  activeView: "plans",
  sessionStartedAt: null,
  isTracking: false,
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
    registration: "",
    goal: "Hipertrofia",
    level: "Intermediario",
    weeklyFrequency: "4",
    defaultRestSeconds: "90",
    weightUnit: "kg",
    restSound: true,
    restVibration: true,
    restNotifications: true
  },
  exerciseCategories: [
    { id: "cat-peito", name: "Peito", color: "#ff6b6b" },
    { id: "cat-costas", name: "Costas", color: "#4dabf7" },
    { id: "cat-ombros", name: "Ombros", color: "#38d9a9" },
    { id: "cat-biceps", name: "Bíceps", color: "#ffa94d" },
    { id: "cat-triceps", name: "Tríceps", color: "#ffd43b" },
    { id: "cat-pernas", name: "Pernas", color: "#9775fa" },
    { id: "cat-gluteos", name: "Glúteos", color: "#f783ac" },
    { id: "cat-core", name: "Core", color: "#69db7c" },
    { id: "cat-abdomen", name: "Abdomen", color: "#66d9e8" },
    { id: "cat-cardio", name: "Cardio", color: "#ff8787" }
  ]
};

const MUSCLE_GROUP_OPTIONS = ["Peito", "Costas", "Ombros", "Biceps", "Triceps", "Pernas", "Gluteos", "Core", "Cardio"];
const GOAL_OPTIONS = ["Hipertrofia", "Emagrecimento", "Forca", "Resistencia", "Saude geral"];
const LEVEL_OPTIONS = ["Iniciante", "Intermediario", "Avancado"];
const WEIGHT_UNIT_OPTIONS = [
  { value: "kg", label: "Quilogramas (kg)" },
  { value: "lb", label: "Libras (lb)" }
];

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
  todayDashboard: $("#todayDashboard"),
  todayTracker: $("#todayTracker"),
  weeklyHistory: $("#weeklyHistory"),
  todayProgress: $("#todayProgress"),
  todayExercises: $("#todayExercises"),
  workoutList: $("#workoutList"),
  historyStats: $("#historyStats"),
  historyList: $("#historyList"),
  progressExerciseGrid: $("#progressExerciseGrid"),
  progressSelected: $("#progressSelected"),
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
  profileGoal: $("#profileGoal"),
  profileLevel: $("#profileLevel"),
  profileWeeklyFrequency: $("#profileWeeklyFrequency"),
  profileDefaultRest: $("#profileDefaultRest"),
  profileWeightUnit: $("#profileWeightUnit"),
  profileRestSound: $("#profileRestSound"),
  profileRestVibration: $("#profileRestVibration"),
  profileRestNotifications: $("#profileRestNotifications"),
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
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${isoDate}T12:00:00`));
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
  if (!value) return "";
  if (/^0(\.0+)?\s*kg?$/i.test(value)) return "";
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

function hexToRgb(hex) {
  const clean = String(hex || "").replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((char) => char + char).join("") : clean;
  const bigint = parseInt(full, 16);
  if (Number.isNaN(bigint)) return null;
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function colorForGroup(group) {
  if (!group) return { bg: "var(--surface-soft)", text: "var(--muted)", dot: "var(--muted)" };
  const category = state.exerciseCategories?.find((item) => item.name === group);
  if (category?.color) {
    const rgb = hexToRgb(category.color);
    if (rgb) {
      return {
        bg: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.18)`,
        text: category.color,
        dot: category.color
      };
    }
  }
  const hue = hashString(group.trim().toLowerCase()) % 360;
  return {
    bg: `hsl(${hue}, 42%, 17%)`,
    text: `hsl(${hue}, 75%, 74%)`,
    dot: `hsl(${hue}, 65%, 55%)`
  };
}

function groupsForWorkout(workout) {
  if (Array.isArray(workout.groups) && workout.groups.length) return workout.groups;
  return Array.from(new Set((workout.exercises || []).map((exercise) => exercise.muscle).filter(Boolean))).slice(0, 3);
}

function workoutFrequency(workoutId) {
  return state.history.filter((session) => session.workoutId === workoutId).length;
}

function imcInfo() {
  const weight = Number(state.profile?.weight);
  const heightCm = Number(state.profile?.height);
  if (!weight || !heightCm) return null;
  const heightM = heightCm / 100;
  const imc = weight / (heightM * heightM);
  let label = "Peso normal";
  let percent = 50;
  if (imc < 18.5) { label = "Abaixo do peso"; percent = 15; }
  else if (imc < 25) { label = "Peso normal"; percent = 40; }
  else if (imc < 30) { label = "Sobrepeso"; percent = 65; }
  else { label = "Obesidade"; percent = 90; }
  return { value: imc, label, percent };
}

function anteriorForExercise(exerciseName) {
  for (const session of state.history) {
    const found = session.exercises.find((item) => item.name === exerciseName && item.bestLoad > 0);
    if (found) return found.bestLoad;
  }
  return null;
}

function greetingForNow() {
  const hour = new Date().getHours();
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

function lifetimeStats() {
  const totalTreinos = state.history.length;
  const totalSeries = state.history.reduce((sum, session) => sum + session.doneSets, 0);
  const totalVolume = state.history.reduce((sum, session) => sum + session.totalVolume, 0);
  const totalDurationMs = state.history.reduce((sum, session) => sum + (session.durationMs || 0), 0);
  const avgDurationMs = totalTreinos ? totalDurationMs / totalTreinos : 0;
  return { totalTreinos, totalSeries, totalVolume, totalDurationMs, avgDurationMs };
}

function suggestedWorkout() {
  if (!state.workouts.length) return null;
  const lastTrainedAt = {};
  state.history.forEach((session, index) => {
    if (!(session.workoutId in lastTrainedAt)) lastTrainedAt[session.workoutId] = index;
  });
  const sorted = [...state.workouts].sort((a, b) => {
    const aIndex = lastTrainedAt[a.id] ?? Infinity;
    const bIndex = lastTrainedAt[b.id] ?? Infinity;
    return bIndex - aIndex;
  });
  return sorted[0];
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
  renderActiveSessionBadge();
  renderWeeklyHistory();
  renderToday();
  renderActivity();
  renderPlans();
  renderHistory();
  renderProgress();
  renderProfile();
}

function renderActiveSessionBadge() {
  const badge = document.getElementById("activeSessionBadge");
  if (!badge) return;
  badge.hidden = !state.isTracking;
}

function renderNavigation() {
  const labels = { today: "Hoje", plans: "Treinos", activity: "Atividade", progress: "Evolucao", profile: "Perfil" };
  elements.pageTitle.textContent = labels[state.activeView] || "Hoje";
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.id === `${state.activeView}View`));
  $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === state.activeView));
  const activityButton = document.getElementById("activityNavButton");
  if (activityButton) activityButton.classList.toggle("has-activity", state.isTracking);
}

function renderToday() {
  elements.todayDashboard.hidden = false;
  renderTodayDashboard();
}

function renderActivity() {
  const workout = selectedWorkout();
  const emptyState = document.getElementById("activityEmpty");

  if (!state.isTracking) {
    if (emptyState) emptyState.hidden = false;
    elements.todayTracker.hidden = true;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  elements.todayTracker.hidden = false;

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
        <h3><span class="tracker-dot" aria-hidden="true"></span>${escapeHtml(workout.name)}</h3>
        <p class="muted">${escapeHtml(workout.group || workout.day || "Treino")}</p>
      </div>
      <div class="today-progress-meta">
        <span class="today-progress-percent">${done}/${sets.length}<small>series</small></span>
        ${state.sessionStartedAt ? `<span class="pill" id="todayElapsedTime">${formatElapsed(Date.now() - state.sessionStartedAt)}</span>` : ""}
      </div>
    </div>
    <div class="bar-track" role="progressbar" aria-label="Progresso do treino" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
      <div class="bar-fill" style="width:${percent}%"></div>
    </div>
    <p class="today-progress-label muted">${percent >= 100 ? "Treino concluido! 🎉" : `${percent}% concluido`}</p>
    <div class="tracker-actions">
      <button class="button ghost tracker-action-abandon" type="button" data-action="abandon-session">Abandonar</button>
      <button class="button primary tracker-action-finish" type="button" data-action="finish-session">Finalizar <span aria-hidden="true">→</span></button>
    </div>
  `;

  elements.todayExercises.innerHTML = workout.exercises.map((exercise) => renderExerciseCard(workout, exercise)).join("") +
    `<button class="button primary today-finish-cta" type="button" data-action="finish-session">Finalizar treino</button>`;
}

function renderTodayDashboard() {
  const stats = lifetimeStats();
  const suggestion = suggestedWorkout();
  const lastSession = state.history[0];
  const nick = state.profile?.nick || "";

  if (!state.workouts.length) {
    elements.todayDashboard.innerHTML = "<p class=\"empty-state\">Crie um treino para comecar.</p>";
    return;
  }

  elements.todayDashboard.innerHTML = `
    <p class="dashboard-date">${formatDate(todayIso())}</p>
    <h2 class="dashboard-greeting">${greetingForNow()}${nick ? `, <span class="dashboard-name">${escapeHtml(nick)}</span>` : ""}</h2>
    <div class="dashboard-stats">
      <div class="stat"><b>${stats.totalTreinos}</b><span class="muted">Treinos</span></div>
      <div class="stat"><b>${stats.totalSeries}</b><span class="muted">Series</span></div>
      <div class="stat"><b>${(stats.totalVolume / 1000).toFixed(1)}t</b><span class="muted">Volume</span></div>
    </div>
    ${suggestion ? `
    <p class="dashboard-section-label">Sugerido para hoje</p>
    <article class="suggested-card">
      <div class="suggested-card-media">
        <img src="${escapeAttr(imageForWorkout(suggestion))}" alt="${escapeAttr(suggestion.name)}" loading="lazy" onerror="this.remove();">
        <span class="workout-tile-chip workout-tile-chip-day">${escapeHtml(suggestion.day || "Treino")}</span>
      </div>
      <div class="suggested-card-body">
        <h3>${escapeHtml(suggestion.name)}</h3>
        <p class="muted">${suggestion.exercises.length} exercicios · ${suggestion.exercises.reduce((sum, exercise) => sum + exercise.sets.length, 0)} series</p>
        <button class="button primary" type="button" data-action="start-workout" data-workout-id="${suggestion.id}">Iniciar treino →</button>
      </div>
    </article>
    ` : ""}
    <p class="dashboard-section-label">Todos os treinos</p>
    <div class="dashboard-workout-grid">
      ${state.workouts.map((workout) => `
        <button class="dashboard-workout-chip" type="button" data-action="start-workout" data-workout-id="${workout.id}">
          <span class="dashboard-workout-day">${escapeHtml(workout.day || "Treino")}</span>
          <strong>${escapeHtml(workout.name)}</strong>
          <span class="muted">${workout.exercises.length}x · ${workout.exercises.reduce((sum, exercise) => sum + exercise.sets.length, 0)} series</span>
        </button>
      `).join("")}
    </div>
    ${lastSession ? `
    <p class="dashboard-section-label">Ultimo treino</p>
    <div class="dashboard-last-session">
      <span>${formatDate(lastSession.date)} · ${escapeHtml(lastSession.workoutName)}</span>
      <span class="pill">${lastSession.durationMs ? formatElapsed(lastSession.durationMs) : "--"}</span>
    </div>
    ` : ""}
  `;
}

function formatElapsed(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")} min`;
}

function renderExerciseCard(workout, exercise) {
  const doneCount = exercise.sets.filter((set) => set.done).length;
  const isComplete = exercise.sets.length > 0 && doneCount === exercise.sets.length;
  const image = imageForExercise(exercise);
  const restSeconds = parseIntervalSeconds(exercise.notes) || Number(state.profile?.defaultRestSeconds) || 60;
  const groupColor = colorForGroup(exercise.muscle);
  const anterior = anteriorForExercise(exercise.name);
  return `
    <article class="exercise-card ${isComplete ? "is-complete" : ""}" style="border-left:4px solid ${isComplete ? "var(--primary)" : groupColor.dot};">
      <div class="exercise-media is-clickable" data-action="expand-image" data-image-url="${escapeAttr(image.url)}" data-image-alt="${escapeAttr(exercise.name)}" role="button" tabindex="0" aria-label="Ampliar foto de ${escapeAttr(exercise.name)}">
        <img src="${escapeAttr(image.url)}" alt="${escapeAttr(exercise.name)}" loading="lazy" onerror="this.closest('.exercise-media').classList.add('is-fallback'); this.remove();">
        <span class="exercise-media-fallback-label">${escapeHtml(exercise.name)}</span>
        ${isComplete ? `<span class="exercise-complete-badge" aria-hidden="true">✓</span>` : ""}
      </div>
      <div class="exercise-head">
        <div>
          <h3>${escapeHtml(exercise.name)}</h3>
          <p class="muted">${escapeHtml(exercise.notes || exercise.muscle || "Sem observacoes")}</p>
          <div class="meta-row">
            <span class="pill" style="background:${groupColor.bg};color:${groupColor.text};"><span class="group-dot" style="background:${groupColor.dot};"></span>${escapeHtml(exercise.muscle || "Geral")}</span>
            <span class="pill">${doneCount}/${exercise.sets.length} concluidas</span>
          </div>
        </div>
        <div class="exercise-head-right">
          ${anterior !== null ? `<div class="exercise-anterior"><span class="muted">Anterior</span><strong>${anterior} kg</strong></div>` : ""}
          <button class="icon-button small" type="button" data-action="edit-exercise" data-workout-id="${workout.id}" data-exercise-id="${exercise.id}" aria-label="Editar exercicio">...</button>
        </div>
      </div>
      <div class="set-table">
        <div class="set-table-row set-table-head-row">
          <span>#</span><span>Reps</span><span>Carga</span><span>OK</span>
        </div>
        ${exercise.sets.map((set, setIndex) => `
          <div class="set-table-row ${set.done ? "is-done" : ""}" data-workout-id="${workout.id}" data-exercise-id="${exercise.id}" data-set-index="${setIndex}">
            <span class="set-table-index">${setIndex + 1}</span>
            <input class="set-table-input" type="number" inputmode="numeric" min="0" value="${set.reps || 0}" data-live-field="reps" data-workout-id="${workout.id}" data-exercise-id="${exercise.id}" data-set-index="${setIndex}" aria-label="Repeticoes da serie ${setIndex + 1}">
            <input class="set-table-input" type="text" inputmode="decimal" value="${escapeAttr(loadLabel(set.load))}" data-live-field="load" data-workout-id="${workout.id}" data-exercise-id="${exercise.id}" data-set-index="${setIndex}" aria-label="Carga da serie ${setIndex + 1}">
            <button class="set-table-check" type="button" data-action="toggle-set" data-workout-id="${workout.id}" data-exercise-id="${exercise.id}" data-set-index="${setIndex}" aria-label="Concluir serie ${setIndex + 1}">${set.done ? "✓" : ""}</button>
          </div>
        `).join("")}
      </div>
      <div class="set-table-footer">
        <span class="muted">${restSeconds}s de descanso</span>
        <button type="button" class="link-button" data-action="start-rest" data-seconds="${restSeconds}" data-label="${escapeAttr(exercise.name)}">Iniciar timer</button>
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
          <span class="week-strip-badge ${trained ? "is-trained" : ""}" aria-label="${day}: ${trained ? "treinou" : "sem treino"}">${trained ? "✓" : "–"}</span>
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
    const groups = groupsForWorkout(workout);
    return `
      <article class="workout-tile" data-action="start-workout" data-workout-id="${workout.id}" role="button" tabindex="0" aria-label="Iniciar treino ${escapeAttr(workout.name)} agora">
        <div class="workout-tile-media">
          <img src="${escapeAttr(imageForWorkout(workout))}" alt="${escapeAttr(workout.name)}" loading="lazy" onerror="this.closest('.workout-tile-media').classList.add('is-fallback'); this.remove();">
          <span class="workout-tile-chip workout-tile-chip-day">${escapeHtml(workout.day || "Sem dia")}</span>
          <button class="workout-tile-edit" type="button" data-action="edit-workout" data-workout-id="${workout.id}" aria-label="Editar treino">✎</button>
        </div>
        <div class="workout-tile-body">
          ${groups.length ? `
          <div class="workout-tile-groups">
            ${groups.map((group) => {
              const color = colorForGroup(group);
              return `<span class="workout-tile-group-tag" style="background:${color.bg};color:${color.text};">${escapeHtml(group)}</span>`;
            }).join("")}
          </div>
          ` : ""}
          <h3>${escapeHtml(workout.name)}</h3>
          <p class="muted">${workout.exercises.length} exercicios · ${setCount} series</p>
          <button class="button primary workout-tile-cta" type="button" data-action="start-workout" data-workout-id="${workout.id}"><span aria-hidden="true">▶</span> Iniciar treino</button>
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

const expandedHistoryIds = new Set();
let historyFilterDay = "todos";

function renderHistory() {
  const stats = lifetimeStats();
  const days = Array.from(new Set(state.workouts.map((workout) => workout.day).filter(Boolean)));

  elements.historyStats.innerHTML = `
    <div class="stat"><span class="muted">Treinos</span><b>${stats.totalTreinos}</b></div>
    <div class="stat"><span class="muted">Series</span><b>${stats.totalSeries}</b></div>
    <div class="stat"><span class="muted">Volume</span><b>${(stats.totalVolume / 1000).toFixed(1)}t</b></div>
    <div class="stat"><span class="muted">Tempo total</span><b>${formatElapsed(stats.totalDurationMs)}</b></div>
  `;

  const filterBar = document.getElementById("historyFilterBar");
  if (filterBar) {
    filterBar.innerHTML = `
      <button class="filter-pill ${historyFilterDay === "todos" ? "is-active" : ""}" type="button" data-action="filter-history-day" data-day="todos">Todos</button>
      ${days.map((day) => `<button class="filter-pill ${historyFilterDay === day ? "is-active" : ""}" type="button" data-action="filter-history-day" data-day="${escapeAttr(day)}">${escapeHtml(day)}</button>`).join("")}
    `;
  }

  if (!state.history.length) {
    elements.historyList.innerHTML = "<p class=\"empty-state\">Finalize um treino para criar o historico.</p>";
    return;
  }

  const filtered = historyFilterDay === "todos"
    ? state.history
    : state.history.filter((session) => {
        const workout = state.workouts.find((item) => item.id === session.workoutId);
        return (workout?.day || "") === historyFilterDay;
      });

  if (!filtered.length) {
    elements.historyList.innerHTML = "<p class=\"empty-state\">Nenhuma sessao para esse filtro.</p>";
    return;
  }

  elements.historyList.innerHTML = filtered.map((session) => {
    const isExpanded = expandedHistoryIds.has(session.id);
    const workout = state.workouts.find((item) => item.id === session.workoutId);
    return `
    <article class="history-card">
      <div class="history-head is-clickable" data-action="toggle-history" data-session-id="${session.id}">
        <div>
          <div class="history-head-tag-row">
            <span class="pill weight-pill">${escapeHtml(workout?.day || "Treino")}</span>
            <span class="muted">${formatDate(session.date)}</span>
          </div>
          <h3>${escapeHtml(session.workoutName)}</h3>
          <p class="muted">○ ${session.exercises.length} exercicios &nbsp; ▤ ${session.doneSets} series</p>
        </div>
        <div class="history-head-meta">
          <span class="history-duration">${session.durationMs ? formatElapsed(session.durationMs) : "--"}</span>
          <span class="muted">${(session.totalVolume / 1000).toFixed(1)}t</span>
          <button type="button" class="history-chevron ${isExpanded ? "is-open" : ""}" data-action="toggle-history" data-session-id="${session.id}" aria-label="${isExpanded ? "Recolher detalhes da sessao" : "Expandir detalhes da sessao"}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </div>
      ${isExpanded ? `
      <div class="history-detail">
        ${session.exercises.map((exercise) => `
          <div class="history-detail-exercise">
            <div class="history-detail-exercise-head">
              <strong>${escapeHtml(exercise.name)}</strong>
              <span class="muted">${exercise.sets.length} ${exercise.sets.length === 1 ? "serie" : "series"}</span>
            </div>
            ${exercise.sets.length ? exercise.sets.map((set, index) => `
              <div class="history-detail-set">
                <span class="muted">${index + 1}</span>
                <span>${set.reps} reps</span>
                <span class="history-detail-load">${escapeHtml(set.load) || "--"}</span>
                <span class="muted history-detail-vol">${Math.round(set.volume)} kg vol</span>
              </div>
            `).join("") : "<p class=\"muted\" style=\"padding:4px 0;\">Sem series registradas.</p>"}
          </div>
        `).join("")}
      </div>
      ` : ""}
    </article>
  `;
  }).join("");
}

function buildAreaChartSvg(values) {
  const width = 300;
  const height = 90;
  const padding = 8;
  if (!values.length) return "<p class=\"empty-state\">Sem dados.</p>";
  const max = Math.max(...values);
  const min = Math.min(...values, 0);
  const range = Math.max(max - min, 1);
  const stepX = values.length > 1 ? (width - padding * 2) / (values.length - 1) : 0;
  const points = values.map((v, i) => ({
    x: padding + (values.length > 1 ? i * stepX : (width - padding * 2) / 2),
    y: height - padding - ((v - min) / range) * (height - padding * 2)
  }));
  const lineStr = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaStr = `${padding},${height - padding} ${lineStr} ${width - padding},${height - padding}`;
  return `
    <svg viewBox="0 0 ${width} ${height}" class="progress-svg-chart" preserveAspectRatio="none" role="img" aria-label="Grafico de progressao de carga">
      <polygon points="${areaStr}" style="fill:var(--primary);opacity:.18;"></polygon>
      <polyline points="${lineStr}" style="fill:none;stroke:var(--primary);stroke-width:2.5;"></polyline>
      ${points.map((p) => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3" style="fill:var(--primary);"></circle>`).join("")}
    </svg>
  `;
}

function renderProgress() {
  const names = Array.from(new Set(state.history.flatMap((session) => session.exercises.filter((exercise) => exercise.sets.length).map((exercise) => exercise.name))));

  if (!names.length) {
    elements.progressExerciseGrid.innerHTML = "";
    elements.progressSelected.innerHTML = "<p class=\"empty-state\">Finalize treinos para ver a evolucao.</p>";
    return;
  }

  const selected = names.includes(state.selectedProgressExercise) ? state.selectedProgressExercise : names[0];
  state.selectedProgressExercise = selected;

  elements.progressExerciseGrid.innerHTML = names.map((name) => {
    let sourceExercise = null;
    for (const workout of state.workouts) {
      const found = workout.exercises.find((item) => item.name === name);
      if (found) { sourceExercise = found; break; }
    }
    const muscle = sourceExercise?.muscle || "";
    const image = sourceExercise ? imageForExercise(sourceExercise) : null;
    return `
      <button class="progress-exercise-chip ${name === selected ? "is-active" : ""}" type="button" data-action="select-progress-exercise" data-name="${escapeAttr(name)}">
        ${image ? `<span class="progress-exercise-chip-media" style="background-image:url('${escapeAttr(image.url)}');"></span>` : ""}
        <span class="progress-exercise-chip-info">
          <strong>${escapeHtml(name)}</strong>
          <span class="muted">${escapeHtml(muscle)}</span>
        </span>
      </button>
    `;
  }).join("");

  const rows = state.history
    .slice()
    .reverse()
    .map((session) => {
      const exercise = session.exercises.find((item) => item.name === selected);
      if (!exercise) return null;
      return exercise.bestLoad > 0 ? { date: session.date, load: exercise.bestLoad, reps: exercise.totalReps, volume: exercise.volume, sets: exercise.sets } : null;
    })
    .filter(Boolean);

  if (!rows.length) {
    elements.progressSelected.innerHTML = "<p class=\"empty-state\">Sem sessoes registradas para esse exercicio.</p>";
    return;
  }

  const loads = rows.map((row) => row.load);
  const record = Math.max(...loads);
  const atual = loads[loads.length - 1];
  const anteriorLoad = loads.length > 1 ? loads[loads.length - 2] : atual;
  const percentChange = anteriorLoad ? Math.round(((atual - anteriorLoad) / anteriorLoad) * 1000) / 10 : 0;
  let sourceExercise = null;
  for (const workout of state.workouts) {
    const found = workout.exercises.find((item) => item.name === selected);
    if (found) { sourceExercise = found; break; }
  }
  const image = sourceExercise ? imageForExercise(sourceExercise) : null;
  const maxVolume = Math.max(...rows.map((row) => row.volume), 1);

  elements.progressSelected.innerHTML = `
    <div class="progress-selected-head">
      ${image ? `<img src="${escapeAttr(image.url)}" alt="${escapeAttr(selected)}" class="progress-selected-media" loading="lazy" onerror="this.remove();">` : ""}
      <div>
        <h3>${escapeHtml(selected)}</h3>
        <p class="muted">${escapeHtml(sourceExercise?.muscle || "")}</p>
      </div>
    </div>
    <div class="stats-grid progress-stats-grid">
      <div class="stat"><span class="muted">Recorde</span><b class="stat-positive">${record} kg</b></div>
      <div class="stat"><span class="muted">Atual</span><b>${atual} kg</b></div>
      <div class="stat"><span class="muted">Vs anterior</span><b class="${percentChange >= 0 ? "stat-positive" : "stat-negative"}">${percentChange >= 0 ? "+" : ""}${percentChange}%</b></div>
    </div>
    <div class="chart-card">
      <h3>Progressao de carga</h3>
      ${buildAreaChartSvg(loads)}
    </div>
    <div class="chart-card">
      <h3>Volume por sessao</h3>
      <div class="volume-bars">
        ${rows.map((row) => `
          <div class="volume-bar-item">
            <div class="volume-bar" style="height:${Math.max(6, Math.round((row.volume / maxVolume) * 72))}px;"></div>
            <span class="muted">${formatDate(row.date)}</span>
          </div>
        `).join("")}
      </div>
    </div>
    <p class="dashboard-section-label">Historico por sessao</p>
    <div class="stack">
      ${rows.slice().reverse().map((row) => `
        <article class="history-card">
          <div class="history-head">
            <h3>${formatDate(row.date)}</h3>
            <span class="pill">${row.reps}x</span>
          </div>
          <p class="muted">${row.load} kg · ${Math.round(row.volume)} kg de volume</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderProfile() {
  elements.profileNick.value = state.profile?.nick || "";
  elements.profileWeight.value = state.profile?.weight ?? "";
  elements.profileHeight.value = state.profile?.height ?? "";
  elements.profileAge.value = state.profile?.age ?? "";
  elements.profileRegistration.value = state.profile?.registration || "";
  if (elements.profileGoal) {
    elements.profileGoal.innerHTML = GOAL_OPTIONS.map((goal) => `<option value="${escapeAttr(goal)}">${escapeHtml(goal)}</option>`).join("");
    elements.profileGoal.value = state.profile?.goal || GOAL_OPTIONS[0];
  }
  if (elements.profileLevel) {
    elements.profileLevel.innerHTML = LEVEL_OPTIONS.map((level) => `<option value="${escapeAttr(level)}">${escapeHtml(level)}</option>`).join("");
    elements.profileLevel.value = state.profile?.level || LEVEL_OPTIONS[1];
  }
  if (elements.profileWeightUnit) {
    elements.profileWeightUnit.innerHTML = WEIGHT_UNIT_OPTIONS.map((unit) => `<option value="${escapeAttr(unit.value)}">${escapeHtml(unit.label)}</option>`).join("");
    elements.profileWeightUnit.value = state.profile?.weightUnit || "kg";
  }
  if (elements.profileWeeklyFrequency) elements.profileWeeklyFrequency.value = state.profile?.weeklyFrequency ?? "";
  if (elements.profileDefaultRest) elements.profileDefaultRest.value = state.profile?.defaultRestSeconds ?? "90";
  if (elements.profileRestSound) elements.profileRestSound.checked = state.profile?.restSound !== false;
  if (elements.profileRestVibration) elements.profileRestVibration.checked = state.profile?.restVibration !== false;
  if (elements.profileRestNotifications) elements.profileRestNotifications.checked = state.profile?.restNotifications !== false;

  const nick = state.profile?.nick || "";
  const avatar = document.getElementById("profileAvatar");
  if (avatar) avatar.textContent = nick ? nick.trim().charAt(0).toUpperCase() : "?";

  const displayName = document.getElementById("profileDisplayName");
  if (displayName) displayName.textContent = nick || "Sem nome definido";

  const displayRegistration = document.getElementById("profileDisplayRegistration");
  if (displayRegistration) displayRegistration.textContent = state.profile?.registration || "Sem matricula";

  const levelBadge = document.getElementById("profileLevelBadge");
  if (levelBadge) levelBadge.textContent = state.profile?.level || LEVEL_OPTIONS[1];

  const goalBadge = document.getElementById("profileGoalBadge");
  if (goalBadge) goalBadge.textContent = state.profile?.goal || GOAL_OPTIONS[0];

  const stats = lifetimeStats();
  const statsContainer = document.getElementById("profileStats");
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="stat"><span class="muted">Treinos</span><b>${stats.totalTreinos}</b></div>
      <div class="stat"><span class="muted">Series totais</span><b>${stats.totalSeries}</b></div>
      <div class="stat"><span class="muted">Volume total</span><b>${(stats.totalVolume / 1000).toFixed(1)}t</b></div>
      <div class="stat"><span class="muted">Duracao media</span><b>${stats.totalTreinos ? formatElapsed(stats.avgDurationMs) : "--"}</b></div>
    `;
  }

  const imcCard = document.getElementById("profileImcCard");
  if (imcCard) {
    const imc = imcInfo();
    imcCard.innerHTML = imc ? `
      <p class="dashboard-section-label">IMC</p>
      <div class="imc-row">
        <span class="imc-value">${imc.value.toFixed(1)}</span>
        <div class="imc-bar-track"><div class="imc-bar-fill" style="width:${imc.percent}%;"></div></div>
      </div>
      <p class="muted">${imc.label}</p>
    ` : `<p class="dashboard-section-label">IMC</p><p class="muted">Preencha peso e altura para calcular.</p>`;
  }

  const freqContainer = document.getElementById("profileWorkoutFrequency");
  if (freqContainer) {
    freqContainer.innerHTML = state.workouts.length ? state.workouts.map((workout) => `
      <div class="dashboard-last-session">
        <span><span class="pill" style="margin-right:8px;">${escapeHtml(workout.day || "Treino")}</span>${escapeHtml(workout.name)}</span>
        <span class="pill weight-pill">${workoutFrequency(workout.id)}x</span>
      </div>
    `).join("") : "<p class=\"empty-state\">Nenhum treino cadastrado.</p>";
  }

  const categoryList = document.getElementById("profileCategoryList");
  if (categoryList) {
    categoryList.innerHTML = state.exerciseCategories.length ? state.exerciseCategories.map((category) => `
      <button class="category-row" type="button" data-action="edit-category" data-category-id="${category.id}">
        <span class="category-row-swatch" style="background:${escapeAttr(category.color)};"></span>
        <span class="category-row-name">${escapeHtml(category.name)}</span>
        <span class="category-row-edit" aria-hidden="true">✎</span>
      </button>
    `).join("") : "<p class=\"empty-state\">Nenhuma categoria criada ainda.</p>";
  }
}

function updateProfile() {
  state.profile = {
    nick: elements.profileNick.value,
    weight: elements.profileWeight.value,
    height: elements.profileHeight.value,
    age: elements.profileAge.value,
    registration: elements.profileRegistration.value,
    goal: elements.profileGoal ? elements.profileGoal.value : state.profile?.goal,
    level: elements.profileLevel ? elements.profileLevel.value : state.profile?.level,
    weeklyFrequency: elements.profileWeeklyFrequency ? elements.profileWeeklyFrequency.value : state.profile?.weeklyFrequency,
    defaultRestSeconds: elements.profileDefaultRest ? elements.profileDefaultRest.value : state.profile?.defaultRestSeconds,
    weightUnit: elements.profileWeightUnit ? elements.profileWeightUnit.value : state.profile?.weightUnit,
    restSound: elements.profileRestSound ? elements.profileRestSound.checked : state.profile?.restSound,
    restVibration: elements.profileRestVibration ? elements.profileRestVibration.checked : state.profile?.restVibration,
    restNotifications: elements.profileRestNotifications ? elements.profileRestNotifications.checked : state.profile?.restNotifications
  };
  saveState();
  renderProfile();
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
  ensureNotificationPermission();
}

function ensureNotificationPermission() {
  if (!("Notification" in window)) return;
  if (state.profile?.restNotifications === false) return;
  if (Notification.permission === "default") {
    try {
      Notification.requestPermission();
    } catch (err) {
      // Notificacoes podem estar bloqueadas neste ambiente; ignorar silenciosamente.
    }
  }
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
  if (state.profile?.restSound !== false) playBeep();
  if (state.profile?.restVibration !== false && navigator.vibrate) navigator.vibrate([220, 90, 220, 90, 220]);
  if (state.profile?.restNotifications !== false && "Notification" in window && Notification.permission === "granted") {
    try {
      new Notification("Descanso concluido!", {
        body: `Hora de continuar: ${timerState.label}`,
        tag: "rest-timer",
        renotify: true
      });
    } catch (err) {
      // Notificacoes podem falhar neste navegador/sandbox; ignorar silenciosamente.
    }
  }
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
  return workout.exercises.map((exercise, index) => {
    const groupColor = colorForGroup(exercise.muscle);
    return `
    <div class="order-row">
      <span class="group-dot" style="background:${groupColor.dot};flex:0 0 auto;"></span>
      <input class="input order-name-input" name="exercise-name-${exercise.id}" value="${escapeAttr(exercise.name)}" aria-label="Nome do exercicio">
      <div class="order-controls">
        <button class="icon-button small" type="button" data-action="editor-move-exercise-up" data-exercise-id="${exercise.id}" ${index === 0 ? "disabled" : ""} aria-label="Mover exercicio para cima">↑</button>
        <button class="icon-button small" type="button" data-action="editor-move-exercise-down" data-exercise-id="${exercise.id}" ${index === workout.exercises.length - 1 ? "disabled" : ""} aria-label="Mover exercicio para baixo">↓</button>
      </div>
    </div>
  `;
  }).join("");
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

function showConfirm(title, message, confirmLabel, onConfirm) {
  const overlay = document.getElementById("confirmOverlay");
  const titleEl = document.getElementById("confirmTitle");
  const messageEl = document.getElementById("confirmMessage");
  const okBtn = document.getElementById("confirmOkBtn");
  const cancelBtn = document.getElementById("confirmCancelBtn");
  if (!overlay || !okBtn || !cancelBtn) return;

  titleEl.textContent = title;
  messageEl.textContent = message;
  okBtn.textContent = confirmLabel;
  overlay.hidden = false;

  const cleanup = () => {
    overlay.hidden = true;
    okBtn.removeEventListener("click", handleOk);
    cancelBtn.removeEventListener("click", handleCancel);
  };
  const handleOk = () => { cleanup(); onConfirm(); };
  const handleCancel = () => { cleanup(); };

  okBtn.addEventListener("click", handleOk);
  cancelBtn.addEventListener("click", handleCancel);
}

function openCategoryEditor(categoryId) {
  const category = state.exerciseCategories.find((item) => item.id === categoryId);
  editorMode = category ? "edit-category" : "new-category";
  editorContext = { categoryId };
  elements.dialogTitle.textContent = category ? "Editar categoria" : "Nova categoria";
  elements.deleteButton.hidden = !category;
  elements.dialogBody.innerHTML = `
    <label class="label">Nome
      <input class="input" name="name" required value="${escapeAttr(category?.name || "")}" placeholder="Ex: Perna, Ombro, Peito...">
    </label>
    <label class="label">Cor
      <input class="input" type="color" name="color" value="${escapeAttr(category?.color || "#d4ff3d")}" style="height:44px;padding:4px;">
    </label>
  `;
  if (!elements.editorDialog.open) elements.editorDialog.showModal();
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
      <label class="label">Grupo (descricao)
        <input class="input" name="group" value="${escapeAttr(workout?.group || "")}">
      </label>
      <label class="label">Dia
        <input class="input" name="day" list="dayOptions" value="${escapeAttr(workout?.day || "")}">
      </label>
    </div>
    <datalist id="dayOptions">
      <option value="Dia A"></option>
      <option value="Dia B"></option>
      <option value="Dia C"></option>
      <option value="Dia D"></option>
      <option value="Dia E"></option>
      <option value="Dia F"></option>
    </datalist>
    <label class="label">Grupos musculares
      <span class="muted" style="font-weight:400;">Toque para selecionar um ou mais</span>
    </label>
    <div class="muscle-group-chips" id="workoutGroupChips">
      ${state.exerciseCategories.map((category) => `<button type="button" class="chip-toggle ${(workout?.groups || []).includes(category.name) ? "is-selected" : ""}" data-group="${escapeAttr(category.name)}" style="${(workout?.groups || []).includes(category.name) ? `border-color:${category.color};color:${category.color};background:${category.color}22;` : ""}">${escapeHtml(category.name)}</button>`).join("")}
    </div>
    <input type="hidden" name="groups" id="workoutGroupsInput" value='${escapeAttr(JSON.stringify(workout?.groups || []))}'>
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
  wireMuscleGroupChips();
}

function wireMuscleGroupChips() {
  const container = document.getElementById("workoutGroupChips");
  const hiddenInput = document.getElementById("workoutGroupsInput");
  if (!container || !hiddenInput) return;
  container.querySelectorAll(".chip-toggle").forEach((chip) => {
    chip.addEventListener("click", () => {
      const isSelected = chip.classList.toggle("is-selected");
      const category = state.exerciseCategories.find((item) => item.name === chip.dataset.group);
      if (isSelected && category) {
        chip.style.borderColor = category.color;
        chip.style.color = category.color;
        chip.style.background = `${category.color}22`;
      } else {
        chip.style.borderColor = "";
        chip.style.color = "";
        chip.style.background = "";
      }
      const selected = Array.from(container.querySelectorAll(".chip-toggle.is-selected")).map((item) => item.dataset.group);
      hiddenInput.value = JSON.stringify(selected);
    });
  });
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
    <label class="label">Categoria
      <select class="select" name="muscle">
        ${state.exerciseCategories.length ? state.exerciseCategories.map((category) => `<option value="${escapeAttr(category.name)}" ${category.name === exercise?.muscle ? "selected" : ""}>${escapeHtml(category.name)}</option>`).join("") : `<option value="">Nenhuma categoria criada</option>`}
      </select>
    </label>
    <p class="muted" style="margin-top:-6px;">Crie ou edite categorias na aba Perfil.</p>
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
    <label class="label" style="display:flex;flex-direction:row;align-items:center;gap:8px;">
      <input type="checkbox" id="uniformWeightToggle" ${sets.length && sets.every((set) => (set.load || "0kg") === (sets[0].load || "0kg")) ? "checked" : ""}>
      Mesma carga para todas as series
    </label>
    <div id="uniformWeightField" class="label" style="display:none;">
      Carga (aplicada a todas)
      <input class="input" id="uniformWeightInput" value="${escapeAttr(sets[0]?.load || "0kg")}">
    </div>
    <div class="stack" id="setEditorList">
      ${sets.map((set, index) => renderSetEditor(set, index)).join("")}
    </div>
    <button class="button" type="button" data-action="append-set">Adicionar serie</button>
  `;
  if (!elements.editorDialog.open) elements.editorDialog.showModal();
  wireImageFileInput("exerciseImageFileInput", "exerciseImageUrlInput", "exerciseImagePreview", "exerciseImageRemoveButton");
  wireUniformWeightToggle();
}

function wireUniformWeightToggle() {
  const toggle = document.getElementById("uniformWeightToggle");
  const field = document.getElementById("uniformWeightField");
  const input = document.getElementById("uniformWeightInput");
  const list = document.getElementById("setEditorList");
  if (!toggle || !field || !input || !list) return;

  const syncAll = () => {
    if (!toggle.checked) return;
    $$("[data-set-editor] .set-editor-load input").forEach((loadInput) => {
      loadInput.value = input.value;
    });
  };

  const updateVisibility = () => {
    field.style.display = toggle.checked ? "" : "none";
    list.classList.toggle("is-uniform-weight", toggle.checked);
    if (toggle.checked) syncAll();
  };

  toggle.addEventListener("change", updateVisibility);
  input.addEventListener("input", syncAll);
  updateVisibility();
}

function renderSetEditor(set, index) {
  return `
    <div class="set-editor" data-set-editor>
      <label class="label">X
        <input class="input" name="set-reps-${index}" inputmode="numeric" type="number" min="0" value="${set.reps || 0}">
      </label>
      <label class="label set-editor-load">Carga
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

    if (editorMode === "new-category" || editorMode === "edit-category") {
      const existing = state.exerciseCategories.find((item) => item.id === editorContext.categoryId);
      const payload = {
        name: clean(data.get("name")) || "Categoria",
        color: clean(data.get("color")) || "#d4ff3d"
      };
      if (existing) Object.assign(existing, payload);
      else state.exerciseCategories.push({ id: uid("category"), ...payload });
    }

    if (editorMode === "new-workout" || editorMode === "edit-workout") {
      const existing = state.workouts.find((item) => item.id === editorContext.workoutId);
      let groups = [];
      try { groups = JSON.parse(data.get("groups") || "[]"); } catch (err) { groups = []; }
      const payload = {
        name: clean(data.get("name")) || "Novo treino",
        group: clean(data.get("group")),
        day: clean(data.get("day")),
        notes: clean(data.get("notes")),
        imageUrl: clean(data.get("imageUrl")),
        groups
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
  if (editorMode === "edit-category") {
    state.exerciseCategories = state.exerciseCategories.filter((item) => item.id !== editorContext.categoryId);
  }
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
      loadLabel: bestSet ? loadLabel(bestSet.load) : "",
      totalReps: doneSets.reduce((sum, set) => sum + (Number(set.reps) || 0), 0),
      volume: doneSets.reduce((sum, set) => sum + ((Number(set.reps) || 0) * numericLoad(set.load)), 0),
      sets: doneSets.map((set) => ({
        reps: Number(set.reps) || 0,
        load: loadLabel(set.load),
        volume: (Number(set.reps) || 0) * numericLoad(set.load)
      }))
    };
  });

  const doneSets = workout.exercises.flatMap((exercise) => exercise.sets).filter((set) => set.done).length;
  const totalVolume = exercises.reduce((sum, exercise) => sum + exercise.volume, 0);
  if (!doneSets) return;

  const durationMs = state.sessionStartedAt ? Date.now() - state.sessionStartedAt : null;

  state.history.unshift({
    id: uid("session"),
    date: todayIso(),
    workoutId: workout.id,
    workoutName: workout.name,
    doneSets,
    totalVolume,
    durationMs,
    exercises
  });
  workout.exercises.forEach((exercise) => exercise.sets.forEach((set) => { set.done = false; }));
  state.sessionStartedAt = null;
  state.isTracking = false;
  state.activeView = "profile";
  render();
}

function clearToday() {
  const workout = selectedWorkout();
  workout?.exercises.forEach((exercise) => exercise.sets.forEach((set) => { set.done = false; }));
  state.sessionStartedAt = null;
  render();
}

function abandonSession() {
  showConfirm(
    "Abandonar treino?",
    "O progresso desta sessao nao sera salvo.",
    "Abandonar",
    () => {
      clearToday();
      state.isTracking = false;
      state.activeView = "today";
      render();
    }
  );
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
    const setIndex = Number(target.dataset.setIndex);
    const set = exercise?.sets[setIndex];
    if (set) {
      set.done = !set.done;
      if (set.done && exercise) {
        if (!state.sessionStartedAt) state.sessionStartedAt = Date.now();
        startRestTimer(parseIntervalSeconds(exercise.notes) || Number(state.profile?.defaultRestSeconds) || 60, exercise.name);
      }
    }
    render();
    if (set?.done) {
      const row = document.querySelector(`.set-table-row[data-workout-id="${workoutId}"][data-exercise-id="${exerciseId}"][data-set-index="${setIndex}"]`);
      row?.classList.add("just-completed");
    }
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
  if (action === "abandon-session") abandonSession();
  if (action === "toggle-history") {
    const sessionId = target.dataset.sessionId;
    if (expandedHistoryIds.has(sessionId)) expandedHistoryIds.delete(sessionId);
    else expandedHistoryIds.add(sessionId);
    renderHistory();
    return;
  }
  if (action === "filter-history-day") {
    historyFilterDay = target.dataset.day;
    renderHistory();
    return;
  }
  if (action === "select-progress-exercise") {
    state.selectedProgressExercise = target.dataset.name;
    renderProgress();
    saveState();
    return;
  }
  if (action === "goto-active-session") {
    state.activeView = "activity";
    render();
  }
  if (action === "edit-workout") openWorkoutEditor(workoutId);
  if (action === "edit-category") openCategoryEditor(target.dataset.categoryId);
  if (action === "add-exercise") openExerciseEditor(workoutId);
  if (action === "edit-exercise") openExerciseEditor(workoutId, exerciseId);
  if (action === "start-workout") {
    state.selectedWorkoutId = workoutId;
    state.activeView = "activity";
    state.isTracking = true;
    render();
  }
  if (action === "append-set") {
    const list = $("#setEditorList");
    list.insertAdjacentHTML("beforeend", renderSetEditor({ reps: 10, load: "0kg" }, list.children.length));
    const uniformToggle = document.getElementById("uniformWeightToggle");
    const uniformInput = document.getElementById("uniformWeightInput");
    if (uniformToggle?.checked && uniformInput) {
      const loadInput = list.lastElementChild?.querySelector(".set-editor-load input");
      if (loadInput) loadInput.value = uniformInput.value;
    }
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
document.addEventListener("input", (event) => {
  const target = event.target.closest("[data-live-field]");
  if (!target) return;
  const { workoutId, exerciseId, setIndex, liveField } = target.dataset;
  const workout = state.workouts.find((item) => item.id === workoutId);
  const exercise = workout?.exercises.find((item) => item.id === exerciseId);
  const set = exercise?.sets[Number(setIndex)];
  if (!set) return;
  if (liveField === "reps") set.reps = Number(target.value) || 0;
  if (liveField === "load") set.load = target.value;
  saveState();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target.closest('[role="button"][data-action]');
  if (!target) return;
  event.preventDefault();
  target.click();
});
$("#newWorkoutButton").addEventListener("click", () => openWorkoutEditor());
$("#newCategoryButton").addEventListener("click", () => openCategoryEditor());
$("#quickAddButton").addEventListener("click", () => {
  if (state.activeView === "activity" && state.isTracking && selectedWorkout()) openExerciseEditor(selectedWorkout().id);
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

[elements.profileNick, elements.profileWeight, elements.profileHeight, elements.profileAge, elements.profileRegistration, elements.profileGoal, elements.profileLevel, elements.profileWeeklyFrequency, elements.profileDefaultRest, elements.profileWeightUnit, elements.profileRestSound, elements.profileRestVibration, elements.profileRestNotifications].forEach((input) => {
  if (!input) return;
  input.addEventListener("input", updateProfile);
  input.addEventListener("change", updateProfile);
});

$("#restTimerToggle").addEventListener("click", toggleRestTimer);
$("#restTimerMinus").addEventListener("click", () => adjustRestTimer(-15));
$("#restTimerPlus").addEventListener("click", () => adjustRestTimer(15));
$("#restTimerClose").addEventListener("click", closeRestTimer);

setInterval(() => {
  if (!state.sessionStartedAt || state.activeView !== "today") return;
  const label = document.getElementById("todayElapsedTime");
  if (label) label.textContent = formatElapsed(Date.now() - state.sessionStartedAt);
}, 1000);

render();