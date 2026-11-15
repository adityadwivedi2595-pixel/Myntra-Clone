// ==========================================
// MYNTRA CLONE - COMPLETE E-COMMERCE ENGINE
// Features: Catalog, Bag/Cart, Wishlist, Checkout, 
// Live Order History, Tracking, Invoicing, Profile & Coupons
// ==========================================

// 1. PRODUCT DATABASE (Comprehensive Multi-Category Catalog)
const PRODUCTS = [
  {
    id: "p1",
    brand: "ROADSTER",
    name: "Classic Solid Pure Cotton Tee",
    category: "men",
    price: 499,
    originalPrice: 999,
    discount: "50% OFF",
    rating: 4.3,
    reviews: "4.1k",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    description: "Premium 100% combed cotton jersey t-shirt. Breathable fabric tailored for effortless everyday comfort."
  },
  {
    id: "p2",
    brand: "HRX BY HRITHIK ROSHAN",
    name: "Activewear Rapid Dry Blue Tee",
    category: "men",
    price: 649,
    originalPrice: 1299,
    discount: "50% OFF",
    rating: 4.5,
    reviews: "8.9k",
    sizes: ["S", "M", "L", "XL"],
    tag: "TRENDING",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    description: "Equipped with Rapid Dry technology that wicks sweat away and keeps you cool during workouts or casual strolls."
  },
  {
    id: "p3",
    brand: "WROGN",
    name: "Slim Fit Casual Checked Shirt",
    category: "men",
    price: 1099,
    originalPrice: 2199,
    discount: "50% OFF",
    rating: 4.2,
    reviews: "1.8k",
    sizes: ["39", "40", "42", "44"],
    tag: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=700&q=80",
    description: "Crafted with lightweight breathable cotton. Features button-down collar, chest pocket and tailored curved hem."
  },
  {
    id: "p4",
    brand: "LEVIS",
    name: "511 Slim Fit Mid-Rise Clean Jeans",
    category: "men",
    price: 1899,
    originalPrice: 3599,
    discount: "47% OFF",
    rating: 4.6,
    reviews: "3.2k",
    sizes: ["30", "32", "34", "36"],
    tag: "PREMIUM",
    image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=700&q=80",
    description: "Modern slim with room to move. Added stretch for all-day comfort and authentic denim fade."
  },
  {
    id: "p5",
    brand: "TOKYO TALKIES",
    name: "Vintage Aesthetic Printed Tee",
    category: "women",
    price: 499,
    originalPrice: 1199,
    discount: "58% OFF",
    rating: 4.4,
    reviews: "5.6k",
    sizes: ["XS", "S", "M", "L", "XL"],
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=700&q=80",
    description: "Drop shoulder silhouette with subtle retro graphic chest print. Soft spun cotton blend."
  },
  {
    id: "p6",
    brand: "MAST & HARBOUR",
    name: "Pastel Pink Ribbed Crop Top",
    category: "women",
    price: 699,
    originalPrice: 1399,
    discount: "50% OFF",
    rating: 4.3,
    reviews: "2.1k",
    sizes: ["XS", "S", "M", "L"],
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=700&q=80",
    description: "Textured stretch-knit fabric with scoop neck. Versatile styling piece paired with denim or skirts."
  },
  {
    id: "p7",
    brand: "MANGO",
    name: "Contemporary Everyday Co-Ord Set",
    category: "women",
    price: 1699,
    originalPrice: 3499,
    discount: "51% OFF",
    rating: 4.7,
    reviews: "1.4k",
    sizes: ["S", "M", "L"],
    tag: "FEATURED",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
    description: "Refined 2-piece co-ord set with relaxed tailored blazer cut and matching wide-leg trousers."
  },
  {
    id: "p8",
    brand: "ANOUK",
    name: "Floral Foil Print Anarkali Kurta Set",
    category: "women",
    price: 1499,
    originalPrice: 3999,
    discount: "62% OFF",
    rating: 4.6,
    reviews: "9.3k",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tag: "FESTIVE",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
    description: "Flared ethnic Anarkali kurta crafted in rayon with gold foil motifs, paired with dupatta & palazzos."
  },
  {
    id: "p9",
    brand: "MAMAEARTH",
    name: "Vitamin C Daily Glow Skincare 3-Piece Kit",
    category: "beauty",
    price: 899,
    originalPrice: 1499,
    discount: "40% OFF",
    rating: 4.8,
    reviews: "12.4k",
    sizes: ["Combo Pack"],
    tag: "TOP RATED",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
    description: "Includes Vitamin C Face Wash, Radiance Day Cream with SPF 20 and Overnight Glow Serum."
  },
  {
    id: "p10",
    brand: "PLUM GOODNESS",
    name: "Hydrating Green Tea Day & Night Essentials",
    category: "beauty",
    price: 1049,
    originalPrice: 1699,
    discount: "38% OFF",
    rating: 4.5,
    reviews: "6.7k",
    sizes: ["Kit"],
    tag: "ORGANIC",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80",
    description: "Alcohol-free pore cleansing toner, oil-free moisturizer, and clarifying night renewal gel."
  },
  {
    id: "p11",
    brand: "MAYBELLINE NEW YORK",
    name: "SuperStay Matte Ink Liquid Lipstick Set",
    category: "beauty",
    price: 749,
    originalPrice: 1299,
    discount: "42% OFF",
    rating: 4.6,
    reviews: "15.1k",
    sizes: ["Set of 2"],
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
    description: "Up to 16HR saturated liquid matte wear. Transfer-proof, precision arrow applicator."
  },
  {
    id: "p12",
    brand: "GAP KIDS",
    name: "Happy Days Unisex Cotton Dungaree Set",
    category: "kids",
    price: 899,
    originalPrice: 1799,
    discount: "50% OFF",
    rating: 4.6,
    reviews: "2.3k",
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    tag: "SOFT COTTON",
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=700&q=80",
    description: "Gentle 100% bio-washed cotton dungaree with printed inner tee. Nickel-free snap buttons."
  },
  {
    id: "p13",
    brand: "H&M KIDS",
    name: "Pure Cotton Color-Pop Striped Tee",
    category: "kids",
    price: 499,
    originalPrice: 899,
    discount: "44% OFF",
    rating: 4.4,
    reviews: "1.9k",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    description: "Vibrant multi-stripe relaxed tee with ribbed neckband. Hypoallergenic dye for gentle skin."
  },
  {
    id: "p14",
    brand: "MAX KIDS",
    name: "Playtime Dinosaur Printed Tracksuit",
    category: "kids",
    price: 799,
    originalPrice: 1399,
    discount: "43% OFF",
    rating: 4.5,
    reviews: "3.4k",
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    tag: "COZY",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=700&q=80",
    description: "Soft brushed fleece hoodie with matching joggers. Stretchy ribbed cuffs and elastic drawstring."
  },
  {
    id: "p15",
    brand: "NIKE",
    name: "Court Legacy White Street Sneakers",
    category: "footwear",
    price: 2499,
    originalPrice: 4295,
    discount: "42% OFF",
    rating: 4.8,
    reviews: "7.8k",
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    tag: "ICONIC",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
    description: "Rooted in tennis culture. Durable synthetic leather upper with iconic Swoosh and herringbone rubber traction."
  },
  {
    id: "p16",
    brand: "PUMA",
    name: "Smashic Unisex Casual Sneakers",
    category: "footwear",
    price: 1799,
    originalPrice: 3499,
    discount: "48% OFF",
    rating: 4.4,
    reviews: "5.1k",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80",
    description: "Clean low-profile silhouette with SoftFoam+ cushioned sockliner for supreme everyday walking comfort."
  },
  {
    id: "p17",
    brand: "FOSSIL",
    name: "The Minimalist Brown Leather Watch",
    category: "accessories",
    price: 4995,
    originalPrice: 8495,
    discount: "41% OFF",
    rating: 4.7,
    reviews: "3.8k",
    sizes: ["Standard"],
    tag: "LUXURY",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
    description: "Ultra-slim 44mm case with clean dial markers, genuine saddle leather strap and 50m water resistance."
  },
  {
    id: "p18",
    brand: "WILDCRAFT",
    name: "Water-Resistant City Laptop Backpack",
    category: "accessories",
    price: 1199,
    originalPrice: 2299,
    discount: "48% OFF",
    rating: 4.5,
    reviews: "9.2k",
    sizes: ["28 Litres"],
    tag: "DURABLE",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    description: "Multi-compartment organizer with padded 15.6 inch laptop sleeve, ergonomic air-mesh back system."
  }
];

// 2. COUPONS DATABASE
const COUPONS = {
  "MYNTRA20": { code: "MYNTRA20", discountPercent: 20, maxDiscount: 600, minSpend: 999, desc: "20% OFF up to ₹600 on min spend ₹999" },
  "FLAT200": { code: "FLAT200", flatDiscount: 200, minSpend: 799, desc: "Flat ₹200 OFF on min spend ₹799" },
  "FESTIVE500": { code: "FESTIVE500", flatDiscount: 500, minSpend: 1999, desc: "Flat ₹500 Mega Festive discount on ₹1999+" }
};

