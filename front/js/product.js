// Variables
let  title = document.getElementById('title');
let  price = document.getElementById('price');
let  description = document.getElementById('description');
let  colors = document.getElementById('colors');
let  quantity = document.getElementById('quantity');

// Recuperation de L'id dans l'url
var str = "http://localhost:3000/api/products";
var url = new URL(str);
var name = url.searchParams.get("name");
console.log(name);

//  Récupérer l’id du produit à afficher
var idPProduit = 'http://localhost:3000/api/products/' + id;
    

iProduit();

//Affichage du produit 
function afficheProduitProduct () {
    title.innerhtml = apiProduct.name;
    price.innerhtml = apiProduct.price;
    description.innerhtml = apiProduct.description;
} 
afficheProduitProduct();

