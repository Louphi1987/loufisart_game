const TILE = 48;
const COLS = 16;
const ROWS = 14;

const FLOOR_NAMES = [
  "Rez-de-chaussee",
  "Premier etage",
  "Toit technique",
];

const BASE_MAPS = [
  [
    "################",
    "#.....#....#...#",
    "#.###.#.D..#.U.#",
    "#.#...#....#...#",
    "#.#.#####.##...#",
    "#.#........#...#",
    "#.#.######.#...#",
    "#...#....#.#...#",
    "#...#.##.#.#..##",
    "#.P.#....#.#...#",
    "#...####.#.###.#",
    "#........#.....#",
    "#..d..#.....d..#",
    "################",
  ],
  [
    "################",
    "#..N....#..d...#",
    "#.####..#.###..#",
    "#....#..#...#..#",
    "###..#..###.#.##",
    "#...d....#.....#",
    "#.######.#.##..#",
    "#....#...#..#..#",
    "#.##.#.###..#U.#",
    "#....#.....##..#",
    "#.##.#####....##",
    "#....#...d....##",
    "#..............#",
    "################",
  ],
  [
    "################",
    "#..N..#.....E..#",
    "#.###.#.#####..#",
    "#...#.#.....#..#",
    "#.#.#.###d###.##",
    "#.#...#.....#..#",
    "#.###.#.###.#..#",
    "#...#...#...#..#",
    "###.###.#.###.##",
    "#.....#.#.....##",
    "#.###.#.#.###..#",
    "#...d...#......#",
    "#..............#",
    "################",
  ],
];

const FLOOR_THEMES = [
  {
    base: "#2c2825",
    alt: "#38312e",
    seam: "rgba(176, 149, 125, 0.08)",
    wallTop: "#60656b",
    wallFace: "#3a3d42",
    wallShadow: "#212429",
    grime: "rgba(85, 60, 47, 0.28)",
    rust: "rgba(145, 75, 60, 0.18)",
    accent: "#7e5045",
    cold: "#93a9b5",
  },
  {
    base: "#28312c",
    alt: "#354039",
    seam: "rgba(193, 214, 204, 0.08)",
    wallTop: "#66727a",
    wallFace: "#3a474e",
    wallShadow: "#212a2f",
    grime: "rgba(84, 100, 79, 0.24)",
    rust: "rgba(124, 78, 66, 0.18)",
    accent: "#8fbaa8",
    cold: "#9dbfc6",
  },
  {
    base: "#24292f",
    alt: "#313842",
    seam: "rgba(181, 197, 210, 0.08)",
    wallTop: "#6b7884",
    wallFace: "#3b444e",
    wallShadow: "#20262c",
    grime: "rgba(71, 82, 93, 0.22)",
    rust: "rgba(99, 120, 139, 0.16)",
    accent: "#7aa0be",
    cold: "#bfd1df",
  },
];

const BASE_FLOOR_FEATURES = [
  [
    { type: "reception", col: 1, row: 1, width: 2 },
    { type: "bench", col: 8, row: 1, width: 2 },
    { type: "window", col: 13, row: 1 },
    { type: "notice", col: 9, row: 2 },
    { type: "locker", col: 13, row: 3 },
    { type: "gurney", col: 5, row: 5, width: 2 },
    { type: "crate", col: 13, row: 5 },
    { type: "cabinet", col: 1, row: 7, height: 2 },
    { type: "bench", col: 12, row: 8, height: 2 },
    { type: "medicalCart", col: 6, row: 9 },
    { type: "rubble", col: 3, row: 11 },
    { type: "cable", col: 10, row: 12, width: 2 },
  ],
  [
    { type: "wardBed", col: 1, row: 3, width: 2 },
    { type: "wardBed", col: 13, row: 3 },
    { type: "nurseDesk", col: 6, row: 5, width: 2 },
    { type: "locker", col: 11, row: 5 },
    { type: "monitor", col: 14, row: 5 },
    { type: "wheelchair", col: 2, row: 7 },
    { type: "locker", col: 11, row: 7 },
    { type: "cabinet", col: 2, row: 9 },
    { type: "shelf", col: 8, row: 9, width: 2 },
    { type: "rubble", col: 13, row: 10 },
    { type: "cable", col: 7, row: 11, width: 2 },
  ],
  [
    { type: "tank", col: 1, row: 1, width: 2 },
    { type: "floodlight", col: 4, row: 1 },
    { type: "antenna", col: 8, row: 1 },
    { type: "roofVent", col: 13, row: 2 },
    { type: "hvac", col: 8, row: 3, width: 2 },
    { type: "cable", col: 3, row: 5, width: 2 },
    { type: "roofVent", col: 13, row: 5 },
    { type: "satDish", col: 2, row: 7 },
    { type: "hvac", col: 9, row: 7, width: 2 },
    { type: "floodlight", col: 12, row: 9 },
    { type: "tank", col: 3, row: 11, width: 2 },
    { type: "antenna", col: 11, row: 11 },
  ],
];

const BASE_FLOOR_LIGHTS = [
  [
    { col: 2, row: 1, color: "rgba(212, 170, 120, 0.28)", radius: 72, pulse: 0.15 },
    { col: 13, row: 1, color: "rgba(138, 186, 210, 0.24)", radius: 88, pulse: 0.22 },
    { col: 6, row: 9, color: "rgba(190, 224, 196, 0.18)", radius: 54, pulse: 0.12 },
  ],
  [
    { col: 6, row: 5, color: "rgba(163, 230, 204, 0.22)", radius: 74, pulse: 0.18 },
    { col: 14, row: 5, color: "rgba(103, 189, 154, 0.24)", radius: 52, pulse: 0.28 },
    { col: 13, row: 8, color: "rgba(147, 182, 212, 0.2)", radius: 70, pulse: 0.18 },
  ],
  [
    { col: 12, row: 1, color: "rgba(137, 178, 214, 0.2)", radius: 102, pulse: 0.09 },
    { col: 12, row: 9, color: "rgba(190, 220, 245, 0.22)", radius: 86, pulse: 0.18 },
    { col: 3, row: 11, color: "rgba(180, 205, 230, 0.16)", radius: 72, pulse: 0.07 },
  ],
];

const BASE_PICKUP_SPAWNS = {
  0: [
    { col: 3, row: 5 },
    { col: 11, row: 3 },
    { col: 12, row: 11 },
  ],
  1: [
    { col: 3, row: 3 },
    { col: 13, row: 5 },
    { col: 8, row: 12 },
  ],
  2: [
    { col: 4, row: 1 },
    { col: 11, row: 7 },
    { col: 13, row: 11 },
  ],
};

const HAUNTING_MESSAGES = [
  "Un neons hurle au-dessus de toi.",
  "Quelque chose gratte dans les gaines.",
  "L'air se refroidit brusquement.",
  "Des pas glissent dans l'escalier.",
  "Une porte claque et le silence revient.",
];

const START_TEXT =
  "Recupere les trois seringues, monte jusqu'au toit et garde Roland hors de portee.";

const PICKUP_FLOOR_TILES = new Set([".", "d"]);
const LAYOUT_VARIANTS = [
  { id: "base", flipX: false, flipY: false },
  { id: "flip-x", flipX: true, flipY: false },
  { id: "flip-y", flipX: false, flipY: true },
  { id: "flip-xy", flipX: true, flipY: true },
];

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const pickupCountEl = document.querySelector("#pickup-count");
const floorNameEl = document.querySelector("#floor-name");
const fearLevelEl = document.querySelector("#fear-level");
const objectiveTextEl = document.querySelector("#objective-text");
const messageBoxEl = document.querySelector("#message-box");
const floorCards = [...document.querySelectorAll(".floor-card")];
const overlayEl = document.querySelector("#overlay");
const overlayTitleEl = document.querySelector("#overlay-title");
const overlayBodyEl = document.querySelector("#overlay-body");
const overlayButtonEl = document.querySelector("#overlay-button");
const overlayStoryLinkEl = document.querySelector("#overlay-story-link");
const restartButtonEl = document.querySelector("#restart-button");
const interactButtonEl = document.querySelector("#interact-button");

const assets = {
  player: {
    down: createImage("./assets/player-face.png"),
    up: createImage("./assets/player-back.png"),
    left: createImage("./assets/player-left.png"),
    right: createImage("./assets/player-right.png"),
  },
  roland: {
    down: createImage("./assets/roland-face.png"),
    up: createImage("./assets/roland-back.png"),
    left: createImage("./assets/roland-left.png"),
    right: createImage("./assets/roland-right.png"),
  },
  syringe: createImage("./assets/syringe.png"),
};

const soundtrack = new Audio("./assets/horror-background.mp3");
soundtrack.loop = true;
soundtrack.preload = "auto";
soundtrack.volume = 0.16;

const audioState = {
  soundtrack,
  context: null,
  masterGain: null,
  noiseBuffer: null,
  chaseCueCooldown: 0,
  lastRolandState: "patrol",
};

let activeMaps = BASE_MAPS;
let activeFloorFeatures = BASE_FLOOR_FEATURES;
let activeFloorLights = BASE_FLOOR_LIGHTS;
let activePickupSpawns = BASE_PICKUP_SPAWNS;
let markerCache = null;
let walkableTiles = [];
const floorCaches = [];
const fogCanvas = document.createElement("canvas");
fogCanvas.width = canvas.width;
fogCanvas.height = canvas.height;
const fogCtx = fogCanvas.getContext("2d");

const controls = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  KeyW: false,
  KeyA: false,
  KeyS: false,
  KeyD: false,
};

