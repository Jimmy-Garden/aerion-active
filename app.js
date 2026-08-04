const products = [
  {
    id: "airform-tee",
    name: "AirForm Performance Tee",
    gender: "Men",
    category: "Tops",
    activity: "running training",
    price: 58,
    badge: "Best seller",
    image: "assets/products/airform-tee.svg",
    description: "An ultralight training tee with mapped ventilation, quick-dry yarns and a clean athletic cut that stays out of your way.",
    colors: [{ name: "Carbon", hex: "#222620" }, { name: "Mineral", hex: "#9aa59a" }, { name: "Volt", hex: "#d7ff3f" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 8
  },
  {
    id: "velocity-short",
    name: "Velocity 5\" Short",
    gender: "Men",
    category: "Bottoms",
    activity: "running training",
    price: 72,
    badge: "New",
    image: "assets/products/velocity-short.svg",
    description: "A fast, split-hem short with a supportive liner, zip phone pocket and featherweight stretch shell.",
    colors: [{ name: "Black", hex: "#141511" }, { name: "Stone", hex: "#b9b3a5" }, { name: "Cobalt", hex: "#2255cc" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 12
  },
  {
    id: "pulse-legging",
    name: "Pulse Sculpt Legging",
    gender: "Women",
    category: "Bottoms",
    activity: "studio training",
    price: 88,
    badge: "Core",
    image: "assets/products/pulse-legging.svg",
    description: "Supportive high-rise leggings with a smooth second-skin feel, sculpted seams and zero front seam construction.",
    colors: [{ name: "Obsidian", hex: "#252421" }, { name: "Sage", hex: "#7d8b72" }, { name: "Mulberry", hex: "#6c3d59" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 7
  },
  {
    id: "align-bra",
    name: "Align Medium-Support Bra",
    gender: "Women",
    category: "Tops",
    activity: "studio training",
    price: 54,
    badge: "New",
    image: "assets/products/align-bra.svg",
    description: "A clean-lined medium-support bra with breathable cups, bonded edges and adjustable cross-back straps.",
    colors: [{ name: "Graphite", hex: "#333630" }, { name: "Moss", hex: "#68775d" }, { name: "Clay", hex: "#b57762" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 11
  },
  {
    id: "thermal-hoodie",
    name: "Thermal Grid Hoodie",
    gender: "Men",
    category: "Layers",
    activity: "running outdoor training",
    price: 118,
    badge: "Limited",
    image: "assets/products/thermal-hoodie.svg",
    description: "A breathable grid-fleece layer with ergonomic hood, secure side pockets and a structured, easy-moving fit.",
    colors: [{ name: "Night", hex: "#1d2228" }, { name: "Lichen", hex: "#7e8863" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 10
  },
  {
    id: "sprint-tank",
    name: "Sprint Seamless Tank",
    gender: "Women",
    category: "Tops",
    activity: "running training",
    price: 48,
    badge: "Lightweight",
    image: "assets/products/sprint-tank.svg",
    description: "A minimal seamless tank with open-knit ventilation and body-mapped stretch for high-output sessions.",
    colors: [{ name: "Ivory", hex: "#e8e4d9" }, { name: "Black", hex: "#171816" }, { name: "Ice", hex: "#bdd4df" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 6
  },
  {
    id: "storm-shell",
    name: "StormRun Shell Jacket",
    gender: "Unisex",
    category: "Layers",
    activity: "running outdoor",
    price: 168,
    badge: "Weatherproof",
    image: "assets/products/storm-shell.svg",
    description: "A packable wind and rain shell with laser-cut ventilation, articulated sleeves and adjustable coverage.",
    colors: [{ name: "Lime", hex: "#ccf339" }, { name: "Ink", hex: "#22282e" }, { name: "Silver", hex: "#b7bdbe" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 9
  },
  {
    id: "studio-jogger",
    name: "Studio Taper Jogger",
    gender: "Women",
    category: "Bottoms",
    activity: "studio recovery training",
    price: 96,
    badge: "Soft touch",
    image: "assets/products/studio-jogger.svg",
    description: "Soft technical joggers with a tapered ankle, adjustable waist and enough structure for training or travel.",
    colors: [{ name: "Pebble", hex: "#a8a39a" }, { name: "Black", hex: "#20211e" }, { name: "Fern", hex: "#687663" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 5
  },
  {
    id: "core-long-sleeve",
    name: "Core Vent Long Sleeve",
    gender: "Men",
    category: "Tops",
    activity: "running training",
    price: 76,
    badge: "Core",
    image: "assets/products/core-long-sleeve.svg",
    description: "A close but unrestricted long sleeve with underarm ventilation and abrasion-resistant shoulder panels.",
    colors: [{ name: "Graphite", hex: "#383b38" }, { name: "Chalk", hex: "#d9d6ce" }, { name: "Ocean", hex: "#2f6175" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 4
  },
  {
    id: "recovery-crew",
    name: "Recovery Structured Crew",
    gender: "Unisex",
    category: "Layers",
    activity: "recovery studio",
    price: 108,
    badge: "Everyday",
    image: "assets/products/recovery-crew.svg",
    description: "A clean heavyweight crew with dropped shoulders, breathable loopback cotton and a precise relaxed silhouette.",
    colors: [{ name: "Bone", hex: "#d8d1c1" }, { name: "Black", hex: "#1f201d" }, { name: "Aubergine", hex: "#503747" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 3
  },
  {
    id: "trail-vest",
    name: "Trail Utility Vest",
    gender: "Unisex",
    category: "Layers",
    activity: "running outdoor training",
    price: 132,
    badge: "New",
    image: "assets/products/trail-vest.svg",
    description: "A lightweight utility vest with balanced storage, breathable mesh zones and a bounce-free adjustable fit.",
    colors: [{ name: "Onyx", hex: "#20231e" }, { name: "Flint", hex: "#696b64" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 13
  },
  {
    id: "tempo-bike-short",
    name: "Tempo 7\" Bike Short",
    gender: "Women",
    category: "Bottoms",
    activity: "studio running training",
    price: 64,
    badge: "Essential",
    image: "assets/products/tempo-bike-short.svg",
    description: "A supportive bike short with a stay-put waistband, side phone pocket and matte, sweat-wicking finish.",
    colors: [{ name: "Black", hex: "#171816" }, { name: "Juniper", hex: "#4c635d" }, { name: "Plum", hex: "#684c64" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    newness: 2
  }
];

const state = {
  filter: "All",
  search: "",
  sort: "featured",
  activeProduct: null,
  selectedSize: null,
  selectedColor: null,
  cart: JSON.parse(localStorage.getItem("aerion-cart") || "[]")
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = value => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

const productGrid = $("#productGrid");
const emptyState = $("#emptyState");
const cartDrawer = $("#cartDrawer");
const overlay = $("#overlay");
const cartItems = $("#cartItems");
const cartEmpty = $("#cartEmpty");
const cartSummary = $("#cartSummary");
const productModal = $("#productModal");
const checkoutModal = $("#checkoutModal");
const toast = $("#toast");

function renderProducts() {
  const query = state.search.trim().toLowerCase();
  let items = products.filter(product => {
    const filterMatch = state.filter === "All" || product.gender === state.filter || product.category === state.filter || (state.filter === "Men" && product.gender === "Unisex") || (state.filter === "Women" && product.gender === "Unisex");
    const haystack = `${product.name} ${product.gender} ${product.category} ${product.activity} ${product.description}`.toLowerCase();
    return filterMatch && (!query || haystack.includes(query));
  });

  if (state.sort === "price-low") items.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") items.sort((a, b) => b.price - a.price);
  if (state.sort === "newest") items.sort((a, b) => b.newness - a.newness);

  productGrid.innerHTML = items.map(product => `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image" tabindex="0" role="button" aria-label="View ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <button class="quick-add" type="button" data-quick-add="${product.id}">Quick add</button>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <span class="price">${money(product.price)}</span>
        <p>${product.gender} · ${product.category}</p>
        <div class="color-dots" aria-label="${product.colors.length} colors">${product.colors.map(color => `<i style="background:${color.hex}" title="${color.name}"></i>`).join("")}</div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = items.length > 0;
  bindProductCards();
}

function bindProductCards() {
  $$(".product-image", productGrid).forEach(card => {
    const id = card.closest(".product-card").dataset.productId;
    card.addEventListener("click", event => {
      if (event.target.closest("[data-quick-add]")) return;
      openProduct(id);
    });
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProduct(id);
      }
    });
  });

  $$('[data-quick-add]', productGrid).forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const product = products.find(item => item.id === button.dataset.quickAdd);
      addToCart(product, product.sizes[2], product.colors[0]);
    });
  });
}

function openProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  state.activeProduct = product;
  state.selectedSize = product.sizes[2];
  state.selectedColor = product.colors[0];

  $("#modalImage").src = product.image;
  $("#modalImage").alt = product.name;
  $("#modalCategory").textContent = `${product.gender} · ${product.category}`;
  $("#modalName").textContent = product.name;
  $("#modalPrice").textContent = money(product.price);
  $("#modalDescription").textContent = product.description;
  renderModalOptions();
  productModal.showModal();
}

function renderModalOptions() {
  const product = state.activeProduct;
  $("#modalColorName").textContent = state.selectedColor.name;
  $("#modalColors").innerHTML = product.colors.map(color => `<button type="button" class="swatch ${state.selectedColor.name === color.name ? "active" : ""}" style="background:${color.hex}" aria-label="${color.name}" data-color="${color.name}"></button>`).join("");
  $("#modalSizes").innerHTML = product.sizes.map(size => `<button type="button" class="size-button ${state.selectedSize === size ? "active" : ""}" data-size="${size}">${size}</button>`).join("");

  $$("[data-color]", $("#modalColors")).forEach(button => button.addEventListener("click", () => {
    state.selectedColor = product.colors.find(color => color.name === button.dataset.color);
    renderModalOptions();
  }));
  $$("[data-size]", $("#modalSizes")).forEach(button => button.addEventListener("click", () => {
    state.selectedSize = button.dataset.size;
    renderModalOptions();
  }));
}

function addToCart(product, size, color) {
  const key = `${product.id}-${size}-${color.name}`;
  const existing = state.cart.find(item => item.key === key);
  if (existing) existing.quantity += 1;
  else state.cart.push({ key, id: product.id, name: product.name, price: product.price, image: product.image, size, color: color.name, quantity: 1 });
  saveCart();
  showToast(`${product.name} added to your bag`);
}

function saveCart() {
  localStorage.setItem("aerion-cart", JSON.stringify(state.cart));
  renderCart();
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartCount").textContent = count;
  cartEmpty.hidden = state.cart.length > 0;
  cartSummary.hidden = state.cart.length === 0;

  cartItems.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${item.color} · ${item.size}</span>
        <span>${money(item.price)}</span>
        <div class="quantity">
          <button type="button" data-change="-1" aria-label="Decrease quantity">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-change="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove aria-label="Remove ${item.name}">×</button>
    </div>
  `).join("");

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  $("#cartSubtotal").textContent = money(subtotal);

  $$("[data-change]", cartItems).forEach(button => button.addEventListener("click", () => {
    const item = state.cart.find(entry => entry.key === button.closest(".cart-item").dataset.key);
    item.quantity += Number(button.dataset.change);
    if (item.quantity <= 0) state.cart = state.cart.filter(entry => entry.key !== item.key);
    saveCart();
  }));

  $$("[data-remove]", cartItems).forEach(button => button.addEventListener("click", () => {
    const key = button.closest(".cart-item").dataset.key;
    state.cart = state.cart.filter(item => item.key !== key);
    saveCart();
  }));
}

function openCart() {
  overlay.hidden = false;
  requestAnimationFrame(() => cartDrawer.classList.add("open"));
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  setTimeout(() => { if (!cartDrawer.classList.contains("open")) overlay.hidden = true; }, 420);
}

function openCheckout() {
  if (!state.cart.length) return;
  closeCart();
  $("#orderSuccess").hidden = true;
  $(".checkout-layout", checkoutModal).hidden = false;
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  $("#checkoutItems").innerHTML = state.cart.map(item => `
    <div class="checkout-summary-item">
      <img src="${item.image}" alt="${item.name}" />
      <div><strong>${item.name}</strong><span>${item.color} · ${item.size} · Qty ${item.quantity}</span></div>
      <strong>${money(item.price * item.quantity)}</strong>
    </div>
  `).join("");
  $("#checkoutTotal").textContent = money(subtotal);
  checkoutModal.showModal();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function setFilter(filter) {
  state.filter = filter;
  state.search = "";
  $("#siteSearch").value = "";
  $$("#filterTabs button").forEach(button => button.classList.toggle("active", button.dataset.filter === filter));
  renderProducts();
  setTimeout(() => $("#shop").scrollIntoView({ behavior: "smooth" }), 20);
}

function setSearch(query) {
  state.search = query;
  state.filter = "All";
  $$("#filterTabs button").forEach(button => button.classList.toggle("active", button.dataset.filter === "All"));
  renderProducts();
}

function toggleSearch(force) {
  const panel = $("#searchPanel");
  const shouldOpen = force ?? !panel.classList.contains("open");
  panel.classList.toggle("open", shouldOpen);
  panel.setAttribute("aria-hidden", String(!shouldOpen));
  if (shouldOpen) setTimeout(() => $("#siteSearch").focus(), 350);
}

function toggleMenu(force) {
  const menu = $("#mobileMenu");
  const button = $("#menuToggle");
  const shouldOpen = force ?? !menu.classList.contains("open");
  menu.classList.toggle("open", shouldOpen);
  button.classList.toggle("active", shouldOpen);
  button.setAttribute("aria-expanded", String(shouldOpen));
  menu.setAttribute("aria-hidden", String(!shouldOpen));
  document.body.classList.toggle("locked", shouldOpen);
}

function initInteractions() {
  $("#cartToggle").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#emptyShopButton").addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
  $("#checkoutButton").addEventListener("click", openCheckout);
  $("#searchToggle").addEventListener("click", () => toggleSearch());
  $("#searchClose").addEventListener("click", () => toggleSearch(false));
  $("#menuToggle").addEventListener("click", () => toggleMenu());

  $("#siteSearch").addEventListener("input", event => {
    setSearch(event.target.value);
    $("#searchHint").textContent = event.target.value ? `Showing matches for “${event.target.value}”` : "Try “running”, “hoodie” or “women”.";
  });
  $("#siteSearch").addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      toggleSearch(false);
      $("#shop").scrollIntoView({ behavior: "smooth" });
    }
  });

  $$("#filterTabs button").forEach(button => button.addEventListener("click", () => setFilter(button.dataset.filter)));
  $("#sortSelect").addEventListener("change", event => { state.sort = event.target.value; renderProducts(); });

  $$('[data-filter-link]').forEach(link => link.addEventListener("click", () => {
    setFilter(link.dataset.filterLink);
    toggleMenu(false);
  }));
  $$('[data-search-link]').forEach(link => link.addEventListener("click", () => {
    const query = link.dataset.searchLink;
    setSearch(query);
    $("#siteSearch").value = query;
  }));

  $("#productModalClose").addEventListener("click", () => productModal.close());
  $("#modalAddToCart").addEventListener("click", () => {
    addToCart(state.activeProduct, state.selectedSize, state.selectedColor);
    productModal.close();
    openCart();
  });
  $("#sizeGuide").addEventListener("click", () => showToast("Choose your usual size for an athletic fit"));

  $("#checkoutClose").addEventListener("click", () => checkoutModal.close());
  $("#checkoutForm").addEventListener("submit", event => {
    event.preventDefault();
    const orderId = `AR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    $("#orderNumber").textContent = orderId;
    $(".checkout-layout", checkoutModal).hidden = true;
    $("#orderSuccess").hidden = false;
    state.cart = [];
    saveCart();
    event.currentTarget.reset();
  });
  $("#continueShopping").addEventListener("click", () => {
    checkoutModal.close();
    $("#shop").scrollIntoView({ behavior: "smooth" });
  });

  $("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();
    showToast("Welcome to Aerion Field Notes");
    event.currentTarget.reset();
  });

  [productModal, checkoutModal].forEach(dialog => dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  }));

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeCart();
      toggleSearch(false);
      toggleMenu(false);
    }
  });
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  $$(".reveal").forEach(element => observer.observe(element));
}

renderProducts();
renderCart();
initInteractions();
initReveal();
