// Altas Horas Karaokê — interações da página inicial
const WHATSAPP = "5511984968485";

/* Navbar com fundo ao rolar */
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* Menu mobile */
const menu = document.getElementById("menu-mobile");
const toggle = document.querySelector(".nav__toggle");
function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  toggle.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}
toggle.addEventListener("click", () => setMenu(true));
menu.querySelector("[data-close-menu]").addEventListener("click", () => setMenu(false));
menu.querySelectorAll("nav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

/* Stories do hero */
const stories = document.querySelectorAll(".hero__story img");
if (stories.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let atual = 0;
  setInterval(() => {
    stories[atual].classList.remove("is-active");
    atual = (atual + 1) % stories.length;
    stories[atual].classList.add("is-active");
  }, 4000);
}

/* Preços vindos do cardápio (data/cardapio.js) */
if (window.CARDAPIO) {
  const precos = new Map();
  window.CARDAPIO.categorias.forEach((c) => c.itens.forEach((i) => precos.set(i.nome, i.preco)));
  document.querySelectorAll("[data-preco]").forEach((el) => {
    const preco = precos.get(el.dataset.preco);
    if (typeof preco === "number") el.textContent = `R$ ${preco}`;
  });
}

/* Animação de entrada */
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

/* Galeria: filtros + lightbox */
const itens = [...document.querySelectorAll(".gallery__item")];
document.querySelectorAll("[data-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const f = btn.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    itens.forEach((it) => { it.hidden = f !== "todos" && it.dataset.cat !== f; });
  });
});

const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
let lbIndex = 0;
const visiveis = () => itens.filter((it) => !it.hidden);
function abrirFoto(i) {
  const lista = visiveis();
  lbIndex = (i + lista.length) % lista.length;
  const it = lista[lbIndex];
  lbImg.src = it.dataset.full;
  lbImg.alt = it.querySelector("img").alt;
  if (!lb.open) lb.showModal();
}
itens.forEach((it) => it.addEventListener("click", () => abrirFoto(visiveis().indexOf(it))));
lb.addEventListener("click", (e) => {
  const acao = e.target.closest("[data-lb]")?.dataset.lb;
  if (acao === "close" || e.target.classList.contains("lightbox__inner")) lb.close();
  if (acao === "prev") abrirFoto(lbIndex - 1);
  if (acao === "next") abrirFoto(lbIndex + 1);
});
lb.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") abrirFoto(lbIndex - 1);
  if (e.key === "ArrowRight") abrirFoto(lbIndex + 1);
});
let toqueX = null;
lb.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  if (toqueX === null) return;
  const dx = e.changedTouches[0].clientX - toqueX;
  if (Math.abs(dx) > 50) abrirFoto(lbIndex + (dx < 0 ? 1 : -1));
  toqueX = null;
});

/* Carrossel de depoimentos */
const track = document.querySelector(".carousel__track");
document.querySelectorAll("[data-carousel]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = track.querySelector(".review");
    const passo = card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 20);
    const fim = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const inicio = track.scrollLeft <= 4;
    if (btn.dataset.carousel === "next") track.scrollTo({ left: fim ? 0 : track.scrollLeft + passo, behavior: "smooth" });
    else track.scrollTo({ left: inicio ? track.scrollWidth : track.scrollLeft - passo, behavior: "smooth" });
  });
});

/* Formulário de reserva → WhatsApp */
const form = document.getElementById("form-reserva");
const range = form.pessoas;
const out = document.getElementById("pessoas-out");
function atualizarPessoas() {
  const v = Number(range.value);
  out.innerHTML = `${v}<small>pessoas</small>`;
  range.style.setProperty("--fill", `${((v - range.min) / (range.max - range.min)) * 100}%`);
}
range.addEventListener("input", atualizarPessoas);
atualizarPessoas();

const hoje = new Date();
const hojeISO = new Date(hoje.getTime() - hoje.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
form.data.min = hojeISO;

form.telefone.addEventListener("input", () => {
  const d = form.telefone.value.replace(/\D/g, "").slice(0, 11);
  let v = d;
  if (d.length > 2) v = `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length > 7) v = `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
  form.telefone.value = v;
});

const regras = {
  data: (v) => v && v >= hojeISO,
  nome: (v) => v.trim().length >= 2,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  telefone: (v) => v.replace(/\D/g, "").length >= 10,
};
function validar(nome) {
  const ok = regras[nome](form[nome].value);
  form.querySelector(`[data-field="${nome}"]`).classList.toggle("is-invalid", !ok);
  return ok;
}
Object.keys(regras).forEach((n) => form[n].addEventListener("blur", () => validar(n)));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const invalidos = Object.keys(regras).filter((n) => !validar(n));
  if (invalidos.length) { form[invalidos[0]].focus(); return; }

  const [a, m, d] = form.data.value.split("-");
  const linhas = [
    "Olá! Gostaria de fazer uma pré-reserva no Altas Horas Karaokê 🎤",
    "",
    `*Evento:* ${form.tipo.value}`,
    `*Data:* ${d}/${m}/${a}${form.horario.value ? ` · ${form.horario.value}` : ""}`,
    `*Pessoas:* ${range.value}`,
    `*Nome:* ${form.nome.value.trim()}`,
    `*E-mail:* ${form.email.value.trim()}`,
    `*Telefone:* ${form.telefone.value}`,
  ];
  if (form.obs.value.trim()) linhas.push(`*Observações:* ${form.obs.value.trim()}`);
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(linhas.join("\n"))}`, "_blank", "noopener");
});

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
