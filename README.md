
# 🏠 Gharedi – Nepal Property Listing Platform (MERN)

Gharedi is a **full-stack MERN (MongoDB, Express, React, Node.js)** web application designed for **Nepal’s real estate market**.  
It allows users to **browse, view on map, and upload property listings** such as land and houses with essential details like price, location, distance from main road, and images.

This project follows a **clean architecture**, **user-friendly workflow**, and is **portfolio & production ready**.

---

## 🌟 Key Features

### 🏡 Property Listings
- View land & house listings
- Price, location, and distance from main road
- Clean property cards with images

### 🗺️ Map Integration
- Interactive map using **Leaflet**
- Property markers with popup preview
- Location picker while uploading property

### 🖼️ Images
- Looks professional like real property websites

### 👤 User System (UI Ready)
- Login page
- Register page
- Separate upload page for users

### 📱 Responsive Design
- Mobile, tablet & desktop friendly
- Clean and minimal UI

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **React Router DOM**
- **Axios**
- **Leaflet & React-Leaflet**
- CSS (Clean & responsive)

### Backend (Planned / Integrated)
- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT Authentication**
- **CORS**

---

## 📂 Project Structure

### Frontend
```

frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── PropertyCard.js
│   │   ├── MapView.js
│   │   └── LocationPicker.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── UploadProperty.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.css
├── .env
├── .gitignore
└── package.json

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/PantaMamta/Garedi.git
cd gharedi/frontend
````

---

### 2️⃣ Install frontend dependencies

```bash
npm install
```

Required packages:

* react-router-dom
* axios
* leaflet
* react-leaflet

---

### 3️⃣ Environment Variables

Create a `.env` file in `frontend/`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```


### 4️⃣ Start Frontend

```bash
npm start
```

Frontend runs on:

```
http://localhost:3001
```

---

### 5️⃣ Start Backend (Required for API)

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

Test API:

```
http://localhost:5000/api/posts
```

---

## 🗺️ Map Details

* Uses **OpenStreetMap** tiles
* Default center: Kathmandu
* Users can select property location by clicking on the map
* Property markers show image + price popup

---

## 🖼️ Image Handling

This project uses **online images** for demo:

```txt
https://source.unsplash.com/?kathmandu,land
```

✔ No storage required
✔ Fast loading
✔ Professional look

---

## 🔐 Security Notes

* CORS enabled for frontend-backend communication
* JWT-based authentication planned
* Environment variables protected

---

## 🚀 Future Enhancements

* JWT Authentication (User/Admin)
* Admin dashboard
* Search & filters (price, location)
* Favorite properties
* Payment integration
* Mobile app (React Native)

---

## 🧪 Common Errors & Fixes

### Axios Network Error

✔ Backend not running
✔ Wrong API URL in `.env`
✔ CORS not enabled

Fix:

```bash
npm start (backend first)
npm start (frontend)
```

---

## 👩‍💻 Author

**Mamata Pant**
Computer Engineering Student
MERN Stack Developer
Far Western University, Nepal 🇳🇵

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 🛠️ Contribute improvements

---

**Gharedi – Making property search simple in Nepal 🇳🇵**

```

