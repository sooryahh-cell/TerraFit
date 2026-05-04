# Terra Fit — Premium Clothing Store

A full-stack eCommerce web app for Men's & Women's streetwear with neon aesthetics.

## Tech Stack

- **Frontend:** Next.js 16, React, TypeScript, CSS Modules
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Auth:** JWT + bcrypt
- **Payments:** Razorpay

## Project Structure

```
TerrafitBackend/
├── backend/        ← Express API server
│   ├── models/     ← MongoDB schemas (User, Product)
│   ├── routes/     ← API routes (auth, products, orders)
│   └── server.js   ← Entry point
└── frontend/       ← Next.js app
    └── src/
        ├── app/    ← Pages (home, products, cart, checkout, login, register)
        ├── components/ ← Navbar, Footer, ProductCard
        ├── context/    ← CartContext (localStorage)
        └── data/       ← Product data + API fetch
```

## Running Locally

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
