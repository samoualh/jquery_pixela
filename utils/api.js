function loadGraphs() {
    const username = localStorage.getItem("pixelaUsername");
    const token = localStorage.getItem("pixelaToken");

    $.ajax({
        url: `https://pixe.la/v1/users/${username}/graphs`, // URL de l'API Pixela
        method: "GET",
        headers: { "X-USER-TOKEN": token }, // Envoi du token de l'utilisateur
        success: function (response) {
            let graphsHtml = ""; // Stocke le HTML des graphes
            if (response.graphs && response.graphs.length > 0) {
                response.graphs.forEach(function (graph) {
                    // Génération du HTML pour chaque graphe
                    graphsHtml += `
                        <div class="graph-item border p-2 my-2">
                            <strong>ID :</strong> ${graph.id}<br>
                            <strong>Nom :</strong> ${graph.name}<br>
                            <strong>Unité :</strong> ${graph.unit}<br>
                            <strong>Type :</strong> ${graph.type}<br>
                            <strong>Couleur :</strong> ${graph.color}<br>
                            <!-- Image du graphe récupérée via l'API Pixela -->
                            <img class="graph-svg img-fluid mt-2" src="https://pixe.la/v1/users/${username}/graphs/${graph.id}" alt="Graph ${graph.id}">
                        </div>
                    `;
                });
            } else {
                graphsHtml = "<p>Aucun graphe trouvé.</p>"; // Message si aucun graphe n'est disponible
            }
            $("#graphs-list").html(graphsHtml); // Mise à jour de l'affichage
        },
        error: function () {
            alert("Erreur lors du chargement des graphes.");
        }
    });
}

// Fonction pour créer un graphe
$(document).ready(function () {
    $("#create-graph-form").submit(function (e) {
        e.preventDefault();
        const username = localStorage.getItem("pixelaUsername");
        const token = localStorage.getItem("pixelaToken");

        const graphID = $("#graph-id").val();
        const name = $("#graph-name").val();
        const unit = $("#graph-unit").val();
        const type = $("#graph-type").val();
        const color = $("#graph-color").val();

        $.ajax({
            url: `https://pixe.la/v1/users/${username}/graphs`,
            type: "POST",
            headers: { "X-USER-TOKEN": token },
            contentType: "application/json",
            data: JSON.stringify({ id: graphID, name: name, unit: unit, type: type, color: color }),
            success: function () {
                alert("Graphe créé !");
                loadGraphs(); // Recharge la liste des graphes
            },
            error: function (xhr) {
                alert("Erreur : " + xhr.responseText);
            },
        });
    });

    const username = localStorage.getItem("pixelaUsername");
    const token = localStorage.getItem("pixelaToken");

    if (username && token) {
        $("#auth-section").hide();
        $("#dashboard").show();
        loadGraphs(); // Chargement automatique des graphes
    }
});
