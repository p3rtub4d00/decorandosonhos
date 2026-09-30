const CONFIG={whatsapp:"5569999999999",instagram:"decorandosonhos_pvh"};

// Replace these sources with the final photos; layout and crops stay in CSS.
const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=90",
  works: [
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=85"
  ]
};
document.querySelector("#inicio img").src = PHOTOS.hero;
document.querySelectorAll("#workTrack img").forEach((img, index) => {
  img.src = PHOTOS.works[index];
  img.loading = "lazy";
  img.decoding = "async";
});

document.querySelectorAll(".wa-link").forEach(a=>{
  a.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Vi o site da Decorando Sonhos e gostaria de solicitar um orçamento para uma festa.")}`;
  a.target="_blank";a.rel="noopener";
});

document.querySelectorAll(".insta-link").forEach(a=>{
  a.href=`https://instagram.com/${CONFIG.instagram}`;
  a.target="_blank";a.rel="noopener";
});

const menuBtn=document.getElementById("menuBtn");
const mobileNav=document.getElementById("mobileNav");
if(menuBtn&&mobileNav){
  menuBtn.addEventListener("click",()=>{
    const open=mobileNav.classList.toggle("hidden")===false;
    menuBtn.setAttribute("aria-expanded",String(open));
  });
  const closeMenu = () => {
    mobileNav.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  };
  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
}

// Keep the reference navigation usable until these sections receive content.
document.querySelectorAll('a[href="#sobre"], a[href="#servicos"], a[href="#depoimentos"]').forEach(a => {
  a.href = "#contato";
  a.classList.remove("nav-link");
});

const navLinks=[...document.querySelectorAll(".nav-link")];
const sections=[...document.querySelectorAll("main section[id]")];
const syncNav=()=>{
  let current="inicio";
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-180)current=s.id});
  navLinks.forEach(a=>{
    const active=a.getAttribute("href")==="#"+current;
    a.classList.toggle("text-pink",active);
    a.classList.toggle("border-pink",active);
    a.classList.toggle("border-transparent",!active);
  });
};
window.addEventListener("scroll",syncNav,{passive:true});
syncNav();

const track=document.getElementById("workTrack");
const moveWork = direction => {
  if (!track) return;
  const step = track.firstElementChild.getBoundingClientRect().width + 16;
  const max = track.scrollWidth - track.clientWidth;
  if (max <= 1) {
    if (direction > 0) track.append(track.firstElementChild);
    else track.prepend(track.lastElementChild);
  } else {
    const destination = track.scrollLeft + direction * step;
    track.scrollTo({left: destination > max + 1 ? 0 : destination < -1 ? max : destination, behavior: "smooth"});
  }
};
document.getElementById("prevWork")?.addEventListener("click",()=>moveWork(-1));
document.getElementById("nextWork")?.addEventListener("click",()=>moveWork(1));

document.getElementById("year").textContent=new Date().getFullYear();
window.addEventListener("DOMContentLoaded",()=>window.lucide?.createIcons());
window.lucide?.createIcons();
