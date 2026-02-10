let products = [];

let limitData = 15;

async function fetchApi(limitData) {
  const res = await fetch(`https://dummyjson.com/products?limit=${limitData}
`);
  const data = await res.json();
  console.log(data);
  products = data;
  showProduct();
}

function showProduct() {
  const showData = products.products
    .map((el) => {
      let rating = Math.round(el.rating);
      let stars = '';
      for (let i = 0; i < rating; i++) {
        stars += "<i class='star fas fa-star'></i>";
      }
      return `<div class="product-card">
            <div class="discount">${el.discountPercentage}%</div>
            <img src='${el.images ? el.images[0] : el.images[1]}' alt='${el.brand}' />
            <h3>${el.brand || el.title}</h3>

            <p class="price"><span class="sale">${el.price}</span> <span class="old">${Math.round(el.price + (el.price * 30) / 100)}</span></p>
            <div class="rating">
            ${stars}
              <span>(${Math.floor(Math.random() * (250 - 30 + 1)) + 30})</span>
            </div>
            <div class="actions">
              <button class="add-cart">Add To Cart</button>
              <i class="heart far fa-heart"></i>
            </div>
          </div>`;
    })
    .join('');
  document.getElementById('products').innerHTML = showData;
}
fetchApi(limitData);
