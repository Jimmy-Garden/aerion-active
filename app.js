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

const STORAGE_KEY = "aerion-cart";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = value => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

const HTML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => HTML_ESCAPES[character]);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollToShop = () => $("#shop").scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });

// Products carry five sizes today, but never assume an index exists.
const defaultSize = product => product.sizes[Math.floor(product.sizes.length / 2)] || product.sizes[0];

// The bag is rebuilt from the catalogue rather than trusted as stored: a corrupt,
// stale or tampered entry can no longer break rendering or fake a price.
function readStoredCart() {
  let raw;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return [];
  }
  if (!raw) return [];

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    return [];
  }
  if (!Array.isArray(parsed)) return [];

  const restored = [];
  parsed.forEach(entry => {
    if (!entry || typeof entry !== "object") return;
    const product = products.find(item => item.id === entry.id);
    if (!product) return;
    const size = product.sizes.includes(entry.size) ? entry.size : defaultSize(product);
    const color = product.colors.find(item => item.name === entry.color) || product.colors[0];
    const quantity = Math.min(99, Math.max(1, Math.floor(Number(entry.quantity)) || 1));
    const key = `${product.id}-${size}-${color.name}`;
    const existing = restored.find(item => item.key === key);
    if (existing) existing.quantity = Math.min(99, existing.quantity + quantity);
    else restored.push({ key, id: product.id, name: product.name, price: product.price, image: product.image, size, color: color.name, quantity });
  });
  return restored;
}

const state = {
  filter: "All",
  search: "",
  sort: "featured",
  activeProduct: null,
  selectedSize: null,
  selectedColor: null,
  cart: readStoredCart()
};

const productGrid = $("#productGrid");
const resultCount = $("#resultCount");
const emptyState = $("#emptyState");
const cartDrawer = $("#cartDrawer");
const overlay = $("#overlay");
const cartItems = $("#cartItems");
const cartEmpty = $("#cartEmpty");
const cartSummary = $("#cartSummary");
const productModal = $("#productModal");
const checkoutModal = $("#checkoutModal");
const toast = $("#toast");

let lastFocused = null;
let overlayTimer = null;

function rememberFocus() {
  lastFocused = document.activeElement;
}

function restoreFocus() {
  const target = lastFocused;
  lastFocused = null;
  if (target && document.contains(target) && typeof target.focus === "function") target.focus();
}