// 3. MULTI-USER SEED DATABASE (PER-USER ORDERS, CART & WISHLIST)
const DEFAULT_USERS_DB = {
  "rahul sharma": {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    mobile: "+91 98765 43210",
    tier: "Myntra Insider Elite",
    superCoins: 480,
    addresses: [
      {
        id: "addr_rahul",
        name: "Rahul Sharma",
        mobile: "9876543210",
        pincode: "110001",
        address: "Flat 402, Green Avenue, Connaught Place",
        city: "New Delhi",
        state: "Delhi",
        type: "Home",
        isDefault: true
      }
    ],
    cart: [
      { id: "p2", size: "L", quantity: 1 }
    ],
    wishlist: ["p4", "p7"],
    orders: [
      {
        id: "MYN-984321",
        date: "14 Nov 2026, 03:20 PM",
        timestamp: Date.now() - 86400000,
        status: "In Transit",
        statusCode: "SHIPPED",
        statusMessage: "Package is on the way. Expected delivery tomorrow by 8 PM.",
        progressStep: 3, // 1: Confirmed, 2: Packed, 3: Shipped, 4: Out for Delivery, 5: Delivered
        paymentMethod: "UPI (Google Pay)",
        items: [
          {
            id: "p1",
            brand: "ROADSTER",
            name: "Classic Solid Pure Cotton Tee",
            size: "L",
            price: 499,
            originalPrice: 999,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
          },
          {
            id: "p4",
            brand: "LEVIS",
            name: "511 Slim Fit Mid-Rise Clean Jeans",
            size: "32",
            price: 1899,
            originalPrice: 3599,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=700&q=80"
          }
        ],
        pricing: {
          totalMRP: 4598,
          discountMRP: 2200,
          couponDiscount: 200,
          deliveryFee: 0,
          totalAmount: 2198
        },
        address: {
          name: "Rahul Sharma",
          mobile: "9876543210",
          pincode: "110001",
          address: "Flat 402, Green Avenue, Connaught Place",
          city: "New Delhi",
          state: "Delhi",
          type: "Home"
        },
        trackingSteps: [
          { title: "Order Confirmed", date: "14 Nov 2026, 03:20 PM", done: true, desc: "Your order was successfully verified." },
          { title: "Packed at Bangalore Hub", date: "14 Nov 2026, 07:45 PM", done: true, desc: "Package sealed and labeled for courier." },
          { title: "Shipped / In Transit", date: "15 Nov 2026, 08:30 AM", done: true, desc: "Handed over to BlueDart Express (AWB: BD829104)." },
          { title: "Out for Delivery", date: "Pending", done: false, desc: "Delivery agent will contact upon arrival." },
          { title: "Delivered", date: "Expected 16 Nov", done: false, desc: "Handover with OTP verification." }
        ]
      },
      {
        id: "MYN-842910",
        date: "08 Nov 2026, 11:15 AM",
        timestamp: Date.now() - (86400000 * 7),
        status: "Delivered",
        statusCode: "DELIVERED",
        statusMessage: "Delivered on 10 Nov 2026. Return window active till 24 Nov.",
        progressStep: 5,
        paymentMethod: "Cash on Delivery",
        items: [
          {
            id: "p5",
            brand: "TOKYO TALKIES",
            name: "Vintage Aesthetic Printed Tee",
            size: "M",
            price: 499,
            originalPrice: 1199,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=700&q=80"
          },
          {
            id: "p9",
            brand: "MAMAEARTH",
            name: "Vitamin C Daily Glow Skincare 3-Piece Kit",
            size: "Combo Pack",
            price: 899,
            originalPrice: 1499,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80"
          }
        ],
        pricing: {
          totalMRP: 2698,
          discountMRP: 1300,
          couponDiscount: 0,
          deliveryFee: 0,
          totalAmount: 1398
        },
        address: {
          name: "Rahul Sharma",
          mobile: "9876543210",
          pincode: "110001",
          address: "Flat 402, Green Avenue, Connaught Place",
          city: "New Delhi",
          state: "Delhi",
          type: "Home"
        },
        trackingSteps: [
          { title: "Order Confirmed", date: "08 Nov 2026, 11:15 AM", done: true, desc: "Order placed via COD." },
          { title: "Packed at Warehouse", date: "08 Nov 2026, 04:30 PM", done: true, desc: "Quality inspection passed." },
          { title: "Shipped", date: "09 Nov 2026, 06:10 AM", done: true, desc: "Departed sorting facility." },
          { title: "Out for Delivery", date: "10 Nov 2026, 09:20 AM", done: true, desc: "Agent Amit Kumar on the way." },
          { title: "Delivered", date: "10 Nov 2026, 01:45 PM", done: true, desc: "Delivered to recipient with OTP." }
        ]
      }
    ]
  },
  "priya patel": {
    name: "Priya Patel",
    email: "priya.patel@example.com",
    mobile: "+91 98123 45678",
    tier: "Myntra Insider Select",
    superCoins: 650,
    addresses: [
      {
        id: "addr_priya",
        name: "Priya Patel",
        mobile: "9812345678",
        pincode: "400050",
        address: "B-12, Sea Breeze Apts, Bandra West",
        city: "Mumbai",
        state: "Maharashtra",
        type: "Home",
        isDefault: true
      }
    ],
    cart: [
      { id: "p6", size: "S", quantity: 1 }
    ],
    wishlist: ["p5", "p8", "p11"],
    orders: [
      {
        id: "MYN-741920",
        date: "11 Nov 2026, 05:40 PM",
        timestamp: Date.now() - (86400000 * 4),
        status: "Delivered",
        statusCode: "DELIVERED",
        statusMessage: "Delivered on 13 Nov 2026 to Bandra West.",
        progressStep: 5,
        paymentMethod: "UPI (PhonePe)",
        items: [
          {
            id: "p8",
            brand: "ANOUK",
            name: "Floral Foil Print Anarkali Kurta Set",
            size: "M",
            price: 1499,
            originalPrice: 3999,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80"
          },
          {
            id: "p11",
            brand: "MAYBELLINE NEW YORK",
            name: "SuperStay Matte Ink Liquid Lipstick Set",
            size: "Set of 2",
            price: 749,
            originalPrice: 1299,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80"
          }
        ],
        pricing: {
          totalMRP: 5298,
          discountMRP: 3050,
          couponDiscount: 0,
          deliveryFee: 0,
          totalAmount: 2248
        },
        address: {
          name: "Priya Patel",
          mobile: "9812345678",
          pincode: "400050",
          address: "B-12, Sea Breeze Apts, Bandra West",
          city: "Mumbai",
          state: "Maharashtra",
          type: "Home"
        },
        trackingSteps: [
          { title: "Order Confirmed", date: "11 Nov 2026, 05:40 PM", done: true, desc: "Verified via UPI." },
          { title: "Packed at Mumbai Hub", date: "12 Nov 2026, 10:15 AM", done: true, desc: "Quality checks completed." },
          { title: "Shipped", date: "12 Nov 2026, 02:40 PM", done: true, desc: "Dispatched via Express Courier." },
          { title: "Out for Delivery", date: "13 Nov 2026, 09:30 AM", done: true, desc: "Agent Sunita Sharma on the way." },
          { title: "Delivered", date: "13 Nov 2026, 01:10 PM", done: true, desc: "Successfully delivered." }
        ]
      }
    ]
  },
  "aman verma": {
    name: "Aman Verma",
    email: "aman.verma@example.com",
    mobile: "+91 99887 76655",
    tier: "Myntra Insider",
    superCoins: 220,
    addresses: [
      {
        id: "addr_aman",
        name: "Aman Verma",
        mobile: "9988776655",
        pincode: "560034",
        address: "House 18, 5th Main, Koramangala",
        city: "Bangalore",
        state: "Karnataka",
        type: "Home",
        isDefault: true
      }
    ],
    cart: [],
    wishlist: ["p15"],
    orders: [
      {
        id: "MYN-518290",
        date: "14 Nov 2026, 01:15 PM",
        timestamp: Date.now() - 90000000,
        status: "Out for Delivery",
        statusCode: "OUT_FOR_DELIVERY",
        statusMessage: "Out for delivery! Agent is in your area.",
        progressStep: 4,
        paymentMethod: "Cash on Delivery",
        items: [
          {
            id: "p15",
            brand: "NIKE",
            name: "Court Legacy White Street Sneakers",
            size: "UK 9",
            price: 2499,
            originalPrice: 4295,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80"
          }
        ],
        pricing: {
          totalMRP: 4295,
          discountMRP: 1796,
          couponDiscount: 0,
          deliveryFee: 0,
          totalAmount: 2499
        },
        address: {
          name: "Aman Verma",
          mobile: "9988776655",
          pincode: "560034",
          address: "House 18, 5th Main, Koramangala",
          city: "Bangalore",
          state: "Karnataka",
          type: "Home"
        },
        trackingSteps: [
          { title: "Order Confirmed", date: "14 Nov 2026, 01:15 PM", done: true, desc: "Order confirmed." },
          { title: "Packed at Warehouse", date: "14 Nov 2026, 06:00 PM", done: true, desc: "Packed in eco-box." },
          { title: "Shipped", date: "15 Nov 2026, 04:30 AM", done: true, desc: "Arrived at local hub." },
          { title: "Out for Delivery", date: "15 Nov 2026, 09:45 AM", done: true, desc: "Delivery executive out for delivery." },
          { title: "Delivered", date: "Expected Today by 7 PM", done: false, desc: "Delivery OTP required." }
        ]
      }
    ]
  }
};

// 4. MULTI-USER STORAGE INITIALIZATION & APPLICATION STATE
let loadedUsersDB = null;
try {
  loadedUsersDB = JSON.parse(localStorage.getItem("myntra_users_db"));
} catch (e) {
  loadedUsersDB = null;
}
if (!loadedUsersDB || typeof loadedUsersDB !== "object" || Object.keys(loadedUsersDB).length === 0) {
  loadedUsersDB = DEFAULT_USERS_DB;
  localStorage.setItem("myntra_users_db", JSON.stringify(DEFAULT_USERS_DB));
}

let activeUserKey = localStorage.getItem("myntra_active_user_key") || "rahul sharma";
if (!loadedUsersDB[activeUserKey]) {
  activeUserKey = Object.keys(loadedUsersDB)[0] || "rahul sharma";
}
const activeUser = loadedUsersDB[activeUserKey];

let authFlag = localStorage.getItem("myntra_is_logged_in");
let isInitiallyLoggedIn = authFlag === null ? true : (authFlag === "true");

const AppState = {
  isLoggedIn: isInitiallyLoggedIn,
  pendingAuthCallback: null,
  usersDB: loadedUsersDB,
  currentUserId: activeUserKey,
  cart: isInitiallyLoggedIn ? (activeUser.cart || []) : [],
  wishlist: isInitiallyLoggedIn ? (activeUser.wishlist || []) : [],
  orders: isInitiallyLoggedIn ? (activeUser.orders || []) : [],
  addresses: activeUser.addresses || [],
  user: {
    name: activeUser.name,
    email: activeUser.email,
    mobile: activeUser.mobile,
    tier: activeUser.tier || "Myntra Insider",
    superCoins: activeUser.superCoins || 100
  },
  appliedCoupon: null,
  activeFilter: "all",
  activeSort: "recommended",
  priceFilter: "all",
  searchQuery: "",
  activeProductModalId: null,
  selectedModalSize: null
};

// Helper to look up user by phone, email or name
function findUserInDB(name, mobile, email) {
  const normPhone = mobile ? String(mobile).replace(/\D/g, '').slice(-10) : "";
  const normEmail = email ? String(email).toLowerCase().trim() : "";
  const normName = name ? String(name).toLowerCase().trim() : "";

  for (const key in AppState.usersDB) {
    const u = AppState.usersDB[key];
    const uPhone = (u.mobile || "").replace(/\D/g, '').slice(-10);
    const uEmail = (u.email || "").toLowerCase().trim();
    const uName = (u.name || "").toLowerCase().trim();

    if (normPhone && uPhone === normPhone) return key;
    if (normEmail && uEmail === normEmail) return key;
    if (normName && uName === normName) return key;
  }
  return null;
}

