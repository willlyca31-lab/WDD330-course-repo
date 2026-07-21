export default class ProductDetails {


constructor(id, dataSource){

this.id = id;
this.dataSource = dataSource;

}



async init(){

const product =
await this.dataSource.findProductById(this.id);


this.render(product);

}



render(product){


const container =
document.querySelector(".product-detail");


container.innerHTML = `

<img 
src="${product.Images.PrimaryLarge}"
alt="${product.Name}"
>


<h1>
${product.Name}
</h1>


<p>
${product.Description}
</p>


<p>
$${product.Price}
</p>


<button id="addToCart"
data-id="${product.Id}">
Add to Cart
</button>

`;

}


}