const state = {
  assetsReady: false,
  running: false,
  ended: false,
  win: false,
  fear: 0.08,
  hauntingTimer: 14,
  glitchTimer: 0,
  lastFrame: 0,
  trails: [],
  explored: createExplorationState(),
  message: {
    text: START_TEXT,
    tone: "info",
    timer: 0,
  },
  pickups: [],
  layoutSignature: "",
  player: {
    x: 0,
    y: 0,
    floor: 0,
    direction: "down",
    speed: 172,
    radius: 15,
    bodyOffset: 20,
    stepTimer: 0,
  },
  roland: {
    x: 0,
    y: 0,
    floor: 1,
    direction: "left",
    speed: 88,
    chaseBoost: 34,
    radius: 17,
    bodyOffset: 22,
    wanderTarget: null,
    stairTimer: 9,
    alert: 0,
    state: "patrol",
    stepTimer: 0,
  },
};

window.__nightShift = {
  state,
  controls,
  startGame,
  attemptInteract,
};

function createImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

function loadImages() {
  const images = [
    ...Object.values(assets.player),
    ...Object.values(assets.roland),
    assets.syringe,
  ];

  return Promise.all(
    images.map(
      (image) =>
        new Promise((resolve, reject) => {
          if (image.complete) {
            resolve();
            return;
          }
          image.onload = () => resolve();
          image.onerror = () => reject(new Error(`Impossible de charger ${image.src}`));
        }),
    ),
  );
}

function ensureAudioContext() {
  if (audioState.context) {
    return audioState.context;
  }

  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) {
    return null;
  }

  const context = new AudioContextCtor();
  const masterGain = context.createGain();
  masterGain.gain.value = 0.2;
  masterGain.connect(context.destination);

  const noiseBuffer = context.createBuffer(1, context.sampleRate, context.sampleRate);
  const samples = noiseBuffer.getChannelData(0);
  for (let index = 0; index < samples.length; index += 1) {
    samples[index] = Math.random() * 2 - 1;
  }

  audioState.context = context;
  audioState.masterGain = masterGain;
  audioState.noiseBuffer = noiseBuffer;
  return context;
}

function primeAudio() {
  const context = ensureAudioContext();
  if (context && context.state === "suspended") {
    context.resume().catch(() => {});
  }

  if (audioState.soundtrack.paused) {
    audioState.soundtrack.play().catch(() => {});
  }
}

function playTone({
  type = "sine",
  frequency = 220,
  frequencyEnd = frequency,
  gain = 0.05,
  attack = 0.01,
  decay = 0.25,
  delay = 0,
} = {}) {
  const context = ensureAudioContext();
  if (!context || !audioState.masterGain) {
    return;
  }

  const startAt = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const envelope = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  oscillator.frequency.exponentialRampToValueAtTime(
    Math.max(30, frequencyEnd),
    startAt + decay,
  );

  envelope.gain.setValueAtTime(0.0001, startAt);
  envelope.gain.linearRampToValueAtTime(gain, startAt + attack);
  envelope.gain.exponentialRampToValueAtTime(0.0001, startAt + decay);

  oscillator.connect(envelope);
  envelope.connect(audioState.masterGain);

  oscillator.start(startAt);
  oscillator.stop(startAt + decay + 0.05);
}

function playNoiseBurst({
  gain = 0.06,
  attack = 0.004,
  decay = 0.28,
  filterFrequency = 820,
  delay = 0,
} = {}) {
  const context = ensureAudioContext();
  if (!context || !audioState.masterGain || !audioState.noiseBuffer) {
    return;
  }

  const startAt = context.currentTime + delay;
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const envelope = context.createGain();

  source.buffer = audioState.noiseBuffer;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(filterFrequency, startAt);
  filter.frequency.exponentialRampToValueAtTime(
    Math.max(120, filterFrequency * 0.35),
    startAt + decay,
  );

  envelope.gain.setValueAtTime(0.0001, startAt);
  envelope.gain.linearRampToValueAtTime(gain, startAt + attack);
  envelope.gain.exponentialRampToValueAtTime(0.0001, startAt + decay);

  source.connect(filter);
  filter.connect(envelope);
  envelope.connect(audioState.masterGain);

  source.start(startAt);
  source.stop(startAt + decay + 0.05);
}

function playStairCreak() {
  playTone({ type: "sawtooth", frequency: 176, frequencyEnd: 92, gain: 0.032, decay: 0.3 });
  playNoiseBurst({ gain: 0.024, decay: 0.18, filterFrequency: 1500, delay: 0.02 });
}

function playDoorSlam(intensity = 1) {
  playTone({
    type: "triangle",
    frequency: 124,
    frequencyEnd: 48,
    gain: 0.09 * intensity,
    attack: 0.005,
    decay: 0.32,
  });
  playNoiseBurst({
    gain: 0.1 * intensity,
    decay: 0.26,
    filterFrequency: 720,
  });
}

function playPickupChime() {
  playTone({ type: "sine", frequency: 620, frequencyEnd: 880, gain: 0.03, decay: 0.22 });
  playTone({ type: "sine", frequency: 880, frequencyEnd: 1180, gain: 0.022, decay: 0.18, delay: 0.08 });
}

function playThreatSting(level = 1) {
  playTone({
    type: "sawtooth",
    frequency: 210,
    frequencyEnd: 150,
    gain: 0.04 * level,
    attack: 0.012,
    decay: 0.52,
  });
  playTone({
    type: "triangle",
    frequency: 168,
    frequencyEnd: 126,
    gain: 0.032 * level,
    attack: 0.01,
    decay: 0.44,
    delay: 0.02,
  });
  playNoiseBurst({ gain: 0.026 * level, decay: 0.34, filterFrequency: 540 });
}

function playHauntingSwell() {
  playNoiseBurst({ gain: 0.018, decay: 0.72, filterFrequency: 2200 });
  playTone({
    type: "sine",
    frequency: 286,
    frequencyEnd: 164,
    gain: 0.015,
    attack: 0.08,
    decay: 0.68,
    delay: 0.03,
  });
}

function updateAudio(delta) {
  audioState.chaseCueCooldown = Math.max(0, audioState.chaseCueCooldown - delta);

  if (!state.running) {
    audioState.soundtrack.volume += ((state.win ? 0.1 : 0.06) - audioState.soundtrack.volume) * Math.min(1, delta * 4);
    audioState.lastRolandState = state.roland.state;
    return;
  }

  const huntBoost = state.roland.state === "hunt" ? 0.08 : 0;
  const targetVolume = 0.14 + state.fear * 0.11 + huntBoost;
  audioState.soundtrack.volume += (targetVolume - audioState.soundtrack.volume) * Math.min(1, delta * 2.4);

  if (
    state.roland.state === "hunt" &&
    audioState.lastRolandState !== "hunt" &&
    audioState.chaseCueCooldown <= 0
  ) {
    playThreatSting(1);
    audioState.chaseCueCooldown = 3.8;
  }

  audioState.lastRolandState = state.roland.state;
}

function buildMarkerCache() {
  return {
    playerSpawn: findMarker(0, "P"),
    stairs: {
      "0-up": findMarker(0, "U"),
      "1-down": findMarker(1, "N"),
      "1-up": findMarker(1, "U"),
      "2-down": findMarker(2, "N"),
    },
    exit: findMarker(2, "E"),
  };
}

function buildWalkableTileCache() {
  return activeMaps.map((map, floor) => {
    const open = [];
    for (let row = 0; row < ROWS; row += 1) {
      for (let col = 0; col < COLS; col += 1) {
        const tile = getTile(floor, col, row);
        if (!isTileHardBlocked(tile)) {
          open.push({ col, row });
        }
      }
    }
    return open;
  });
}

function buildFloorCaches() {
  floorCaches.length = 0;
  for (let floor = 0; floor < activeMaps.length; floor += 1) {
    const buffer = document.createElement("canvas");
    buffer.width = canvas.width;
    buffer.height = canvas.height;
    const bufferCtx = buffer.getContext("2d");
    drawStaticFloor(bufferCtx, floor);
    floorCaches[floor] = buffer;
  }
}

function findMarker(floor, marker) {
  for (let row = 0; row < ROWS; row += 1) {
    const col = activeMaps[floor][row].indexOf(marker);
    if (col !== -1) {
      return { col, row };
    }
  }
  return null;
}

function getTile(floor, col, row) {
  if (floor < 0 || floor >= activeMaps.length || row < 0 || row >= ROWS || col < 0 || col >= COLS) {
    return "#";
  }
  const raw = activeMaps[floor][row][col];
  if (raw === "P") {
    return ".";
  }
  return raw;
}

function isTileHardBlocked(tile) {
  return tile === "#" || tile === "D";
}

function tileToWorld(col, row) {
  return {
    x: col * TILE + TILE / 2,
    y: row * TILE + TILE - 6,
  };
}

