function envoyer(event) {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nomRegex = /^[A-Za-z]+$/;
    var prenomRegex = /^[A-Za-z]+$/;

    if (!emailRegex.test(email)) {
        event.preventDefault();
        console.log('Veuillez saisir une adresse e-mail valide.');
    }
    if (!nomRegex.test(nom)) {
        event.preventDefault();
        console.log('Le champ du nom doit contenir uniquement des lettres.');
    }
    if (!prenomRegex.test(prenom)) {
        event.preventDefault();
        console.log('Le champ du prénom doit contenir uniquement des lettres.');
    }
}