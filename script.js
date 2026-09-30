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

const revealTargets = document.querySelectorAll(".about,.portfolio,.process,.services,.contact,.instagram-strip");
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
