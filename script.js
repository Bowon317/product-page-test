// ===== DATA =====
const categories = [
  { name: "DUMBELLS", img: "./access/img-category/category-dumbells.jpg" },
  { name: "EXERCISE BENCH", img: "./access/img-category/category-bench.jpg" },
  { name: "EXERCISE BIKE", img: "./access/img-category/category-exercise-bike.jpg" },
  { name: "TREADMILL", img: "./access/img-category/category-_trademill.jpg" },
  { name: "ELLIPTICAL", img: "./access/img-category/category-elliptical.jpg" },
  { name: "HOME GYM", img: "./access/img-category/category-home-gym.jpg" },
  { name: "OLYMPIC BARBELL", img: "./access/img-category/category-barbell.jpg" },
  { name: "WEIGHT PLATE", img: "./access/img-category/category-plate.jpg" },
  { name: "FLOOR MAT", img: "./access/img-category/category-fitnes-floor.jpg" },
  { name: "BOXING EQUIPMENT", img: "./access/img-category/category-boxing.jpg" },
  { name: "PILATES MACHINE", img: "./access/img-category/category-pilates.jpg" },
  { name: "COMMERCAIL GRADE", img: "./access/img-category/category-commercial-grade.jpg" }
];

const box = document.getElementById("categoryBox");

categories.forEach(cat => {
  box.innerHTML += `
    <div class="category-card">
      <img src="${cat.img}">
      <p>${cat.name}</p>
    </div>
  `;
});

const products = [
  {
    nameTH: "กระสอบทราย",
    nameEN: "sandbag",
    price: 590,
    image: "./access/img-product/product1.jpg"
  },
  {
    nameTH: "เชือก Battle Rope",
    nameEN: "Battle Rope",
    price: 1690,
    image: "./access/img-product/product2.jpg"
  },
  {
    nameTH: "ดัมเบล",
    nameEN: "Dumbbell Set",
    price: 4490,
    image: "./access/img-product/product3.jpg"
  },
  {
    nameTH: "ดัมเบล",
    nameEN: "Dumbbell Set",
    price: 3220,
    image: "./access/img-product/product4.jpg"
  },
   {
    nameTH: "เครื่องพิลาทิส",
    nameEN: "Pilates Machine",
    price: 1690,
    image: "./access/img-product/product5.jpg"
  },
  {
    nameTH: "เครื่องพิลาทิส",
    nameEN: "Pilates Machine",
    price: 1690,
    image: "./access/img-product/product6.jpg"
  },
  {
    nameTH: "ดัมเบล",
    nameEN: "Dumbbell Set",
    price: 1690,
    image: "./access/img-product/product7.jpg"
  },
  {
    nameTH: "กระสอบทราย",
    nameEN: "Sandbag",
    price: 1690,
    image: "./access/img-product/product8.jpg"
  },
  {
    nameTH: "จักรยานไฟฟ้า",
    nameEN: "Sprin bike",
    price: 1690,
    image: "./access/img-product/product9.jpg"
  },
  {
    nameTH: "เชือก",
    nameEN: "Rope",
    price: 1690,
    image: "./access/img-product/product10.jpg"
  },
 
];

let isThai = true;

// ===== RENDER =====
function renderProducts() {
  const container = document.getElementById("product-list");

  container.innerHTML = products.map(product => `
    <div class="card">
      <img src="${product.image}">
      <h3 class="name">${isThai ? product.nameTH : product.nameEN}</h3>
      <p class="price">THB ${product.price.toLocaleString()}.00</p>
      <div class="actions">
        <button>🛒</button>
        <button>❤️</button>
      </div>
    </div>
  `).join("");
}

// ===== DARK MODE =====
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// ===== LANGUAGE =====
const langData = {
  th: {
    login: "เข้าสู่ระบบ",
    register: "สมัครสมาชิก",
    howTo: "วิธีการสั่งซื้อ",
    contact: "ติดต่อเรา",
    aboutTitle: "เกี่ยวกับเรา",
    about: "เกี่ยวกับ",
    service: "บริการลูกค้า",
    shipping: "การจัดส่ง",
    time: "เวลาทำการ",
    timeDetail: "9:00 - 21:00",
    facebook: "Facebook: Fit-Day",
    line: "Line: @fitday",
    category: "หมวดหมู่",
    Recommended : "สินค้าเเนะนำ",
    Selling: "จำหน่ายอุปกรณ์ออกกำลังกายคุณภาพ"
  },
  en: {
    login: "Login",
    register: "Register",
    howTo: "How to Order",
    contact: "Contact Us",
    aboutTitle: "About Us",
    about: "About",
    service: "Customer Service",
    shipping: "Shipping",
    time: "Opening Hours",
    timeDetail: "9:00 AM - 9:00 PM",
    facebook: "Facebook: Fit-Day",
    category: "category",
    Recommended : "Recommended products",
    Selling: "Selling quality exercise equipment"
  }
};
document.getElementById("langToggle").onclick = () => {
  const search = document.querySelector(".search");

  const lang = isThai ? "en" : "th";

  // เปลี่ยน placeholder
  search.placeholder = lang === "th" ? "ค้นหาสินค้า..." : "Search products...";

  // เปลี่ยนข้อความทั้งหน้า
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.innerText = langData[lang][key];
  });

  // เปลี่ยนปุ่ม
  document.getElementById("langToggle").innerText = lang.toUpperCase();

  isThai = !isThai;
  renderProducts();
};
let scrollContainer;

window.onload = () => {
  scrollContainer = document.getElementById("product-list");
  renderProducts();
};

function goLeft() {
  document.getElementById("product-list").scrollBy({
    left: -300,
    behavior: "smooth"
  });
}

function goRight() {
  document.getElementById("product-list").scrollBy({
    left: 300,
    behavior: "smooth"
  });
}
// ===== INIT =====
renderProducts();