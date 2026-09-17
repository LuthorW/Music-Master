"use strict";

/*
 * CATÁLOGO
 * Para usar seus próprios arquivos, preencha audioLocal e capaLocal em cada faixa.
 * Exemplo: audioLocal: "./audios/back-to-black.mp3"
 * Se esses campos ficarem vazios, o jogo procura automaticamente uma prévia e a
 * capa no catálogo público do iTunes. O restante do projeto funciona sem servidor.
 */
const MUSICAS = [
  {
    titulo: "Back to Black",
    artista: "Amy Winehouse",
    album: "Back to Black",
    ano: "2006",
    busca: "Back to Black Amy Winehouse",
    corA: "#111217",
    corB: "#59606b",
    audioLocal: "",
    capaLocal: "",
  },
  {
    titulo: "Beedi",
    artista: "Sunidhi Chauhan & Sukhwinder Singh",
    album: "Omkara",
    ano: "2006",
    busca: "Beedi Omkara Sunidhi Chauhan",
    corA: "#210c08",
    corB: "#d19843",
    audioLocal: "",
    capaLocal: "",
  },
  {
    titulo: "Namoradinha de um Amigo Meu",
    artista: "Roberto Carlos",
    album: "Roberto Carlos",
    ano: "1966",
    busca: "Namoradinha de um Amigo Meu Roberto Carlos",
    aliases: ["Namoradinha de um amigo meu"],
    corA: "#061529",
    corB: "#2e8ed8",
    audioLocal: "",
    capaLocal: "",
  },
  {
    titulo: "I Will Survive",
    artista: "Demi Lovato",
    album: "The Angry Birds Movie",
    ano: "2016",
    busca: "I Will Survive Demi Lovato Angry Birds",
    corA: "#8b160e",
    corB: "#f0a321",
    audioLocal: "",
    capaLocal: "",
  },
  {
    titulo: "Holding Out for a Hero",
    artista: "Bonnie Tyler",
    album: "Secret Dreams and Forbidden Fire",
    ano: "1986",
    busca: "Holding Out for a Hero Bonnie Tyler",
    aliases: ["Holding Out For A Hero"],
    corA: "#260c21",
    corB: "#ab5a91",
    audioLocal: "",
    capaLocal: "",
  },
  {
    titulo: "Me and Your Mama",
    artista: "Childish Gambino",
    album: "Awaken, My Love!",
    ano: "2016",
    busca: "Me and Your Mama Childish Gambino",
    corA: "#061227",
    corB: "#17a3d8",
    audioLocal: "",
    capaLocal: "",
  },
  {
    titulo: "The Winner Takes It All",
    artista: "ABBA",
    album: "Super Trouper",
    ano: "1980",
    busca: "The Winner Takes It All ABBA",
    corA: "#2b0b08",
    corB: "#e94d2f",
    audioLocal: "",
    capaLocal: "",
  },
  {
    titulo: "Tornerò",
    artista: "I Santo California",
    album: "The Best of I Santo California",
    ano: "1975",
    busca: "Tornero I Santo California",
    aliases: ["Tornero"],
    corA: "#12221a",
    corB: "#86a691",
    audioLocal: "",
    capaLocal: "",
  },
];

const ESTAGIOS = [
  { segundos: 0.5, tipo: "audio", rotulo: "0,5 segundo" },
  { segundos: 1, tipo: "audio", rotulo: "1 segundo" },
  { segundos: 2, tipo: "audio", rotulo: "2 segundos" },
  { segundos: 3, tipo: "audio", rotulo: "3 segundos" },
  { segundos: 4, tipo: "audio", rotulo: "4 segundos" },
  { segundos: 5, tipo: "audio", rotulo: "5 segundos" },
  { segundos: 5, tipo: "artista", rotulo: "artista" },
  { segundos: 5, tipo: "inicial", rotulo: "primeira letra" },
];

const STORAGE_KEY = "ouvido-relampago:winstreak";

