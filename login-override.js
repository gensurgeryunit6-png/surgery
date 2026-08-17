/* IGMCRI Surgery: password-only staff login override. No OTP/email login. */
(function(){
  const cfg=window.IGMCRI_CONFIG;
  if(!cfg||!window.supabase)return;
  const client=window.supabase.createClient(cfg.supabaseUrl,cfg.supabasePublishableKey);
  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  function toast(m){let d=document.querySelector('.toast');if(!d){d=document.createElement('div');d.className='toast';document.body.appendChild(d)}d.textContent=m;clearTimeout(d._t);d._t=setTimeout(()=>d.remove(),3500)}
  function replaceLogin(){
    const box=document.querySelector('.login');
    if(!box||box.dataset.passwordLogin==='1')return;
    box.dataset.passwordLogin='1';
    box.innerHTML=`<h1>IGMCRI Surgery</h1><p class="muted">OPD • Waiting Lists • OT • Endoscopy</p><form id="passwordLoginForm"><label>Staff email</label><input id="loginEmail" type="email" required autocomplete="username" placeholder="Staff email"><label style="margin-top:10px">Password</label><input id="loginPassword" type="password" required autocomplete="current-password" placeholder="Password"><div class="actions"><button type="submit">Sign in</button></div><p class="muted" style="margin-top:10px">Use your departmental Supabase staff account. No email/OTP is sent during routine login.</p></form>`;
    document.getElementById('passwordLoginForm').addEventListener('submit',async e=>{
      e.preventDefault();
      const email=document.getElementById('loginEmail').value.trim();
      const password=document.getElementById('loginPassword').value;
      const {error}=await client.auth.signInWithPassword({email,password});
      if(error)toast(error.message); else toast('Signed in');
    });
  }
  const obs=new MutationObserver(replaceLogin);
  obs.observe(document.getElementById('app')||document.body,{childList:true,subtree:true});
  setInterval(replaceLogin,500);
  replaceLogin();
})();
