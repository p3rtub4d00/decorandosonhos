// Contatos oficiais da Decorando Sonhos.
const CONFIG = {
  whatsapp: "5569999999999",
  instagram: "decorandosonhos_pvh"
};

document.querySelectorAll(".wa-link").forEach(a => {
  a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Vi o site da Decorando Sonhos e gostaria de solicitar um orçamento para uma festa.")}`;
  a.target = "_blank"; a.rel = "noopener";
});
document.querySelectorAll(".insta-link").forEach(a => {
  a.href = `https://instagram.com/${CONFIG.instagram}`;
  a.target = "_blank"; a.rel = "noopener";
});

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll("nav a")];
const updateNav = () => {
  let current = "inicio";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
  document.querySelector(".topbar").classList.toggle("scrolled", window.scrollY > 20);
};
window.addEventListener("scroll", updateNav, {passive:true});
updateNav();

const revealTargets = document.querySelectorAll(".about,.portfolio,.process,.services,.quote,.faq,.contact,.instagram-strip");
revealTargets.forEach(el => el.classList.add("reveal"));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
revealTargets.forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();


// Fecha o menu ao clicar fora dele ou pressionar Esc.
document.addEventListener("click", event => {
  if (nav.classList.contains("open") && !nav.contains(event.target) && !menu.contains(event.target)) {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }
});


// Formulário de orçamento: monta a solicitação e abre o WhatsApp.
const quoteForm = document.getElementById("quote-form");
if (quoteForm) {
  const dateInput = document.getElementById("q-date");
  if (dateInput) {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    dateInput.min = today.toISOString().split("T")[0];
  }

  quoteForm.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.getElementById("quote-status");
    const data = new FormData(quoteForm);
    const name = String(data.get("name") || "").trim();
    const date = String(data.get("date") || "").trim();
    const type = String(data.get("type") || "").trim();
    const theme = String(data.get("theme") || "").trim();
    const details = String(data.get("details") || "").trim();

    if (!name || !date || !type) {
      status.textContent = "Preencha nome, data e tipo de comemoração.";
      status.className = "form-help error";
      return;
    }

    const [year, month, day] = date.split("-");
    const formattedDate = day && month && year ? `${day}/${month}/${year}` : date;
    const lines = [
      "Olá! Vi o site da Decorando Sonhos e gostaria de solicitar um orçamento.",
      "",
      `Nome: ${name}`,
      `Data da festa: ${formattedDate}`,
      `Tipo de comemoração: ${type}`,
      theme ? `Tema/ideia: ${theme}` : "",
      details ? `Detalhes: ${details}` : ""
    ].filter(Boolean);

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    status.textContent = "Abrindo o WhatsApp com sua solicitação...";
    status.className = "form-help success";
    window.open(url, "_blank", "noopener");
  });
}
