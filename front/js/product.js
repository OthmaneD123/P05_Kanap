postProduct();

// Recuperation de L'id dans l'url
//var str = "http://localhost:3000/api/products";
var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);
var article ="";

var colorsProduct = document.getElementById("colors");
var quantityProduct = document.getElementById("quantity");

// Recuperation des articles dans l'api
function catchApi () {
  const recupArticlesApi = fetch ("http://localhost:3000/api/products"+ idProduct)
  .then(function(res){
        if (res.ok) {
          return res.json(); // si on recois bien la reponse , on la recevra sous format json
        }
      })
  
      .then(function(value) { // on recupere les données de l'api puis on les stocks dans notre tableau , et on verifie avec un console.log
        apiProduct = value;
        console.log(apiProduct);
        postproduct();
       });
}
//  Récupérer l’id du produit à afficher
var recupId = 'http://localhost:3000/api/products/' + idProduct;
    
//Affichage du produit 
function postProduct(){
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

  // Option choix de couleur
  for (var colors of article.colors){
      var colorsProduct = document.createElement("option");
      document.querySelector("#colors").appendChild(colorsProduct);
      colorsProduct.value = colors;
      colorsProduct.innerHTML = colors ;

  }
  addToCart(article);
}

// Ajout Panier
function addToCart(article){
    const btn_envoyerPanier = document.getElementById("addtocart");

    // Ici on passe le parametre , si la quantite est superieur a zeros et inferieur a 100 et different de zeros
    btn_envoyerPanier.addEventListener("click",(event)=>{
        if(quantityProduct.value > 0 && quantityProduct.value < 100 && quantityProduct !=0){

            //On recupere le choix de la couleur 
            var couleurChoisie = colorsProduct.value;
            
            //On recupere le choix de quantité
            var quantiteChoisie = quantityProduct.value;

            // On recupere les caracteristiques de l'article ajouter au panier 
            var infoArticle = {
                idProduit : idProduct,
                nomProduit : idProduct,
                couleurProduit : idProduct,
                prixProduit : idProduct,
                quantiteProduit : idProduct,
                descriptionProduit : idProduct,
                imageProduit : idProduct,
            };
            // Initialisation du locastorage
            var produitLocalStorage = JSON.parse(localstrorage.getitem("produit"));

            //fenêtre pop-up
    const popupConfirmation =() =>{
      if(window.confirm(`Votre commande de ${quantiteChoisie} ${article.name} ${couleurChoisie} est ajoutée au panier
Pour consulter votre panier, cliquez sur OK`)){
          window.location.href ="cart.html";
      }
  }    //Importation dans le local storage
  //Si le panier comporte déjà au moins 1 article
  if (produitLocalStorage) {
  const resultFind = produitLocalStorage.find(
      (el) => el.idProduit === idProduct && el.couleurProduit === couleurChoisie);
      //Si le produit commandé est déjà dans le panier
      if (resultFind) {
          let newQuantite =
          parseInt(optionsProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
          resultFind.quantiteProduit = newQuantite;
          localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
          console.table(produitLocalStorage);
          popupConfirmation();
      //Si le produit commandé n'est pas dans le panier
      } else {
          produitLocalStorage.push(optionsProduit);
          localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
          console.table(produitLocalStorage);
          popupConfirmation();
      }
  //Si le panier est vide
  } else {
      produitLocalStorage =[];
      produitLocalStorage.push(optionsProduit);
      localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
      console.table(produitLocalStorage);
      popupConfirmation();
  }}
  });
}

