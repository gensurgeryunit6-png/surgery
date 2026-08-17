/* v2 runtime fixes */
(function(){
  const client=supabase.createClient(IGMCRI_CONFIG.supabaseUrl,IGMCRI_CONFIG.supabasePublishableKey);
  client.auth.getUser().then(r=>{window.user=r.data?.user||null});
  function reorder(){const nav=document.querySelector('.nav');if(!nav)return;const wanted=['Dashboard','OPD Registration','Major OT','Minor OT','Endoscopy','Follow-up','OT List Generator','Waiting Lists','Sign out'];const bs=[...nav.querySelectorAll('button')];for(const t of wanted){const b=bs.find(x=>x.textContent.trim()===t);if(b)nav.appendChild(b)}}
  function blockLegacyWaitingEnhancer(){const h=document.querySelector('#view h2');if(h&&h.textContent.trim()==='Waiting Lists'&&!document.getElementById('wait-type-filter')){const x=document.createElement('select');x.id='wait-type-filter';x.style.display='none';document.body.appendChild(x)}}
  function bindLaterality(){const d=document.getElementById('v2-diagnosis'),l=document.getElementById('v2-laterality');if(!d||!l||d.dataset.latBound)return;d.dataset.latBound='1';l.addEventListener('change',()=>{const base=(d.value||'').replace(/\s+\[Laterality:.*\]$/,'').trim();d.value=base&&l.value!=='Not applicable'?`${base} [Laterality: ${l.value}]`:base});}
  const obs=new MutationObserver(()=>{reorder();blockLegacyWaitingEnhancer();bindLaterality()});obs.observe(document.documentElement,{childList:true,subtree:true});setTimeout(reorder,100);setTimeout(reorder,500);setTimeout(reorder,1500);
})();
