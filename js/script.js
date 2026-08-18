document.getElementById("contactForm").addEventListener("submit", function(event) {
const formulaire = document.getElementById("contactForm");

    event.preventDefault();

    // Récuperation des informations du formulaitre

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const numerowhatsApp = "243984633415";

    const texteWhatsApp = "Bonjour TECHNOVA %0A%0A" + "Je souhaite vous contacter concernant un projet.%0A%0A" +

    "Nom :* " + encodeURIComponent(nom) + "%0A" + "*E-mail :* " + encodeURIComponent(email) +
    "%0A" + "*Télephone :* " + encodeURIComponent(telephone) +
    "%0A" + "*Service souhaité :* " + encodeURIComponent(service) +
    "%0A" + "*Projet :* " + encodeURIComponent(message) ;

    // Création du lien whatsApp

    const lienWhatsApp = "https://wa.me/" + numerowhatsApp + "?text=" + texteWhatsApp;
    
// ouvre whatsApp
    window.open(lienWhatsApp, "_blank"); 
});
