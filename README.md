📁 Style Hub: Premium Men’s Salon Ecosystem

Style Hub Banner

Style Hub is a high-performance, production-ready web application designed for
luxury barber shops and men's salons. Built with a "Zero-Library" philosophy, it
leverages pure HTML5, CSS3, and Vanilla JavaScript to achieve sub-second load
times and a premium "Apple-meets-Tesla" aesthetic.

💎 Design Philosophy

  - Aesthetic: Premium Dark Mode, Glassmorphism, and Minimalist UI.
  - Performance: Optimized for 100/100 Lighthouse scores. Zero bloat (No jQuery,
    No Bootstrap).
  - Architecture: Decoupled Content Management. All salon data (prices, styles,
    barbers) is managed via Firebase Firestore, requiring zero code changes for
    daily updates.

🚀 Key Features

🛠 Technical Excellence

  - Progressive Web App (PWA): Fully installable on iOS/Android with offline
    caching via Service Workers.
  - Firebase Integration: Real-time data syncing for bookings and content
    management.
  - Modular JS: ES6 modules for clean, maintainable logic.
  - Performance UX: Skeleton loaders, lazy-loaded images, and intersection
    observer animations.

✂️ User Features

  - Dynamic Gallery: Filterable hairstyles (Fade, Taper, Quiff, etc.) with
    real-time search.
  - Luxury Booking: Multi-step booking flow with barber selection and time-slot
    validation.
  - Favorites System: Persistent "Saved Styles" using LocalStorage and Firestore
    syncing.
  - Responsive Design: Fluid layouts using CSS Grid/Flexbox and clamp()
    typography.

🛡 Admin Suite (/admin)

  - Dashboard: Real-time analytics on revenue and booking volume.
  - Content Manager: Full CRUD (Create, Read, Update, Delete) for the hairstyle
    gallery and service menu.
  - Appointment Tracker: Manage pending, completed, and canceled bookings.

📂 Folder Structure

├── admin/                  # Admin-only dashboard and logic
│   ├── index.html          # Admin Dashboard
│   ├── login.html          # Secure Admin Entry
│   └── admin.js            # CRUD & Auth Logic
├── assets/                 # Static assets
│   ├── images/             # Hairstyle and Hero placeholders
│   ├── icons/              # SVG icons & PWA manifests
│   └── logo.png            # Brand Identity
├── css/                    # Modular Style Sheets
│   ├── style.css           # Global variables & Base styles
│   ├── animations.css      # Custom keyframes & transitions
│   └── responsive.css      # Breakpoints (Mobile First)
├── js/                     # Application Logic
│   ├── firebase.js         # Firebase Abstraction Layer
│   ├── booking.js          # Appointment Logic
│   ├── gallery.js          # Search/Filter & Rendering
│   └── main.js             # Global UI Logic
├── index.html              # Landing Page
├── booking.html            # Booking Engine
├── sw.js                   # Service Worker (PWA)
└── firebase-config.js      # Environment Configuration

🛠 Setup & Installation

1. Prerequisites

  - A Firebase Project (Firebase Console)
  - A modern web browser
  - Firebase CLI (for deployment)

2. Configuration

Rename firebase-config.example.js to firebase-config.js and populate it with
your credentials:

export const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};

3. Firestore Schema

Ensure your Firestore contains the following collections:

  - haircuts: { name, price, duration, category, imageUrl, featured: bool }
  - services: { name, price, description, duration }
  - bookings: { customerName, phone, date, time, barber, status }
  - settings: { address, phone, hours, announcement }

4. Security Rules

Deploy the following rules to your Firebase console to protect user data:

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public to read content, but not bookings
    match /haircuts/{id} { allow read: if true; allow write: if request.auth != null; }
    match /services/{id} { allow read: if true; allow write: if request.auth != null; }
    match /settings/{id} { allow read: if true; allow write: if request.auth != null; }
    
    // Public can create bookings, but only Admin can read/update them
    match /bookings/{id} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}

📈 Performance Optimization

  - Critical CSS: Global variables are loaded first to prevent Flash of Unstyled
    Content (FOUC).
  - Image Optimization: Images use object-fit: cover and loading="lazy" to
    preserve aspect ratios without blocking the main thread.
  - Code Splitting: JavaScript is divided into specialized modules (e.g.,
    booking.js only loads on the booking page).

📱 PWA Support

Style Hub is configured as a Progressive Web App. To customize:

1.  Update manifest.json with your brand colors.
2.  Replace assets/icons/ with your own generated favicon and app icons.
3.  The Service Worker (sw.js) automatically handles caching of core assets for
    offline usage.

📄 License

This project is proprietary and intended for the Style Hub brand. All rights
reserved.

Developed by: biki
Version: 1.0.0
