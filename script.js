
const h2 = document.querySelectorAll("h2");
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform="translateX(0)"}
  })
},{threshold:0.2});
h2.forEach(el=>{
  el.style.opacity=0;
  el.style.transform="translateX(-20px)";
  el.style.transition="all .6s ease";
  obs.observe(el);
});
