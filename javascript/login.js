const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password');
const loginForm = document.getElementById('login-form');

function handleLogin(e) {
  e.preventDefault;
  const email = emailElm.value
  const password = passwordElm.value
  const usersLocal = localStorage.getItem('users');
  const users = JSON.parse(usersLocal);
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if(element.email === email && element.password === password) {
      window.location = '/index.html'
      alert("Dang nhap thanh cong!");
      return;
    } 
  }

}

loginForm.addEventListener('click', handleLogin);

const registerBtn = document.getElementById('register-page');

function registerPG() {
  window.location.href = "register.html"
}

registerBtn.addEventListener('click', registerPG)