const refs = {
  audio: document.querySelector("#audioPlayer"),
  audioTime: document.querySelector("#audioTime"),
  catalogStatus: document.querySelector("#catalogStatus"),
  clipLabel: document.querySelector("#clipLabel"),
  coverFrame: document.querySelector("#coverFrame"),
  coverImage: document.querySelector("#coverImage"),
  durationFill: document.querySelector("#durationFill"),
  durationProgress: document.querySelector("#durationProgress"),
  fileNumber: document.querySelector("#fileNumber"),
  filePreview: document.querySelector("#filePreview"),
  fileState: document.querySelector("#fileState"),
  formFeedback: document.querySelector("#formFeedback"),
  giveUpButton: document.querySelector("#giveUpButton"),
  guessForm: document.querySelector("#guessForm"),
  guessInput: document.querySelector("#guessInput"),
  heardMarker: document.querySelector("#heardMarker"),
  hintButton: document.querySelector("#hintButton"),
  hintCount: document.querySelector("#hintCount"),
  hintItems: [...document.querySelectorAll("#hintTrack li")],
  metaAlbum: document.querySelector("#metaAlbum"),
  metaArtist: document.querySelector("#metaArtist"),
  metaTitle: document.querySelector("#metaTitle"),
  metaYear: document.querySelector("#metaYear"),
  nextButton: document.querySelector("#nextButton"),
  playButton: document.querySelector("#playButton"),
  playDuration: document.querySelector("#playDuration"),
  previewButton: document.querySelector("#previewButton"),
  resultAlbum: document.querySelector("#resultAlbum"),
  resultArtist: document.querySelector("#resultArtist"),
  resultCover: document.querySelector("#resultCover"),
  resultDialog: document.querySelector("#resultDialog"),
  resultKicker: document.querySelector("#resultKicker"),
  resultMessage: document.querySelector("#resultMessage"),
  resultSong: document.querySelector("#resultSong"),
  resultTitle: document.querySelector("#resultTitle"),
  revealedHints: document.querySelector("#revealedHints"),
  roundCounter: document.querySelector("#roundCounter"),
  songOptions: document.querySelector("#songOptions"),
  streakValue: document.querySelector("#streakValue"),
  submitButton: document.querySelector("#submitButton"),
  toast: document.querySelector("#toast"),
  waveform: document.querySelector("#waveform"),
};

const state = {
  ordem: embaralhar(MUSICAS.map((_, index) => index)),
  posicao: 0,
  estagio: 0,
  faixa: null,
  resolvida: null,
  audioPronto: false,
  rodadaEncerrada: false,
  tocandoTrecho: false,
  tocandoPrevia: false,
  timerTrecho: null,
  timerToast: null,
  pedidoAtual: 0,
  streak: lerStreak(),
  cache: new Map(),
};

