document.addEventListener("DOMContentLoaded", function() {
  obtenirIPUtilisateur(function(ip) {
    var ipUtilisateurElement = document.getElementById("ip-utilisateur");
    ipUtilisateurElement.textContent = ip;
  });
});

function obtenirIPUtilisateur(callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var ip = response.ip;
        callback(ip);
      } else {
        console.error("Erreur lors de la requête : " + xhr.status);
        callback("Impossible d'obtenir l'adresse IP");
      }
    }
  };
  xhr.open("GET", "https://api.ipify.org?format=json");
  xhr.send();
}
