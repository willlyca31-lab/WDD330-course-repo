export default class ProductList {


  constructor(category, dataSource, listElement){

    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;

  }



  async init(){

    const products =
      await this.dataSource.getData(this.category);


    this.renderList(products);

    this.updateTitle();

  }



  renderList(products){


    this.listElement.innerHTML =
    products.map(product => {


      return `

      <li class="product-card">

        <a href="../product_pages/index.html?product=${product.Id}">

          <img 
          src="${product.Images.PrimaryMedium}"
          alt="${product.Name}"
          >

          <h2>${product.Name}</h2>

          <p>
          $${product.Price}
          </p>

        </a>

      </li>

      `;


    }).join("");

  }



  updateTitle(){

    const title =
    document.querySelector(".title");


    if(title){

      title.textContent =
      this.category.replace("-", " ");

    }

  }


}