const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
if (!productId || productId === 'undefined') {
  window.location.href = 'index.html';
}
// بنجيب بيانات المنتج حسب id
async function getProduct(productId) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);

    const product = await response.json();
    console.log(product);
    document.getElementById('product-info').innerHTML = ShowProductDetails(product);
  } catch (error) {
    console.error('حصل خطأ في جلب بيانات المنتج:', error);
  }
}

let ShowProductDetails = (product) => {
  let rating = Math.round(product.rating);
  let stars = '';

  for (let i = 0; i < rating; i++) {
    stars += "<i class='star fas fa-star'></i>";
  }

  for (let i = rating; i < 5; i++) {
    stars += "<i class='fa-regular fa-star'></i>";
  }

  return `
  <div class="product-details">
 
  <div class="product-images">
  
        <div class="thumbnails">
        ${product.images.map(
          (img) =>
            `
            <div class='thumb'>
              <img src="${img}" />
            </div>
          `,
        )}
          
        

        </div>

          <div class="main-image">
          
         <img src="${product.images ? product.images[0] : product.images[1]}">
        </div>
        </div>

  <div id="product-info" class="product-info">
    <h2>${product.title}</h2>

    <div class="rating">
      ${stars}
      <span>(${product.stock})</span>
    </div>

    <h3 class="price"> ${product.price}$</h3>

    <p class="desc">
      ${product.description}
    </p>
            <div class="buy">
          <div class="qty">
            <button>-</button>
            <span>2</span>
            <button class="pluse">+</button>
          </div>

          <button class="buy-btn">Buy Now</button>
          <button class="fav"><i class="fa-regular fa-heart"></i></button>
        </div>
        
  </div>
 

  </div>
  <button 
  onclick="window.location.href='index.html'" 
  style="
    width: 190px;
    padding: 18px 0;
    margin: 50px auto;
    border: none;
    border-radius:15px;
    background-color: #222222;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    display: block;
  "
  
>
  عودة للصفحة الرئيسية
</button>

  `;
};
function goHome() {
  window.location.href = 'index.html';
}
getProduct(productId); // استدعاء الدالة
