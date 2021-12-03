
     async function recupArticleApi(){
        var articlesApi = await fetch ("http://localhost:3000/api/products")
        return await articlesApi.json();
        affichageProduit()
      }   

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

   

         // Insertion de l'image
  var imgProduct = document.createElement("img");
  document.querySelector(".item__img").appendChild (imgProduct);
  imgProduct.src = article.imageUrl;

  // Titre du produit
  var nameProduct = document.getElementById('title');
  nameProduct.innerHTML = article.name;

  //Prix du produit
  var priceProduct = document.getElementById('price');
  priceProduct.innetHTML = article.price; 

  //Description du produit
  var descriptionProduct = document.getElementById('description');
  descriptionProduct.innerHTML = article.descriptions;
