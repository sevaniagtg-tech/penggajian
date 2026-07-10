function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (username === "admin" && password === "12345") {

        alert("Login Berhasil!");

        window.location.href = "dashboard.html";

    } else {

        error.innerHTML = "Username atau Password salah!";

    }

}