// State Persistence Helper (Saves to the active user's partition)
function saveState() {
  const currentKey = AppState.currentUserId;
  if (!AppState.usersDB[currentKey]) {
    AppState.usersDB[currentKey] = {
      name: AppState.user.name,
      email: AppState.user.email,
      mobile: AppState.user.mobile,
      tier: AppState.user.tier || "Myntra Insider",
      superCoins: AppState.user.superCoins || 100,
      addresses: AppState.addresses,
      cart: AppState.cart,
      wishlist: AppState.wishlist,
      orders: AppState.orders
    };
  } else {
    AppState.usersDB[currentKey].name = AppState.user.name;
    AppState.usersDB[currentKey].email = AppState.user.email;
    AppState.usersDB[currentKey].mobile = AppState.user.mobile;
    AppState.usersDB[currentKey].tier = AppState.user.tier;
    AppState.usersDB[currentKey].superCoins = AppState.user.superCoins;
    AppState.usersDB[currentKey].addresses = AppState.addresses;
    AppState.usersDB[currentKey].cart = AppState.cart;
    AppState.usersDB[currentKey].wishlist = AppState.wishlist;
    AppState.usersDB[currentKey].orders = AppState.orders;
  }

  localStorage.setItem("myntra_users_db", JSON.stringify(AppState.usersDB));
  localStorage.setItem("myntra_active_user_key", currentKey);
  localStorage.setItem("myntra_is_logged_in", AppState.isLoggedIn ? "true" : "false");
  updateBadges();
}

// Authentication Gate Check
function requireAuth(reason = "generic", callback = null) {
  if (!AppState.isLoggedIn) {
    AppState.pendingAuthCallback = callback;
    openLoginModal(reason);
    return false;
  }
  return true;
}

// Complete Login with Name, Phone and Email
function loginWithFullDetails(rawName, rawMobile, rawEmail) {
  const name = (rawName || "").trim();
  const mobile = (rawMobile || "").trim();
  const email = (rawEmail || "").trim();

  if (!name || name.length < 2) {
    showToast("Please enter a valid full name", "error");
    return false;
  }

  const cleanPhone = mobile.replace(/\D/g, '').slice(-10);
  if (!cleanPhone || cleanPhone.length < 10) {
    showToast("Please enter a valid 10-digit mobile number", "error");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showToast("Please enter a valid email address", "error");
    return false;
  }

  // Find if user already exists
  let key = findUserInDB(name, cleanPhone, email);
  if (!key) {
    key = name.toLowerCase();
    AppState.usersDB[key] = {
      name: name,
      email: email,
      mobile: `+91 ${cleanPhone}`,
      tier: "Myntra Insider Member",
      superCoins: 150,
      addresses: [
        {
          id: `addr_${Date.now()}`,
          name: name,
          mobile: cleanPhone,
          pincode: "110001",
          address: "Sector 14, Main Road",
          city: "New Delhi",
          state: "Delhi",
          type: "Home",
          isDefault: true
        }
      ],
      cart: [],
      wishlist: [],
      orders: []
    };
  } else {
    // Update existing user details if provided
    AppState.usersDB[key].name = name;
    AppState.usersDB[key].email = email;
    AppState.usersDB[key].mobile = `+91 ${cleanPhone}`;
  }

  AppState.currentUserId = key;
  const userData = AppState.usersDB[key];
  AppState.isLoggedIn = true;
  AppState.user = {
    name: userData.name,
    email: userData.email,
    mobile: userData.mobile,
    tier: userData.tier || "Myntra Insider",
    superCoins: userData.superCoins || 100
  };
  AppState.addresses = userData.addresses || [];
  AppState.cart = userData.cart || [];
  AppState.wishlist = userData.wishlist || [];
  AppState.orders = userData.orders || [];
  AppState.appliedCoupon = null;

  saveState();
  closeAllModals();

  renderCatalog();
  renderCart();
  renderWishlist();
  updateBadges();

  showToast(`Welcome, ${userData.name}! Logged in successfully.`, "success");

  // If there was an action waiting for login, execute it!
  if (typeof AppState.pendingAuthCallback === "function") {
    const cb = AppState.pendingAuthCallback;
    AppState.pendingAuthCallback = null;
    setTimeout(() => cb(), 150);
  }

  return true;
}

// User Switching / Login by Name (Backward compatible helper)
function loginUser(rawName) {
  if (!rawName || !rawName.trim()) {
    showToast("Please enter a name to log in", "error");
    return;
  }
  const name = rawName.trim();
  const key = findUserInDB(name, null, null) || name.toLowerCase();
  
  if (AppState.usersDB[key]) {
    const u = AppState.usersDB[key];
    const phone = (u.mobile || "9876543210").replace(/\D/g, '').slice(-10);
    const email = u.email || `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}@example.com`;
    loginWithFullDetails(u.name, phone, email);
  } else {
    const dummyPhone = `98${Math.floor(10000000 + Math.random() * 90000000)}`;
    const dummyEmail = `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}@example.com`;
    loginWithFullDetails(name, dummyPhone, dummyEmail);
  }
}

// Logout User
function logoutUser() {
  saveState();
  AppState.isLoggedIn = false;
  localStorage.setItem("myntra_is_logged_in", "false");
  AppState.cart = [];
  AppState.wishlist = [];
  AppState.orders = [];

  closeAllModals();
  updateBadges();
  renderCatalog();
  showToast("Logged out successfully! Login to view orders or bag.", "info");
}

function handleProfileHeaderClick() {
  if (AppState.isLoggedIn) {
    openProfileModal();
  } else {
    openLoginModal("profile");
  }
}