function worldToTile(x, y) {
  return {
    col: Math.floor(x / TILE),
    row: Math.floor(y / TILE),
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(a, b, amount) {
  return a + (b - a) * amount;
}

function chooseRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function transformMap(map, variant) {
  let transformed = [...map];
  if (variant.flipX) {
    transformed = transformed.map((row) => [...row].reverse().join(""));
  }
  if (variant.flipY) {
    transformed = [...transformed].reverse();
  }
  return transformed;
}

function transformPoint(point, variant) {
  return {
    ...point,
    col: variant.flipX ? COLS - 1 - point.col : point.col,
    row: variant.flipY ? ROWS - 1 - point.row : point.row,
  };
}

function transformFeature(feature, variant) {
  const width = feature.width || 1;
  const height = feature.height || 1;
  return {
    ...feature,
    col: variant.flipX ? COLS - width - feature.col : feature.col,
    row: variant.flipY ? ROWS - height - feature.row : feature.row,
  };
}

function buildRandomizedLayout(previousSignature = "") {
  let variants = [];
  let signature = "";
  let attempts = 0;

  do {
    variants = BASE_MAPS.map(() => chooseRandomItem(LAYOUT_VARIANTS));
    signature = variants.map((variant) => variant.id).join("|");
    attempts += 1;
  } while (signature === previousSignature && attempts < 8);

  return {
    signature,
    maps: BASE_MAPS.map((map, floor) => transformMap(map, variants[floor])),
    features: BASE_FLOOR_FEATURES.map((features, floor) =>
      features.map((feature) => transformFeature(feature, variants[floor])),
    ),
    lights: BASE_FLOOR_LIGHTS.map((lights, floor) =>
      lights.map((light) => ({
        ...light,
        ...transformPoint(light, variants[floor]),
      })),
    ),
    pickupSpawns: Object.fromEntries(
      Object.entries(BASE_PICKUP_SPAWNS).map(([floorText, spots]) => [
        floorText,
        spots.map((spot) => transformPoint(spot, variants[Number(floorText)])),
      ]),
    ),
  };
}

function generateRunLayout() {
  const layout = buildRandomizedLayout(state.layoutSignature);
  state.layoutSignature = layout.signature;
  activeMaps = layout.maps;
  activeFloorFeatures = layout.features;
  activeFloorLights = layout.lights;
  activePickupSpawns = layout.pickupSpawns;
  markerCache = buildMarkerCache();
  walkableTiles = buildWalkableTileCache();
  buildFloorCaches();
}

function createExplorationState() {
  return activeMaps.map(() =>
    Array.from({ length: ROWS }, () => Array(COLS).fill(0)),
  );
}

function hashNoise(a, b, c = 0) {
  const value = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453123;
  return value - Math.floor(value);
}

function directionToAngle(direction) {
  switch (direction) {
    case "up":
      return Math.PI;
    case "left":
      return -Math.PI / 2;
    case "right":
      return Math.PI / 2;
    default:
      return 0;
  }
}

function resetGame() {
  generateRunLayout();

  const playerSpawn = tileToWorld(markerCache.playerSpawn.col, markerCache.playerSpawn.row);
  state.player.x = playerSpawn.x;
  state.player.y = playerSpawn.y;
  state.player.floor = 0;
  state.player.direction = "down";
  state.player.stepTimer = 0;

  const rolandSpawn = chooseRolandSpawn();
  state.roland.x = rolandSpawn.x;
  state.roland.y = rolandSpawn.y;
  state.roland.floor = 1;
  state.roland.direction = chooseRandomItem(["left", "right", "up", "down"]);
  state.roland.wanderTarget = null;
  state.roland.stairTimer = 9;
  state.roland.alert = 0;
  state.roland.state = "patrol";
  state.roland.stepTimer = 0;

  state.fear = 0.08;
  state.hauntingTimer = 12 + Math.random() * 6;
  state.glitchTimer = 0;
  state.ended = false;
  state.win = false;
  state.pickups = spawnPickups();
  state.trails = [];
  state.explored = createExplorationState();
  updateExploration();

  showMessage(START_TEXT, "info", 4);
  updateHud();
  render();
}

function spawnPickups() {
  return Object.entries(activePickupSpawns).map(([floorText, spots]) => {
    const floor = Number(floorText);
    const chosen = findSafePickupSpot(floor, chooseRandomItem(spots));
    return {
      ...chosen,
      floor,
      found: false,
      bob: Math.random() * Math.PI * 2,
    };
  });
}

function findSafePickupSpot(floor, initialSpot) {
  if (isPickupTileSafe(floor, initialSpot.col, initialSpot.row)) {
    return initialSpot;
  }

  const visited = new Set([`${initialSpot.col},${initialSpot.row}`]);
  const queue = [{ col: initialSpot.col, row: initialSpot.row }];

  while (queue.length) {
    const current = queue.shift();
    const neighbors = [
      { col: current.col + 1, row: current.row },
      { col: current.col - 1, row: current.row },
      { col: current.col, row: current.row + 1 },
      { col: current.col, row: current.row - 1 },
    ];

    for (const neighbor of neighbors) {
      if (neighbor.col < 0 || neighbor.col >= COLS || neighbor.row < 0 || neighbor.row >= ROWS) {
        continue;
      }

      const key = `${neighbor.col},${neighbor.row}`;
      if (visited.has(key)) {
        continue;
      }
      visited.add(key);

      if (isPickupTileSafe(floor, neighbor.col, neighbor.row)) {
        return neighbor;
      }

      queue.push(neighbor);
    }
  }

  return initialSpot;
}

function isPickupTileSafe(floor, col, row) {
  const tile = getTile(floor, col, row);
  if (!PICKUP_FLOOR_TILES.has(tile)) {
    return false;
  }

  const neighbors = [
    getTile(floor, col + 1, row),
    getTile(floor, col - 1, row),
    getTile(floor, col, row + 1),
    getTile(floor, col, row - 1),
  ];

  const openSides = neighbors.filter((neighborTile) => PICKUP_FLOOR_TILES.has(neighborTile)).length;
  return openSides >= 1;
}

function chooseRolandSpawn() {
  const blockedKeys = new Set([
    `${markerCache.stairs["1-down"].col},${markerCache.stairs["1-down"].row}`,
    `${markerCache.stairs["1-up"].col},${markerCache.stairs["1-up"].row}`,
  ]);

  const candidates = walkableTiles[1].filter(
    (tile) => !blockedKeys.has(`${tile.col},${tile.row}`),
  );
  const chosenTile = chooseRandomItem(candidates.length ? candidates : walkableTiles[1]);
  return tileToWorld(chosenTile.col, chosenTile.row);
}

function showOverlay(title, body, buttonLabel, options = {}) {
  const { storyHref = "", storyLabel = "" } = options;
  overlayTitleEl.textContent = title;
  overlayBodyEl.textContent = body;
  overlayButtonEl.textContent = buttonLabel;
  overlayStoryLinkEl.hidden = !(storyHref && storyLabel);
  if (storyHref && storyLabel) {
    overlayStoryLinkEl.href = storyHref;
    overlayStoryLinkEl.textContent = storyLabel;
  }
  overlayEl.classList.add("visible");
}

function hideOverlay() {
  overlayEl.classList.remove("visible");
}

function showMessage(text, tone = "info", duration = 2.6) {
  state.message.text = text;
  state.message.tone = tone;
  state.message.timer = duration;
  messageBoxEl.textContent = text;
  messageBoxEl.className = `message-box ${tone}`;
}

function isTouchUiActive() {
  if (typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }
  return window.innerWidth <= 760;
}

function getInteractionContext() {
  if (!state.running) {
    return {
      label: "Entrer",
      buttonClass: "",
      hint: "Touche pour entrer dans l'immeuble",
      tileType: "",
    };
  }

  const tile = worldToTile(state.player.x, state.player.y - 18);
  const currentTile = getTile(state.player.floor, tile.col, tile.row);
  const touchLabel = isTouchUiActive() ? "Touche" : "Appuie sur E";
  const foundPickups = state.pickups.filter((pickup) => pickup.found).length;
  const allPickupsFound = foundPickups === state.pickups.length;

  if (currentTile === "U") {
    return {
      label: "Monter",
      buttonClass: "ready",
      hint: `${touchLabel} pour monter l'escalier`,
      tileType: "U",
    };
  }

  if (currentTile === "N") {
    return {
      label: "Descendre",
      buttonClass: "ready",
      hint: `${touchLabel} pour descendre l'escalier`,
      tileType: "N",
    };
  }

  if (currentTile === "E") {
    return {
      label: allPickupsFound ? "Sortir" : "Sortie",
      buttonClass: allPickupsFound ? "ready exit-ready" : "ready",
      hint: allPickupsFound
        ? `${touchLabel} pour ouvrir la porte du toit`
        : "La porte du toit reste fermee sans toutes les seringues",
      tileType: "E",
    };
  }

  return {
    label: isTouchUiActive() ? "Tap" : "Interagir",
    buttonClass: "",
    hint: "",
    tileType: "",
  };
}

function updateInteractButton() {
  const context = getInteractionContext();
  interactButtonEl.textContent = context.label;
  interactButtonEl.className = `action-button${context.buttonClass ? ` ${context.buttonClass}` : ""}`;
  interactButtonEl.setAttribute("aria-label", context.hint || context.label);
}

function updateHud() {
  const foundPickups = state.pickups.filter((pickup) => pickup.found).length;
  pickupCountEl.textContent = `${foundPickups} / ${state.pickups.length}`;
  floorNameEl.textContent = FLOOR_NAMES[state.player.floor];

  if (state.fear < 0.25) {
    fearLevelEl.textContent = "Calme fragile";
  } else if (state.fear < 0.5) {
    fearLevelEl.textContent = "Peur sourde";
  } else if (state.fear < 0.8) {
    fearLevelEl.textContent = "Panique";
  } else {
    fearLevelEl.textContent = "Terreur pure";
  }

  if (foundPickups === state.pickups.length) {
    objectiveTextEl.textContent = "La sortie du toit est ouverte. Trouve-la avant que Roland te rattrape.";
  } else {
    objectiveTextEl.textContent = `Recupere les seringues (${foundPickups}/${state.pickups.length}) puis gagne le toit.`;
  }

  floorCards.forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.floor) === state.player.floor);
  });

  updateInteractButton();
}

function startGame() {
  if (!state.assetsReady) {
    return;
  }
  primeAudio();
  if (state.running) {
    resetGame();
    hideOverlay();
    canvas.focus();
    return;
  }
  resetGame();
  state.running = true;
  state.lastFrame = performance.now();
  hideOverlay();
  canvas.focus();
  requestAnimationFrame(loop);
}

