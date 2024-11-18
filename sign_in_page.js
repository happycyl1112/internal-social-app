document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const signupSection = document.getElementById("signup-section");
    const loginSection = document.getElementById("login-section");
    const profileSection = document.getElementById("profile-section");

    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    let user = null;

    signupBtn.addEventListener("click", () => {
        loginSection.classList.add("hidden");
        profileSection.classList.add("hidden");
        signupSection.classList.remove("hidden");
    });

    loginBtn.addEventListener("click", () => {
        signupSection.classList.add("hidden");
        profileSection.classList.add("hidden");
        loginSection.classList.remove("hidden");
    });

    logoutBtn.addEventListener("click", () => {
        user = null;
        logoutBtn.style.display = "none";
        profileSection.classList.add("hidden");
        loginSection.classList.remove("hidden");
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        user = {
            name: document.getElementById("signup-name").value,
            email: document.getElementById("signup-email").value,
        };
        showProfile();
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (user && user.email === document.getElementById("login-email").value) {
            showProfile();
        } else {
            alert("Invalid login details.");
        }
    });

    function showProfile() {
        signupSection.classList.add("hidden");
        loginSection.classList.add("hidden");
        profileSection.classList.remove("hidden");
        logoutBtn.style.display = "block";

        document.getElementById("profile-name").textContent = `Name: ${user.name}`;
        document.getElementById("profile-email").textContent = `Email: ${user.email}`;
    }
});
