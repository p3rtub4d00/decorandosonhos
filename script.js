const CONFIG={whatsapp:"5569999999999",instagram:"decorandosonhos_pvh"};
document.querySelectorAll(".wa-link").forEach(a=>{a.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Olá! Vi o site da Decorando Sonhos e gostaria de solicitar um orçamento para uma festa.")}`;a.target="_blank";a.rel="noopener"});
document.querySelectorAll(".insta-link").forEach(a=>{a.href=`https://instagram.com/${CONFIG.instagram}`;a.target="_blank";a.rel="noopener"});
const menu=document.querySelector(".menu"),nav=document.querySelector("#main-nav");
if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));document.addEventListener("click",e=>{if(nav.classList.contains("open")&&!nav.contains(e.target)&&!menu.contains(e.target)){nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}})}
const links=[...document.querySelectorAll("nav a")],sections=[...document.querySelectorAll("main section[id]")];
const sync=()=>{let current="inicio";sections.forEach(s=>{if(window.scrollY>=s.offsetTop-170)current=s.id});links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current))};
window.addEventListener("scroll",sync,{passive:true});sync();
document.getElementById("year").textContent=new Date().getFullYear();