function finishGame(win) {
  state.running = false;
  state.ended = true;
  state.win = win;

  if (win) {
    playTone({ type: "sine", frequency: 420, frequencyEnd: 620, gain: 0.035, decay: 0.48 });
    audioState.soundtrack.volume = 0.1;
    showMessage("Tu as quitte l'immeuble. Roland hurle dans l'escalier derriere toi.", "success", 8);
    showOverlay(
      "Tu as survecu",
      "Les trois seringues sont en ta possession. Le toit s'est finalement ouvert et Roland est reste prisonnier dans la cage d'escalier.",
      "Rejouer",
      {
        storyHref: "https://loufisart.netlify.app/",
        storyLabel: "Roland, decouvre son histoire",
      },
    );
  } else {
    playThreatSting(1.1);
    audioState.soundtrack.volume = 0.06;
    showMessage("You are trapped! Try again!", "alert", 8);
    showOverlay(
      "Roland t'a trouve",
      "Ton souffle s'arrete net dans le couloir. Reprends depuis le hall et tente une autre route.",
      "Rejouer",
    );
  }
}

function attemptInteract() {
  if (!state.running) {
    if (state.assetsReady) {
      startGame();
    }
    return;
  }

  const tile = worldToTile(state.player.x, state.player.y - 18);
  const currentTile = getTile(state.player.floor, tile.col, tile.row);

  if (currentTile === "U") {
    movePlayerToFloor(state.player.floor + 1);
    return;
  }
  if (currentTile === "N") {
    movePlayerToFloor(state.player.floor - 1);
    return;
  }
  if (currentTile === "E") {
    const foundPickups = state.pickups.filter((pickup) => pickup.found).length;
    if (foundPickups === state.pickups.length) {
      finishGame(true);
    } else {
      showMessage("La porte du toit resiste encore. Il manque des seringues.", "alert", 2.8);
    }
  }
}

function movePlayerToFloor(nextFloor) {
  if (nextFloor < 0 || nextFloor >= activeMaps.length) {
    return;
  }

  const marker = nextFloor > state.player.floor
    ? markerCache.stairs[`${nextFloor}-down`]
    : markerCache.stairs[`${nextFloor}-up`];

  const target = tileToWorld(marker.col, marker.row);
  state.player.x = target.x;
  state.player.y = target.y;
  state.player.floor = nextFloor;
  updateExploration();
  updateHud();
  playStairCreak();
  showMessage(`Tu changes d'etage. ${FLOOR_NAMES[nextFloor]}.`, "info", 2.2);
}

function loop(timestamp) {
  if (!state.running) {
    render();
    return;
  }

  const delta = Math.min((timestamp - state.lastFrame) / 1000, 0.033);
  state.lastFrame = timestamp;

  update(delta);
  render();

  if (state.running) {
    requestAnimationFrame(loop);
  }
}

function update(delta) {
  if (state.message.timer > 0) {
    state.message.timer -= delta;
    if (state.message.timer <= 0) {
      showMessage("Ecoute l'immeuble. Roland ecoute aussi.", "info", 1.6);
      state.message.timer = 0;
    }
  }

  state.hauntingTimer -= delta;
  if (state.hauntingTimer <= 0) {
    triggerHaunting();
    state.hauntingTimer = 14 + Math.random() * 9;
  }

  state.glitchTimer = Math.max(0, state.glitchTimer - delta);
  updateTrails(delta);
  updatePlayer(delta);
  updateRoland(delta);
  updatePickups(delta);
  updateExploration();
  updateFear(delta);
  updateAudio(delta);
  updateHud();
}

function updatePlayer(delta) {
  const horizontal = (controls.ArrowRight || controls.KeyD ? 1 : 0) - (controls.ArrowLeft || controls.KeyA ? 1 : 0);
  const vertical = (controls.ArrowDown || controls.KeyS ? 1 : 0) - (controls.ArrowUp || controls.KeyW ? 1 : 0);

  state.player.stepTimer = Math.max(0, state.player.stepTimer - delta);

  if (!horizontal && !vertical) {
    return;
  }

  const magnitude = Math.hypot(horizontal, vertical) || 1;
  let speed = state.player.speed;

  if (isStandingOnHazard(state.player)) {
    speed *= 0.66;
  }

  const moveX = (horizontal / magnitude) * speed * delta;
  const moveY = (vertical / magnitude) * speed * delta;
  const previousX = state.player.x;
  const previousY = state.player.y;

  if (Math.abs(moveX) > Math.abs(moveY)) {
    state.player.direction = moveX > 0 ? "right" : "left";
  } else if (moveY !== 0) {
    state.player.direction = moveY > 0 ? "down" : "up";
  }

  moveEntity(state.player, moveX, moveY, true);

  if (Math.hypot(state.player.x - previousX, state.player.y - previousY) > 1 && state.player.stepTimer <= 0) {
    spawnTrail(state.player, "player");
    state.player.stepTimer = isStandingOnHazard(state.player) ? 0.19 : 0.12;
  }
}

function updateRoland(delta) {
  const sameFloor = state.roland.floor === state.player.floor;
  const distance = getEntityDistance(state.player, state.roland);
  const canSeePlayer = sameFloor && distance < 280 && hasLineOfSight(state.roland, state.player);

  state.roland.stepTimer = Math.max(0, state.roland.stepTimer - delta);
  state.roland.alert = canSeePlayer
    ? Math.min(1, state.roland.alert + delta * 2.4)
    : Math.max(0, state.roland.alert - delta * 1.6);

  if (canSeePlayer || (sameFloor && distance < 140)) {
    state.roland.state = "hunt";
    moveRolandTowards({ x: state.player.x, y: state.player.y }, state.roland.speed + state.roland.chaseBoost, delta);
  } else if (!sameFloor) {
    state.roland.state = "stalk";
    state.roland.stairTimer -= delta;
    if (state.roland.stairTimer <= 0) {
      shiftRolandFloorTowardPlayer();
    }
  } else {
    state.roland.state = "patrol";
    if (!state.roland.wanderTarget || hasReachedTarget(state.roland, state.roland.wanderTarget, 14)) {
      state.roland.wanderTarget = chooseOpenWorldTarget(state.roland.floor);
    }
    moveRolandTowards(state.roland.wanderTarget, state.roland.speed, delta);
  }

  if (sameFloor && distance < 54) {
    finishGame(false);
  }
}

function shiftRolandFloorTowardPlayer() {
  const deltaFloor = Math.sign(state.player.floor - state.roland.floor);
  if (!deltaFloor) {
    return;
  }

  const nextFloor = clamp(state.roland.floor + deltaFloor, 0, activeMaps.length - 1);
  const markerKey = deltaFloor > 0 ? `${nextFloor}-down` : `${nextFloor}-up`;
  const targetMarker = markerCache.stairs[markerKey];
  const target = tileToWorld(targetMarker.col, targetMarker.row);

  state.roland.floor = nextFloor;
  state.roland.x = target.x;
  state.roland.y = target.y;
  state.roland.wanderTarget = chooseOpenWorldTarget(state.roland.floor);
  state.roland.stairTimer = 7 + Math.random() * 4;

  if (nextFloor === state.player.floor) {
    playDoorSlam(0.72);
    showMessage("Des pas grincent dans l'escalier. Roland a change d'etage.", "alert", 2.6);
  }
}

function moveRolandTowards(target, speed, delta) {
  if (!target) {
    return;
  }

  const dx = target.x - state.roland.x;
  const dy = target.y - state.roland.y;
  const distance = Math.hypot(dx, dy) || 1;
  const previousX = state.roland.x;
  const previousY = state.roland.y;

  if (Math.abs(dx) > Math.abs(dy)) {
    state.roland.direction = dx > 0 ? "right" : "left";
  } else if (dy !== 0) {
    state.roland.direction = dy > 0 ? "down" : "up";
  }

  moveEntity(state.roland, (dx / distance) * speed * delta, (dy / distance) * speed * delta, false);

  if (Math.hypot(state.roland.x - previousX, state.roland.y - previousY) > 1 && state.roland.stepTimer <= 0) {
    spawnTrail(state.roland, "roland");
    state.roland.stepTimer = 0.16;
  }
}

function moveEntity(entity, deltaX, deltaY, isPlayer) {
  const nextX = entity.x + deltaX;
  if (!collidesWithMap(entity, nextX, entity.y)) {
    entity.x = nextX;
  } else if (isPlayer) {
    maybeShowLockedMessage(nextX, entity.y);
  }

  const nextY = entity.y + deltaY;
  if (!collidesWithMap(entity, entity.x, nextY)) {
    entity.y = nextY;
  } else if (isPlayer) {
    maybeShowLockedMessage(entity.x, nextY);
  }
}

function collidesWithMap(entity, nextX, nextY) {
  const centerY = nextY - entity.bodyOffset;
  const samplePoints = [
    [nextX - entity.radius, centerY],
    [nextX + entity.radius, centerY],
    [nextX, centerY - entity.radius],
    [nextX, centerY + entity.radius],
    [nextX - entity.radius * 0.72, centerY - entity.radius * 0.72],
    [nextX + entity.radius * 0.72, centerY - entity.radius * 0.72],
    [nextX - entity.radius * 0.72, centerY + entity.radius * 0.72],
    [nextX + entity.radius * 0.72, centerY + entity.radius * 0.72],
  ];

  return samplePoints.some(([pointX, pointY]) => {
    const tile = worldToTile(pointX, pointY);
    return isTileHardBlocked(getTile(entity.floor, tile.col, tile.row));
  });
}

function maybeShowLockedMessage(worldX, worldY) {
  const tile = worldToTile(worldX, worldY - state.player.bodyOffset);
  if (getTile(state.player.floor, tile.col, tile.row) === "D") {
    showMessage("LOCKED!", "alert", 1.2);
  }
}

function isStandingOnHazard(entity) {
  const tile = worldToTile(entity.x, entity.y - entity.bodyOffset);
  return getTile(entity.floor, tile.col, tile.row) === "d";
}

