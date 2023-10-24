// Fonction pour générer un mot de passe aléatoire
     function generatePassword() {
    
    // Définir les caractères possibles
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    
    // Définir la longueur du mot de passe
    var length = 12;
    
    // Initialiser le mot de passe vide
    var password = "";
    
    // Boucler sur la longueur du mot de passe
    for (var i = 0;  i < length; i++) {
    
      // Choisir un caractère aléatoire parmi les caractères possibles
      var  index  = Math.floor(Math.random() * chars.length);
      
      var char = chars[index];
      
      // Ajouter le caractère au mot de passe
      password += char;
    }
    // Retourner le mot de passe généré
    return password;
  }

  // Sélectionner l'élément bouton
  var button = document.getElementById("generate");
  // Sélectionner l'élément paragraphe
  var paragraph = document.getElementById("password");
  
  
  // Ajouter un écouteur d'événement au clic du bouton
  button.addEventListener("click", function() {
    // Générer un mot de passe aléatoire
    var password = generatePassword();
    
    // Afficher le mot de passe dans le paragraphe
    paragraph.textContent = password;
  });

//   alert("enter ok");