function renderProducts() {
  const query = state.search.trim().toLowerCase();
  const items = products.filter(product => {
    const filterMatch = state.filter === "All" || product.gender === state.filter || product.category === state.filter || ((state.filter === "Men" || state.filter === "Women") && product.gender === "Unisex");
    const haystack = `${product.name} ${product.gender} ${product.category} ${product.activity} ${product.description}`.toLowerCase();
    return filterMatch && (!query || haystack.includes(query));
  });

  if (state.sort === "price-low") items.sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") items.sort((a, b) => b.price - a.price);
  if (state.sort === "newest") items.sort((a, b) => b.newness - a.newness);

  productGrid.innerHTML = items.map(product => `
    <article class="product-card" data-product-id="${escapeHtml(product.id)}">
      <div class="product-image">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
        ${product.badge ? `<span class="product-badge">${escapeHtml(product.badge)}</span>` : ""}
        <button class="quick-add" type="button" data-quick-add="${escapeHtml(product.id)}">Quick add<span class="sr-only"> ${escapeHtml(product.name)}</span></button>
      </div>
      <div class="product-info">
        <h3><button class="product-title" type="button" data-open="${escapeHtml(product.id)}">${escapeHtml(product.name)}</button></h3>
        <span class="price">${money(product.price)}</span>
        <p>${escapeHtml(product.gender)} · ${escapeHtml(product.category)}</p>
        <div class="color-dots" aria-label="${product.colors.length} colors">${product.colors.map(color => `<i style="background:${escapeHtml(color.hex)}" title="${escapeHtml(color.name)}"></i>`).join("")}</div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = items.length > 0;
  resultCount.textContent = `${items.length} ${items.length === 1 ? "product" : "products"} shown`;
  bindProductCards();
}

function bindProductCards() {
  // The image is a mouse convenience only; the title button carries the keyboard
  // affordance so "Quick add" is never swallowed by an outer key handler.
  $$(".product-image", productGrid).forEach(image => {
    image.addEventListener("click", event => {
      if (event.target.closest("[data-quick-add]")) return;
      openProduct(image.closest(".product-card").dataset.productId);
    });
  });

  $$("[data-open]", productGrid).forEach(button => {
    button.addEventListener("click", () => openProduct(button.dataset.open));
  });

  $$("[data-quick-add]", productGrid).forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      const product = products.find(item => item.id === button.dataset.quickAdd);
      if (!product) return;
      addToCart(product, defaultSize(product), product.colors[0]);
    });
  });
}

function openProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  state.activeProduct = product;
  state.selectedSize = defaultSize(product);
  state.selectedColor = product.colors[0];

  $("#modalImage").src = product.image;
  $("#modalImage").alt = product.name;
  $("#modalCategory").textContent = `${product.gender} · ${product.category}`;
  $("#modalName").textContent = product.name;
  $("#modalPrice").textContent = money(product.price);
  $("#modalDescription").textContent = product.description;
  renderModalOptions();
  openDialog(productModal);
}

function renderModalOptions() {
  const product = state.activeProduct;
  $("#modalColorName").textContent = state.selectedColor.name;
  $("#modalColors").innerHTML = product.colors.map(color => `<button type="button" class="swatch ${state.selectedColor.name === color.name ? "active" : ""}" style="background:${escapeHtml(color.hex)}" aria-label="${escapeHtml(color.name)}" aria-pressed="${state.selectedColor.name === color.name}" data-color="${escapeHtml(color.name)}"></button>`).join("");
  $("#modalSizes").innerHTML = product.sizes.map(size => `<button type="button" class="size-button ${state.selectedSize === size ? "active" : ""}" aria-pressed="${state.selectedSize === size}" data-size="${escapeHtml(size)}">${escapeHtml(size)}</button>`).join("");

  $$("[data-color]", $("#modalColors")).forEach(button => button.addEventListener("click", () => {
    state.selectedColor = product.colors.find(color => color.name === button.dataset.color);
    renderModalOptions();
    $(`[data-color="${CSS.escape(state.selectedColor.name)}"]`, $("#modalColors")).focus();
  }));
  $$("[data-size]", $("#modalSizes")).forEach(button => button.addEventListener("click", () => {
    state.selectedSize = button.dataset.size;
    renderModalOptions();
    $(`[data-size="${CSS.escape(state.selectedSize)}"]`, $("#modalSizes")).focus();
  }));
}

function addToCart(product, size, color) {
  if (!product || !size || !color) return;
  const key = `${product.id}-${size}-${color.name}`;
  const existing = state.cart.find(item => item.key === key);
  if (existing) existing.quantity = Math.min(99, existing.quantity + 1);
  else state.cart.push({ key, id: product.id, name: product.name, price: product.price, image: product.image, size, color: color.name, quantity: 1 });
  saveCart();
  showToast(`${product.name} · ${color.name} · ${size} added to your bag`);
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
  } catch (error) {
    // Storage can be full or blocked (private browsing); the bag still works for this session.
  }
  renderCart();
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartCount").textContent = count;
  $("#cartToggle").setAttribute("aria-label", count === 1 ? "Open shopping bag, 1 item" : `Open shopping bag, ${count} items`);
  cartEmpty.hidden = state.cart.length > 0;
  cartSummary.hidden = state.cart.length === 0;

  cartItems.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-key="${escapeHtml(item.key)}">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" />
      <div class="cart-item-info">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.color)} · ${escapeHtml(item.size)}</span>
        <span>${money(item.price)}</span>
        <div class="quantity">
          <button type="button" data-change="-1" aria-label="Decrease quantity of ${escapeHtml(item.name)}">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-change="1" aria-label="Increase quantity of ${escapeHtml(item.name)}">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-remove aria-label="Remove ${escapeHtml(item.name)}">×</button>
    </div>
  `).join("");

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  $("#cartSubtotal").textContent = money(subtotal);

  $$("[data-change]", cartItems).forEach(button => button.addEventListener("click", () => {
    const key = button.closest(".cart-item").dataset.key;
    const item = state.cart.find(entry => entry.key === key);
    if (!item) return;
    item.quantity = Math.min(99, item.quantity + Number(button.dataset.change));
    if (item.quantity <= 0) state.cart = state.cart.filter(entry => entry.key !== key);
    saveCart();
    focusCartItem(key, button.dataset.change);
  }));

  $$("[data-remove]", cartItems).forEach(button => button.addEventListener("click", () => {
    const key = button.closest(".cart-item").dataset.key;
    state.cart = state.cart.filter(item => item.key !== key);
    saveCart();
    $("#cartClose").focus();
  }));
}

