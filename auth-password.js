// IGMCRI Surgery — password-only authentication layer.
// Replaces the legacy email OTP form whenever app.js renders it.
(function () {
  const client = supabase.createClient(IGMCRI_CONFIG.supabaseUrl, IGMCRI_CONFIG.supabasePublishableKey);
  let lastBox = null;
  function showPasswordLogin() {
    const app = document.getElementById('app');
    if (!app) return;
    const box = app.querySelector('.login');
    if (!box || box.dataset.passwordLogin === '1') return;
    box.dataset.passwordLogin = '1';
    box.innerHTML = `
      <h1>IGMCRI Surgery</h1>
      <p class="muted">OPD • Waiting Lists • Major OT • Minor OT • Endoscopy</p>
      <form id="passwordLoginForm">
        <label>Staff email</label>
        <input id="loginEmail" type="email" autocomplete="username" required placeholder="Staff email">
        <label style="margin-top:10px">Password</label>
        <input id="loginPassword" type="password" autocomplete="current-password" required placeholder="Password">
        <div class="actions"><button type="submit">Sign in</button></div>
        <p id="loginMessage" class="muted" style="margin-top:10px">Routine login does not send an email or OTP.</p>
      </form>`;
    document.getElementById('passwordLoginForm').addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const message = document.getElementById('loginMessage');
      message.textContent = 'Signing in…';
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) message.textContent = error.message;
    });
    lastBox = box;
  }
  const start = () => {
    const app = document.getElementById('app');
    if (!app) return setTimeout(start, 50);
    new MutationObserver(showPasswordLogin).observe(app, {childList:true, subtree:true});
    showPasswordLogin();
    setInterval(showPasswordLogin, 750);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
