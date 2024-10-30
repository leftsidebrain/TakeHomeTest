# 📱 Simple E-Commerce App

Aplikasi e-commerce sederhana untuk penjualan produk HP, dibangun menggunakan React, Vite, TypeScript, dan Express.

# 📋 Table of Contents

- Features
- Tech Stack
- Installation
- Usage
- Project Structure
- License

## 🎨 Features

- Tampilan produk HP dengan kategori dan pencarian
- Menambahkan produk ke keranjang

## 🛠️ Tech Stack

- Frontend: ReactJS, Vite, TypeScript
- Backend: ExpressJS, SQLite
- State Management: Redux Toolkit
- HTTP Client: fetch
- Styling: Bootstrap

### ⚙️ Installation

- Clone Repository

Salin kode

```bash
git clone https://github.com/leftsidebrain/TakeHomeTest.git
cd TakeHomeTest
```

### Install Dependencies

### Frontend

Salin kode

```bash
cd client
npm install
```

### Backend

Salin kode

```bash
cd server
npm install
```

### Setup Database

- Aplikasi ini menggunakan SQLite, sehingga tidak perlu instalasi server database.

- Buat file database.sqlite di folder server/db.
- Run Application

### Backend (Express Server)

Salin kode

```bash
cd server
npm start
```

### Frontend (React App)

Salin kode

```bash
cd client
npm run dev
```

### Environment Variables

Tambahkan file .env di folder server dengan variabel berikut:
plaintext
Salin kode

```bash
PORT=5000
```

### ▶️ Usage

- Frontend: Buka http://localhost:5173untuk mengakses aplikasi.
- Backend: API tersedia di http://localhost:3000.

### 📂 Project Structure

```bash
simple-ecommerce-app/
├── client/ # Frontend (React + Vite)
│ ├── public/ # Public assets
│ ├── src/ # Source code
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Page components (e.g., Home, Product)
│ │ ├── store/ # Redux store and slices
│ │ └── App.tsx # Root component
│ └── vite.config.ts # Vite configuration
│
├── server/ # Backend (Express)
│ ├── databse/ # Database files
│ ├── routes/ # API routes (index.ts)
│ ├── img/ # Images
│ └── app.ts # Server entry point
│
└── README.md # Project documentation
📄 License
This project is licensed under the MIT License.
```