// Re-rendering the list throws away the button that was clicked, so put focus back.
function focusCartItem(key, change) {
  const row = $(`.cart-item[data-key="${CSS.escape(key)}"]`, cartItems);
  const control = row && row.querySelector(`[data-change="${CSS.escape(change)}"]`);
  if (control) control.focus();
  else $("#cartClose").focus();
}

function openCart() {
  if (cartDrawer.classList.contains("open")) return;
  rememberFocus();
  clearTimeout(overlayTimer);
  overlay.hidden = false;
  cartDrawer.setAttribute("aria-hidden", "false");
  cartDrawer.inert = false;
  document.body.classList.add("locked");
  requestAnimationFrame(() => {
    cartDrawer.classList.add("open");
    void cartDrawer.offsetWidth;
    $("#cartClose").focus();
  });
}

function closeCart() {
  if (!cartDrawer.classList.contains("open")) return;
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartDrawer.inert = true;
  if (!isDialogOpen()) document.body.classList.remove("locked");
  releaseOverlay();
  restoreFocus();
}

// The overlay blocks clicks, so it must not outlive the drawer's slide-out.
// Reading the real transition duration keeps the two in step under
// prefers-reduced-motion, where the slide-out is effectively instant.
function releaseOverlay() {
  const durations = getComputedStyle(cartDrawer).transitionDuration.split(",").map(value => parseFloat(value) || 0);
  const slideOut = Math.max(0, ...durations) * 1000;
  clearTimeout(overlayTimer);
  overlayTimer = setTimeout(() => {
    if (!cartDrawer.classList.contains("open")) overlay.hidden = true;
  }, slideOut);
}

function isDialogOpen() {
  return productModal.open || checkoutModal.open;
}

function openDialog(dialog) {
  rememberFocus();
  document.body.classList.add("locked");
  dialog.showModal();
}