function openLoginModal(reason = "generic") {
  const modal = document.getElementById("loginModal");
  const content = document.getElementById("loginModalContent");
  if (!modal || !content) return;

  let reasonBannerText = "✨ Login or Signup with Name, Mobile & Email";
  let reasonBannerColor = "linear-gradient(135deg, #ff3f6c 0%, #ff6b8b 100%)";

  if (reason === "orders") {
    reasonBannerText = "📦 Login required to view your Orders & Track packages";
  } else if (reason === "checkout") {
    reasonBannerText = "🛍️ Login required to complete your order & Delivery";
  } else if (reason === "wishlist") {
    reasonBannerText = "❤️ Login required to access & save your Wishlist";
  } else if (reason === "profile") {
    reasonBannerText = "👤 Login required to view your Profile & Addresses";
  }

  const currentName = AppState.isLoggedIn ? AppState.user.name : "";
  const currentPhone = AppState.isLoggedIn ? (AppState.user.mobile || "").replace(/\D/g, '').slice(-10) : "";
  const currentEmail = AppState.isLoggedIn ? AppState.user.email : "";

  content.innerHTML = `
    <div class="login-modal-layout">
      <!-- Authentic Myntra Hot-Pink Header -->
      <div class="login-brand-banner" style="background: ${reasonBannerColor};">
        <div class="login-avatar">${AppState.isLoggedIn ? currentName.charAt(0) : 'M'}</div>
        <div class="login-user-info">
          <h4>${reasonBannerText}</h4>
          <h3>${AppState.isLoggedIn ? `Logged in: ${currentName}` : 'Myntra Fashion Login'}</h3>
          <span class="login-orders-count">
            ${AppState.isLoggedIn 
              ? `📦 ${AppState.orders.length} Orders | 📱 ${AppState.user.mobile}` 
              : '⚡ Enter Name, Mobile & Email to view Orders & Bag'}
          </span>
        </div>
      </div>

      ${AppState.isLoggedIn ? `
        <div class="already-logged-box">
          <p>You are currently logged in as <b>${AppState.user.name}</b> (${AppState.user.email}).</p>
          <div style="display:flex; gap:10px; margin-top:10px;">
            <button class="btn btn-outline btn-sm" onclick="closeAllModals(); openOrderHistoryModal();">View My Orders</button>
            <button class="btn btn-danger-outline btn-sm" onclick="logoutUser()">🚪 Logout</button>
          </div>
        </div>
      ` : ''}

      <!-- Interactive 3-Field Login Form -->
      <div class="login-form-box" id="loginFormContainer">
        <div class="login-field-group">
          <label for="loginNameInput"><b>1. Full Name:</b></label>
          <input type="text" id="loginNameInput" placeholder="Enter Full Name (e.g. Rahul Sharma)" value="${currentName}" autofocus />
        </div>

        <div class="login-field-group">
          <label for="loginPhoneInput"><b>2. Mobile Number (10 Digits):</b></label>
          <div class="phone-input-wrap">
            <span class="phone-code">+91</span>
            <input type="tel" id="loginPhoneInput" maxlength="10" placeholder="10-digit Mobile Number (e.g. 9876543210)" value="${currentPhone}" />
          </div>
        </div>

        <div class="login-field-group">
          <label for="loginEmailInput"><b>3. Email Address:</b></label>
          <input type="email" id="loginEmailInput" placeholder="Email Address (e.g. rahul@example.com)" value="${currentEmail}" />
        </div>

        <button class="btn btn-primary btn-block btn-large btn-get-otp" onclick="requestLoginOTP()">
          CONTINUE (GET OTP & LOGIN) ➔
        </button>
        <small class="login-help-text">🔒 By continuing, you agree to Myntra's Terms of Use and Privacy Policy.</small>
      </div>

      <!-- Quick One-Click Demo Accounts -->
      <div class="quick-accounts-section">
        <div class="quick-sec-title">⚡ Or Click Any Demo Account for Instant Login:</div>
        <div class="quick-accounts-grid">
          <div class="quick-user-card ${AppState.currentUserId === 'rahul sharma' && AppState.isLoggedIn ? 'active' : ''}" 
               onclick="loginWithFullDetails('Rahul Sharma', '9876543210', 'rahul.sharma@example.com')">
            <div class="qu-avatar">R</div>
            <div class="qu-info">
              <strong>Rahul Sharma</strong>
              <span>📱 9876543210 • ✉️ rahul.sharma@example.com • 📦 2 Orders</span>
            </div>
          </div>
          <div class="quick-user-card ${AppState.currentUserId === 'priya patel' && AppState.isLoggedIn ? 'active' : ''}" 
               onclick="loginWithFullDetails('Priya Patel', '9812345678', 'priya.patel@example.com')">
            <div class="qu-avatar">P</div>
            <div class="qu-info">
              <strong>Priya Patel</strong>
              <span>📱 9812345678 • ✉️ priya.patel@example.com • 📦 1 Order</span>
            </div>
          </div>
          <div class="quick-user-card ${AppState.currentUserId === 'aman verma' && AppState.isLoggedIn ? 'active' : ''}" 
               onclick="loginWithFullDetails('Aman Verma', '9988776655', 'aman.verma@example.com')">
            <div class="qu-avatar">A</div>
            <div class="qu-info">
              <strong>Aman Verma</strong>
              <span>📱 9988776655 • ✉️ aman.verma@example.com • 📦 1 Order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("modal-open");
  if (document.body) document.body.classList.add("modal-locked");
}

// Request OTP & Show OTP Verification Screen
function requestLoginOTP() {
  const name = document.getElementById("loginNameInput").value.trim();
  const phone = document.getElementById("loginPhoneInput").value.trim();
  const email = document.getElementById("loginEmailInput").value.trim();

  if (!name || name.length < 2) {
    showToast("Please enter your full name", "error");
    document.getElementById("loginNameInput").focus();
    return;
  }

  const cleanPhone = phone.replace(/\D/g, '').slice(-10);
  if (!cleanPhone || cleanPhone.length < 10) {
    showToast("Please enter a valid 10-digit mobile number", "error");
    document.getElementById("loginPhoneInput").focus();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showToast("Please enter a valid email address", "error");
    document.getElementById("loginEmailInput").focus();
    return;
  }

  // Render OTP Verification step
  const formBox = document.getElementById("loginFormContainer");
  if (!formBox) return;

  formBox.innerHTML = `
    <div class="otp-verification-step">
      <div class="otp-banner">
        <span>📲 OTP sent to <b>+91 ${cleanPhone}</b> & <b>${email}</b></span>
      </div>
      <div class="otp-input-wrap">
        <label for="loginOtpInput"><b>Enter 4-Digit Verification Code:</b></label>
        <input type="text" id="loginOtpInput" maxlength="4" value="2026" class="otp-input-box" />
        <small class="text-green">✓ Auto-filled demo OTP code: <b>2026</b></small>
      </div>
      <button class="btn btn-primary btn-block btn-large" 
              onclick="loginWithFullDetails('${name.replace(/'/g, "\\'")}', '${cleanPhone}', '${email.replace(/'/g, "\\'")}')">
        VERIFY OTP & LOGIN ➔
      </button>
      <button class="btn btn-outline btn-block btn-sm" style="margin-top: 8px;" onclick="openLoginModal()">
        ← Change Mobile / Email
      </button>
    </div>
  `;
}

function submitLoginInput() {
  requestLoginOTP();
}


// 5. TOAST NOTIFICATION UTILITY
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  const icon = type === "success" ? "✓" : type === "info" ? "ℹ" : "✕";
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("toast-show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// 6. UI BADGE UPDATER
function updateBadges() {
  const bagCountEl = document.getElementById("bagCount");
  const wishlistCountEl = document.getElementById("wishlistCount");
  const ordersCountEl = document.getElementById("ordersCount");
  const profileNameEl = document.getElementById("profileHeaderName");
  const announcementUserEl = document.getElementById("announcementUser");
  const announcementSwitchBtn = document.getElementById("announcementSwitchBtn");

  const totalCartCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (bagCountEl) bagCountEl.textContent = totalCartCount;

  if (AppState.isLoggedIn) {
    if (wishlistCountEl) wishlistCountEl.textContent = AppState.wishlist.length;
    if (ordersCountEl) ordersCountEl.textContent = AppState.orders.length;
    if (profileNameEl) profileNameEl.textContent = AppState.user.name.split(" ")[0];
    if (announcementUserEl) announcementUserEl.textContent = AppState.user.name;
    if (announcementSwitchBtn) announcementSwitchBtn.textContent = "Switch";
  } else {
    if (wishlistCountEl) wishlistCountEl.textContent = "0";
    if (ordersCountEl) ordersCountEl.textContent = "0";
    if (profileNameEl) profileNameEl.textContent = "Login";
    if (announcementUserEl) announcementUserEl.textContent = "Guest";
    if (announcementSwitchBtn) announcementSwitchBtn.textContent = "Login";
  }
}

// 7. CATALOG FILTERING & RENDERING
function getFilteredProducts() {
  return PRODUCTS.filter(product => {
    // Category check
    if (AppState.activeFilter !== "all" && product.category !== AppState.activeFilter) {
      return false;
    }
    // Search query check
    if (AppState.searchQuery.trim() !== "") {
      const q = AppState.searchQuery.toLowerCase();
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchName = product.name.toLowerCase().includes(q);
      const matchCategory = product.category.toLowerCase().includes(q);
      const matchTag = product.tag ? product.tag.toLowerCase().includes(q) : false;
      if (!matchBrand && !matchName && !matchCategory && !matchTag) return false;
    }
    // Price filter check
    if (AppState.priceFilter === "under799" && product.price >= 799) return false;
    if (AppState.priceFilter === "799to1499" && (product.price < 799 || product.price > 1499)) return false;
    if (AppState.priceFilter === "above1500" && product.price <= 1500) return false;

    return true;
  }).sort((a, b) => {
    if (AppState.activeSort === "price-low") return a.price - b.price;
    if (AppState.activeSort === "price-high") return b.price - a.price;
    if (AppState.activeSort === "rating") return b.rating - a.rating;
    if (AppState.activeSort === "discount") {
      const discA = parseInt(a.discount) || 0;
      const discB = parseInt(b.discount) || 0;
      return discB - discA;
    }
    return 0; // recommended order
  });
}

function renderCatalog() {
  const grid = document.getElementById("mainProductGrid");
  const countLabel = document.getElementById("catalogResultCount");
  if (!grid) return;

  const products = getFilteredProducts();
  if (countLabel) {
    countLabel.textContent = `Showing ${products.length} of ${PRODUCTS.length} styles`;
  }

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-box full-width">
        <div class="empty-icon">🔍</div>
        <h3>No matching products found</h3>
        <p>Try clearing your search or filters to discover our freshest collection.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-photo" onclick="openProductModal('${product.id}')">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-tag ${product.tag === 'NEW' ? 'tag-new' : ''}">${product.tag}</span>
          <div class="rating-badge">
            <b>${product.rating}</b> <span>★</span> | ${product.reviews}
          </div>
          <button class="wish-btn ${isWishlisted ? 'is-loved' : ''}" 
                  onclick="event.stopPropagation(); toggleWishlist('${product.id}')" 
                  aria-label="Wishlist">
            ${isWishlisted ? '❤️' : '♡'}
          </button>
        </div>
        <div class="product-info" onclick="openProductModal('${product.id}')">
          <div class="product-brand">${product.brand}</div>
          <h3 class="product-name" title="${product.name}">${product.name}</h3>
          <div class="price-row">
            <span class="price-curr">₹${product.price}</span>
            <span class="price-mrp">₹${product.originalPrice}</span>
            <span class="price-discount">(${product.discount})</span>
          </div>
        </div>
        <div class="product-actions-bar">
          <button class="btn-quick-add" onclick="quickAddToBag('${product.id}')">
            🛒 Add to Bag
          </button>
          <button class="btn-quick-view" onclick="openProductModal('${product.id}')">
            Quick View
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// 8. PRODUCT MODAL / QUICK VIEW
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  AppState.activeProductModalId = productId;
  AppState.selectedModalSize = product.sizes[0];

  const modal = document.getElementById("productModal");
  const modalContent = document.getElementById("productModalContent");
  if (!modal || !modalContent) return;

  const isWishlisted = AppState.wishlist.includes(product.id);

  modalContent.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-product-gallery">
        <img src="${product.image}" alt="${product.name}" class="modal-product-main-img" />
        <div class="product-features-ribbon">
          <span>✓ 100% Genuine</span>
          <span>↺ Easy 7-Day Return</span>
          <span>🚚 Express Dispatch</span>
        </div>
      </div>
      <div class="modal-product-details">
        <div class="modal-brand">${product.brand}</div>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-rating">
          <span class="rating-box">${product.rating} ★</span>
          <span class="reviews-count">${product.reviews} verified ratings</span>
          <span class="badge-cat">${product.category.toUpperCase()}</span>
        </div>
        
        <hr class="modal-divider"/>

        <div class="modal-price-box">
          <span class="modal-current-price">₹${product.price}</span>
          <span class="modal-mrp">MRP ₹${product.originalPrice}</span>
          <span class="modal-discount">${product.discount}</span>
          <div class="tax-info">inclusive of all taxes</div>
        </div>

        <div class="modal-size-section">
          <div class="size-header">
            <strong>SELECT SIZE:</strong>
            <span class="size-chart-link">Size Chart 📏</span>
          </div>
          <div class="size-selector-grid">
            ${product.sizes.map((s, idx) => `
              <button class="size-btn ${idx === 0 ? 'selected' : ''}" 
                      onclick="selectSize('${s}', this)">
                ${s}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="modal-action-buttons">
          <button class="btn btn-primary btn-large btn-add-bag" onclick="addActiveModalToBag()">
            🛍️ ADD TO BAG
          </button>
          <button class="btn btn-outline btn-large btn-wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}', true)">
            ${isWishlisted ? '❤️ WISHLISTED' : '♡ WISHLIST'}
          </button>
        </div>

        <div class="pincode-check-card">
          <div class="pincode-header"><strong>DELIVERY OPTIONS</strong> 🚚</div>
          <div class="pincode-input-box">
            <input type="text" id="pincodeInput" placeholder="Enter pincode (e.g. 110001)" maxlength="6" value="110001" />
            <button onclick="checkPincode()">Check</button>
          </div>
          <div id="pincodeResult" class="pincode-result active">
            ✓ Delivering to <b>110001</b> in 2-3 business days. Free shipping eligible!
          </div>
        </div>

        <div class="product-info-accordion">
          <h4>Product Details:</h4>
          <p>${product.description}</p>
          <ul>
            <li>Material: Premium breathable weave</li>
            <li>Fit: Modern tailoring for all-day comfort</li>
            <li>Care Instructions: Machine wash cold, tumble dry low</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("modal-open");
  if (document.body) document.body.classList.add("modal-locked");
}

function selectSize(size, btnEl) {
  AppState.selectedModalSize = size;
  const buttons = document.querySelectorAll(".size-btn");
  buttons.forEach(b => b.classList.remove("selected"));
  if (btnEl) btnEl.classList.add("selected");
}

function checkPincode() {
  const input = document.getElementById("pincodeInput");
  const res = document.getElementById("pincodeResult");
  if (!input || !res) return;
  const val = input.value.trim();
  if (val.length >= 6) {
    res.innerHTML = `✓ Eligible for express delivery to <b>${val}</b> by tomorrow evening!`;
    res.className = "pincode-result active";
  } else {
    res.innerHTML = `<span style="color:#d9534f">Please enter a valid 6-digit delivery pincode.</span>`;
    res.className = "pincode-result error";
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("modal-open"));
  document.querySelectorAll(".drawer").forEach(d => d.classList.remove("drawer-open"));
  if (document.body) document.body.classList.remove("modal-locked");
}

function quickAddToBag(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const defaultSize = product.sizes[0];
  addToCart(productId, defaultSize, 1);
}

function addActiveModalToBag() {
  if (!AppState.activeProductModalId) return;
  const size = AppState.selectedModalSize || "M";
  addToCart(AppState.activeProductModalId, size, 1);
  closeAllModals();
  openCartDrawer();
}

