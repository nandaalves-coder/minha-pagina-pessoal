function mostrarMensagem() {
  const frases = [
    "Você é capaz de conquistar tudo aquilo que sonha! ✨",
    "Seja você a sua maior inspiração 💜",
    "Hoje é o dia perfeito para brilhar ainda mais! 🌟",
    "A jornada pode ser difícil, mas o seu destino é grandioso! 🚀",
    "Você não veio até aqui à toa, continue firme! 💪",
    "Dev it girl em ascensão constante! 💻👑",
    "Confia no processo e vai com tudo! 🔥",
    "O impossível é só questão de tempo! 💭💫"
  ];

  const mensagem = document.getElementById("mensagem");
  const aleatorio = Math.floor(Math.random() * frases.length);
  mensagem.innerText = frases[aleatorio];
  mensagem.style.display = "block";
}
