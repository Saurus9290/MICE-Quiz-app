const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const redirectToQuiz = () => {
  localStorage.setItem('username', 'saurabh');
  window.location.href = 'quiz.html';
};
const handleLogin = (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'saurabh' && password === '123456') {
    redirectToQuiz();//calling function
  } else {
    alert('Invalid username or password');
  }
};
const handleLogout = () => {
  localStorage.removeItem('username');
  window.location.href = 'index.html';
};
const isLoggedIn = () => {
  return localStorage.getItem('username') !== null;
};
if (isLoggedIn()) {
  const username = localStorage.getItem('username');
  const sidebarUsername = document.getElementById('sidebar-username');
  if (sidebarUsername) {
    sidebarUsername.textContent = username.charAt(0).toUpperCase();
  }
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.style.display = 'block';
    logoutButton.addEventListener('click', handleLogout);
  }
}
loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';

  setTimeout(() => {
    signupForm.style.opacity = 0;
    loginForm.style.opacity = 1;
  }, 10);
});
signupLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';

  setTimeout(() => {
    loginForm.style.opacity = 0;
    signupForm.style.opacity = 1;
  }, 10);
});
const loginButton = document.querySelector('#login-form button[type="submit"]');
loginButton.addEventListener('click', handleLogin);