// 9. CART / BAG MANAGEMENT
function addToCart(productId, size, quantity = 1) {
  const existingItemIndex = AppState.cart.findIndex(
    item => item.id === productId && item.size === size
  );

  if (existingItemIndex > -1) {
    AppState.cart[existingItemIndex].quantity += quantity;
  } else {
    AppState.cart.push({ id: productId, size, quantity });
  }

  saveState();
  const product = PRODUCTS.find(p => p.id === productId);
  showToast(`Added ${product ? product.name : 'item'} to Bag!`);
}

function updateCartQty(index, change) {
  if (AppState.cart[index]) {
    AppState.cart[index].quantity += change;
    if (AppState.cart[index].quantity <= 0) {
      AppState.cart.splice(index, 1);
      showToast("Item removed from Bag", "info");
    }
    saveState();
    renderCart();
  }
}

function removeFromCart(index) {
  if (AppState.cart[index]) {
    AppState.cart.splice(index, 1);
    saveState();
    renderCart();
    showToast("Item removed from Bag", "info");
  }
}

function calculateCartTotals() {
  let totalMRP = 0;
  let totalCurrentPrice = 0;

  AppState.cart.forEach(cartItem => {
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    if (product) {
      totalMRP += product.originalPrice * cartItem.quantity;
      totalCurrentPrice += product.price * cartItem.quantity;
    }
  });

  const discountOnMRP = totalMRP - totalCurrentPrice;
  let couponDiscount = 0;

  if (AppState.appliedCoupon) {
    const coupon = COUPONS[AppState.appliedCoupon];
    if (coupon) {
      if (totalCurrentPrice >= coupon.minSpend) {
        if (coupon.discountPercent) {
          couponDiscount = Math.min(
            Math.round((totalCurrentPrice * coupon.discountPercent) / 100),
            coupon.maxDiscount || 9999
          );
        } else if (coupon.flatDiscount) {
          couponDiscount = coupon.flatDiscount;
        }
      } else {
        // Minimum spend not met
        AppState.appliedCoupon = null;
      }
    }
  }

  const deliveryFee = totalCurrentPrice >= 999 || totalCurrentPrice === 0 ? 0 : 99;
  const finalTotal = Math.max(0, totalCurrentPrice - couponDiscount + deliveryFee);

  return {
    totalMRP,
    totalCurrentPrice,
    discountOnMRP,
    couponDiscount,
    deliveryFee,
    finalTotal
  };
}

