# 🍔 Food Delivery Application

A full-stack food ordering and delivery web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It allows users to explore food items, add products to their cart, place orders, and make online payments. It also includes an admin dashboard to manage food items and customer orders.

## 🚀 Live Demo

- **Frontend:** [Add your deployed frontend URL]
- **Admin Panel:** [Add your admin panel URL]

## ✨ Features

### 👤 User Features
- User registration and login with JWT authentication.
- Browse available food items.
- Explore food items by categories.
- Add and remove items from the shopping cart.
- Update item quantities.
- Place food orders.
- Secure online payments using Stripe.
- View order details and order status.

### 🛠️ Admin Features
- Admin authentication.
- Add new food items.
- Upload food images using Cloudinary.
- View and manage food items.
- Delete food items.
- View customer orders.
- Update order status.

## 🧑‍💻 Tech Stack

**Frontend**
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Bcrypt.js
- Multer

**Third-Party Services**
- Cloudinary – Image storage and management.
- Stripe – Online payment processing.

## 📂 Project Structure

```text
Food-Delivery-Website/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── assets/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── admin/
│   ├── src/
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sangitakumari933/food-ordering-website
cd Food-Delivery-Website
```

### 2. Install Dependencies

For the frontend:

```bash
cd frontend
npm install
```

For the admin panel:

```bash
cd ../admin
npm install
```

For the backend:

```bash
cd ../backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
MONGO_URI = mongodb+srv://kumarisangita8800_db_user:efFMihj6mSYVI2Kk@cluster0.thfd9a9.mongodb.net/
CLOUDINARY_API_KEY = 387471349815252
CLOUDINARY_API_SECRET = NeA9BeRrS7hYWLch_jjgPCiDvk0
CLOUDINARY_CLOUD_NAME = dnkmy3x5
JWT_SECRET = sangitasony123456
STRIPE_SECRET_KEY =sk_test_51UWTKFP6pXpFoKvrDX6eBiiKxI6wLGxabUL0XVRmYY3TlmkAVXyzsc3vGVgZJpG4INT1rgzgtTz6K9zuq0RM5XrE005wh0tHwu
```

Create a `.env` file in the frontend and admin directories.

```env
VITE_BACKEND_URL=http://localhost:4000
```

### 4. Run the Application

Start the backend:

```bash
cd backend
npm run server
```

Start the frontend:

```bash
cd frontend
npm run dev
```

Start the admin panel:

```bash
cd admin
npm run dev
```

## 🔐 Authentication and Security

- JWT-based authentication for protected routes.
- Password hashing using bcrypt.
- HTTP-only cookies for authentication.
- Backend middleware for verifying authenticated users.
- Separate admin access for administrative operations.

## 💳 Payment Integration

Integrated Stripe Checkout to handle online payments.

- Secure payment session creation.
- Order details stored in MongoDB.
- Payment amount calculated based on cart items and delivery charges.
- Cart cleared after successful order placement.

## 📸 Screenshots

Add screenshots of your application here.

| Home Page |
|---|
| <img width="1831" height="840" alt="Screenshot 2026-11-07 135141" src="https://github.com/user-attachments/assets/8ae9d253-5499-498c-8862-d08713ace637" />
 | 
|Food Menu |
|---|
|<img width="1795" height="720" alt="Screenshot 2026-11-07 135227" src="https://github.com/user-attachments/assets/398d8c3f-06be-48dc-b091-1548a5bb753c" />
 |

| Shopping Cart |
|---|---|
| <img width="1810" height="823" alt="Screenshot 2026-11-07 135313" src="https://github.com/user-attachments/assets/cefca75f-ece1-492e-b6d1-6585cfdb1ca4" />
 |

| Admin Dashboard |
|---|
| <img width="1861" height="846" alt="Screenshot 2026-11-07 135357" src="https://github.com/user-attachments/assets/6562e882-609e-4ad0-b84b-8b9a92de0c5a" />
 |


## 👩‍💻 Author

**Sangita Kumari**

- GitHub: (https://github.com/sangitakumari933)
- LinkedIn:(https://www.linkedin.com/in/sangita-kumari/)

---

