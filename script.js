// Base de datos simulada
let users = [{ username: "admin", password: "password123" }];

// Navegación entre secciones
const loginSection = document.getElementById("login-section");
const signupSection = document.getElementById("signup-section");
const dashboardSection = document.getElementById("dashboard-section");
const goToSignup = document.getElementById("go-to-signup");
const goToLogin = document.getElementById("go-to-login");

// Formularios
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginError = document.getElementById("login-error");
const signupError = document.getElementById("signup-error");

// Dashboard
const currentUserSpan = document.getElementById("current-user");
const logoutButton = document.getElementById("logout");

// Función para ocultar todas las secciones
function hideAllSections() {
  loginSection.style.display = "none";
  signupSection.style.display = "none";
  dashboardSection.style.display = "none";
}

// Navegar a registro
goToSignup?.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  signupSection.style.display = "block";
});

// Navegar a inicio de sesión
goToLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  loginSection.style.display = "block";
});

// Manejar inicio de sesión
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    hideAllSections();
    dashboardSection.style.display = "block";
    currentUserSpan.textContent = username;
    loginError.textContent = "";
    loginForm.reset();
  } else {
    loginError.textContent = "Usuario o contraseña incorrectos.";
  }
});

// Manejar registro de usuario
signupForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (username === "" || password === "") {
    signupError.textContent = "Por favor, completa todos los campos.";
    return;
  }

  const userExists = users.some((u) => u.username === username);

  if (userExists) {
    signupError.textContent = "El usuario ya existe. Elige otro.";
  } else {
    users.push({ username, password });
    hideAllSections();
    loginSection.style.display = "block";
    signupError.textContent = "";
    signupForm.reset();
    alert("Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
  }
});

// Manejar cierre de sesión
logoutButton?.addEventListener("click", () => {
  hideAllSections();
  loginSection.style.display = "block";
});