function renderCart() {
  const container = document.getElementById("cartItemsContainer");
  const summaryBox = document.getElementById("cartSummaryContainer");
  const drawerCount = document.getElementById("drawerCartCount");
  if (!container) return;

  const totalCount = AppState.cart.reduce((s, i) => s + i.quantity, 0);
  if (drawerCount) drawerCount.textContent = `(${totalCount} Items)`;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <div class="empty-icon">🛍️</div>
        <h3>Hey, your shopping bag is empty!</h3>
        <p>Explore top styles and add your favorite picks today.</p>
        <button class="btn btn-primary" onclick="closeAllModals();">START SHOPPING</button>
      </div>
    `;
    if (summaryBox) summaryBox.innerHTML = "";
    return;
  }

  container.innerHTML = AppState.cart.map((cartItem, idx) => {
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    if (!product) return "";
    return `
      <div class="cart-item-card">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <div class="cart-item-brand">${product.brand}</div>
          <div class="cart-item-title">${product.name}</div>
          <div class="cart-item-size-badge">Size: <b>${cartItem.size}</b></div>
          <div class="cart-item-prices">
            <span class="price-curr">₹${product.price}</span>
            <span class="price-mrp">₹${product.originalPrice}</span>
            <span class="price-discount">(${product.discount})</span>
          </div>
          <div class="cart-item-qty-row">
            <span class="qty-label">Qty:</span>
            <div class="qty-control-box">
              <button onclick="updateCartQty(${idx}, -1)">−</button>
              <span>${cartItem.quantity}</span>
              <button onclick="updateCartQty(${idx}, 1)">+</button>
            </div>
          </div>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart(${idx})" title="Remove item">✕</button>
      </div>
    `;
  }).join("");

  const totals = calculateCartTotals();

  if (summaryBox) {
    summaryBox.innerHTML = `
      <div class="coupon-section">
        <div class="coupon-label"><b>APPLY COUPON:</b></div>
        <div class="coupon-input-group">
          <input type="text" id="couponCodeInput" placeholder="Enter coupon code" 
                 value="${AppState.appliedCoupon || ''}" />
          ${AppState.appliedCoupon 
            ? `<button class="btn-coupon btn-remove-coupon" onclick="removeCoupon()">REMOVE</button>`
            : `<button class="btn-coupon" onclick="applyCouponInput()">APPLY</button>`
          }
        </div>
        <div class="available-coupons-chips">
          <span class="coupon-chip" onclick="applyDirectCoupon('MYNTRA20')">🏷️ MYNTRA20 (20% OFF)</span>
          <span class="coupon-chip" onclick="applyDirectCoupon('FLAT200')">🏷️ FLAT200</span>
          <span class="coupon-chip" onclick="applyDirectCoupon('FESTIVE500')">🏷️ FESTIVE500</span>
        </div>
      </div>

      <div class="price-details-card">
        <h4>PRICE DETAILS (${totalCount} Items)</h4>
        <div class="price-summary-row">
          <span>Total MRP</span>
          <span>₹${totals.totalMRP}</span>
        </div>
        <div class="price-summary-row text-green">
          <span>Discount on MRP</span>
          <span>- ₹${totals.discountOnMRP}</span>
        </div>
        ${totals.couponDiscount > 0 ? `
          <div class="price-summary-row text-green">
            <span>Coupon Discount (${AppState.appliedCoupon})</span>
            <span>- ₹${totals.couponDiscount}</span>
          </div>
        ` : ''}
        <div class="price-summary-row">
          <span>Convenience / Shipping Fee</span>
          <span>${totals.deliveryFee === 0 ? '<span class="text-green">FREE</span>' : `₹${totals.deliveryFee}`}</span>
        </div>
        <hr class="summary-divider"/>
        <div class="price-summary-row total-amount-row">
          <span>Total Amount</span>
          <span>₹${totals.finalTotal}</span>
        </div>
        <div class="savings-alert">
          🎉 You are saving <b>₹${totals.discountOnMRP + totals.couponDiscount}</b> on this order!
        </div>
        <button class="btn btn-primary btn-block btn-checkout" onclick="openCheckoutModal()">
          PROCEED TO CHECKOUT ➔
        </button>
      </div>
    `;
  }
}

function openCartDrawer() {
  renderCart();
  const drawer = document.getElementById("cartDrawer");
  if (drawer) {
    drawer.classList.add("drawer-open");
    if (document.body) document.body.classList.add("modal-locked");
  }
}

function applyDirectCoupon(code) {
  const coupon = COUPONS[code];
  if (!coupon) return;
  const totals = calculateCartTotals();
  if (totals.totalCurrentPrice < coupon.minSpend) {
    showToast(`Coupon requires minimum cart value of ₹${coupon.minSpend}`, "error");
    return;
  }
  AppState.appliedCoupon = code;
  showToast(`Coupon ${code} applied successfully!`);
  renderCart();
}

function applyCouponInput() {
  const input = document.getElementById("couponCodeInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!COUPONS[code]) {
    showToast("Invalid coupon code. Try MYNTRA20, FLAT200 or FESTIVE500", "error");
    return;
  }
  applyDirectCoupon(code);
}

function removeCoupon() {
  AppState.appliedCoupon = null;
  showToast("Coupon removed", "info");
  renderCart();
}

// 10. WISHLIST MANAGEMENT
function toggleWishlist(productId, fromModal = false) {
  if (!requireAuth("wishlist", () => toggleWishlist(productId, fromModal))) return;

  const idx = AppState.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  const name = product ? product.name : "Item";

  if (idx > -1) {
    AppState.wishlist.splice(idx, 1);
    showToast(`Removed from Wishlist`, "info");
  } else {
    AppState.wishlist.push(productId);
    showToast(`Added to Wishlist! ❤️`);
  }

  saveState();
  renderCatalog();
  renderWishlist();

  if (fromModal && AppState.activeProductModalId === productId) {
    openProductModal(productId);
  }
}

function openWishlistModal() {
  if (!requireAuth("wishlist", () => openWishlistModal())) return;

  renderWishlist();
  const modal = document.getElementById("wishlistModal");
  if (modal) {
    modal.classList.add("modal-open");
    if (document.body) document.body.classList.add("modal-locked");
  }
}

function renderWishlist() {
  const grid = document.getElementById("wishlistGrid");
  const countEl = document.getElementById("wishlistModalCount");
  if (!grid) return;

  if (countEl) countEl.textContent = `(${AppState.wishlist.length} Items)`;

  if (AppState.wishlist.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-box full-width">
        <div class="empty-icon">🤍</div>
        <h3>Your Wishlist is lonely</h3>
        <p>Explore collections and hit the heart icon to save products you adore!</p>
        <button class="btn btn-primary" onclick="closeAllModals()">EXPLORE STYLES</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = AppState.wishlist.map(id => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return "";
    return `
      <div class="wishlist-card">
        <div class="wishlist-img-box">
          <img src="${product.image}" alt="${product.name}" />
          <button class="wishlist-card-del" onclick="toggleWishlist('${product.id}')" title="Remove">✕</button>
        </div>
        <div class="wishlist-info">
          <div class="wishlist-brand">${product.brand}</div>
          <div class="wishlist-title">${product.name}</div>
          <div class="price-row">
            <span class="price-curr">₹${product.price}</span>
            <span class="price-mrp">₹${product.originalPrice}</span>
            <span class="price-discount">(${product.discount})</span>
          </div>
        </div>
        <button class="btn-move-to-bag" onclick="moveWishlistToBag('${product.id}')">
          MOVE TO BAG 🛍️
        </button>
      </div>
    `;
  }).join("");
}

function moveWishlistToBag(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const defaultSize = product.sizes[0];
  addToCart(productId, defaultSize, 1);
  const idx = AppState.wishlist.indexOf(productId);
  if (idx > -1) {
    AppState.wishlist.splice(idx, 1);
    saveState();
  }
  renderWishlist();
  renderCatalog();
  showToast(`Moved ${product.name} to Bag!`);
}

// 11. CHECKOUT & ORDER PLACEMENT FLOW
function openCheckoutModal() {
  if (!requireAuth("checkout", () => openCheckoutModal())) return;

  if (AppState.cart.length === 0) {
    showToast("Please add items to Bag first!", "error");
    return;
  }
  closeAllModals();

  const checkoutModal = document.getElementById("checkoutModal");
  if (!checkoutModal) return;

  renderCheckoutContent();
  checkoutModal.classList.add("modal-open");
  if (document.body) document.body.classList.add("modal-locked");
}

function renderCheckoutContent() {
  const container = document.getElementById("checkoutModalContent");
  if (!container) return;

  const totals = calculateCartTotals();
  const address = AppState.addresses[0] || {
    name: "Rahul Sharma",
    mobile: "9876543210",
    pincode: "110001",
    address: "Flat 402, Green Avenue, Connaught Place",
    city: "New Delhi",
    state: "Delhi",
    type: "Home"
  };

  container.innerHTML = `
    <div class="checkout-layout">
      <!-- Left Column: Address & Payment Selection -->
      <div class="checkout-steps-column">
        
        <!-- Step 1: Delivery Address -->
        <div class="checkout-step-card">
          <div class="step-header">
            <span class="step-num">1</span>
            <h3>DELIVERY ADDRESS</h3>
            <button class="step-edit-btn" onclick="toggleEditAddress()">Change / Edit</button>
          </div>
          <div id="checkoutAddressDisplay" class="address-preview-card">
            <div class="addr-badge">${address.type.toUpperCase()}</div>
            <div class="addr-name">${address.name} <span class="addr-mobile">📱 ${address.mobile}</span></div>
            <div class="addr-text">${address.address}, ${address.city}, ${address.state} - <b>${address.pincode}</b></div>
          </div>
          <div id="checkoutAddressForm" class="address-edit-form" style="display: none;">
            <div class="form-row">
              <input type="text" id="chkName" placeholder="Full Name" value="${address.name}" />
              <input type="text" id="chkMobile" placeholder="10-digit Mobile" value="${address.mobile}" />
            </div>
            <div class="form-row">
              <input type="text" id="chkPincode" placeholder="Pincode" value="${address.pincode}" />
              <input type="text" id="chkCity" placeholder="City" value="${address.city}" />
            </div>
            <div class="form-row">
              <input type="text" id="chkAddress" placeholder="Flat, House no., Street, Area" value="${address.address}" />
              <select id="chkState">
                <option value="Delhi" selected>Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Haryana">Haryana</option>
              </select>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="saveCheckoutAddress()">Save & Deliver Here</button>
          </div>
        </div>

        <!-- Step 2: Payment Method -->
        <div class="checkout-step-card">
          <div class="step-header">
            <span class="step-num">2</span>
            <h3>CHOOSE PAYMENT METHOD</h3>
          </div>
          <div class="payment-methods-list">
            <label class="payment-option selected">
              <input type="radio" name="paymentMethod" value="UPI (Google Pay / PhonePe)" checked onchange="handlePaymentChange(this)" />
              <div class="pay-info">
                <strong>⚡ UPI / QR (Instant & Recommended)</strong>
                <p>Google Pay, PhonePe, Paytm, or BHIM</p>
              </div>
              <span class="pay-icon">📱</span>
            </label>

            <label class="payment-option">
              <input type="radio" name="paymentMethod" value="Cash on Delivery (COD)" onchange="handlePaymentChange(this)" />
              <div class="pay-info">
                <strong>💵 Cash on Delivery (COD)</strong>
                <p>Pay cash or QR scan at your doorstep upon delivery</p>
              </div>
              <span class="pay-icon">🤝</span>
            </label>

            <label class="payment-option">
              <input type="radio" name="paymentMethod" value="Credit / Debit Card" onchange="handlePaymentChange(this)" />
              <div class="pay-info">
                <strong>💳 Credit or Debit Card</strong>
                <p>Visa, MasterCard, RuPay & Amex accepted</p>
              </div>
              <span class="pay-icon">💳</span>
            </label>

            <label class="payment-option">
              <input type="radio" name="paymentMethod" value="Net Banking" onchange="handlePaymentChange(this)" />
              <div class="pay-info">
                <strong>🏦 Net Banking</strong>
                <p>HDFC, ICICI, SBI, Axis & 30+ Banks</p>
              </div>
              <span class="pay-icon">🏦</span>
            </label>
          </div>

          <!-- Dynamic Payment Sub-Panel -->
          <div id="paymentSubPanel" class="payment-subpanel">
            <div class="upi-box">
              <p>Enter UPI ID or click to pay:</p>
              <div class="upi-input-group">
                <input type="text" id="upiIdInput" placeholder="username@okhdfcbank" value="rahul@oksbi" />
                <button class="btn-verify" type="button" onclick="showToast('UPI ID Verified ✓')">Verify</button>
              </div>
              <small class="text-muted">Instant payment confirmation with bank-grade 256-bit encryption.</small>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column: Order Items Review & Final CTA -->
      <div class="checkout-summary-column">
        <div class="order-review-card">
          <h4>ORDER SUMMARY (${AppState.cart.reduce((s,i)=>s+i.quantity,0)} Items)</h4>
          <div class="checkout-items-preview">
            ${AppState.cart.map(item => {
              const product = PRODUCTS.find(p => p.id === item.id);
              if (!product) return "";
              return `
                <div class="chk-mini-item">
                  <img src="${product.image}" alt="${product.name}" />
                  <div class="chk-mini-info">
                    <div class="chk-mini-brand">${product.brand}</div>
                    <div class="chk-mini-name">${product.name}</div>
                    <div class="chk-mini-sub">Size: <b>${item.size}</b> | Qty: <b>${item.quantity}</b></div>
                    <div class="chk-mini-price">₹${product.price * item.quantity}</div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>

          <div class="checkout-price-breakdown">
            <div class="summary-line">
              <span>Total MRP</span>
              <span>₹${totals.totalMRP}</span>
            </div>
            <div class="summary-line text-green">
              <span>Total Discount</span>
              <span>- ₹${totals.discountOnMRP}</span>
            </div>
            ${totals.couponDiscount > 0 ? `
              <div class="summary-line text-green">
                <span>Coupon Applied</span>
                <span>- ₹${totals.couponDiscount}</span>
              </div>
            ` : ''}
            <div class="summary-line">
              <span>Delivery Fee</span>
              <span>${totals.deliveryFee === 0 ? '<span class="text-green">FREE</span>' : `₹${totals.deliveryFee}`}</span>
            </div>
            <hr/>
            <div class="summary-line total-pay-line">
              <strong>Final Amount</strong>
              <strong>₹${totals.finalTotal}</strong>
            </div>
          </div>

          <button class="btn btn-primary btn-block btn-place-order" onclick="placeOrder()">
            🔒 PLACE ORDER (₹${totals.finalTotal})
          </button>
          <div class="security-badge-row">
            <span>🛡️ 100% Secure Payments</span>
            <span>✓ Verified Merchant</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleEditAddress() {
  const form = document.getElementById("checkoutAddressForm");
  const disp = document.getElementById("checkoutAddressDisplay");
  if (!form || !disp) return;
  const isHidden = form.style.display === "none";
  form.style.display = isHidden ? "block" : "none";
  disp.style.display = isHidden ? "none" : "block";
}

function saveCheckoutAddress() {
  const name = document.getElementById("chkName").value.trim();
  const mobile = document.getElementById("chkMobile").value.trim();
  const pincode = document.getElementById("chkPincode").value.trim();
  const address = document.getElementById("chkAddress").value.trim();
  const city = document.getElementById("chkCity").value.trim();
  const state = document.getElementById("chkState").value;

  if (!name || !mobile || !pincode || !address) {
    showToast("Please fill in all address fields", "error");
    return;
  }

  AppState.addresses[0] = {
    id: "addr_1",
    name, mobile, pincode, address, city, state, type: "Home", isDefault: true
  };
  saveState();
  showToast("Address saved!");
  renderCheckoutContent();
}

function handlePaymentChange(radio) {
  document.querySelectorAll(".payment-option").forEach(opt => opt.classList.remove("selected"));
  radio.closest(".payment-option").classList.add("selected");

  const panel = document.getElementById("paymentSubPanel");
  if (!panel) return;

  if (radio.value.includes("COD")) {
    panel.innerHTML = `
      <div class="cod-box">
        <p>No upfront payment needed! You can pay cash or scan UPI QR code upon doorstep delivery.</p>
        <div class="cod-captcha">
          <span>Security Code: <b>5921</b></span>
          <input type="text" placeholder="Enter code" value="5921" style="width: 100px; padding: 6px; text-align: center;" />
        </div>
      </div>
    `;
  } else if (radio.value.includes("Card")) {
    panel.innerHTML = `
      <div class="card-box">
        <input type="text" placeholder="Card Number (4444 5555 6666 7777)" maxlength="19" value="4532 •••• •••• 9012" />
        <div class="form-row" style="margin-top: 8px;">
          <input type="text" placeholder="MM/YY" maxlength="5" value="08/29" />
          <input type="password" placeholder="CVV" maxlength="3" value="382" />
        </div>
      </div>
    `;
  } else if (radio.value.includes("Net Banking")) {
    panel.innerHTML = `
      <div class="netbank-box">
        <p>Select popular bank:</p>
        <select style="width:100%; padding:8px;">
          <option>HDFC Bank</option>
          <option>State Bank of India (SBI)</option>
          <option>ICICI Bank</option>
          <option>Axis Bank</option>
          <option>Kotak Mahindra Bank</option>
        </select>
      </div>
    `;
  } else {
    panel.innerHTML = `
      <div class="upi-box">
        <p>Enter UPI ID or click to pay:</p>
        <div class="upi-input-group">
          <input type="text" id="upiIdInput" placeholder="username@okhdfcbank" value="rahul@oksbi" />
          <button class="btn-verify" type="button" onclick="showToast('UPI ID Verified ✓')">Verify</button>
        </div>
      </div>
    `;
  }
}

// 12. COMPLETE ORDER PLACEMENT & GENERATION
function placeOrder() {
  if (AppState.cart.length === 0) return;

  const paymentRadio = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMethod = paymentRadio ? paymentRadio.value : "UPI (Google Pay)";
  const address = AppState.addresses[0] || {
    name: "Rahul Sharma",
    mobile: "9876543210",
    pincode: "110001",
    address: "Flat 402, Green Avenue, Connaught Place",
    city: "New Delhi",
    state: "Delhi",
    type: "Home"
  };

  const totals = calculateCartTotals();
  const orderId = `MYN-${Math.floor(100000 + Math.random() * 900000)}`;

  // Construct item snapshots
  const orderItems = AppState.cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return {
      id: item.id,
      brand: product ? product.brand : "MYNTRA",
      name: product ? product.name : "Fashion Item",
      size: item.size,
      price: product ? product.price : 0,
      originalPrice: product ? product.originalPrice : 0,
      quantity: item.quantity,
      image: product ? product.image : ""
    };
  });

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }) + ", " + now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  const newOrder = {
    id: orderId,
    date: dateStr,
    timestamp: Date.now(),
    status: "Confirmed",
    statusCode: "CONFIRMED",
    statusMessage: "Order placed successfully! Preparing for dispatch.",
    progressStep: 1, // 1: Confirmed, 2: Packed, 3: Shipped, 4: Out for Delivery, 5: Delivered
    paymentMethod: paymentMethod,
    items: orderItems,
    pricing: {
      totalMRP: totals.totalMRP,
      discountMRP: totals.discountMRP,
      couponDiscount: totals.couponDiscount,
      deliveryFee: totals.deliveryFee,
      totalAmount: totals.finalTotal
    },
    address: address,
    trackingSteps: [
      { title: "Order Confirmed", date: dateStr, done: true, desc: "Your order was successfully verified and confirmed." },
      { title: "Packed at Warehouse", date: "Expected in 4-6 hours", done: false, desc: "Item will undergo standard quality checks." },
      { title: "Shipped", date: "Expected Tomorrow", done: false, desc: "Handover to express logistics partner." },
      { title: "Out for Delivery", date: "Pending", done: false, desc: "Courier partner delivery assignment." },
      { title: "Delivered", date: "Expected in 2-3 Days", done: false, desc: "Safe OTP delivery at your doorstep." }
    ]
  };

  // Prepend to orders list
  AppState.orders.unshift(newOrder);

  // Clear Bag & applied coupon
  AppState.cart = [];
  AppState.appliedCoupon = null;

  saveState();
  closeAllModals();

  // Show Order Success Celebration
  openOrderSuccessModal(newOrder);
}

function openOrderSuccessModal(order) {
  const modal = document.getElementById("orderSuccessModal");
  const content = document.getElementById("orderSuccessContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="success-celebration-box">
      <div class="success-checkmark-circle">✓</div>
      <h2>Order Placed Successfully!</h2>
      <p class="success-order-id">Order ID: <b>#${order.id}</b></p>
      <p class="success-sub">A confirmation has been sent to <b>${AppState.user.email}</b> & <b>${AppState.user.mobile}</b>.</p>
      
      <div class="success-order-card">
        <div class="succ-row">
          <span>Items Ordered:</span>
          <b>${order.items.length} Product(s)</b>
        </div>
        <div class="succ-row">
          <span>Total Paid:</span>
          <b class="text-green">₹${order.pricing.totalAmount} (${order.paymentMethod})</b>
        </div>
        <div class="succ-row">
          <span>Deliver To:</span>
          <span>${order.address.name}, ${order.address.city} (${order.address.pincode})</span>
        </div>
        <div class="succ-row">
          <span>Estimated Delivery:</span>
          <b>Within 2-3 Business Days</b>
        </div>
      </div>

      <div class="success-modal-actions">
        <button class="btn btn-primary btn-large" onclick="closeAllModals(); openOrderHistoryModal();">
          VIEW IN ORDER HISTORY 📦
        </button>
        <button class="btn btn-outline btn-large" onclick="closeAllModals();">
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  `;

  modal.classList.add("modal-open");
  if (document.body) document.body.classList.add("modal-locked");
}

// 13. ORDER HISTORY MANAGEMENT (User requested core feature!)
function openOrderHistoryModal() {
  if (!requireAuth("orders", () => openOrderHistoryModal())) return;

  renderOrderHistory();
  const modal = document.getElementById("orderHistoryModal");
  if (modal) {
    modal.classList.add("modal-open");
    if (document.body) document.body.classList.add("modal-locked");
  }
}

function renderOrderHistory() {
  const container = document.getElementById("orderHistoryContainer");
  const countEl = document.getElementById("orderHistoryCount");
  if (!container) return;

  if (countEl) countEl.textContent = `(${AppState.orders.length} Orders)`;

  const userBannerHTML = `
    <div class="user-order-account-banner">
      <div class="uo-left">
        <div class="user-avatar-mini">${AppState.user.name.charAt(0)}</div>
        <div class="uo-meta">
          <div class="uo-title">Orders for: <b>${AppState.user.name}</b> (${AppState.orders.length})</div>
          <div class="uo-sub">Har user ke liye Order History alag hoti hai • 📱 ${AppState.user.mobile}</div>
        </div>
      </div>
      <button class="btn btn-outline btn-sm btn-switch-orders" onclick="openLoginModal()">
        ⇄ Switch User / Login
      </button>
    </div>
  `;

  if (AppState.orders.length === 0) {
    container.innerHTML = `
      ${userBannerHTML}
      <div class="empty-state-box full-width">
        <div class="empty-icon">📦</div>
        <h3>No orders found for ${AppState.user.name}!</h3>
        <p>Aapne is naam se abhi koi order place nahi kiya hai. Aap shopping karke naya order place kar sakte hain ya doosre user (e.g. Rahul Sharma ya Priya Patel) par switch karke past orders dekh sakte hain.</p>
        <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap; justify-content:center;">
          <button class="btn btn-primary" onclick="closeAllModals();">START SHOPPING</button>
          <button class="btn btn-outline" onclick="openLoginModal();">⇄ SWITCH USER</button>
        </div>
      </div>
    `;
    return;
  }

  const orderCardsHTML = AppState.orders.map(order => {
    const isCancelled = order.statusCode === "CANCELLED";
    const isDelivered = order.statusCode === "DELIVERED";
    const statusClass = isCancelled ? "status-cancelled" : isDelivered ? "status-delivered" : "status-active";

    // Progress stepper calculation
    const step = order.progressStep || 1;
    const progressPercent = isCancelled ? 0 : Math.min(100, Math.max(10, ((step - 1) / 4) * 100));

    return `
      <div class="order-history-card">
        <!-- Order Header -->
        <div class="order-card-header">
          <div>
            <div class="order-id-label">ORDER #<b>${order.id}</b></div>
            <div class="order-date-label">Placed on ${order.date}</div>
          </div>
          <div class="order-header-right">
            <span class="order-status-badge ${statusClass}">${order.status.toUpperCase()}</span>
            <span class="order-total-price">₹${order.pricing.totalAmount}</span>
          </div>
        </div>

        <!-- Tracking Visual Stepper -->
        ${!isCancelled ? `
          <div class="order-stepper-box">
            <div class="stepper-bar-bg">
              <div class="stepper-bar-fill" style="width: ${progressPercent}%;"></div>
            </div>
            <div class="stepper-steps-row">
              <div class="step-point ${step >= 1 ? 'completed' : ''}">
                <div class="dot"></div>
                <span>Confirmed</span>
              </div>
              <div class="step-point ${step >= 2 ? 'completed' : ''}">
                <div class="dot"></div>
                <span>Packed</span>
              </div>
              <div class="step-point ${step >= 3 ? 'completed' : ''}">
                <div class="dot"></div>
                <span>Shipped</span>
              </div>
              <div class="step-point ${step >= 4 ? 'completed' : ''}">
                <div class="dot"></div>
                <span>Out for Delivery</span>
              </div>
              <div class="step-point ${step >= 5 ? 'completed' : ''}">
                <div class="dot"></div>
                <span>Delivered</span>
              </div>
            </div>
          </div>
        ` : `
          <div class="order-cancelled-banner">
            ⚠️ This order was cancelled. Any refund has been processed to the original payment source.
          </div>
        `}

        <!-- Items in this Order -->
        <div class="order-items-list">
          ${order.items.map(item => `
            <div class="order-single-item">
              <img src="${item.image}" alt="${item.name}" class="order-item-thumb" />
              <div class="order-item-desc">
                <div class="order-item-brand">${item.brand}</div>
                <div class="order-item-title">${item.name}</div>
                <div class="order-item-meta">Size: <b>${item.size}</b> | Quantity: <b>${item.quantity}</b></div>
                <div class="order-item-price">Paid: <b>₹${item.price}</b> <del>₹${item.originalPrice}</del></div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Order Footer Details & Action Buttons -->
        <div class="order-card-footer">
          <div class="order-delivery-meta">
            <span>📍 Shipping to: <b>${order.address.name}</b>, ${order.address.city} (${order.address.pincode})</span>
            <span>💳 Payment: <b>${order.paymentMethod}</b></span>
          </div>

          <div class="order-action-btns">
            <button class="btn btn-outline btn-sm" onclick="openOrderTrackingTimeline('${order.id}')">
              📍 Track Package
            </button>
            <button class="btn btn-outline btn-sm" onclick="openInvoiceModal('${order.id}')">
              📄 View Invoice
            </button>
            ${!isCancelled && !isDelivered ? `
              <button class="btn btn-danger-outline btn-sm" onclick="confirmCancelOrder('${order.id}')">
                ✕ Cancel Order
              </button>
            ` : ''}
            <button class="btn btn-primary btn-sm" onclick="reorderItems('${order.id}')">
              🔄 Buy Again
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = userBannerHTML + orderCardsHTML;
}

// 14. ORDER TRACKING TIMELINE MODAL
function openOrderTrackingTimeline(orderId) {
  const order = AppState.orders.find(o => o.id === orderId);
  if (!order) return;

  const modal = document.getElementById("trackingModal");
  const content = document.getElementById("trackingModalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="tracking-timeline-layout">
      <div class="tracking-header-info">
        <div>
          <h3>Tracking Package: #${order.id}</h3>
          <p>Carrier: <b>BlueDart Express / Myntra Logistics</b> | AWB: <b>BD${order.id.replace('MYN-','')}92IN</b></p>
        </div>
        <span class="order-status-badge ${order.statusCode === 'DELIVERED' ? 'status-delivered' : 'status-active'}">
          ${order.status.toUpperCase()}
        </span>
      </div>

      <div class="live-timeline-tree">
        ${order.trackingSteps.map((s, idx) => `
          <div class="timeline-node ${s.done ? 'node-done' : 'node-pending'}">
            <div class="node-marker">${s.done ? '✓' : idx + 1}</div>
            <div class="node-content">
              <div class="node-title-row">
                <strong>${s.title}</strong>
                <span class="node-time">${s.date}</span>
              </div>
              <p class="node-desc">${s.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="tracking-address-box">
        <strong>Delivery Destination:</strong>
        <p>${order.address.name} (${order.address.mobile})<br/>
           ${order.address.address}, ${order.address.city}, ${order.address.state} - ${order.address.pincode}</p>
      </div>
    </div>
  `;

  modal.classList.add("modal-open");
  if (document.body) document.body.classList.add("modal-locked");
}

// 15. CANCEL ORDER
function confirmCancelOrder(orderId) {
  const confirmed = confirm(`Are you sure you want to cancel Order #${orderId}?`);
  if (!confirmed) return;

  const order = AppState.orders.find(o => o.id === orderId);
  if (order) {
    order.status = "Cancelled";
    order.statusCode = "CANCELLED";
    order.statusMessage = "Order cancelled by customer.";
    order.progressStep = 0;
    saveState();
    renderOrderHistory();
    showToast(`Order #${orderId} has been cancelled`, "info");
  }
}

// 16. REORDER / BUY AGAIN
function reorderItems(orderId) {
  const order = AppState.orders.find(o => o.id === orderId);
  if (!order) return;

  order.items.forEach(item => {
    addToCart(item.id, item.size, item.quantity);
  });

  closeAllModals();
  openCartDrawer();
  showToast(`Items from Order #${orderId} added to your Bag!`);
}

// 17. TAX INVOICE MODAL
function openInvoiceModal(orderId) {
  const order = AppState.orders.find(o => o.id === orderId);
  if (!order) return;

  const modal = document.getElementById("invoiceModal");
  const content = document.getElementById("invoiceModalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="printable-invoice">
      <div class="invoice-header">
        <div class="inv-brand">
          <div class="inv-brand-mark">M</div>
          <div>
            <h2>MYNTRA DESIGNS PVT. LTD.</h2>
            <p>GSTIN: 29AABCM1429K1ZX | CIN: U72900KA2007PTC042890</p>
          </div>
        </div>
        <div class="inv-meta">
          <h3>TAX INVOICE</h3>
          <p>Invoice No: <b>INV-${order.id}</b></p>
          <p>Invoice Date: <b>${order.date.split(',')[0]}</b></p>
        </div>
      </div>

      <hr/>

      <div class="invoice-parties">
        <div class="inv-sold-by">
          <b>Sold By:</b>
          <p>Vector E-commerce Logistics<br/>
          Plot 48, Apparel Park, Doddaballapura<br/>
          Bangalore, Karnataka - 560068</p>
        </div>
        <div class="inv-bill-to">
          <b>Billing & Shipping Address:</b>
          <p>${order.address.name} (${order.address.type})<br/>
          ${order.address.address}<br/>
          ${order.address.city}, ${order.address.state} - ${order.address.pincode}<br/>
          Phone: ${order.address.mobile}</p>
        </div>
      </div>

      <table class="inv-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Description</th>
            <th>Size</th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map((item, idx) => `
            <tr>
              <td>${idx + 1}</td>
              <td><b>${item.brand}</b> - ${item.name}</td>
              <td>${item.size}</td>
              <td>${item.quantity}</td>
              <td>₹${item.price}</td>
              <td>₹${item.price * item.quantity}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>

      <div class="inv-total-section">
        <div class="inv-totals-box">
          <div class="inv-row"><span>Total MRP:</span> <span>₹${order.pricing.totalMRP}</span></div>
          <div class="inv-row"><span>Catalog Discounts:</span> <span>- ₹${order.pricing.discountMRP}</span></div>
          ${order.pricing.couponDiscount > 0 ? `
            <div class="inv-row"><span>Coupon Discount:</span> <span>- ₹${order.pricing.couponDiscount}</span></div>
          ` : ''}
          <div class="inv-row"><span>Shipping Charges:</span> <span>₹${order.pricing.deliveryFee}</span></div>
          <div class="inv-row inv-grand-total">
            <strong>Grand Total Paid:</strong>
            <strong>₹${order.pricing.totalAmount}</strong>
          </div>
          <small>Payment Mode: ${order.paymentMethod}</small>
        </div>
      </div>

      <div class="inv-footer">
        <p>This is a computer generated invoice and does not require a physical signature.</p>
        <button class="btn btn-primary" onclick="window.print()">🖨️ PRINT INVOICE</button>
      </div>
    </div>
  `;

  modal.classList.add("modal-open");
  if (document.body) document.body.classList.add("modal-locked");
}

// 18. USER PROFILE MODAL
function openProfileModal() {
  if (!requireAuth("profile", () => openProfileModal())) return;

  const modal = document.getElementById("profileModal");
  const content = document.getElementById("profileModalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="profile-card-layout">
      <div class="profile-avatar-circle">
        ${AppState.user.name.charAt(0)}
      </div>
      <div class="profile-meta-header">
        <h3>${AppState.user.name}</h3>
        <p class="profile-tier-badge">⭐ ${AppState.user.tier}</p>
        <div class="supercoins-box">
          🪙 <b>${AppState.user.superCoins}</b> Insider SuperCoins Available
        </div>
      </div>

      <div class="profile-quick-stats">
        <div class="p-stat" onclick="closeAllModals(); openOrderHistoryModal();">
          <div class="p-stat-num">${AppState.orders.length}</div>
          <div class="p-stat-lbl">Orders Placed</div>
        </div>
        <div class="p-stat" onclick="closeAllModals(); openWishlistModal();">
          <div class="p-stat-num">${AppState.wishlist.length}</div>
          <div class="p-stat-lbl">Wishlist Items</div>
        </div>
        <div class="p-stat" onclick="closeAllModals(); openCartDrawer();">
          <div class="p-stat-num">${AppState.cart.reduce((s,i)=>s+i.quantity,0)}</div>
          <div class="p-stat-lbl">Items in Bag</div>
        </div>
      </div>

      <div class="profile-edit-box">
        <h4>Account Details:</h4>
        <div class="form-row">
          <label>Full Name:
            <input type="text" id="profNameInput" value="${AppState.user.name}" />
          </label>
        </div>
        <div class="form-row">
          <label>Email:
            <input type="email" id="profEmailInput" value="${AppState.user.email}" />
          </label>
        </div>
        <div class="form-row">
          <label>Mobile:
            <input type="text" id="profPhoneInput" value="${AppState.user.mobile}" />
          </label>
        </div>
        <button class="btn btn-primary btn-block" onclick="saveProfileDetails()">Save Profile Details</button>
      </div>

      <div class="profile-links-list">
        <button class="p-link-item p-link-highlight" onclick="closeAllModals(); openLoginModal();">
          👤 Switch Account (Login as another user)
        </button>
        <button class="p-link-item" onclick="closeAllModals(); openOrderHistoryModal();">
          📦 My Orders & Tracking
        </button>
        <button class="p-link-item" onclick="closeAllModals(); openWishlistModal();">
          ❤️ My Wishlist
        </button>
        <button class="p-link-item p-link-logout" onclick="logoutUser()">
          🚪 Logout from Account
        </button>
        <button class="p-link-item" onclick="resetToInitialDemo()">
          🔄 Reset Demo Data to Factory Defaults
        </button>
      </div>
    </div>
  `;

  modal.classList.add("modal-open");
  if (document.body) document.body.classList.add("modal-locked");
}

function saveProfileDetails() {
  const name = document.getElementById("profNameInput").value.trim();
  const email = document.getElementById("profEmailInput").value.trim();
  const phone = document.getElementById("profPhoneInput").value.trim();

  if (name) AppState.user.name = name;
  if (email) AppState.user.email = email;
  if (phone) AppState.user.mobile = phone;

  saveState();
  showToast("Profile details updated!");
  closeAllModals();
}

function resetToInitialDemo() {
  if (confirm("Reset all Bag items, Wishlist and Orders to default demo state?")) {
    localStorage.removeItem("myntra_cart");
    localStorage.removeItem("myntra_wishlist");
    localStorage.removeItem("myntra_orders");
    localStorage.removeItem("myntra_addresses");
    localStorage.removeItem("myntra_user");
    location.reload();
  }
}

// 19. FILTERS & SEARCH EVENT LISTENERS
function setupEventListeners() {
  // Category tabs / pills
  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      AppState.activeFilter = tab.dataset.category || "all";
      renderCatalog();
    });
  });

  // Price filter selector
  const priceFilterSelect = document.getElementById("priceFilterSelect");
  if (priceFilterSelect) {
    priceFilterSelect.addEventListener("change", (e) => {
      AppState.priceFilter = e.target.value;
      renderCatalog();
    });
  }

  // Sort by selector
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.activeSort = e.target.value;
      renderCatalog();
    });
  }

  // Search input
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Close modals on clicking overlay backdrop
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", closeAllModals);
  });
  document.querySelectorAll(".drawer-overlay").forEach(overlay => {
    overlay.addEventListener("click", closeAllModals);
  });

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });
}

function resetFilters() {
  AppState.activeFilter = "all";
  AppState.activeSort = "recommended";
  AppState.priceFilter = "all";
  AppState.searchQuery = "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "recommended";
  const priceFilterSelect = document.getElementById("priceFilterSelect");
  if (priceFilterSelect) priceFilterSelect.value = "all";

  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === "all");
  });

  renderCatalog();
}

function setCategoryFilter(category) {
  AppState.activeFilter = category;
  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === category);
  });
  renderCatalog();
  const catalogEl = document.getElementById("catalogSection");
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: "smooth" });
  }
}

// 20. GLOBAL EXPORTS FOR INLINE ONCLICK HANDLERS
window.AppState = AppState;
window.PRODUCTS = PRODUCTS;
window.COUPONS = COUPONS;
window.showToast = showToast;
window.updateBadges = updateBadges;
window.renderCatalog = renderCatalog;
window.openProductModal = openProductModal;
window.selectSize = selectSize;
window.checkPincode = checkPincode;
window.closeAllModals = closeAllModals;
window.quickAddToBag = quickAddToBag;
window.addActiveModalToBag = addActiveModalToBag;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.calculateCartTotals = calculateCartTotals;
window.renderCart = renderCart;
window.openCartDrawer = openCartDrawer;
window.applyDirectCoupon = applyDirectCoupon;
window.applyCouponInput = applyCouponInput;
window.removeCoupon = removeCoupon;
window.toggleWishlist = toggleWishlist;
window.openWishlistModal = openWishlistModal;
window.renderWishlist = renderWishlist;
window.moveWishlistToBag = moveWishlistToBag;
window.openCheckoutModal = openCheckoutModal;
window.renderCheckoutContent = renderCheckoutContent;
window.toggleEditAddress = toggleEditAddress;
window.saveCheckoutAddress = saveCheckoutAddress;
window.handlePaymentChange = handlePaymentChange;
window.placeOrder = placeOrder;
window.openOrderSuccessModal = openOrderSuccessModal;
window.openOrderHistoryModal = openOrderHistoryModal;
window.renderOrderHistory = renderOrderHistory;
window.openOrderTrackingTimeline = openOrderTrackingTimeline;
window.confirmCancelOrder = confirmCancelOrder;
window.reorderItems = reorderItems;
window.openInvoiceModal = openInvoiceModal;
window.openProfileModal = openProfileModal;
window.saveProfileDetails = saveProfileDetails;
window.resetToInitialDemo = resetToInitialDemo;
window.loginUser = loginUser;
window.loginWithFullDetails = loginWithFullDetails;
window.logoutUser = logoutUser;
window.requireAuth = requireAuth;
window.handleProfileHeaderClick = handleProfileHeaderClick;
window.requestLoginOTP = requestLoginOTP;
window.openLoginModal = openLoginModal;
window.submitLoginInput = submitLoginInput;
window.resetFilters = resetFilters;
window.setCategoryFilter = setCategoryFilter;

// 21. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateBadges();
  setupEventListeners();
});

