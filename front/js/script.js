// Cette function sert a recuperer les produit que l'on a dans l'API 
function catchApi () {
  const recupArticlesApi = fetch ("http://localhost:3000/api/products")
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
}     
//Ici on va prendre les elements recupere dans l'API pour les afficer dans la page d'acceui
function affichageProduit() {
  for (var i = 0; i < apiProduct.length ; i++) {
     var articles = document.getElementById("items");
     console.log(apiProduct[i]);
 
   var afficheHTML = '' ;
     afficheHTML += '<a href="./product.html?id='+apiProduct[i]._id+'"> <article>';  
     afficheHTML += '<img src="'+apiProduct[i].imageUrl+'"/>';  
     afficheHTML += '<h3 classe = productName>"'+apiProduct[i].name+'"</h3>';   
     afficheHTML += '<p classe = productDescription>"'+apiProduct[i].description+'"</p>';   
     afficheHTML += '</article> </a>';  

     articles.innerHTML += afficheHTML;  
     console.log('i:'+i)
     
   }
 }
 catchApi ();
 /*fillSection();

// Récupération des articles de l'API
async function getArticles() {
    var articlesCatch = await fetch("http://localhost:3000/api/products")
    return await articlesCatch.json();
}

    // Répartition des données de l'API dans le DOM
async function fillSection() {
    var result = await getArticles ()
    .then(function (resultatAPI){
        const articles = resultatAPI;
        console.table(articles);
        for (let article in articles) {

            // ajout de l'élément "a"
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${resultatAPI[article]._id}`;

            // ajout  de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // ajout de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = resultatAPI[article].imageUrl;
            productImg.alt = resultatAPI[article].altTxt;

            // ajout du titre "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = resultatAPI[article].name;

            // ajout de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = resultatAPI[article].description;
        }
    })
}*/