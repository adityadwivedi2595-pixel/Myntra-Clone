# Myntra Clone - Complete, Ready-To-Use E-Commerce Platform

A feature-rich, fully functional **Myntra E-Commerce Web Clone** built with vanilla HTML5, CSS3, and JavaScript. Zero external dependencies or build steps required—just open `index.html` in any browser!

---

## 🌟 Key Features & Highlights

### 1. 🔐 Authentic Myntra Login & Gated Ordering (NEW!)
- **Login Requirements**: Full Name, 10-Digit Mobile Number (`+91`), and Email Address.
- **Interactive OTP Step**: Simulated 4-digit mobile/email verification (`2026`) with 1-click verification.
- **Mandatory Login Gates (Like Real Myntra)**:
  - Users **must log in** to view **Order History**, access **Wishlist**, or proceed through **Checkout** to place an order.
  - Clicking any protected action as a guest immediately brings up the authentic Myntra login modal with a personalized action banner (e.g. *"Login required to view Orders"* or *"Login required to checkout"*).
  - After logging in, the app automatically executes the pending action seamlessly!
- **Logout Feature**: Includes a dedicated "Logout" button in the Profile menu and Login modal to easily test guest vs. authenticated modes.
- **Complete Data Isolation**: Each user gets their own dedicated:
  - **Order History**: Orders placed by Rahul belong to Rahul; orders placed by Priya belong to Priya!
  - **Shopping Bag / Cart**: Unique items and quantities per account.
  - **Wishlist**: Saved styles saved individually.
  - **Delivery Addresses**: Saved per account with mobile number and email.
- **Pre-Configured Demo Accounts**:
  - **Rahul Sharma**: 📱 `9876543210` • ✉️ `rahul.sharma@example.com` • 2 Orders.
  - **Priya Patel**: 📱 `9812345678` • ✉️ `priya.patel@example.com` • 1 Order.
  - **Aman Verma**: 📱 `9988776655` • ✉️ `aman.verma@example.com` • 1 Order.
  - **Custom Login**: Fill any custom Name, Phone & Email to create an instant private profile!

### 2. 📦 Comprehensive Order History & Tracking
- **Instant Past Orders**: Preloaded with realistic delivered and in-transit orders so you can test features immediately.
- **Live Visual Progress Tracker**: Interactive 5-step status stepper (`Order Confirmed` ➔ `Packed` ➔ `Shipped` ➔ `Out for Delivery` ➔ `Delivered`).
- **Live Package Tracking**: Realistic BlueDart Express courier timeline with detailed checkpoint timestamps and locations.
- **Cancel Order**: Cancel active orders anytime with real-time UI state updates and status badges.
- **Tax Invoice & Receipt**: Formal computer-generated GST tax invoice breakdown with one-click **Print Invoice** (`window.print()`).
- **Buy Again / Reorder**: Quickly re-add items from past orders straight into your bag.

### 2. 🛍️ Interactive Shopping Bag (Cart) & Coupon Engine
- Slide-out Bag drawer with real-time item count badges.
- Quantity increments/decrements with automatic price recalculation.
- Size selector tags and item removal.
- **Smart Coupon System**:
  - `MYNTRA20` — 20% OFF up to ₹600 (min spend ₹999).
  - `FLAT200` — Flat ₹200 OFF on orders above ₹799.
  - `FESTIVE500` — Flat ₹500 Mega Festive discount on ₹1,999+.
  - One-click coupon chips with instant validation.
- Free shipping threshold detection (Free shipping above ₹999).

### 3. 🔒 2-Step Checkout & Order Placement
- **Step 1: Delivery Address**:
  - Pre-filled address with full editing capabilities (Name, Mobile, Pincode, Address, City, State).
- **Step 2: Multiple Payment Modes**:
  - ⚡ **UPI / QR**: Google Pay, PhonePe, Paytm with verification.
  - 💵 **Cash on Delivery (COD)**: Doorstep cash/QR scan with security captcha.
  - 💳 **Credit / Debit Cards**: Card details form with secure encryption mock.
  - 🏦 **Net Banking**: 30+ partner banks dropdown.
- **Order Success Celebration**:
  - Animated celebration screen with newly generated Order ID (e.g. `#MYN-839102`), summary, and direct link to Order History.

### 4. 🤍 Wishlist System
- Quick-toggle heart button on all product cards.
- Dedicated Wishlist modal showing all saved styles.
- One-click **"Move to Bag"** or remove.

### 5. 🔍 Multi-Facet Search, Filter & Sort
- **Category Tabs**: ALL, MEN, WOMEN, KIDS, BEAUTY, FOOTWEAR, ACCESSORIES.
- **Live Search**: Real-time filtering across brands, product titles, tags, and categories.
- **Price Filter**: Under ₹799, ₹799 - ₹1,499, Above ₹1,500.
- **Sorting**: Recommended, Price: Low to High, Price: High to Low, Customer Rating, Discount.

### 6. 📱 Product Details & Quick View
- Full product preview with high-resolution imagery.
- Size selector chips with visual active states.
- Live Pincode delivery eligibility checker.
- Complete material, fit, and care specifications.

### 7. 👤 User Profile & Myntra Insider
- User profile modal with tier badge and 480 SuperCoins balance.
- Editable name, email, and phone number.
- Reset demo data button to restore initial factory state anytime.

---

## 🚀 How to Run

No `npm install` or compilation needed!

1. **Option 1 (Direct)**:
   Double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

2. **Option 2 (Local Server)**:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.

---

## 💾 State Persistence
All changes—cart items, wishlisted products, custom delivery addresses, and newly placed or cancelled orders—are persistently saved in your browser's `localStorage`. Refreshing or reopening the page preserves your complete shopping and order history!

