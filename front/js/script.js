// Cette function sert a recuperer les produit que l'on a sur l'API 
// Creation de la variable pour y stocker les données
var apiProduct = []; // creation de la variable ou l'on stockera nos données

fetch ("http://localhost:3000/api/products")
.then(function(res){
      if (res.ok) {
        return res.json(); // si on recois bien la reponse , on la recevra sous format json
      }
    })

    .then(function(value) { // on recupere les données de l'api puis on les stocks dans notre tableau , et on verifie avec un console.log
      apiProduct = value;
      console.log(apiProduct);
     });

// Ici on va prendre les elements recupere dans l'API pour les afficer dans la page d'acceuil
/*var articles = document.getElementById("test"); 
articles.innerHTML= 'Salut je suis rajouter via le JS'
for(var i = 0; i < apiProduct.length ; i ++){
    articles.innerHTML = apiProduct;
   
   console.log();
}
*/
const newElt = document.createElement("article");
let elt = document.getElementById("items");

elt.appendChild(newElt);



