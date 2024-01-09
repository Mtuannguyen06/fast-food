const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password');
const registerForm = document.getElementById('register-form');

function handleRegister (e) {
    e.preventDefault();
  const user = {
    email: emailElm.value,
    password: passwordElm.value
  }
  const usersLocal = localStorage.getItem('users');
  if (usersLocal === null) {
    const users = [user];
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    const users = JSON.parse(usersLocal);
    console.log(users[0]);
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if(element.email === user.email) {
        alert('Bi trung email!');
        return;
      }
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  emailElm.value = "";
  passwordElm.value = "";
  alert("Dang ky thanh cong!")
  window.location = "./login.html";
}

registerForm.addEventListener("submit", handleRegister);

const loginBtn = document.getElementById('login-page');

function loginPG() {
  window.location.href = "login.html"
}

loginBtn.addEventListener('click', loginPG)