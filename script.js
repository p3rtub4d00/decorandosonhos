const CONFIG={whatsapp:"5569999999999",instagram:"decorandosonhos_pvh"};

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
  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobileNav.classList.add("hidden")));
}

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
document.getElementById("prevWork")?.addEventListener("click",()=>track?.scrollBy({left:-320,behavior:"smooth"}));
document.getElementById("nextWork")?.addEventListener("click",()=>track?.scrollBy({left:320,behavior:"smooth"}));

document.getElementById("year").textContent=new Date().getFullYear();
window.addEventListener("DOMContentLoaded",()=>window.lucide?.createIcons());
window.lucide?.createIcons();