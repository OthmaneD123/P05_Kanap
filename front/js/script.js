// Cette function sert a recuperer les produit que l'on a sur l'API 

var apiProduct = [] ; // creation de la variable ou l'on stockera nos données
const recupApi = fetch ("http://localhost:3000/api/products")
.then(function(res){
      if (res.ok) {
        return res.json(); // si on recois bien la reponse , on la recevra sous format json
      }
      var apiProduct = [] ; // creation de la variable ou l'on stockera nos données
    })

    .then(function(value) { // on recupere les données de l'api puis on les stocks dans notre tableau , et on verifie avec un console.log
      apiProduct = value;
      console.log(apiProduct);
      affichageProduit();
     });
     
//Ici on va prendre les elements recupere dans l'API pour les afficer dans la page d'acceuil

function affichageProduit() {
  for (var i = 0; i < apiProduct.length ; i++) {
     var articles = document.getElementById("items");
     console.log(apiProduct[i]);
 
   var afficheHTML = '' ;
     afficheHTML += '<a href="./product.html?id='+apiProduct[i]._id+'"> <article>';  
     afficheHTML += '<img src="'+apiProduct[i].imageUrl+'"/>';  
     afficheHTML += '<h3 classe = productName>"'+apiProduct[i].name+'"</h3>';   
     afficheHTML += '<p classe = productDescription>"'+apiProduct[i].description+'"</p>';   
     afficheHTML += apiProduct[i].price+' $ ';  
     afficheHTML += '</article> </a>';  
     
     articles.innerHTML += afficheHTML;  
     console.log('i:'+i)
   }
 }
