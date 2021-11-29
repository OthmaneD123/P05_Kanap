// Recuperation de L'id dans l'url
var str = "http://localhost:3000/api/products";
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);

//  Récupérer l’id du produit à afficher
var recupId = 'http://localhost:3000/api/products/' + idProduct;
    
// Récupération des articles de l'API
function recupArticle(){
    fetch('http://localhost:3000/api/products/' + idProduct)
    .then((res) => {
        return res.json()
    })
}
//idProduit();

//Affichage du produit 
/*function afficheProduitProduct () {
    let  title = document.getElementById('title');
    let  price = document.getElementById('price');
    let  description = document.getElementById('description');
    let  colors = document.getElementById('colors');
    let  quantity = document.getElementById('quantity');

    title.innerhtml = apiProduct.name;
    price.innerhtml = apiProduct.price;
    description.innerhtml = apiProduct.description;
} ;*/