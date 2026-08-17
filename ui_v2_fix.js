/* v2 runtime fixes */
(function(){
  const client=supabase.createClient(IGMCRI_CONFIG.supabaseUrl,IGMCRI_CONFIG.supabasePublishableKey);
  client.auth.getUser().then(r=>{window.user=r.data?.user||null});
  function reorder(){const nav=document.querySelector('.nav');if(!nav)return;const wanted=['Dashboard','OPD Registration','Major OT','Minor OT','Endoscopy','Follow-up','OT List Generator','Waiting Lists','Sign out'];const bs=[...nav.querySelectorAll('button')];for(const t of wanted){const b=bs.find(x=>x.textContent.trim()===t);if(b)nav.appendChild(b)}}
  const obs=new MutationObserver(()=>reorder());obs.observe(document.documentElement,{childList:true,subtree:true});setTimeout(reorder,100);setTimeout(reorder,500);setTimeout(reorder,1500);
})();
