const headerComponent = `
<div class="headAllPages">
  <div>
    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
    <button>ShopNow</button>
  </div>
  <select>
    <option value="ENGLISH">ENGLISH</option>
    <option value="ARABIC">ARABIC</option>
  </select>
</div>
`;

const headerStyle = `
.headAllPages {
  background-color: #000000;
  color: white;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  align-items: center;
}
.headAllPages button {
  background-color: inherit;
  color: inherit;
  border: none;
  margin-left: 7px;
  text-decoration: underline;
  font-weight: bold;
  font-size: inherit;
}
.headAllPages select {
  background-color: inherit;
  color: inherit;
  border: none;
  font-weight: 400;
  font-size: inherit;
}
`;

// إضافة الـ CSS مرة واحدة
const style = document.createElement('style');
style.innerHTML = headerStyle;
document.head.appendChild(style);

// 🔥 إضافة الهيدر تلقائي لأي div عنده id="header"
const container = document.getElementById('headerBlack');

if (container) {
  container.innerHTML = headerComponent;
}
