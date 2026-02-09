let products = [];
async function fetchData() {

  // const res = await fetch(`https://fakestoreapi.com/products`);

  const res = await fetch(`https://dummyjson.com/products?limit=100
`);

  products = await res.json();
  console.log(products);
  renderProducts();
}
ـ
fetchData().then(() => {
  console.log(products);
});

function renderProducts() {
  const showProducts = products.products
    .map((product) => {
      return `
   <div class="card m-1 border-2" style="width: 250px; height: 450px;"
>
     
      <img 
  src="${product.images ? product.images[0] : product.thumbnail}" 
  alt="${product.title}" 
  class="card-img-top " 
  
  style="height:110px; object-fit:contain;"
  onerror="this.src='https://via.placeholder.com/200'"
>

      <div class="card-body d-flex flex-column justify-content-between ">
      
      <h5 class="card-title fs-6 text-danger" style="font-size:25px">${product.title}</h5>
      
        <p class="card-text" style="font-size:18px">
         ${product.description.slice(0, 50) + '...'}
        </p>
        <div  class="d-flex text-primary  justify-content-between">
        <span>${product.price}</span>
        <span>${product.rating}⭐</span>
        </div>
        <a href="#" class="btn btn-warning">ORDER NOW</a>
      </div>
    </div>`;
    })
    .join('');
  document.getElementById('products').innerHTML = showProducts;
}
