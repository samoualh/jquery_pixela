$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();
        const username = $("#username").val().trim();
        const token = $("#token").val().trim();

        if (!username || !token) {
            alert("Veuillez entrer un nom d'utilisateur et un token.");
            return;
        }

        localStorage.setItem("pixelaUsername", username);
        localStorage.setItem("pixelaToken", token);

        alert("Connexion réussie !");
        window.location.href = "dashboard.html";
    });

    $("#register-form").submit(function (e) {
        e.preventDefault();
        const username = $("#new-username").val().trim();
        const password = $("#new-password").val().trim();

        $.ajax({
            url: "https://pixe.la/v1/users",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                token: password,
                username: username,
                agreeTermsOfService: "yes",
                notMinor: "yes",
            }),
            success: function () {
                alert("Inscription réussie !");
            },
            error: function (xhr) {
                alert("Erreur : " + xhr.responseText);
            },
        });
    });

    $("#logout-btn").click(function () {
        localStorage.clear();
        alert("Déconnecté !");
        window.location.href = "index.html";
    });
});