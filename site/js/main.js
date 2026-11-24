(function(){
  var root=document.documentElement,saved=null;
  try{saved=localStorage.getItem('theme')}catch(e){}
  if(saved)root.setAttribute('data-theme',saved);
  document.getElementById('theme').onclick=function(){
    var t=root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',t);try{localStorage.setItem('theme',t)}catch(e){}};
  var m=document.getElementById('menu'),n=document.getElementById('nav');
  m.onclick=function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)};
  document.querySelectorAll('[data-count]').forEach(function(el){
    var end=+el.dataset.count,i=0,step=Math.max(1,Math.ceil(end/40));
    var t=setInterval(function(){i=Math.min(end,i+step);el.textContent=i;if(i>=end)clearInterval(t)},30)});
  var f=document.getElementById('form');
  if(f)f.onsubmit=function(e){e.preventDefault();var ok=true;
    f.querySelectorAll('[required]').forEach(function(x){
      var bad=!x.value.trim()||(x.type==='email'&&!/^\S+@\S+\.\S+$/.test(x.value));
      x.classList.toggle('err',bad);if(bad)ok=false});
    document.getElementById('status').textContent=ok?'Thank you! (Demo form: nothing was sent.)':'Please fix the highlighted fields.';
    if(ok)f.reset()};
})();
