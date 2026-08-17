/* Final v4 stabilizer: ensure OT tab renders the exact standalone generator and keep the v4 hooks alive. */
(function(){
  const $=id=>document.getElementById(id);
  function generator(){const v=$('view');if(!v)return;v.innerHTML='<iframe src="ot-generator.html?v=20260817-v5" style="width:100%;height:calc(100vh - 150px);min-height:850px;border:0;border-radius:12px;background:#fff" title="IGMCRI OT List Generator"></iframe>';}
  const oldGo=window.go;
  window.go=function(t){if(t==='ot'){generator();return;}return oldGo?.(t)};
  const app=$('app')||document.body;new MutationObserver(()=>{const nav=[...document.querySelectorAll('.nav button')];const b=nav.find(x=>x.textContent.includes('Waiting Lists'));const n=document.querySelector('.nav');if(b&&n)n.appendChild(b)}).observe(app,{childList:true,subtree:true});
})();
