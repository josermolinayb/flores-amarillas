/**
 * ====================================================================
 * FLORES AMARILLAS DE PRIMAVERA
 * Obsequio Digital para Sabrina, Solana y Felicitas
 * Lógica de navegación, motor de pétalos Canvas y música ambiental Web Audio
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // -------------------------------------------------------------
  // 1. GENERACIÓN DE FLORES VECTORIALES (SVG DE ROSAS AMARILLAS)
  // -------------------------------------------------------------
  
  /**
   * Genera el SVG detallado de una rosa amarilla con pétalos en capas,
   * tallo y hojas con gradientes cálidos.
   */
  function createYellowRoseSVG(uniqueId = 'rose-1', size = 190) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Gradientes de pétalos amarillos luminosos -->
          <radialGradient id="petal-outer-${uniqueId}" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#fff9d6" />
            <stop offset="45%" stop-color="#ffea75" />
            <stop offset="85%" stop-color="#ffcc00" />
            <stop offset="100%" stop-color="#e6a100" />
          </radialGradient>

          <radialGradient id="petal-mid-${uniqueId}" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fff4b8" />
            <stop offset="50%" stop-color="#ffdb4d" />
            <stop offset="90%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </radialGradient>

          <radialGradient id="petal-core-${uniqueId}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffe680" />
            <stop offset="40%" stop-color="#f59e0b" />
            <stop offset="85%" stop-color="#d97706" />
            <stop offset="100%" stop-color="#b45309" />
          </radialGradient>

          <!-- Gradiente del tallo y sépalos -->
          <linearGradient id="stem-grad-${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#65a30d" />
            <stop offset="50%" stop-color="#4d7c0f" />
            <stop offset="100%" stop-color="#365314" />
          </linearGradient>

          <linearGradient id="leaf-grad-${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#84cc16" />
            <stop offset="70%" stop-color="#4d7c0f" />
            <stop offset="100%" stop-color="#365314" />
          </linearGradient>

          <!-- Filtro de resplandor dorado sutil -->
          <filter id="glow-${uniqueId}" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Tallo elegante -->
        <path d="M100 135 Q96 175 104 215" stroke="url(#stem-grad-${uniqueId})" stroke-width="5" stroke-linecap="round" fill="none" />

        <!-- Hoja izquierda -->
        <g transform="translate(70, 160) rotate(-25)">
          <path d="M0 0 C-18 -15 -25 -2 0 15 C25 -2 18 -15 0 0 Z" fill="url(#leaf-grad-${uniqueId})" />
          <path d="M0 0 L0 14" stroke="#a3e635" stroke-width="0.8" opacity="0.6" />
        </g>

        <!-- Hoja derecha -->
        <g transform="translate(122, 175) rotate(35)">
          <path d="M0 0 C-18 -15 -25 -2 0 15 C25 -2 18 -15 0 0 Z" fill="url(#leaf-grad-${uniqueId})" />
          <path d="M0 0 L0 14" stroke="#a3e635" stroke-width="0.8" opacity="0.6" />
        </g>

        <!-- Sépalos base de la rosa -->
        <path d="M85 135 C90 148 97 150 100 150 C103 150 110 148 115 135 C108 140 92 140 85 135 Z" fill="url(#stem-grad-${uniqueId})" />
        <path d="M78 130 C75 142 84 146 88 144 C84 138 82 134 78 130 Z" fill="#4d7c0f" />
        <path d="M122 130 C125 142 116 146 112 144 C116 138 118 134 122 130 Z" fill="#4d7c0f" />

        <!-- Capa exterior de pétalos -->
        <g filter="url(#glow-${uniqueId})">
          <!-- Pétalo posterior superior -->
          <path d="M100 35 C75 35 60 55 68 80 C75 102 100 115 100 115 C100 115 125 102 132 80 C140 55 125 35 100 35 Z" fill="url(#petal-outer-${uniqueId})" />
          
          <!-- Pétalo exterior izquierdo -->
          <path d="M60 65 C40 80 45 112 68 126 C85 135 98 132 98 132 C98 132 80 110 74 95 C68 80 65 70 60 65 Z" fill="url(#petal-outer-${uniqueId})" opacity="0.95" />

          <!-- Pétalo exterior derecho -->
          <path d="M140 65 C160 80 155 112 132 126 C115 135 102 132 102 132 C102 132 120 110 126 95 C132 80 135 70 140 65 Z" fill="url(#petal-outer-${uniqueId})" opacity="0.95" />

          <!-- Pétalo envolvente inferior -->
          <path d="M66 110 C75 135 125 135 134 110 C140 125 120 142 100 142 C80 142 60 125 66 110 Z" fill="url(#petal-outer-${uniqueId})" />

          <!-- Capa media de pétalos -->
          <path d="M72 75 C60 90 68 118 90 125 C100 128 112 124 118 115 C110 120 95 120 85 112 C74 102 74 88 72 75 Z" fill="url(#petal-mid-${uniqueId})" />
          <path d="M128 75 C140 90 132 118 110 125 C100 128 88 124 82 115 C90 120 105 120 115 112 C126 102 126 88 128 75 Z" fill="url(#petal-mid-${uniqueId})" />

          <path d="M80 62 C70 78 80 105 100 112 C120 105 130 78 120 62 C110 52 90 52 80 62 Z" fill="url(#petal-mid-${uniqueId})" />

          <!-- Corazón y capullo interior de la rosa -->
          <path d="M86 70 C80 82 88 100 100 104 C112 100 120 82 114 70 C110 62 90 62 86 70 Z" fill="url(#petal-core-${uniqueId})" />

          <!-- Espiral del centro de la rosa -->
          <path d="M93 72 C90 78 95 86 101 86 C106 86 109 82 107 77 C105 73 99 73 97 76 C96 78 98 81 100 81" 
                stroke="#b45309" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.8" />
          
          <path d="M91 79 C93 88 107 89 109 80" stroke="#78350f" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.7" />

          <!-- Puntos de rocío brillantes -->
          <circle cx="82" cy="85" r="2" fill="#ffffff" opacity="0.85" />
          <circle cx="120" cy="98" r="1.8" fill="#ffffff" opacity="0.8" />
          <circle cx="95" cy="55" r="1.5" fill="#ffffff" opacity="0.75" />
        </g>
      </svg>
    `;
  }

  /**
   * Genera el SVG del ramillete final donde 3 rosas amarillas están unidas
   * con una cinta y destellos dorados.
   */
  function createBouquetSVG(size = 200) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 240 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bq-petal" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#fff9d6" />
            <stop offset="50%" stop-color="#ffd54f" />
            <stop offset="90%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </radialGradient>
          <linearGradient id="bq-stem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#65a30d" />
            <stop offset="100%" stop-color="#365314" />
          </linearGradient>
          <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffe082" />
            <stop offset="50%" stop-color="#ffb300" />
            <stop offset="100%" stop-color="#ff8f00" />
          </linearGradient>
          <filter id="bq-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Tallos cruzados del ramo -->
        <path d="M75 130 Q110 170 135 220" stroke="url(#bq-stem)" stroke-width="4.5" stroke-linecap="round" />
        <path d="M120 120 Q120 170 120 225" stroke="url(#bq-stem)" stroke-width="4.5" stroke-linecap="round" />
        <path d="M165 130 Q130 170 105 220" stroke="url(#bq-stem)" stroke-width="4.5" stroke-linecap="round" />

        <!-- Hojas del ramo -->
        <ellipse cx="65" cy="140" rx="16" ry="7" transform="rotate(-30 65 140)" fill="#4d7c0f" />
        <ellipse cx="175" cy="140" rx="16" ry="7" transform="rotate(30 175 140)" fill="#4d7c0f" />
        <ellipse cx="120" cy="135" rx="18" ry="8" fill="#365314" />

        <!-- Cinta de moño dorada atando los tallos -->
        <g id="ribbon" transform="translate(120, 180)">
          <!-- Lazos del moño -->
          <path d="M0 0 C-18 -15 -25 -2 0 10 C25 -2 18 -15 0 0 Z" fill="url(#ribbon-grad)" />
          <path d="M0 0 C-15 18 -2 25 10 0 C-2 -25 -15 -18 0 0 Z" fill="url(#ribbon-grad)" opacity="0.8" />
          <!-- Caída de la cinta -->
          <path d="M-4 6 Q-12 25 -18 35" stroke="url(#ribbon-grad)" stroke-width="3" fill="none" stroke-linecap="round" />
          <path d="M4 6 Q12 25 18 35" stroke="url(#ribbon-grad)" stroke-width="3" fill="none" stroke-linecap="round" />
          <!-- Nudo central -->
          <circle cx="0" cy="2" r="5" fill="#ffd54f" stroke="#e65100" stroke-width="1" />
        </g>

        <!-- Rosa Izquierda (Inclinada) -->
        <g transform="translate(25, 20) scale(0.65) rotate(-18 100 100)" filter="url(#bq-glow)">
          ${createYellowRoseSVG('bq1', 200).replace(/<\/?svg[^>]*>/g, '')}
        </g>

        <!-- Rosa Derecha (Inclinada) -->
        <g transform="translate(95, 20) scale(0.65) rotate(18 100 100)" filter="url(#bq-glow)">
          ${createYellowRoseSVG('bq2', 200).replace(/<\/?svg[^>]*>/g, '')}
        </g>

        <!-- Rosa Central Principal (Elevada y dominante) -->
        <g transform="translate(48, -5) scale(0.72)" filter="url(#bq-glow)">
          ${createYellowRoseSVG('bq3', 200).replace(/<\/?svg[^>]*>/g, '')}
        </g>

        <!-- Destellos de luz primaveral alrededor del ramo -->
        <g fill="#ffd54f" opacity="0.85">
          <circle cx="45" cy="40" r="3" />
          <circle cx="195" cy="50" r="2.5" />
          <circle cx="120" cy="15" r="3.5" />
          <circle cx="30" cy="110" r="2" />
          <circle cx="210" cy="100" r="2" />
        </g>
      </svg>
    `;
  }

  // Insertar SVGs en los contenedores correspondientes
  const stageSabrina = document.getElementById('flower-sabrina');
  const stageSolana = document.getElementById('flower-solana');
  const stageFelicitas = document.getElementById('flower-felicitas');
  const stageBouquet = document.getElementById('bouquet-container');

  if (stageSabrina) stageSabrina.innerHTML = createYellowRoseSVG('sabrina', 210);
  if (stageSolana) stageSolana.innerHTML = createYellowRoseSVG('solana', 210);
  if (stageFelicitas) stageFelicitas.innerHTML = createYellowRoseSVG('felicitas', 210);
  if (stageBouquet) stageBouquet.innerHTML = createBouquetSVG(230);


  // -------------------------------------------------------------
  // 2. NAVEGACIÓN Y SECUENCIA ENTRE PANTALLAS
  // -------------------------------------------------------------
  const screens = document.querySelectorAll('.card-screen');

  function showScreen(screenId) {
    screens.forEach(screen => {
      screen.classList.remove('active');
    });

    const target = document.getElementById(screenId);
    if (target) {
      setTimeout(() => {
        target.classList.add('active');
        // Si tiene animación de flor, reiniciar animación
        const flowerEl = target.querySelector('.flower-bloom, .bouquet-wrapper');
        if (flowerEl) {
          const clone = flowerEl.cloneNode(true);
          flowerEl.parentNode.replaceChild(clone, flowerEl);
        }
      }, 250);
    }
  }

  // Botón "Abrí tu Obsequio"
  const btnOpenGift = document.getElementById('btn-open-gift');
  if (btnOpenGift) {
    btnOpenGift.addEventListener('click', () => {
      // Iniciar música suave en el primer gesto
      startGentleMusic();
      // Explosión festiva de pétalos dorados
      createPetalBurst();
      // Transición a Sabrina
      showScreen('step-sabrina');
    });
  }

  // Botones "Continuar / Siguiente"
  const nextButtons = document.querySelectorAll('.next-btn');
  nextButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const nextId = btn.getAttribute('data-next');
      if (nextId) {
        createPetalBurst();
        showScreen(nextId);
      }
    });
  });

  // Botón "Volver a ver"
  const btnReplay = document.getElementById('btn-replay');
  if (btnReplay) {
    btnReplay.addEventListener('click', () => {
      showScreen('step-intro');
    });
  }


  // -------------------------------------------------------------
  // 3. MÚSICA AMBIENTAL: "FLORES AMARILLAS" (FLORICIENTA)
  // Melodía icónica sintetizada en Web Audio API + soporte MP3 opcional
  // -------------------------------------------------------------
  let audioCtx = null;
  let isMusicPlaying = false;
  let currentTimer = null;
  let currentNoteIndex = 0;

  const musicToggleBtn = document.getElementById('music-toggle');
  const musicIcon = document.getElementById('music-icon');
  const musicLabel = document.getElementById('music-label');

  // Frecuencias exactas en Hz
  const FREQS = {
    'B2': 123.47,
    'C3': 130.81,
    'D3': 146.83,
    'E3': 164.81,
    'F#3': 185.00,
    'G3': 196.00,
    'A3': 220.00,
    'B3': 246.94,
    'C4': 261.63,
    'D4': 293.66,
    'E4': 329.63,
    'F#4': 369.99,
    'G4': 392.00,
    'A4': 440.00,
    'B4': 493.88,
    'C5': 523.25,
    'D5': 587.33,
    'E5': 659.25,
    'F#5': 739.99,
    'G5': 783.99
  };

  // Tempo: 126 BPM -> 1 pulso (beat) = ~0.47 segundos
  const BEAT_MS = 470;

  // Partitura de "Flores Amarillas" de Floricienta (Verso y Estribillo icónico)
  const FLORICIENTA_SCORE = [
    // Frase 1: "Él la estaba esperando con una flor amarilla"
    { note: 'D4', beats: 0.5, bass: 'G3' },
    { note: 'G4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'F#4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'A4', beats: 1.0 },

    { note: 'A4', beats: 0.5, bass: 'D3' },
    { note: 'A4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'F#4', beats: 0.5 },
    { note: 'G4', beats: 1.5 },
    { note: null, beats: 0.5 },

    // Frase 2: "Ella lo estaba soñando con la luz en su pupila"
    { note: 'D4', beats: 0.5, bass: 'E3' },
    { note: 'G4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'F#4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'A4', beats: 1.0 },

    { note: 'A4', beats: 0.5, bass: 'D3' },
    { note: 'A4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'F#4', beats: 0.5 },
    { note: 'G4', beats: 1.5 },
    { note: null, beats: 0.5 },

    // Frase 3: "Y el amarillo del sol iluminaba la esquina"
    { note: 'D4', beats: 0.5, bass: 'B2' },
    { note: 'B4', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'C5', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 1.0 },

    { note: 'A4', beats: 0.5, bass: 'D3' },
    { note: 'A4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'F#4', beats: 0.5 },
    { note: 'G4', beats: 1.5 },
    { note: null, beats: 0.5 },

    // Frase 4: "Lo sentía tan cercano, lo sentía desde niña"
    { note: 'G4', beats: 0.5, bass: 'C3' },
    { note: 'B4', beats: 0.75 },
    { note: 'D5', beats: 0.75 },
    { note: 'C5', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 1.0 },

    { note: 'G4', beats: 0.5, bass: 'G3' },
    { note: 'B4', beats: 0.5 },
    { note: 'C5', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 1.0 },
    { note: 'G4', beats: 1.5 },
    { note: null, beats: 1.0 },

    // --- CORO ICÓNICO: "Ella sabía que él sabía que algún día pasaría..." ---
    { note: 'E4', beats: 0.5, bass: 'E3' },
    { note: 'G4', beats: 0.5 },
    { note: 'B4', beats: 0.75 },
    { note: 'B4', beats: 1.25 },
    { note: null, beats: 0.25 },

    { note: 'E4', beats: 0.5, bass: 'E3' },
    { note: 'G4', beats: 0.5 },
    { note: 'B4', beats: 0.75 },
    { note: 'B4', beats: 1.25 },
    { note: null, beats: 0.25 },

    // "que algún día pasaría..."
    { note: 'B4', beats: 0.5, bass: 'A3' },
    { note: 'C5', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'A4', beats: 1.5 },
    { note: null, beats: 0.25 },

    // "que vendría a buscarla..."
    { note: 'D4', beats: 0.5, bass: 'D3' },
    { note: 'F#4', beats: 0.5 },
    { note: 'A4', beats: 0.75 },
    { note: 'A4', beats: 1.25 },
    { note: null, beats: 0.25 },

    { note: 'D4', beats: 0.5, bass: 'D3' },
    { note: 'F#4', beats: 0.5 },
    { note: 'A4', beats: 0.75 },
    { note: 'A4', beats: 1.25 },
    { note: null, beats: 0.25 },

    // "con sus flores amarillas..."
    { note: 'A4', beats: 0.5, bass: 'G3' },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'F#4', beats: 0.5 },
    { note: 'G4', beats: 2.0 },
    { note: null, beats: 0.5 },

    // "No te apures, no detengas el instante del encuentro..."
    { note: 'E4', beats: 0.5, bass: 'E3' },
    { note: 'G4', beats: 0.5 },
    { note: 'B4', beats: 0.75 },
    { note: 'B4', beats: 1.25 },
    { note: null, beats: 0.25 },

    { note: 'E4', beats: 0.5, bass: 'E3' },
    { note: 'G4', beats: 0.5 },
    { note: 'B4', beats: 0.75 },
    { note: 'B4', beats: 1.25 },
    { note: null, beats: 0.25 },

    { note: 'B4', beats: 0.5, bass: 'A3' },
    { note: 'C5', beats: 0.5 },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'A4', beats: 1.5 },
    { note: null, beats: 0.25 },

    // "está dicho que es un hecho, no la pierdas, no hay derecho..."
    { note: 'D4', beats: 0.5, bass: 'D3' },
    { note: 'F#4', beats: 0.5 },
    { note: 'A4', beats: 0.75 },
    { note: 'A4', beats: 1.25 },
    { note: null, beats: 0.25 },

    { note: 'D4', beats: 0.5, bass: 'D3' },
    { note: 'F#4', beats: 0.5 },
    { note: 'A4', beats: 0.75 },
    { note: 'A4', beats: 1.25 },
    { note: null, beats: 0.25 },

    { note: 'A4', beats: 0.5, bass: 'G3' },
    { note: 'B4', beats: 0.5 },
    { note: 'A4', beats: 0.5 },
    { note: 'G4', beats: 0.5 },
    { note: 'F#4', beats: 0.5 },
    { note: 'G4', beats: 2.2 },
    { note: null, beats: 2.0 } // Pausa antes de repetir el ciclo
  ];

  function initAudioContext() {
    try {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch (e) {
      console.error('AudioContext init error:', e);
    }
  }

  /**
   * Toca la nota melódica con timbre dulce de caja musical / celesta
   * (Usa linearRampToValueAtTime para compatibilidad 100% libre de RangeError)
   */
  function playMelodyNote(freq, durationSec) {
    if (!audioCtx || !isMusicPlaying || !freq) return;

    try {
      const now = audioCtx.currentTime;

      // 1. Oscilador Principal (Onda Triangular: dulce y pura)
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);

      gain1.gain.setValueAtTime(0.001, now);
      gain1.gain.linearRampToValueAtTime(0.28, now + 0.02);
      gain1.gain.linearRampToValueAtTime(0.001, now + durationSec + 0.4);

      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + durationSec + 0.45);

      // 2. Armónico de brillo cálido (Campanita dorada / Music Box)
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now);

      gain2.gain.setValueAtTime(0.001, now);
      gain2.gain.linearRampToValueAtTime(0.09, now + 0.015);
      gain2.gain.linearRampToValueAtTime(0.001, now + Math.min(durationSec, 0.4));

      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(now);
      osc2.stop(now + 0.45);
    } catch (e) {
      console.warn('Error síntesis nota:', e);
    }
  }

  /**
   * Toca la nota de bajo suave para dar calidez armónica
   */
  function playBassNote(freq, durationSec) {
    if (!audioCtx || !isMusicPlaying || !freq) return;

    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.035);
      gain.gain.linearRampToValueAtTime(0.001, now + durationSec + 0.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + durationSec + 0.65);
    } catch (e) {
      console.warn('Error síntesis bajo:', e);
    }
  }

  /**
   * Programador de notas secuenciales de Floricienta
   */
  function scheduleNextNote() {
    if (!isMusicPlaying) return;

    const item = FLORICIENTA_SCORE[currentNoteIndex];
    const durationMs = item.beats * BEAT_MS;
    const durationSec = durationMs / 1000;

    if (item.note && FREQS[item.note]) {
      playMelodyNote(FREQS[item.note], durationSec);
    }

    if (item.bass && FREQS[item.bass]) {
      playBassNote(FREQS[item.bass], Math.max(durationSec * 2, 1.2));
    }

    currentNoteIndex = (currentNoteIndex + 1) % FLORICIENTA_SCORE.length;
    currentTimer = setTimeout(scheduleNextNote, durationMs);
  }

  const bgAudio = document.getElementById('bg-audio');
  if (bgAudio) {
    bgAudio.playsInline = true;
  }

  function configureAudioSession() {
    // Configura categoría 'playback' en iOS 16.4+ para saltar el modo silencio
    if ('audioSession' in navigator) {
      try {
        navigator.audioSession.type = 'playback';
      } catch (e) {
        console.warn('AudioSession error:', e);
      }
    }
  }

  // Desbloqueo inicial al primer toque en iOS
  document.addEventListener('touchstart', function unlockAudioOnFirstTouch() {
    configureAudioSession();
  }, { passive: true, once: true });

  function startGentleMusic() {
    configureAudioSession();
    initAudioContext(); // Desbloqueo síncrono del Web Audio en el gesto del usuario
    isMusicPlaying = true;
    updateMusicUI(true);

    if (bgAudio) {
      bgAudio.muted = false;
      bgAudio.volume = 1.0;

      const playPromise = bgAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Archivo mp3 reproduciendo exitosamente
          if (currentTimer) clearTimeout(currentTimer);
        }).catch((err) => {
          console.warn('bgAudio falló, usando síntesis Web Audio:', err);
          if (currentTimer) clearTimeout(currentTimer);
          scheduleNextNote();
        });
        return;
      }
    }

    if (currentTimer) clearTimeout(currentTimer);
    scheduleNextNote();
  }

  function stopGentleMusic() {
    isMusicPlaying = false;
    updateMusicUI(false);
    if (currentTimer) {
      clearTimeout(currentTimer);
      currentTimer = null;
    }
    if (bgAudio) {
      try {
        bgAudio.pause();
      } catch (e) {}
    }
  }

  function updateMusicUI(playing) {
    if (!musicToggleBtn) return;
    if (playing) {
      musicToggleBtn.classList.add('playing');
      if (musicIcon) musicIcon.textContent = '🎵';
      if (musicLabel) musicLabel.textContent = 'Floricienta';
    } else {
      musicToggleBtn.classList.remove('playing');
      if (musicIcon) musicIcon.textContent = '🔇';
      if (musicLabel) musicLabel.textContent = 'Silencio';
    }
  }

  // Estado inicial del botón
  updateMusicUI(false);

  // Mostrar pista de modo silencio solo en iPhone / iPad
  const iosHint = document.getElementById('ios-hint');
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (iosHint && !isIOS) {
    iosHint.style.display = 'none';
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isMusicPlaying) {
        stopGentleMusic();
      } else {
        startGentleMusic();
      }
    });
  }


  // -------------------------------------------------------------
  // 4. MOTOR DE PÉTALOS FLOTANTES Y BRILLOS EN CANVAS 2D
  // -------------------------------------------------------------
  const canvas = document.getElementById('petals-canvas');
  const ctx = canvas.getContext('2d');

  let width = 0;
  let height = 0;
  let petals = [];
  let sparkles = [];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Clase Pétalo con rotación 3D y oscilación por brisa primaveral
  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -30;
      this.size = 12 + Math.random() * 16;
      this.speedY = 1.0 + Math.random() * 1.6;
      this.speedX = -0.6 + Math.random() * 1.2;
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = 0.015 + Math.random() * 0.025;
      this.flip = Math.random() * Math.PI;
      this.flipSpeed = 0.02 + Math.random() * 0.03;
      this.opacity = 0.45 + Math.random() * 0.45;
      
      // Paleta dorada y amarilla
      const hues = ['#ffd54f', '#ffca28', '#ffc107', '#ffe082', '#fff176'];
      this.color = hues[Math.floor(Math.random() * hues.length)];
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.angle) * 1.1 + this.speedX;
      this.angle += this.angularSpeed;
      this.flip += this.flipSpeed;

      // Reiniciar cuando sale de pantalla
      if (this.y > height + 40 || this.x < -40 || this.x > width + 40) {
        this.reset();
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.scale(Math.cos(this.flip), 1);
      ctx.globalAlpha = this.opacity;

      // Forma orgánica de pétalo de rosa
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, -this.size, 0, -this.size);
      ctx.bezierCurveTo(this.size / 2, -this.size, this.size / 2, -this.size / 2, 0, 0);
      ctx.fill();

      // Nervadura sutil del pétalo
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -this.size * 0.85);
      ctx.stroke();

      ctx.restore();
    }
  }

  // Partículas de destellos brillantes
  class Sparkle {
    constructor(x, y, burst = false) {
      this.x = x || Math.random() * width;
      this.y = y || Math.random() * height;
      this.size = burst ? 2 + Math.random() * 4 : 1.5 + Math.random() * 2.5;
      this.speedX = burst ? (Math.random() - 0.5) * 4 : (Math.random() - 0.5) * 0.5;
      this.speedY = burst ? (Math.random() - 0.5) * 4 : -0.3 - Math.random() * 0.5;
      this.alpha = burst ? 1 : Math.random() * 0.8;
      this.fade = burst ? 0.015 + Math.random() * 0.02 : 0.005 + Math.random() * 0.01;
      this.color = Math.random() > 0.3 ? '#ffd54f' : '#ffffff';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= this.fade;
    }

    draw(ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#ffd54f';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Inicializar pétalos y brillos iniciales
  const PETAL_COUNT = window.innerWidth < 600 ? 24 : 36;
  for (let i = 0; i < PETAL_COUNT; i++) {
    petals.push(new Petal());
  }

  for (let i = 0; i < 20; i++) {
    sparkles.push(new Sparkle());
  }

  // Explosión de pétalos al interactuar
  function createPetalBurst() {
    const centerX = width / 2;
    const centerY = height / 2;
    for (let i = 0; i < 28; i++) {
      sparkles.push(new Sparkle(centerX, centerY, true));
    }
  }

  // Ciclo de animación a 60 FPS
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Actualizar y dibujar pétalos
    petals.forEach(petal => {
      petal.update();
      petal.draw(ctx);
    });

    // Actualizar y dibujar brillos
    for (let i = sparkles.length - 1; i >= 0; i--) {
      const s = sparkles[i];
      s.update();
      s.draw(ctx);
      if (s.alpha <= 0) {
        sparkles.splice(i, 1);
        if (sparkles.length < 15) {
          sparkles.push(new Sparkle());
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

});
