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
document.querySelector(".menu").addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