function spawnTrail(entity, kind) {
  const backwards = getDirectionVector(entity.direction);
  const jitterX = (hashNoise(entity.x, entity.y, performance.now()) - 0.5) * 8;
  const jitterY = (hashNoise(entity.y, entity.x, performance.now()) - 0.5) * 8;
  state.trails.push({
    x: entity.x - backwards.x * 10 + jitterX,
    y: entity.y - entity.bodyOffset * 0.35 - backwards.y * 8 + jitterY,
    floor: entity.floor,
    life: 0.48,
    maxLife: 0.48,
    rotation: directionToAngle(entity.direction),
    kind,
  });

  if (state.trails.length > 48) {
    state.trails.shift();
  }
}

function updateTrails(delta) {
  state.trails = state.trails
    .map((trail) => ({ ...trail, life: trail.life - delta }))
    .filter((trail) => trail.life > 0);
}

function updatePickups(delta) {
  const playerWorld = { x: state.player.x, y: state.player.y - 16 };
  state.pickups.forEach((pickup) => {
    pickup.bob += delta * 2.4;

    if (pickup.found || pickup.floor !== state.player.floor) {
      return;
    }

    const position = tileToWorld(pickup.col, pickup.row);
    if (Math.hypot(playerWorld.x - position.x, playerWorld.y - position.y) < 36) {
      pickup.found = true;
      const foundCount = state.pickups.filter((item) => item.found).length;
      playPickupChime();
      showMessage(`Seringue recuperee. ${foundCount}/${state.pickups.length}.`, "success", 2.4);
      state.roland.stairTimer = Math.max(1.8, state.roland.stairTimer - 2);
    }
  });
}

function updateFear(delta) {
  const sameFloor = state.player.floor === state.roland.floor;
  const distance = getEntityDistance(state.player, state.roland);
  const onHazard = isStandingOnHazard(state.player);
  let targetFear = 0.12;

  if (sameFloor) {
    targetFear += clamp(1 - distance / 360, 0, 1) * 0.82;
  } else {
    targetFear += 0.1 * clamp(1 - Math.abs(state.player.floor - state.roland.floor) / 2, 0, 1);
  }

  if (onHazard) {
    targetFear += 0.12;
  }

  if (state.glitchTimer > 0) {
    targetFear += 0.16;
  }

  state.fear = lerp(state.fear, clamp(targetFear, 0.08, 1), delta * 2.5);
}

function getEntityDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function hasReachedTarget(entity, target, radius) {
  return Math.hypot(target.x - entity.x, target.y - entity.y) < radius;
}

function chooseOpenWorldTarget(floor) {
  const tile = chooseRandomItem(walkableTiles[floor]);
  return tileToWorld(tile.col, tile.row);
}

function hasLineOfSight(fromEntity, toEntity) {
  const steps = Math.ceil(getEntityDistance(fromEntity, toEntity) / 14);
  for (let step = 1; step < steps; step += 1) {
    const amount = step / steps;
    const sampleX = lerp(fromEntity.x, toEntity.x, amount);
    const sampleY = lerp(fromEntity.y - fromEntity.bodyOffset, toEntity.y - toEntity.bodyOffset, amount);
    const tile = worldToTile(sampleX, sampleY);
    if (getTile(fromEntity.floor, tile.col, tile.row) === "#") {
      return false;
    }
  }
  return true;
}

function computeVisionLevel(worldX, worldY) {
  const facing = getDirectionVector(state.player.direction);
  const centerX = state.player.x;
  const centerY = state.player.y - 26;
  const dx = worldX - centerX;
  const dy = worldY - centerY;
  const distance = Math.hypot(dx, dy);
  const safeDistance = distance || 1;
  const dot = (dx * facing.x + dy * facing.y) / safeDistance;
  const core = clamp(1 - distance / 96, 0, 1);
  const aura = clamp(1 - distance / 162, 0, 1) * 0.72;
  const cone = clamp(1 - distance / 232, 0, 1) * clamp((dot + 0.24) / 1.24, 0, 1);
  const focusX = centerX + facing.x * 82;
  const focusY = centerY + facing.y * 82;
  const focusDistance = Math.hypot(worldX - focusX, worldY - focusY);
  const flashlight = clamp(1 - focusDistance / 118, 0, 1) * 0.95;
  return clamp(Math.max(core, aura, cone, flashlight), 0, 1);
}

function updateExploration() {
  const explored = state.explored[state.player.floor];
  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const center = tileToWorld(col, row);
      const visibility = computeVisionLevel(center.x, center.y - 10);
      if (visibility > 0.2) {
        explored[row][col] = 1;
      }
    }
  }

  const tile = worldToTile(state.player.x, state.player.y - state.player.bodyOffset);
  if (explored[tile.row] && typeof explored[tile.row][tile.col] !== "undefined") {
    explored[tile.row][tile.col] = 1;
  }
}

function isEntityVisible(entity) {
  if (entity.floor !== state.player.floor) {
    return 0;
  }
  return computeVisionLevel(entity.x, entity.y - entity.bodyOffset * 0.8);
}

function triggerHaunting() {
  const message = chooseRandomItem(HAUNTING_MESSAGES);
  if (message.includes("porte claque")) {
    playDoorSlam(0.55);
  } else {
    playHauntingSwell();
  }
  showMessage(message, "alert", 1.8);
  state.glitchTimer = 0.75;
  state.roland.stairTimer = Math.max(1.2, state.roland.stairTimer - 2.2);
}

function drawStaticFloor(targetCtx, floor) {
  const theme = FLOOR_THEMES[floor];
  targetCtx.fillStyle = theme.base;
  targetCtx.fillRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const tile = getTile(floor, col, row);
      const x = col * TILE;
      const y = row * TILE;
      drawTile(targetCtx, tile, x, y, floor, col, row, theme);
    }
  }

  drawFeatureShadows(targetCtx, floor);
  activeFloorFeatures[floor].forEach((feature) => drawFeature(targetCtx, floor, feature));
  drawFloorScars(targetCtx, floor);

  const gradient = targetCtx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(255,255,255,0.03)");
  gradient.addColorStop(0.4, "rgba(0,0,0,0.02)");
  gradient.addColorStop(1, "rgba(0,0,0,0.25)");
  targetCtx.fillStyle = gradient;
  targetCtx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawTile(targetCtx, tile, x, y, floor, col, row, theme) {
  if (tile === "#") {
    drawWallTile(targetCtx, x, y, floor, col, row, theme);
    return;
  }

  if (tile === "D") {
    drawLockedDoorTile(targetCtx, x, y, theme);
    return;
  }

  drawFloorTile(targetCtx, x, y, floor, col, row, theme);

  if (tile === "d") {
    drawHazardTile(targetCtx, x, y);
  }
  if (tile === "U" || tile === "N") {
    drawStairTile(targetCtx, x, y, tile, theme);
  }
  if (tile === "E") {
    drawExitTile(targetCtx, x, y);
  }
}

function drawWallTile(targetCtx, x, y, floor, col, row, theme) {
  targetCtx.fillStyle = theme.wallTop;
  targetCtx.fillRect(x, y, TILE, TILE);
  targetCtx.fillStyle = theme.wallFace;
  targetCtx.fillRect(x + 4, y + 8, TILE - 8, TILE - 10);
  targetCtx.fillStyle = theme.wallShadow;
  targetCtx.fillRect(x + 4, y + TILE - 10, TILE - 8, 8);

  const belowOpen = getTile(floor, col, row + 1) !== "#";
  const rightOpen = getTile(floor, col + 1, row) !== "#";
  if (belowOpen) {
    targetCtx.fillStyle = "rgba(0,0,0,0.22)";
    targetCtx.fillRect(x + 5, y + TILE - 12, TILE - 10, 10);
  }
  if (rightOpen) {
    targetCtx.fillStyle = "rgba(255,255,255,0.05)";
    targetCtx.fillRect(x + TILE - 7, y + 7, 3, TILE - 16);
  }

  const crackSeed = hashNoise(col, row, floor);
  targetCtx.strokeStyle = "rgba(190, 203, 212, 0.08)";
  targetCtx.lineWidth = 1.4;
  targetCtx.beginPath();
  targetCtx.moveTo(x + 9, y + 12 + crackSeed * 12);
  targetCtx.lineTo(x + TILE / 2, y + 8 + crackSeed * 4);
  targetCtx.lineTo(x + TILE - 10, y + TILE - 16);
  targetCtx.stroke();
}

function drawFloorTile(targetCtx, x, y, floor, col, row, theme) {
  const noise = hashNoise(col, row, floor);
  const checker = (col + row) % 2 === 0;
  targetCtx.fillStyle = checker ? theme.base : theme.alt;
  targetCtx.fillRect(x, y, TILE, TILE);

  targetCtx.fillStyle = theme.seam;
  targetCtx.fillRect(x + 1, y + 1, TILE - 2, 1);
  targetCtx.fillRect(x + 1, y + 1, 1, TILE - 2);

  targetCtx.fillStyle = "rgba(0,0,0,0.1)";
  targetCtx.fillRect(x + 6, y + 20, TILE - 12, 1);
  targetCtx.fillRect(x + 12, y + 32, TILE - 20, 1);

  if (floor === 0 && row >= 11 && col <= 8) {
    targetCtx.fillStyle = "rgba(92, 39, 34, 0.24)";
    targetCtx.fillRect(x + 5, y + 5, TILE - 10, TILE - 10);
  }

  if (floor === 1 && (col === 6 || col === 7 || col === 8)) {
    targetCtx.fillStyle = "rgba(190, 209, 199, 0.06)";
    targetCtx.fillRect(x + 8, y + 4, TILE - 16, TILE - 8);
  }

  if (floor === 2) {
    targetCtx.strokeStyle = "rgba(172, 188, 204, 0.08)";
    targetCtx.lineWidth = 1;
    targetCtx.beginPath();
    targetCtx.moveTo(x + 8, y + TILE - 12);
    targetCtx.lineTo(x + TILE - 10, y + 10);
    targetCtx.stroke();
  }

  if (noise > 0.76) {
    targetCtx.fillStyle = theme.grime;
    targetCtx.beginPath();
    targetCtx.arc(x + 11 + noise * 12, y + 11 + noise * 14, 4 + noise * 8, 0, Math.PI * 2);
    targetCtx.fill();
  }

  if (noise < 0.16) {
    targetCtx.strokeStyle = theme.rust;
    targetCtx.beginPath();
    targetCtx.moveTo(x + 8, y + TILE - 10);
    targetCtx.lineTo(x + TILE - 12, y + 12);
    targetCtx.stroke();
  }

  if (noise > 0.48 && noise < 0.52) {
    targetCtx.fillStyle = "rgba(230, 229, 223, 0.08)";
    targetCtx.fillRect(x + 14, y + 9, 6, 4);
    targetCtx.fillRect(x + 17, y + 13, 2, 5);
  }
}

