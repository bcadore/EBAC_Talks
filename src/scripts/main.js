AOS.init();

const dataEvento = new Date("Sep 12, 2024 18:00:00");
const timeStampEvento = dataEvento.getTime();

const contadorHorario = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteEvento = timeStampEvento - timeStampAtual;

  const dia = 1000 * 60 * 60 * 24; //Dia representado em ms
  const hora = 1000 * 60 * 60; //Hora representado em ms
  const minuto = 1000 * 60; //Minuti representado em ms

  const diasAteEvento = Math.floor(distanciaAteEvento / dia);
  const horasAteEvento = Math.floor((distanciaAteEvento % dia) / hora);
  const minutosAteEvento = Math.floor((distanciaAteEvento % hora) / minuto);
  const segundosAteEvento = Math.floor((distanciaAteEvento % minuto) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `: ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

  if (distanciaAteEvento < 0) {
    clearInterval(contadorHorario);
    document.getElementById("contador").innerHTML = `: Evento Expirado :(`
  }

}, 1000);
