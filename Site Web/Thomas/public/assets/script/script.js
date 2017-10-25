window.onload = function () {
  var cadre = document.getElementById('yeux'),
      s = yeux.style, // Un petit raccourci
      i = yeux.offsetLeft, // On récupère la position absolue initiale.
      j = yeux.offsetTop;
  document.onkeydown = function(event){
      var event = event || window.event,
          keyCode = event.keyCode;

      // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
      switch(keyCode){
      case 38:   // Vers le haut
        event.preventDefault();
          j--;
          break;
      case 40:  // Vers le bas
        event.preventDefault();
          j++;
          break;
      case 37:  // Vers la gauche
        event.preventDefault();
          i--;
          break;
      case 39:  // Vers la droite
        event.preventDefault();
          i++;
          break;
      }
      // Et enfin on applique les modifications :
      s.left = String(i)+'px';
      s.top = String(j)+'px';
  }

}
