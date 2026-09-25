// Selo "Aberto agora" — horário de São Paulo, sexta e sábado das 20h30 às 4h.
(function () {
  const ABRE = 20 * 60 + 30;
  const FECHA = 4 * 60;

  function agoraSP() {
    const partes = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (t) => partes.find((p) => p.type === t).value;
    const dia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { dia, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function estado() {
    const { dia, min } = agoraSP();
    const noiteDeFesta = dia === 5 || dia === 6;
    const madrugadaDepois = (dia === 6 || dia === 0) && min < FECHA;
    if ((noiteDeFesta && min >= ABRE) || madrugadaDepois) {
      return { state: "open", text: "Aberto agora · até 4h", curto: "Aberto · até 4h" };
    }
    if (noiteDeFesta) return { state: "today", text: "Hoje tem! Abrimos às 20h30", curto: "Hoje às 20h30" };
    return { state: "closed", text: "Abrimos sexta às 20h30", curto: "Sexta às 20h30" };
  }

  function atualizar() {
    const { state, text, curto } = estado();
    document.querySelectorAll("[data-status]").forEach((el) => {
      el.dataset.state = state;
      const alvo = el.querySelector("[data-status-text]");
      if (alvo) alvo.textContent = "short" in el.dataset ? curto : text;
    });
  }

  atualizar();
  setInterval(atualizar, 60 * 1000);
})();
