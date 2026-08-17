// IGMCRI Surgery — password-only staff login.
// Demo/bootstrap account: username admin. Supabase uses a hidden internal identity;
// the user never needs to enter an email address.
(function () {
  const client = supabase.createClient(IGMCRI_CONFIG.supabaseUrl, IGMCRI_CONFIG.supabasePublishableKey);
  const USERS = { admin: 'admin@igmcri.local' };
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
        <label>Username</label>
        <input id="loginUsername" type="text" autocomplete="username" required placeholder="Username">
        <label style="margin-top:10px">Password</label>
        <input id="loginPassword" type="password" autocomplete="current-password" required placeholder="Password">
        <div class="actions"><button type="submit">Sign in</button></div>
        <p id="loginMessage" class="muted" style="margin-top:10px">Demo administrator: admin</p>
      </form>`;
    document.getElementById('passwordLoginForm').addEventListener('submit', async function (e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value.trim().toLowerCase();
      const password = document.getElementById('loginPassword').value;
      const message = document.getElementById('loginMessage');
      const email = USERS[username];
      if (!email) { message.textContent = 'Invalid username'; return; }
      message.textContent = 'Signing in…';
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) message.textContent = error.message;
    });
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
