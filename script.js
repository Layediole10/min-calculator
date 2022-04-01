//fonction qui évalue le chiffre et renvoie la sortie
function calculer() 
{ 
    let a = document.getElementById("affichage").value 
    let b = eval(a) 
    document.getElementById("affichage").value = b 
} 
//fonction qui affiche les entrees
function afficher(entree){ 
    
    document.getElementById("affichage").value+=entree 
    
    
      
} 
//fonction qui efface l'écran 
function effacer(){ 
    document.getElementById("affichage").value = "" 
} 


