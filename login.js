let attempts = 0;

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const sunet = document.getElementById('sunet').value.trim();
  const password = document.getElementById('password').value;

  if (sunet === 'ST2025-014' && password === 'remzifarzaliyev2007') {
    window.location.href = 'dashboard.html';
  } else {
    attempts++;
    const errorMsg = document.getElementById('error-msg');
    if (attempts >= 4) {
      alert("You have logged in incorrectly 4 times. You are being redirected to the home page.");
      window.location.href = 'index.html';
    } else {
      errorMsg.textContent = `Incorrect entry! ${4 - attempts} You have the right to try.`;
    }
  }
});


