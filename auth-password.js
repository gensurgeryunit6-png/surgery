// IGMCRI Surgery — password authentication layer
// Replaces the email OTP login UI so routine staff login does not consume Supabase email limits.
(function () {
  const client = supabase.createClient(IGMCRI_CONFIG.supabaseUrl, IGMCRI_CONFIG.supabasePublishableKey);

  function showPasswordLogin() {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = `
      <div class="login card">
        <h1>IGMCRI Surgery</h1>
        <p class="muted">OPD • Waiting Lists • Major OT • Minor OT • Endoscopy</p>
        <form id="passwordLoginForm">
          <label>Staff email / User ID</label>
          <input id="loginEmail" type="email" autocomplete="username" required placeholder="Enter staff email">
          <label>Password</label>
          <input id="loginPassword" type="password" autocomplete="current-password" required placeholder="Enter password">
          <div class="actions">
            <button type="submit">Sign in</button>
          </div>
          <p id="loginMessage" class="muted" style="margin-top:10px"></p>
        </form>
      </div>`;

    document.getElementById('passwordLoginForm').addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const message = document.getElementById('loginMessage');
      message.textContent = 'Signing in…';
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) {
        message.textContent = error.message;
        message.className = 'muted';
      }
    });
  }

  // app.js initially renders its old OTP form when there is no session.
  // Replace that form immediately with password login.
  window.addEventListener('load', function () {
    setTimeout(showPasswordLogin, 0);
  });
})();
