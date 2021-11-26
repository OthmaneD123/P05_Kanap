
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
 affichageProduit()