function openCheckout() {
  if (!state.cart.length) return;
  closeCart();
  $("#orderSuccess").hidden = true;
  $(".checkout-layout", checkoutModal).hidden = false;
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  $("#checkoutItems").innerHTML = state.cart.map(item => `
    <div class="checkout-summary-item">
      <img src="${escapeHtml(item.image)}" alt="" loading="lazy" />
      <div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.color)} · ${escapeHtml(item.size)} · Qty ${item.quantity}</span></div>
      <strong>${money(item.price * item.quantity)}</strong>
    </div>
  `).join("");
  $("#checkoutTotal").textContent = money(subtotal);
  openDialog(checkoutModal);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function syncFilterTabs(filter) {
  $$("#filterTabs button").forEach(button => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setFilter(filter) {
  state.filter = filter;
  state.search = "";
  $("#siteSearch").value = "";
  syncFilterTabs(filter);
  renderProducts();
  setTimeout(scrollToShop, 20);
}

function setSearch(query) {
  state.search = query;
  state.filter = "All";
  syncFilterTabs("All");
  renderProducts();
}

function toggleSearch(force) {
  const panel = $("#searchPanel");
  const isOpen = panel.classList.contains("open");
  const shouldOpen = force ?? !isOpen;
  if (shouldOpen === isOpen) return;

  // Record the opener before closing the menu: toggleMenu hands focus back to
  // its own toggle, which would otherwise be mistaken for what opened search.
  const opener = shouldOpen ? document.activeElement : null;
  if (shouldOpen) toggleMenu(false);

  panel.classList.toggle("open", shouldOpen);
  panel.setAttribute("aria-hidden", String(!shouldOpen));
  panel.inert = !shouldOpen;
  $("#searchToggle").setAttribute("aria-expanded", String(shouldOpen));

  if (shouldOpen) {
    lastFocused = opener;
    setTimeout(() => $("#siteSearch").focus(), reducedMotion() ? 0 : 350);
  } else {
    restoreFocus();
  }
}

function toggleMenu(force) {
  const menu = $("#mobileMenu");
  const button = $("#menuToggle");
  const isOpen = menu.classList.contains("open");
  const shouldOpen = force ?? !isOpen;
  if (shouldOpen === isOpen) return;

  menu.classList.toggle("open", shouldOpen);
  button.classList.toggle("active", shouldOpen);
  button.setAttribute("aria-expanded", String(shouldOpen));
  button.setAttribute("aria-label", shouldOpen ? "Close menu" : "Open menu");
  menu.setAttribute("aria-hidden", String(!shouldOpen));
  menu.inert = !shouldOpen;
  document.body.classList.toggle("locked", shouldOpen);

  if (shouldOpen) {
    rememberFocus();
    void menu.offsetWidth;
    menu.querySelector("a").focus();
  } else {
    restoreFocus();
  }
}

function initInteractions() {
  $("#cartToggle").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#emptyShopButton").addEventListener("click", () => { closeCart(); scrollToShop(); });
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
      scrollToShop();
    }
  });

  $$("#filterTabs button").forEach(button => button.addEventListener("click", () => setFilter(button.dataset.filter)));
  $("#sortSelect").addEventListener("change", event => { state.sort = event.target.value; renderProducts(); });

  $$("[data-filter-link]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    toggleMenu(false);
    setFilter(link.dataset.filterLink);
  }));
  $$("[data-search-link]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const query = link.dataset.searchLink;
    setSearch(query);
    $("#siteSearch").value = query;
    $("#searchHint").textContent = `Showing matches for “${query}”`;
    scrollToShop();
  }));

  // Footer placeholders: these sections do not exist yet, so they explain
  // themselves in place rather than pointing at an anchor that goes nowhere.
  $$("[data-info]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.info)));

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
    $("#continueShopping").focus();
  });
  $("#continueShopping").addEventListener("click", () => {
    checkoutModal.close();
    scrollToShop();
  });

  $("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();
    showToast("Welcome to Aerion Field Notes");
    event.currentTarget.reset();
  });

  [productModal, checkoutModal].forEach(dialog => {
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      if (!cartDrawer.classList.contains("open") && !isDialogOpen()) document.body.classList.remove("locked");
      restoreFocus();
    });
  });

  // Native dialogs close themselves on Escape; the panels below need help.
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape" || isDialogOpen()) return;
    closeCart();
    toggleSearch(false);
    toggleMenu(false);
  });
}

function initReveal() {
  const elements = $$(".reveal");
  if (reducedMotion() || !("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  elements.forEach(element => observer.observe(element));
}

function initBackToTop() {
  const button = $("#backToTop");
  const update = () => { button.hidden = window.scrollY < 480; };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

renderProducts();
renderCart();
initInteractions();
initReveal();
initBackToTop();
