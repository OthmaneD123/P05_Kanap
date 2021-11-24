// Cette function sert a recuperer les produit que l'on a sur l'API 

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
affichageProduitAcceuil();
     });
//Ici on va prendre les elements recupere dans l'API pour les afficer dans la page d'acceuil


function affichageProduitAcceuil() {
 for (var i = 0; i < apiProduct.length ; i++) {
    var articles = document.getElementById("items");
    console.log(apiProduct[i]);

  var test = '' ;
    test += '<a href="./product.html?id='+apiProduct[i]._id+'"> <article>';  
    test += '<img src="'+apiProduct[i].imageUrl+'"/>';  
    test += apiProduct[i].price+' $ ';  
    test += '</article> </a>';  
    articles.innerHTML += test;  
    console.log('i:'+i)
  }
}


