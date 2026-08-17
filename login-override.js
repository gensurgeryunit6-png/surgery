/* IGMCRI Surgery: username + password login. No OTP/email login. */
(function(){
  const cfg=window.IGMCRI_CONFIG;
  if(!cfg||!window.supabase)return;
  const client=window.supabase.createClient(cfg.supabaseUrl,cfg.supabasePublishableKey);
  function toast(m){let d=document.querySelector('.toast');if(!d){d=document.createElement('div');d.className='toast';document.body.appendChild(d)}d.textContent=m;clearTimeout(d._t);d._t=setTimeout(()=>d.remove(),3500)}
  function replaceLogin(){
    const box=document.querySelector('.login');
    if(!box)return;
    if(box.dataset.passwordLogin==='1')return;
    box.dataset.passwordLogin='1';
    box.innerHTML=`<h1>IGMCRI Surgery</h1><p class="muted">OPD • Waiting Lists • OT • Endoscopy</p><form id="passwordLoginForm"><label>Username</label><input id="loginUsername" type="text" required autocomplete="username" placeholder="Staff ID / username"><label style="margin-top:10px">Password</label><input id="loginPassword" type="password" required autocomplete="current-password" placeholder="Password"><div class="actions"><button type="submit">Sign in</button></div><p class="muted" style="margin-top:10px">Routine login uses username + password. No email or OTP is required.</p></form>`;
    document.getElementById('passwordLoginForm').addEventListener('submit',async e=>{
      e.preventDefault();
      const username=document.getElementById('loginUsername').value.trim().toLowerCase();
      const password=document.getElementById('loginPassword').value;
      if(username!=='admin'){toast('For now, use username: admin');return}
      const {error}=await client.auth.signInWithPassword({email:'admin@igmcri.local',password});
      if(error)toast(error.message); else toast('Signed in');
    });
  }
  const obs=new MutationObserver(replaceLogin);
  obs.observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
  setInterval(replaceLogin,500);
  replaceLogin();
})();
