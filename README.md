# EcoAudit - Community Waste Logger

EcoAudit is a full-stack web application developed for the CodeChef VIT Chennai Projects Department Recruitment Task.

The application allows users to log waste disposal records with automatic GPS verification, image upload, and real-time analytics. Every report is securely stored in MongoDB and displayed through an interactive dashboard.

---

## Features

### Waste Logger
- Log waste reports
- Select waste category
- Enter waste weight
- Optional description
- Upload waste image
- Automatic browser GPS location
- Location verification
- Form validation
- Toast notifications

### Dashboard
- View all submitted waste reports
- Search waste records
- Filter by waste category
- Live statistics cards
- Waste distribution pie chart
- Recent reports
- Image preview
- Verify waste reports
- Delete waste reports

### UI Features
- Modern glassmorphism interface
- Animated falling leaves background
- Responsive layout
- Interactive cards
- Smooth hover animations
- Beautiful dashboard analytics

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Recharts
- Lucide React
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- CORS
- dotenv

### Database
- MongoDB Atlas

---

## Project Structure

```
EcoAudit/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/EcoAudit.git
```

```bash
cd EcoAudit
```

---

## Backend Setup

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Run server

```bash
npm run dev
```

---

## Frontend Setup

Open a new terminal

```bash
cd client
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

Backend runs on

```
http://localhost:5000
```

---

## API Endpoints

### Add Waste

```
POST /api/waste/add
```

### Get All Waste

```
GET /api/waste
```

### Verify Waste

```
PUT /api/waste/verify/:id
```

### Delete Waste

```
DELETE /api/waste/:id
```

---

## Screenshots

### Home Page

(Add screenshot here)

---

### Waste Logger

(Add screenshot here)

---

### Dashboard

(Add screenshot here)

---

## Future Improvements

- User authentication
- Admin dashboard
- Interactive map using Leaflet
- AI-based waste classification
- QR code verification
- Report export (PDF/Excel)
- Community leaderboard

---

## Developed For

CodeChef VIT Chennai

Projects Department Recruitment Task

Problem Statement:

**EcoAudit – Community Waste Logger**

---

## Author

**Prithivirajan**

VIT Chennai

B.Tech Computer Science Engineering

---

## License

This project is developed for educational and recruitment purposes.