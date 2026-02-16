let products = [];

let limitData = 15;
let category = 'all';
async function fetchApi(limitData, category) {
  const url =
    category === 'all' ?
      `https://dummyjson.com/products?limit=${limitData}`
    : `https://dummyjson.com/products/category/${category}?limit=${limitData}`;

  const res = await fetch(url);
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
      return `<div id="product-card" data-id=${el.id}  class="product-card">
            <div class="discount">${el.discountPercentage}%</div>
            <img src='${el.images ? el.images[0] : el.images[1]}' alt='${el.brand}' />
            <h3>${el.brand || el.title}</h3>

            <p class="price"><span class="sale">${el.price}$</span> <span class="old">${(el.price / (1 - el.discountPercentage / 100)).toFixed(2)} $
</span></p>
            <div class="rating">
            ${stars}
              <span>(${Math.floor(Math.random() * (250 - 30 + 1)) + 30})</span>
            </div>
            <div class="actions">
              <button class="add-cart">Add To Cart</button>
              <i class="heart far fa-heart"></i>
            </div>
          </div>
          `;
    })
    .join('');
  document.getElementById('products').innerHTML = showData;


  // ✅ نضيف event لكل الكروت
  document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.id; // دلوقتي هيجيب id صح
      window.location.href = `product.html?id=${id}`;
    });
  });
}

// التعامل مع ازرار الخاصه بعرض التصنيفات المختلفه من المنتجات
let btAll = document.getElementById('all');
let btnSmartphones = document.getElementById('smartphones');
let btnLaptops = document.getElementById('laptops');
let btnMensShirts = document.getElementById('mens-shirts');
let btnWomensDresses = document.getElementById('womens-dresses');
let btnBeauty = document.getElementById('beauty');
let btnFragrances = document.getElementById('fragrances');
let btnFurniture = document.getElementById('furniture');
let btnGroceries = document.getElementById('groceries');

// ارجع كل الأزرار للون الافتراضي
function returnStyleBtns() {
  btAll.removeAttribute('style');
  btnSmartphones.removeAttribute('style');
  btnLaptops.removeAttribute('style');
  btnMensShirts.removeAttribute('style');
  btnWomensDresses.removeAttribute('style');
  btnBeauty.removeAttribute('style');
  btnFragrances.removeAttribute('style');
  btnFurniture.removeAttribute('style');
  btnGroceries.removeAttribute('style');
}
// داله بتظهر زر الكل ولكن في حالة اختيار كل المنتجات
function toggleViewAllBtn() {
  if (category !== 'all') {
    btnViewAll.style.visibility = 'hidden';
  } else {
    btnViewAll.style.visibility = 'visible';
  }
}

// دالة بسيطة لتفعيل لون الخلفية والنص
function activateBtn(btn) {
  returnStyleBtns(); // نرجع باقي الأزرار للوضع الطبيعي
  btn.style.backgroundColor = '#DB4444'; // الخلفية
  btn.style.color = '#ffffff'; // النص
}


btAll.addEventListener('click', () => {
  category = 'all';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'all' ? activateBtn(btAll) : null;
  fetchApi(limitData, category); // نحدث المنتجات
});
btnSmartphones.addEventListener('click', () => {
  category = 'smartphones';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'smartphones' ? activateBtn(btnSmartphones) : null;

  fetchApi(limitData, category); // نحدث المنتجات
});
btnLaptops.addEventListener('click', () => {
  category = 'laptops';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'laptops' ? activateBtn(btnLaptops) : null;
  fetchApi(limitData, category); // نحدث المنتجات
});
btnMensShirts.addEventListener('click', () => {
  category = 'mens-shirts';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'mens-shirts' ? activateBtn(btnMensShirts) : null;
  fetchApi(limitData, category); // نحدث المنتجات
});
btnWomensDresses.addEventListener('click', () => {
  category = 'womens-dresses';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'womens-dresses' ? activateBtn(btnWomensDresses) : null;
  fetchApi(limitData, category); // نحدث المنتجات
});
btnBeauty.addEventListener('click', () => {
  category = 'beauty';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'beauty' ? activateBtn(btnBeauty) : null;
  fetchApi(limitData, category); // نحدث المنتجات
});
btnFragrances.addEventListener('click', () => {
  category = 'fragrances';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'fragrances' ? activateBtn(btnFragrances) : null;
  fetchApi(limitData, category); // نحدث المنتجات
});
btnFurniture.addEventListener('click', () => {
  category = 'furniture';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'furniture' ? activateBtn(btnFurniture) : null;
  fetchApi(limitData, category); // نحدث المنتجات
});
btnGroceries.addEventListener('click', () => {
  category = 'groceries';
  returnStyleBtns();
  toggleViewAllBtn();
  category === 'groceries' ? activateBtn(btnGroceries) : null;
  fetchApi(limitData, category); // نحدث المنتجات
});

// التغيير في عرض المنتجات في زر عرض الكل وعرض اقل مع تغيير نص الزر
let btnViewAll = document.getElementById('View-ALL-Products');
btnViewAll.addEventListener('click', () => {
  if (limitData === 15) {
    limitData = 195;
    btnViewAll.innerHTML = 'View Less Products';
  } else {
    limitData = 15;
    btnViewAll.innerHTML = 'View All Products';
  }

  fetchApi(limitData, category); // نحدث المنتجات
});

activateBtn(btAll);
toggleViewAllBtn();
fetchApi(limitData, category);