function drawHazardTile(targetCtx, x, y) {
  targetCtx.fillStyle = "rgba(121, 33, 24, 0.32)";
  targetCtx.beginPath();
  targetCtx.arc(x + TILE * 0.32, y + TILE * 0.52, 12, 0, Math.PI * 2);
  targetCtx.arc(x + TILE * 0.66, y + TILE * 0.42, 10, 0, Math.PI * 2);
  targetCtx.arc(x + TILE * 0.48, y + TILE * 0.7, 8, 0, Math.PI * 2);
  targetCtx.fill();
  targetCtx.strokeStyle = "rgba(219, 123, 111, 0.2)";
  targetCtx.beginPath();
  targetCtx.moveTo(x + 9, y + TILE - 12);
  targetCtx.lineTo(x + TILE - 10, y + 12);
  targetCtx.stroke();
}

function drawLockedDoorTile(targetCtx, x, y, theme) {
  targetCtx.fillStyle = theme.wallTop;
  targetCtx.fillRect(x, y, TILE, TILE);
  targetCtx.fillStyle = "#3c1e1a";
  targetCtx.fillRect(x + 9, y + 6, TILE - 18, TILE - 10);
  targetCtx.strokeStyle = "rgba(255, 145, 124, 0.56)";
  targetCtx.lineWidth = 3;
  targetCtx.strokeRect(x + 9, y + 6, TILE - 18, TILE - 10);
  targetCtx.beginPath();
  targetCtx.moveTo(x + 12, y + 10);
  targetCtx.lineTo(x + TILE - 12, y + TILE - 10);
  targetCtx.moveTo(x + TILE - 12, y + 10);
  targetCtx.lineTo(x + 12, y + TILE - 10);
  targetCtx.stroke();
}

function drawStairTile(targetCtx, x, y, tile, theme) {
  targetCtx.fillStyle = "rgba(118, 140, 149, 0.16)";
  targetCtx.fillRect(x + 4, y + 4, TILE - 8, TILE - 8);
  targetCtx.strokeStyle = "rgba(153, 178, 188, 0.36)";
  targetCtx.lineWidth = 2;
  for (let i = 0; i < 5; i += 1) {
    targetCtx.beginPath();
    targetCtx.moveTo(x + 9, y + 10 + i * 7);
    targetCtx.lineTo(x + TILE - 9, y + 10 + i * 7);
    targetCtx.stroke();
  }
  targetCtx.fillStyle = theme.cold;
  targetCtx.beginPath();
  if (tile === "U") {
    targetCtx.moveTo(x + TILE / 2, y + 10);
    targetCtx.lineTo(x + TILE - 13, y + TILE - 14);
    targetCtx.lineTo(x + 13, y + TILE - 14);
  } else {
    targetCtx.moveTo(x + 13, y + 14);
    targetCtx.lineTo(x + TILE - 13, y + 14);
    targetCtx.lineTo(x + TILE / 2, y + TILE - 10);
  }
  targetCtx.closePath();
  targetCtx.fill();
}

function drawExitTile(targetCtx, x, y) {
  targetCtx.fillStyle = "rgba(84, 123, 132, 0.22)";
  targetCtx.fillRect(x + 8, y + 5, TILE - 16, TILE - 10);
  targetCtx.strokeStyle = "rgba(152, 211, 224, 0.45)";
  targetCtx.lineWidth = 2;
  targetCtx.strokeRect(x + 8, y + 5, TILE - 16, TILE - 10);
  targetCtx.fillStyle = "rgba(152, 211, 224, 0.16)";
  targetCtx.fillRect(x + 13, y + 11, TILE - 26, TILE - 22);
}

function drawFeatureShadows(targetCtx, floor) {
  activeFloorFeatures[floor].forEach((feature) => {
    const width = (feature.width || 1) * TILE - 8;
    const height = (feature.height || 1) * TILE - 8;
    const x = feature.col * TILE + 4;
    const y = feature.row * TILE + 10;
    targetCtx.fillStyle = "rgba(0,0,0,0.16)";
    targetCtx.beginPath();
    targetCtx.ellipse(x + width / 2, y + height - 2, width * 0.44, Math.max(9, height * 0.18), 0, 0, Math.PI * 2);
    targetCtx.fill();
  });
}

function drawFeature(targetCtx, floor, feature) {
  const x = feature.col * TILE + 4;
  const y = feature.row * TILE + 4;
  const width = (feature.width || 1) * TILE - 8;
  const height = (feature.height || 1) * TILE - 8;

  switch (feature.type) {
    case "reception":
      targetCtx.fillStyle = "#5d463b";
      targetCtx.fillRect(x + 2, y + 16, width - 4, 16);
      targetCtx.fillStyle = "#2f2e31";
      targetCtx.fillRect(x + 6, y + 10, width - 12, 8);
      targetCtx.fillStyle = "rgba(235, 233, 223, 0.12)";
      targetCtx.fillRect(x + 12, y + 11, 18, 5);
      targetCtx.fillRect(x + 34, y + 11, 14, 5);
      break;
    case "bench":
      targetCtx.fillStyle = "#55443a";
      targetCtx.fillRect(x + 6, y + 12, width - 12, 10);
      targetCtx.fillRect(x + 8, y + 22, width - 16, 7);
      targetCtx.fillStyle = "#26282c";
      targetCtx.fillRect(x + 8, y + 29, 4, 8);
      targetCtx.fillRect(x + width - 12, y + 29, 4, 8);
      break;
    case "window":
      targetCtx.fillStyle = "rgba(126, 158, 181, 0.24)";
      targetCtx.fillRect(x + 8, y + 6, width - 16, height - 12);
      targetCtx.strokeStyle = "rgba(187, 216, 230, 0.28)";
      targetCtx.strokeRect(x + 8, y + 6, width - 16, height - 12);
      targetCtx.beginPath();
      targetCtx.moveTo(x + 10, y + 8);
      targetCtx.lineTo(x + width - 10, y + height - 10);
      targetCtx.moveTo(x + width - 12, y + 8);
      targetCtx.lineTo(x + 12, y + height - 10);
      targetCtx.stroke();
      break;
    case "notice":
      targetCtx.fillStyle = "#56483e";
      targetCtx.fillRect(x + 12, y + 8, width - 24, height - 16);
      targetCtx.fillStyle = "rgba(236, 228, 208, 0.16)";
      targetCtx.fillRect(x + 15, y + 11, width - 30, 8);
      break;
    case "locker":
      targetCtx.fillStyle = "#4b5560";
      targetCtx.fillRect(x + 10, y + 6, width - 20, height - 12);
      targetCtx.fillStyle = "rgba(255,255,255,0.08)";
      targetCtx.fillRect(x + width / 2, y + 9, 2, height - 18);
      break;
    case "gurney":
    case "wardBed":
      targetCtx.fillStyle = feature.type === "wardBed" ? "#8fa59b" : "#7d8b90";
      targetCtx.fillRect(x + 8, y + 10, width - 16, height - 16);
      targetCtx.fillStyle = "#dae2db";
      targetCtx.fillRect(x + 12, y + 14, width - 24, height - 24);
      targetCtx.strokeStyle = "#39434b";
      targetCtx.strokeRect(x + 8, y + 10, width - 16, height - 16);
      targetCtx.fillRect(x + 12, y + height - 8, 4, 4);
      targetCtx.fillRect(x + width - 16, y + height - 8, 4, 4);
      break;
    case "crate":
      targetCtx.fillStyle = "#5f4634";
      targetCtx.fillRect(x + 10, y + 10, width - 20, height - 20);
      targetCtx.strokeStyle = "rgba(255,255,255,0.09)";
      targetCtx.strokeRect(x + 10, y + 10, width - 20, height - 20);
      break;
    case "cabinet":
      targetCtx.fillStyle = "#5f666d";
      targetCtx.fillRect(x + 8, y + 6, width - 16, height - 12);
      targetCtx.fillStyle = "rgba(255,255,255,0.08)";
      targetCtx.fillRect(x + 12, y + 14, width - 24, 2);
      targetCtx.fillRect(x + 12, y + 26, width - 24, 2);
      break;
    case "medicalCart":
      targetCtx.fillStyle = "#98a8a9";
      targetCtx.fillRect(x + 12, y + 11, width - 24, 12);
      targetCtx.strokeStyle = "#314143";
      targetCtx.strokeRect(x + 12, y + 11, width - 24, 12);
      targetCtx.fillStyle = "#d8ebc7";
      targetCtx.fillRect(x + 18, y + 14, 8, 5);
      break;
    case "rubble":
      targetCtx.fillStyle = "#4d433e";
      for (let i = 0; i < 4; i += 1) {
        targetCtx.beginPath();
        targetCtx.arc(x + 11 + i * 6, y + 22 + (i % 2) * 4, 4 + (i % 3), 0, Math.PI * 2);
        targetCtx.fill();
      }
      break;
    case "cable":
      targetCtx.strokeStyle = "rgba(45, 49, 52, 0.82)";
      targetCtx.lineWidth = 4;
      targetCtx.beginPath();
      targetCtx.moveTo(x + 6, y + height / 2);
      targetCtx.bezierCurveTo(x + width * 0.3, y + 6, x + width * 0.6, y + height - 8, x + width - 6, y + height / 2);
      targetCtx.stroke();
      break;
    case "nurseDesk":
      targetCtx.fillStyle = "#4d5b5a";
      targetCtx.fillRect(x + 6, y + 10, width - 12, 18);
      targetCtx.fillStyle = "#87c1b1";
      targetCtx.fillRect(x + 12, y + 13, 14, 8);
      targetCtx.fillStyle = "#2b3638";
      targetCtx.fillRect(x + 28, y + 13, 18, 10);
      break;
    case "monitor":
      targetCtx.fillStyle = "#293335";
      targetCtx.fillRect(x + 11, y + 10, width - 22, 12);
      targetCtx.fillStyle = "#66c99a";
      targetCtx.fillRect(x + 14, y + 13, width - 28, 6);
      break;
    case "wheelchair":
      targetCtx.strokeStyle = "#9ba4ad";
      targetCtx.lineWidth = 3;
      targetCtx.beginPath();
      targetCtx.arc(x + width / 2, y + height / 2 + 2, 10, 0, Math.PI * 2);
      targetCtx.stroke();
      targetCtx.fillStyle = "#6f7d86";
      targetCtx.fillRect(x + width / 2 - 5, y + 14, 12, 8);
      break;
    case "shelf":
      targetCtx.fillStyle = "#5e5349";
      targetCtx.fillRect(x + 6, y + 8, width - 12, height - 16);
      targetCtx.fillStyle = "rgba(255,255,255,0.06)";
      targetCtx.fillRect(x + 10, y + 16, width - 20, 2);
      targetCtx.fillRect(x + 10, y + 26, width - 20, 2);
      break;
    case "tank":
      targetCtx.fillStyle = "#61717c";
      targetCtx.beginPath();
      targetCtx.roundRect(x + 4, y + 8, width - 8, height - 18, 14);
      targetCtx.fill();
      targetCtx.fillStyle = "rgba(255,255,255,0.08)";
      targetCtx.fillRect(x + 12, y + 14, width - 24, 4);
      break;
    case "floodlight":
      targetCtx.strokeStyle = "#8ea8ba";
      targetCtx.lineWidth = 3;
      targetCtx.beginPath();
      targetCtx.moveTo(x + width / 2, y + 8);
      targetCtx.lineTo(x + width / 2, y + height - 10);
      targetCtx.stroke();
      targetCtx.fillStyle = "#d6e0e8";
      targetCtx.fillRect(x + width / 2 - 9, y + 8, 18, 10);
      break;
    case "antenna":
      targetCtx.strokeStyle = "#95a4b2";
      targetCtx.lineWidth = 2;
      targetCtx.beginPath();
      targetCtx.moveTo(x + width / 2, y + height - 6);
      targetCtx.lineTo(x + width / 2, y + 10);
      targetCtx.moveTo(x + width / 2 - 10, y + 18);
      targetCtx.lineTo(x + width / 2 + 10, y + 18);
      targetCtx.stroke();
      break;
    case "roofVent":
      targetCtx.fillStyle = "#667682";
      targetCtx.fillRect(x + 10, y + 10, width - 20, height - 20);
      targetCtx.strokeStyle = "rgba(255,255,255,0.08)";
      for (let i = 0; i < 3; i += 1) {
        targetCtx.beginPath();
        targetCtx.moveTo(x + 12, y + 14 + i * 6);
        targetCtx.lineTo(x + width - 12, y + 14 + i * 6);
        targetCtx.stroke();
      }
      break;
    case "hvac":
      targetCtx.fillStyle = "#5d6973";
      targetCtx.fillRect(x + 4, y + 10, width - 8, height - 20);
      targetCtx.fillStyle = "#80909c";
      targetCtx.fillRect(x + 10, y + 14, width - 20, 10);
      targetCtx.fillRect(x + 10, y + 28, width - 20, 6);
      break;
    case "satDish":
      targetCtx.strokeStyle = "#a9bac9";
      targetCtx.lineWidth = 3;
      targetCtx.beginPath();
      targetCtx.arc(x + width / 2, y + height / 2 + 2, 12, Math.PI * 1.1, Math.PI * 1.9);
      targetCtx.stroke();
      targetCtx.beginPath();
      targetCtx.moveTo(x + width / 2, y + height / 2 + 2);
      targetCtx.lineTo(x + width / 2 + 10, y + 10);
      targetCtx.stroke();
      break;
    default:
      break;
  }
}

