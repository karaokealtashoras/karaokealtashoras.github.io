// Cardápio online — monta a página a partir de data/cardapio.js
(function () {
  const dados = window.CARDAPIO;
  const menu = document.getElementById("menu");
  const tabs = document.getElementById("tabs");
  const side = document.getElementById("side-nav");
  const busca = document.getElementById("busca");
  const limpar = document.querySelector(".search__clear");
  const vazio = document.getElementById("vazio");

  const moeda = (v) => (typeof v === "number" ? `R$ ${v.toFixed(2).replace(".", ",")}` : "Consulte");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const normal = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function item(i) {
    const foto = i.foto
      ? `<img class="item__foto" src="../assets/img/cardapio/${esc(i.foto)}-800.webp" alt="" loading="lazy" width="64" height="64">`
      : "";
    return `
      <li class="item${i.destaque ? " item--destaque" : ""}" data-busca="${esc(normal(`${i.nome} ${i.descricao || ""}`))}">
        ${foto}
        <div class="item__txt">
          <h3>${esc(i.nome)}</h3>
          ${i.descricao ? `<p>${esc(i.descricao)}</p>` : ""}
        </div>
        <span class="item__preco${i.preco == null ? " item__preco--consulte" : ""}">${moeda(i.preco)}</span>
      </li>`;
  }

  menu.innerHTML = dados.categorias.map((c) => {
    const casa = c.id === "batidas"
      ? `<div class="house"><span class="material-symbols-rounded house__icon">local_bar</span><div><small>Assinatura do bar</small><strong>Batida Karaokê Altas Horas</strong></div><span class="house__preco">${moeda(c.itens.find((i) => i.nome === "Karaokê Altas Horas")?.preco)}</span></div>`
      : "";
    const adicionais = c.adicionais?.length
      ? `<div class="extras"><strong>Adicionais na batata frita</strong>${c.adicionais.map((a) => `<span>${esc(a.nome.replace("Batata frita com ", ""))} <b>+ ${moeda(a.preco)}</b></span>`).join("")}</div>`
      : "";
    return `
      <section class="cat" id="${c.id}" aria-labelledby="t-${c.id}">
        <h2 id="t-${c.id}">${esc(c.nome)}</h2>
        ${c.nota ? `<p class="cat__nota"><span class="material-symbols-rounded">info</span>${esc(c.nota)}</p>` : ""}
        ${casa}
        <ul class="items">${c.itens.map(item).join("")}</ul>
        ${adicionais}
      </section>`;
  }).join("");

  const links = dados.categorias.map((c) => `<a href="#${c.id}" data-cat="${c.id}">${esc(c.nome)}</a>`).join("");
  tabs.innerHTML = links;
  side.innerHTML = dados.categorias.map((c) => `<li><a href="#${c.id}" data-cat="${c.id}">${esc(c.nome)}<span>${c.itens.length}</span></a></li>`).join("");

  /* Aba ativa conforme a rolagem */
  const secoes = [...menu.querySelectorAll(".cat")];
  function marcar(id) {
    document.querySelectorAll("[data-cat]").forEach((a) => a.classList.toggle("is-active", a.dataset.cat === id));
    const ativa = tabs.querySelector(`[data-cat="${id}"]`);
    if (ativa) tabs.scrollTo({ left: ativa.offsetLeft - tabs.clientWidth / 2 + ativa.offsetWidth / 2, behavior: "smooth" });
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) marcar(e.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secoes.forEach((s) => io.observe(s));
  marcar(secoes[0].id);

  /* Busca */
  function filtrar() {
    const q = normal(busca.value.trim());
    limpar.hidden = !q;
    let total = 0;
    secoes.forEach((s) => {
      let n = 0;
      s.querySelectorAll(".item").forEach((li) => {
        const ok = !q || li.dataset.busca.includes(q);
        li.hidden = !ok;
        if (ok) n++;
      });
      s.hidden = n === 0;
      s.querySelectorAll(".house, .extras").forEach((el) => { el.hidden = Boolean(q); });
      total += n;
    });
    vazio.hidden = total > 0;
  }
  busca.addEventListener("input", filtrar);
  limpar.addEventListener("click", () => { busca.value = ""; filtrar(); busca.focus(); });
})();