function embaralhar(itens) {
  const copia = [...itens];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function normalizar(texto = "") {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\([^)]*\)|\[[^\]]*\]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function escaparXml(texto = "") {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function criarCapaFallback(faixa) {
  const iniciais = faixa.titulo
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
  const titulo = escaparXml(faixa.titulo.toUpperCase());
  const artista = escaparXml(faixa.artista.toUpperCase());
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${faixa.corA}"/>
          <stop offset="1" stop-color="${faixa.corB}"/>
        </linearGradient>
        <pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="32" stroke="white" stroke-opacity=".055" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="600" height="600" fill="url(#g)"/>
      <rect width="600" height="600" fill="url(#p)"/>
      <circle cx="300" cy="270" r="165" fill="none" stroke="white" stroke-opacity=".16" stroke-width="2"/>
      <circle cx="300" cy="270" r="120" fill="none" stroke="white" stroke-opacity=".11" stroke-width="2"/>
      <text x="300" y="310" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="118" font-weight="800">${iniciais}</text>
      <text x="42" y="522" fill="white" font-family="Arial, sans-serif" font-size="22" font-weight="700">${titulo.slice(0, 34)}</text>
      <text x="42" y="557" fill="white" fill-opacity=".68" font-family="Arial, sans-serif" font-size="16" letter-spacing="3">${artista.slice(0, 42)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function lerStreak() {
  try {
    const valor = Number.parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    return Number.isFinite(valor) && valor > 0 ? valor : 0;
  } catch {
    return 0;
  }
}

function salvarStreak() {
  try {
    localStorage.setItem(STORAGE_KEY, String(state.streak));
  } catch {
    // O jogo continua normalmente quando o navegador bloqueia o armazenamento.
  }
  refs.streakValue.textContent = String(state.streak);
}

function formatarSegundos(valor) {
  return Number.isInteger(valor) ? `${valor} S` : `${String(valor).replace(".", ",")} S`;
}

function gerarWaveform() {
  refs.waveform.replaceChildren();
  const total = 58;
  for (let i = 0; i < total; i += 1) {
    const barra = document.createElement("span");
    const onda = Math.sin(i * 1.73) * 14 + Math.cos(i * 0.61) * 10;
    const altura = Math.max(8, Math.min(68, 31 + onda + ((i * 17) % 13)));
    barra.style.height = `${altura}px`;
    barra.style.setProperty("--bar-index", String(i));
    refs.waveform.append(barra);
  }
}

function popularOpcoes() {
  const fragment = document.createDocumentFragment();
  [...MUSICAS]
    .sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"))
    .forEach((faixa) => {
      const option = document.createElement("option");
      option.value = faixa.titulo;
      option.label = faixa.artista;
      fragment.append(option);
    });
  refs.songOptions.replaceChildren(fragment);
}

function definirStatus(tipo, texto) {
  refs.catalogStatus.classList.toggle("is-ready", tipo === "ready");
  refs.catalogStatus.classList.toggle("is-error", tipo === "error");
  refs.catalogStatus.lastChild.textContent = ` ${texto}`;
}

function mostrarToast(mensagem) {
  window.clearTimeout(state.timerToast);
  refs.toast.textContent = mensagem;
  refs.toast.classList.add("is-visible");
  state.timerToast = window.setTimeout(() => {
    refs.toast.classList.remove("is-visible");
  }, 3000);
}

function buscarJsonp(url, timeoutMs = 9000) {
  return new Promise((resolve, reject) => {
    const callback = `__ouvidoRelampago_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timer = window.setTimeout(() => finalizar(new Error("Tempo de resposta esgotado")), timeoutMs);

    const limpar = () => {
      window.clearTimeout(timer);
      script.remove();
      try {
        delete window[callback];
      } catch {
        window[callback] = undefined;
      }
    };

    const finalizar = (erro, dados) => {
      limpar();
      if (erro) reject(erro);
      else resolve(dados);
    };

    window[callback] = (dados) => finalizar(null, dados);
    script.async = true;
    script.onerror = () => finalizar(new Error("Catálogo indisponível"));
    const separador = url.includes("?") ? "&" : "?";
    script.src = `${url}${separador}callback=${encodeURIComponent(callback)}`;
    document.head.append(script);
  });
}

async function buscarNoItunes(faixa) {
  if (state.cache.has(faixa.busca)) return state.cache.get(faixa.busca);

  const params = new URLSearchParams({
    term: faixa.busca,
    country: "BR",
    media: "music",
    entity: "song",
    limit: "8",
  });
  const dados = await buscarJsonp(`https://itunes.apple.com/search?${params}`);
  const resultados = Array.isArray(dados.results) ? dados.results : [];
  if (!resultados.length) throw new Error("Prévia não encontrada");

  const tituloEsperado = normalizar(faixa.titulo);
  const artistaEsperado = normalizar(faixa.artista).split(" ")[0];
  const melhor =
    resultados.find(
      (item) =>
        normalizar(item.trackName) === tituloEsperado &&
        normalizar(item.artistName).includes(artistaEsperado),
    ) ||
    resultados.find((item) => normalizar(item.trackName) === tituloEsperado) ||
    resultados[0];

  const resolvida = {
    ...faixa,
    titulo: melhor.trackName || faixa.titulo,
    artista: melhor.artistName || faixa.artista,
    album: melhor.collectionName || faixa.album,
    ano: melhor.releaseDate ? String(new Date(melhor.releaseDate).getUTCFullYear()) : faixa.ano,
    audio: melhor.previewUrl || "",
    capa:
      (melhor.artworkUrl100 || "")
        .replace("100x100bb", "600x600bb")
        .replace("100x100-75", "600x600-75") || criarCapaFallback(faixa),
  };
  state.cache.set(faixa.busca, resolvida);
  return resolvida;
}

async function resolverFaixa(faixa, pedido) {
  const fallback = {
    ...faixa,
    audio: faixa.audioLocal,
    capa: faixa.capaLocal || criarCapaFallback(faixa),
  };

  if (faixa.audioLocal) return fallback;

  try {
    return await buscarNoItunes(faixa);
  } catch (erro) {
    if (pedido === state.pedidoAtual) {
      console.warn("Não foi possível carregar a prévia:", erro);
    }
    return fallback;
  }
}

function aguardarAudioCarregar() {
  return new Promise((resolve, reject) => {
    if (refs.audio.readyState >= 2) {
      resolve();
      return;
    }
    const limpar = () => {
      refs.audio.removeEventListener("canplay", sucesso);
      refs.audio.removeEventListener("error", falha);
    };
    const sucesso = () => {
      limpar();
      resolve();
    };
    const falha = () => {
      limpar();
      reject(new Error("Falha ao carregar o áudio"));
    };
    refs.audio.addEventListener("canplay", sucesso, { once: true });
    refs.audio.addEventListener("error", falha, { once: true });
  });
}

async function prepararAudio(resolvida, pedido) {
  state.audioPronto = false;
  refs.playButton.disabled = true;
  refs.previewButton.disabled = true;
  pararAudio();
  refs.audio.removeAttribute("src");
  refs.audio.load();

  if (!resolvida.audio) {
    if (pedido === state.pedidoAtual) {
      definirStatus("error", "PRÉVIA INDISPONÍVEL");
      refs.fileState.textContent = "ADICIONE O ÁUDIO NO SCRIPT";
    }
    return;
  }

  try {
    refs.audio.src = resolvida.audio;
    refs.audio.load();
    await aguardarAudioCarregar();
    if (pedido !== state.pedidoAtual) return;
    state.audioPronto = true;
    refs.playButton.disabled = false;
    refs.previewButton.disabled = false;
    definirStatus("ready", resolvida.audio === state.faixa.audioLocal ? "ARQUIVO LOCAL" : "PRÉVIA CONECTADA");
  } catch {
    if (pedido !== state.pedidoAtual) return;
    state.audioPronto = false;
    refs.playButton.disabled = true;
    refs.previewButton.disabled = true;
    definirStatus("error", "PRÉVIA INDISPONÍVEL");
  }
}

function pararAudio() {
  window.clearTimeout(state.timerTrecho);
  state.timerTrecho = null;
  state.tocandoTrecho = false;
  state.tocandoPrevia = false;
  refs.audio.pause();
  refs.playButton.classList.remove("is-playing");
  refs.waveform.classList.remove("is-playing");
  refs.previewButton.innerHTML = '<span aria-hidden="true">▶</span> OUVIR PRÉVIA';
}

async function tocarTrecho() {
  if (!state.audioPronto || state.rodadaEncerrada) {
    if (!state.audioPronto) mostrarToast("A prévia ainda não está disponível para esta faixa.");
    return false;
  }

  pararAudio();
  const segundos = ESTAGIOS[state.estagio].segundos;
  try {
    refs.audio.currentTime = 0;
    await refs.audio.play();
    state.tocandoTrecho = true;
    refs.playButton.classList.add("is-playing");
    refs.waveform.classList.add("is-playing");
    const inicio = performance.now();

    const atualizarRelogio = () => {
      if (!state.tocandoTrecho) return;
      const decorrido = Math.min(segundos, (performance.now() - inicio) / 1000);
      refs.audioTime.textContent = `00:${decorrido.toFixed(1).padStart(4, "0")}`;
      if (decorrido < segundos) requestAnimationFrame(atualizarRelogio);
    };
    requestAnimationFrame(atualizarRelogio);

    state.timerTrecho = window.setTimeout(() => {
      refs.audio.pause();
      refs.audio.currentTime = 0;
      state.tocandoTrecho = false;
      refs.playButton.classList.remove("is-playing");
      refs.waveform.classList.remove("is-playing");
      refs.audioTime.textContent = "00:00.0";
    }, segundos * 1000);
    return true;
  } catch {
    state.audioPronto = false;
    refs.playButton.disabled = true;
    definirStatus("error", "ÁUDIO BLOQUEADO");
    mostrarToast("O navegador não conseguiu reproduzir esta prévia.");
    return false;
  }
}

async function alternarPreviaCompleta() {
  if (!state.audioPronto) return;
  if (state.tocandoPrevia) {
    pararAudio();
    return;
  }
  pararAudio();
  try {
    refs.audio.currentTime = 0;
    await refs.audio.play();
    state.tocandoPrevia = true;
    refs.previewButton.innerHTML = '<span aria-hidden="true">Ⅱ</span> PAUSAR PRÉVIA';
  } catch {
    mostrarToast("Não foi possível tocar a prévia completa.");
  }
}

function atualizarWaveform() {
  const segundos = ESTAGIOS[state.estagio].segundos;
  const proporcao = segundos / 5;
  const barras = [...refs.waveform.children];
  barras.forEach((barra, index) => {
    barra.classList.toggle("is-heard", index < Math.ceil(barras.length * proporcao));
  });
  refs.heardMarker.style.left = `${Math.min(100, proporcao * 100)}%`;
  refs.durationFill.style.width = `${proporcao * 100}%`;
  refs.durationProgress.setAttribute("aria-valuenow", String(segundos));
}

function atualizarEstagio() {
  const atual = ESTAGIOS[state.estagio];
  refs.clipLabel.textContent = `TRECHO LIBERADO · ${formatarSegundos(atual.segundos)}`;
  refs.playDuration.textContent = formatarSegundos(atual.segundos);
  refs.playButton.setAttribute("aria-label", `Tocar trecho de ${atual.rotulo}`);
  refs.hintCount.textContent = `${state.estagio} DE 7 USADAS`;

  refs.hintItems.forEach((item, index) => {
    item.classList.toggle("is-unlocked", index < state.estagio);
    item.classList.toggle("is-current", index === state.estagio);
  });

  refs.hintButton.disabled = state.estagio >= ESTAGIOS.length - 1 || state.rodadaEncerrada;
  refs.hintButton.lastChild.textContent =
    state.estagio >= ESTAGIOS.length - 1 ? " TODAS AS DICAS ABERTAS" : " PRECISO DE UMA DICA";
  atualizarWaveform();
  atualizarPistasReveladas();
}

function atualizarPistasReveladas() {
  refs.revealedHints.replaceChildren();
  const fragment = document.createDocumentFragment();

  if (state.estagio >= 6) {
    const chipArtista = document.createElement("span");
    chipArtista.className = "hint-chip";
    chipArtista.innerHTML = `ARTISTA: <strong>${escaparXml(state.resolvida?.artista || state.faixa.artista)}</strong>`;
    fragment.append(chipArtista);
    refs.metaArtist.textContent = state.resolvida?.artista || state.faixa.artista;
    refs.metaArtist.classList.add("is-revealed");
  }

  if (state.estagio >= 7) {
    const primeiraLetra = state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?";
    const chipInicial = document.createElement("span");
    chipInicial.className = "hint-chip";
    chipInicial.innerHTML = `PRIMEIRA LETRA: <strong>${primeiraLetra}</strong>`;
    fragment.append(chipInicial);
  }

  if (!fragment.childNodes.length) {
    const vazio = document.createElement("span");
    vazio.textContent = "Nenhuma pista extra revelada.";
    fragment.append(vazio);
  }

  refs.revealedHints.append(fragment);
}

function usarDica() {
  if (state.rodadaEncerrada || state.estagio >= ESTAGIOS.length - 1) return null;
  state.estagio += 1;
  atualizarEstagio();
  const atual = ESTAGIOS[state.estagio];

  if (atual.tipo === "audio") {
    refs.formFeedback.textContent = `Agora você pode ouvir ${atual.rotulo}.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast(`Dica liberada: ${atual.rotulo} de áudio.`);
  } else if (atual.tipo === "artista") {
    refs.formFeedback.textContent = `Artista revelado: ${state.resolvida?.artista || state.faixa.artista}.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast("Dica liberada: artista da faixa.");
  } else {
    const letra = state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?";
    refs.formFeedback.textContent = `O título começa com “${letra}”.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast("Última dica liberada: primeira letra.");
  }

  return { estagio: state.estagio, tipo: atual.tipo, rotulo: atual.rotulo };
}

function respostaCorreta(palpite) {
  const aceitas = [state.faixa.titulo, ...(state.faixa.aliases || [])].map(normalizar);
  return aceitas.includes(normalizar(palpite));
}

function validarPalpite(valor) {
  const palpite = String(valor || "").trim();
  if (state.rodadaEncerrada) return { ok: false, motivo: "rodada_encerrada" };
  if (!palpite) {
    refs.formFeedback.textContent = "Digite um título antes de confirmar.";
    refs.formFeedback.className = "form-feedback is-error";
    refs.guessInput.focus();
    return { ok: false, motivo: "vazio" };
  }
  if (palpite.length > 120) return { ok: false, motivo: "muito_longo" };

  if (respostaCorreta(palpite)) {
    state.streak += 1;
    salvarStreak();
    encerrarRodada(true);
    return {
      ok: true,
      correto: true,
      streak: state.streak,
      faixa: { titulo: state.faixa.titulo, artista: state.resolvida.artista },
    };
  }

  refs.guessInput.classList.remove("is-wrong");
  void refs.guessInput.offsetWidth;
  refs.guessInput.classList.add("is-wrong");
  refs.formFeedback.textContent = "Ainda não. Tente outro título ou peça uma dica.";
  refs.formFeedback.className = "form-feedback is-error";
  return { ok: true, correto: false, streak: state.streak };
}

function revelarMetadados() {
  const faixa = state.resolvida;
  refs.coverFrame.classList.remove("is-concealed");
  refs.coverImage.alt = `Capa de ${faixa.album}, de ${faixa.artista}`;

  [
    [refs.metaTitle, faixa.titulo],
    [refs.metaArtist, faixa.artista],
    [refs.metaAlbum, faixa.album],
    [refs.metaYear, faixa.ano],
  ].forEach(([elemento, valor]) => {
    elemento.textContent = valor || "Não informado";
    elemento.classList.add("is-revealed");
  });

  refs.filePreview.classList.add("is-revealed");
  refs.fileState.textContent = "ARQUIVO IDENTIFICADO";
}

function encerrarRodada(acertou) {
  if (state.rodadaEncerrada) return;
  state.rodadaEncerrada = true;
  pararAudio();
  revelarMetadados();

  refs.guessInput.disabled = true;
  refs.submitButton.disabled = true;
  refs.hintButton.disabled = true;
  refs.giveUpButton.disabled = true;

  const faixa = state.resolvida;
  refs.resultDialog.classList.toggle("is-loss", !acertou);
  refs.resultKicker.textContent = acertou ? "VOCÊ ACERTOU" : "RESPOSTA REVELADA";
  refs.resultTitle.textContent = acertou ? "Ouvido afiado." : "Fica para a próxima.";
  refs.resultSong.textContent = faixa.titulo;
  refs.resultArtist.textContent = faixa.artista;
  refs.resultAlbum.textContent = `${faixa.album}${faixa.ano ? ` · ${faixa.ano}` : ""}`;
  refs.resultCover.src = faixa.capa;
  refs.resultCover.alt = `Capa de ${faixa.album}`;
  refs.resultMessage.textContent = acertou
    ? `Acerto com ${ESTAGIOS[state.estagio].rotulo}. Sua sequência agora é de ${state.streak} ${state.streak === 1 ? "acerto" : "acertos"}.`
    : "A sequência voltou a zero, mas a próxima faixa já está pronta para uma nova tentativa.";

  window.setTimeout(() => refs.resultDialog.showModal(), 360);
}

function desistir() {
  if (state.rodadaEncerrada) return null;
  state.streak = 0;
  salvarStreak();
  encerrarRodada(false);
  return {
    desistiu: true,
    streak: state.streak,
    faixa: {
      titulo: state.resolvida.titulo,
      artista: state.resolvida.artista,
      album: state.resolvida.album,
    },
  };
}

function resetarInterface() {
  state.estagio = 0;
  state.rodadaEncerrada = false;
  state.audioPronto = false;
  refs.audioTime.textContent = "00:00.0";
  refs.coverFrame.classList.add("is-concealed");
  refs.filePreview.classList.remove("is-revealed");
  refs.fileState.textContent = "IDENTIDADE OCULTA";
  refs.guessInput.disabled = false;
  refs.guessInput.value = "";
  refs.guessInput.classList.remove("is-wrong");
  refs.submitButton.disabled = false;
  refs.giveUpButton.disabled = false;
  refs.formFeedback.textContent = "Você pode tentar quantas vezes quiser antes de desistir.";
  refs.formFeedback.className = "form-feedback";
  refs.previewButton.disabled = true;

  [
    [refs.metaTitle, "••••••••••••"],
    [refs.metaArtist, "••••••••••••"],
    [refs.metaAlbum, "••••••••••••"],
    [refs.metaYear, "••••"],
  ].forEach(([elemento, texto]) => {
    elemento.textContent = texto;
    elemento.classList.remove("is-revealed");
  });
  atualizarEstagio();
}

async function iniciarRodada() {
  pararAudio();
  resetarInterface();

  const indice = state.ordem[state.posicao];
  state.faixa = MUSICAS[indice];
  state.resolvida = {
    ...state.faixa,
    audio: state.faixa.audioLocal,
    capa: state.faixa.capaLocal || criarCapaFallback(state.faixa),
  };

  const numero = state.posicao + 1;
  refs.roundCounter.textContent = `FAIXA ${String(numero).padStart(2, "0")} / ${String(MUSICAS.length).padStart(2, "0")}`;
  refs.fileNumber.textContent = `#${String(indice + 1).padStart(3, "0")}`;
  refs.coverImage.src = state.resolvida.capa;
  refs.coverImage.alt = "Capa do álbum oculta";
  definirStatus("loading", "CARREGANDO PRÉVIA");
  refs.playButton.disabled = true;

  const pedido = ++state.pedidoAtual;
  const resolvida = await resolverFaixa(state.faixa, pedido);
  if (pedido !== state.pedidoAtual) return;

  state.resolvida = resolvida;
  refs.coverImage.src = resolvida.capa;
  await prepararAudio(resolvida, pedido);
}

function proximaRodada() {
  pararAudio();
  if (refs.resultDialog.open) refs.resultDialog.close();
  state.posicao += 1;
  if (state.posicao >= state.ordem.length) {
    state.ordem = embaralhar(MUSICAS.map((_, index) => index));
    state.posicao = 0;
  }
  void iniciarRodada();
}

function registrarEventos() {
  refs.playButton.addEventListener("click", () => void tocarTrecho());
  refs.hintButton.addEventListener("click", usarDica);
  refs.giveUpButton.addEventListener("click", desistir);
  refs.previewButton.addEventListener("click", () => void alternarPreviaCompleta());
  refs.nextButton.addEventListener("click", proximaRodada);

  refs.guessForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const resultado = validarPalpite(refs.guessInput.value);
    if (resultado.correto) {
      refs.formFeedback.textContent = "Resposta correta!";
      refs.formFeedback.className = "form-feedback is-success";
    }
  });

  refs.guessInput.addEventListener("input", () => {
    refs.guessInput.classList.remove("is-wrong");
    if (refs.formFeedback.classList.contains("is-error")) {
      refs.formFeedback.textContent = "Você pode tentar quantas vezes quiser antes de desistir.";
      refs.formFeedback.className = "form-feedback";
    }
  });

  refs.audio.addEventListener("ended", pararAudio);
  refs.resultDialog.addEventListener("cancel", (evento) => evento.preventDefault());
}

function registrarWebMcp() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  const registrar = (tool) => {
    try {
      void Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {});
    } catch {
      // Navegadores sem suporte completo simplesmente ignoram as ferramentas.
    }
  };

  registrar({
    name: "get_music_game_state",
    title: "Consultar rodada musical",
    description: "Consulta o progresso visível da rodada sem revelar a resposta.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() {
      return {
        round: state.posicao + 1,
        totalRounds: MUSICAS.length,
        clipSeconds: ESTAGIOS[state.estagio].segundos,
        hintStage: state.estagio,
        artistHint: state.estagio >= 6 ? state.resolvida.artista : null,
        firstLetterHint:
          state.estagio >= 7
            ? state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?"
            : null,
        streak: state.streak,
        audioReady: state.audioPronto,
        roundOver: state.rodadaEncerrada,
      };
    },
  });

  registrar({
    name: "play_current_music_snippet",
    title: "Tocar trecho atual",
    description: "Toca o trecho de áudio atualmente liberado na interface.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    async execute() {
      const played = await tocarTrecho();
      if (!played) throw new Error("A prévia não está pronta para reprodução.");
      return { played: true, seconds: ESTAGIOS[state.estagio].segundos };
    },
  });

  registrar({
    name: "use_music_hint",
    title: "Usar próxima dica",
    description: "Libera a próxima dica da rodada seguindo a ordem do jogo.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute() {
      const dica = usarDica();
      if (!dica) throw new Error("Não há outra dica disponível nesta rodada.");
      return dica;
    },
  });

  registrar({
    name: "submit_music_guess",
    title: "Responder título da música",
    description: "Envia um palpite de título para a rodada musical atual.",
    inputSchema: {
      type: "object",
      properties: { title: { type: "string", minLength: 1, maxLength: 120 } },
      required: ["title"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (!input || typeof input.title !== "string") throw new TypeError("title deve ser um texto.");
      const resultado = validarPalpite(input.title);
      if (!resultado.ok) throw new Error(`Palpite rejeitado: ${resultado.motivo}.`);
      return resultado;
    },
  });

  registrar({
    name: "give_up_music_round",
    title: "Desistir da rodada",
    description: "Encerra a rodada, revela a faixa e zera a sequência de acertos.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute() {
      const resultado = desistir();
      if (!resultado) throw new Error("A rodada já foi encerrada.");
      return resultado;
    },
  });

  window.addEventListener("pagehide", () => lifecycle.abort(), { once: true });
}

function iniciar() {
  refs.streakValue.textContent = String(state.streak);
  gerarWaveform();
  popularOpcoes();
  registrarEventos();
  registrarWebMcp();
  void iniciarRodada();
}

iniciar();
