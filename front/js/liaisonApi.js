// Cette function sert a recuperer les produit que l'on a sur l'API 

var apiProduct = [] ; // creation de la variable ou l'on stockera nos données
const recupApi = fetch ("http://localhost:3000/api/products")
.then(function(res){
      if (res.ok) {
        return res.json(); // si on recois bien la reponse , on la recevra sous format json
      }
    })

    .then(function(value) { // on recupere les données de l'api puis on les stocks dans notre tableau , et on verifie avec un console.log
      apiProduct = value;
      console.log(apiProduct);

      affichageProduit();
     });
     