function drawFloorScars(targetCtx, floor) {
  for (let index = 0; index < 14; index += 1) {
    const noise = hashNoise(index, floor, 99);
    targetCtx.fillStyle = floor === 2 ? "rgba(185, 201, 214, 0.02)" : "rgba(255,255,255,0.015)";
    targetCtx.beginPath();
    targetCtx.arc(
      40 + noise * (canvas.width - 80),
      40 + hashNoise(index, floor, 34) * (canvas.height - 80),
      16 + hashNoise(index, floor, 61) * 34,
      0,
      Math.PI * 2,
    );
    targetCtx.fill();
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(floorCaches[state.player.floor], 0, 0);

  drawTrails();
  drawPickups();
  drawExitPulse();
  drawAmbientHaze();
  drawEnvironmentalLights();
  drawExplorationFog();
  const rolandVisibility = isEntityVisible(state.roland);
  if (rolandVisibility > 0.08) {
    drawRolandAvatar(state.roland, rolandVisibility);
  }
  drawPlayerAura();
  drawPlayerAvatar(state.player);
  drawTouchNavigationMarkers();
  drawInteractionHints();
  drawFloorLabel();
}

function drawTrails() {
  state.trails.forEach((trail) => {
    if (trail.floor !== state.player.floor) {
      return;
    }
    const fade = trail.life / trail.maxLife;
    ctx.save();
    ctx.translate(trail.x, trail.y);
    ctx.rotate(trail.rotation);
    ctx.globalAlpha = fade * (trail.kind === "player" ? 0.34 : 0.22);
    ctx.fillStyle = trail.kind === "player" ? "#d6c7af" : "#3b2b2b";
    ctx.beginPath();
    ctx.ellipse(0, 0, trail.kind === "player" ? 6 : 8, trail.kind === "player" ? 4 : 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawPickups() {
  state.pickups.forEach((pickup) => {
    if (pickup.found || pickup.floor !== state.player.floor) {
      return;
    }

    const base = tileToWorld(pickup.col, pickup.row);
    const bob = Math.sin(pickup.bob) * 4;
    const rotation = Math.sin(pickup.bob * 0.7) * 0.18;
    const height = 34;
    const width = (assets.syringe.naturalWidth / assets.syringe.naturalHeight) * height;

    ctx.save();
    ctx.translate(base.x, base.y - 24 + bob);
    ctx.rotate(rotation);
    ctx.shadowColor = "rgba(212, 255, 201, 0.35)";
    ctx.shadowBlur = 18;
    ctx.drawImage(assets.syringe, -width / 2, -height / 2, width, height);
    ctx.restore();
  });
}

function drawExitPulse() {
  if (state.player.floor !== 2) {
    return;
  }

  const foundPickups = state.pickups.filter((pickup) => pickup.found).length;
  const exit = tileToWorld(markerCache.exit.col, markerCache.exit.row);
  const unlocked = foundPickups === state.pickups.length;
  const pulse = (Math.sin(performance.now() / 260) + 1) / 2;

  ctx.save();
  ctx.globalAlpha = unlocked ? 0.18 + pulse * 0.14 : 0.08 + pulse * 0.05;
  ctx.fillStyle = unlocked ? "#86f0d3" : "#b84b43";
  ctx.beginPath();
  ctx.arc(exit.x, exit.y - 24, 46 + pulse * 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawPlayerAura() {
  const pulse = (Math.sin(performance.now() / 180) + 1) / 2;
  const x = state.player.x;
  const y = state.player.y - 22;
  const glow = ctx.createRadialGradient(x, y, 10, x, y, 58);
  glow.addColorStop(0, "rgba(244, 232, 194, 0.52)");
  glow.addColorStop(1, "rgba(244, 232, 194, 0)");

  ctx.save();
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, 48 + pulse * 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = `rgba(255, 247, 220, ${0.24 + pulse * 0.12})`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y + 8, 18 + pulse * 1.5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawPlayerAvatar(entity) {
  drawCharacterSprite(entity, assets.player, {
    height: 34,
    maxWidth: 30,
    shadowColor: "rgba(255, 242, 198, 0.18)",
    shadowBlur: 14,
  });
}

function drawRolandAvatar(entity, visibility) {
  const pulse = entity.state === "hunt" ? (Math.sin(performance.now() / 120) + 1) / 2 : 0.18;
  drawCharacterSprite(entity, assets.roland, {
    height: 46,
    maxWidth: 38,
    alpha: 0.42 + visibility * 0.58,
    shadowColor: `rgba(165, 34, 28, ${0.22 + pulse * 0.18})`,
    shadowBlur: 24,
  });
}

function drawCharacterSprite(entity, spriteSet, options) {
  const image = spriteSet[entity.direction] || spriteSet.down;
  if (!image || !image.naturalWidth || !image.naturalHeight) {
    return;
  }

  let drawHeight = options.height;
  let drawWidth = (image.naturalWidth / image.naturalHeight) * drawHeight;
  if (drawWidth > options.maxWidth) {
    const scale = options.maxWidth / drawWidth;
    drawWidth *= scale;
    drawHeight *= scale;
  }

  const bottomY = entity.y - 2;
  const topY = bottomY - drawHeight;
  const alpha = options.alpha ?? 1;

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "rgba(0,0,0,0.32)";
  ctx.beginPath();
  ctx.ellipse(entity.x, entity.y - 2, drawWidth * 0.34, 6, 0, 0, Math.PI * 2);
  ctx.fill();

  if (options.shadowColor) {
    ctx.shadowColor = options.shadowColor;
    ctx.shadowBlur = options.shadowBlur || 0;
  }
  ctx.drawImage(image, entity.x - drawWidth / 2, topY, drawWidth, drawHeight);
  ctx.restore();
}

function drawAmbientHaze() {
  const time = performance.now() / 1000;
  ctx.save();
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 4; i += 1) {
    const baseX = ((i * 170 + time * (18 + i * 3)) % (canvas.width + 200)) - 100;
    const baseY = 120 + i * 120 + Math.sin(time * 0.8 + i) * 18;
    const gradient = ctx.createRadialGradient(baseX, baseY, 12, baseX, baseY, 110);
    gradient.addColorStop(0, "rgba(210, 218, 223, 0.24)");
    gradient.addColorStop(1, "rgba(210, 218, 223, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(baseX, baseY, 110, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawInteractionHints() {
  const context = getInteractionContext();
  const text = context.hint;

  if (!text) {
    return;
  }

  ctx.save();
  ctx.fillStyle = "rgba(8, 8, 8, 0.82)";
  ctx.fillRect(160, canvas.height - 56, canvas.width - 320, 36);
  ctx.fillStyle = "#ede5d8";
  ctx.font = '16px "Gill Sans"';
  ctx.textAlign = "center";
  ctx.fillText(text, canvas.width / 2, canvas.height - 31);
  ctx.restore();
}

function getTouchNavigationMarkers() {
  const markers = [];
  if (state.player.floor === 0) {
    markers.push({ ...markerCache.stairs["0-up"], type: "up" });
  } else if (state.player.floor === 1) {
    markers.push({ ...markerCache.stairs["1-down"], type: "down" });
    markers.push({ ...markerCache.stairs["1-up"], type: "up" });
  } else if (state.player.floor === 2) {
    markers.push({ ...markerCache.stairs["2-down"], type: "down" });
  }
  return markers;
}

function drawTouchNavigationMarkers() {
  if (!isTouchUiActive()) {
    return;
  }

  const playerTile = worldToTile(state.player.x, state.player.y - 18);
  const explored = state.explored[state.player.floor];

  getTouchNavigationMarkers().forEach((marker, index) => {
    const base = tileToWorld(marker.col, marker.row);
    const seen = explored[marker.row]?.[marker.col] > 0;
    const visibility = computeVisionLevel(base.x, base.y - 12);
    if (!seen && visibility < 0.14) {
      return;
    }

    const pulse = (Math.sin(performance.now() / 260 + index * 0.6) + 1) / 2;
    const active = playerTile.col === marker.col && playerTile.row === marker.row;

    ctx.save();
    ctx.translate(base.x, base.y - 22 + Math.sin(performance.now() / 340 + index) * 1.4);
    ctx.globalAlpha = active ? 0.96 : seen ? 0.54 + pulse * 0.08 : 0.82;
    ctx.fillStyle = marker.type === "up" ? "rgba(118, 196, 210, 0.18)" : "rgba(186, 198, 214, 0.14)";
    ctx.strokeStyle = active ? "#f7efd3" : marker.type === "up" ? "#9bd6df" : "#c7cfda";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 15 + pulse * 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    if (marker.type === "up") {
      ctx.moveTo(-6, 4);
      ctx.lineTo(0, -4);
      ctx.lineTo(6, 4);
      ctx.moveTo(-6, 10);
      ctx.lineTo(0, 2);
      ctx.lineTo(6, 10);
    } else {
      ctx.moveTo(-6, -4);
      ctx.lineTo(0, 4);
      ctx.lineTo(6, -4);
      ctx.moveTo(-6, 2);
      ctx.lineTo(0, 10);
      ctx.lineTo(6, 2);
    }
    ctx.stroke();

    if (active) {
      ctx.fillStyle = "rgba(247, 239, 211, 0.9)";
      ctx.font = '10px "Gill Sans"';
      ctx.textAlign = "center";
      ctx.fillText("TAP", 0, -20);
    }
    ctx.restore();
  });
}

function drawExplorationFog() {
  const explored = state.explored[state.player.floor];
  fogCtx.clearRect(0, 0, fogCanvas.width, fogCanvas.height);

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const center = tileToWorld(col, row);
      const visibility = computeVisionLevel(center.x, center.y - 10);
      const wasSeen = explored[row][col] > 0;
      const tileNoise = hashNoise(col, row, state.player.floor);
      let alpha = wasSeen ? 0.74 - visibility * 0.38 : 0.96 - visibility * 0.22;
      alpha += tileNoise * 0.03;
      alpha = clamp(alpha, 0.08, 0.985);
      fogCtx.fillStyle = `rgba(3, 4, 6, ${alpha})`;
      fogCtx.fillRect(col * TILE, row * TILE, TILE, TILE);
    }
  }

  const facing = getDirectionVector(state.player.direction);
  const centerX = state.player.x;
  const centerY = state.player.y - 26;
  const focusX = centerX + facing.x * 84;
  const focusY = centerY + facing.y * 84;

  fogCtx.save();
  fogCtx.globalCompositeOperation = "destination-out";

  const core = fogCtx.createRadialGradient(centerX, centerY, 24, centerX, centerY, 152);
  core.addColorStop(0, "rgba(255,255,255,0.98)");
  core.addColorStop(0.58, "rgba(255,255,255,0.55)");
  core.addColorStop(1, "rgba(255,255,255,0)");
  fogCtx.fillStyle = core;
  fogCtx.beginPath();
  fogCtx.arc(centerX, centerY, 152, 0, Math.PI * 2);
  fogCtx.fill();

  const beam = fogCtx.createRadialGradient(focusX, focusY, 12, focusX, focusY, 138);
  beam.addColorStop(0, "rgba(255,255,255,0.92)");
  beam.addColorStop(0.68, "rgba(255,255,255,0.4)");
  beam.addColorStop(1, "rgba(255,255,255,0)");
  fogCtx.fillStyle = beam;
  fogCtx.beginPath();
  fogCtx.arc(focusX, focusY, 138, 0, Math.PI * 2);
  fogCtx.fill();
  fogCtx.restore();

  if (state.glitchTimer > 0) {
    fogCtx.fillStyle = `rgba(120, 18, 18, ${state.glitchTimer * 0.18})`;
    fogCtx.fillRect(0, 0, fogCanvas.width, fogCanvas.height);
  }

  ctx.drawImage(fogCanvas, 0, 0);
}

function drawEnvironmentalLights() {
  activeFloorLights[state.player.floor].forEach((light, index) => {
    const base = tileToWorld(light.col, light.row);
    const pulse = 0.84 + Math.sin(performance.now() / (320 + index * 70) + index * 0.8) * light.pulse;
    const gradient = ctx.createRadialGradient(base.x, base.y - 24, 8, base.x, base.y - 24, light.radius);

    gradient.addColorStop(0, light.color.replace(/0\.\d+\)$/, `${0.34 * pulse})`));
    gradient.addColorStop(1, light.color.replace(/0\.\d+\)$/, "0)"));

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(base.x, base.y - 24, light.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawFloorLabel() {
  ctx.save();
  ctx.fillStyle = "rgba(6, 7, 8, 0.68)";
  ctx.fillRect(18, 18, 248, 58);
  ctx.fillStyle = "#d9d0c1";
  ctx.font = '14px "Gill Sans"';
  ctx.fillText("ETAGE ACTIF", 30, 38);
  ctx.font = '24px "Baskerville"';
  ctx.fillText(FLOOR_NAMES[state.player.floor], 30, 63);
  ctx.restore();
}

function getDirectionVector(direction) {
  switch (direction) {
    case "up":
      return { x: 0, y: -1 };
    case "left":
      return { x: -1, y: 0 };
    case "right":
      return { x: 1, y: 0 };
    default:
      return { x: 0, y: 1 };
  }
}

function handleKeyChange(event, pressed) {
  if (Object.prototype.hasOwnProperty.call(controls, event.code)) {
    controls[event.code] = pressed;
    event.preventDefault();
  }

  if (!pressed) {
    return;
  }

  primeAudio();

  if (event.code === "KeyE" || event.code === "Enter" || event.code === "Space") {
    attemptInteract();
    event.preventDefault();
  }

  if (event.code === "KeyR") {
    startGame();
    event.preventDefault();
  }
}

document.addEventListener("keydown", (event) => handleKeyChange(event, true));
document.addEventListener("keyup", (event) => handleKeyChange(event, false));

restartButtonEl.addEventListener("click", startGame);
overlayButtonEl.addEventListener("click", startGame);
interactButtonEl.addEventListener("click", attemptInteract);
canvas.addEventListener("click", () => {
  primeAudio();
  canvas.focus();
});

document.querySelectorAll("[data-key]").forEach((button) => {
  const key = button.dataset.key;

  const press = (event) => {
    primeAudio();
    controls[key] = true;
    button.classList.add("pressed");
    event.preventDefault();
  };

  const release = (event) => {
    controls[key] = false;
    button.classList.remove("pressed");
    event.preventDefault();
  };

  button.addEventListener("pointerdown", press);
  button.addEventListener("pointerup", release);
  button.addEventListener("pointerleave", release);
  button.addEventListener("pointercancel", release);
});

loadImages()
  .then(() => {
    state.assetsReady = true;
    buildFloorCaches();
    resetGame();
    state.running = true;
    state.lastFrame = performance.now();
    hideOverlay();
    canvas.focus();
    requestAnimationFrame(loop);
  })
  .catch((error) => {
    showOverlay(
      "Chargement impossible",
      "Le decor s'est bien prepare, mais un element du jeu n'a pas pu etre charge. Verifie les fichiers du dossier Mix.",
      "Reessayer",
    );
    showMessage(error.message, "alert", 8);
  });
