# Stock Market Portfolio Website

## Description
This is a full-stack Stock Market Portfolio website that allows users to manage their stock investments. The platform provides a seamless experience to track holdings, orders, positions, and market data.

### Tech Stack
#### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

#### Frontend:
- React.js
- Bootstrap
- Material UI

## Features
### Backend Features:
- User Authentication (JWT based)
- CRUD operations for Stocks and Holdings
- API endpoints for managing orders and positions
- MongoDB Database Integration
- Error Handling & Validation

### Frontend Features:
- Modern UI with Material UI and Bootstrap
- Dashboard to view portfolio summary
- Interactive charts using Recharts
- Stock Watchlist
- Buy/Sell Order Window
- Responsive Design

## Folder Structure
```
project_root/
├── backend/
│   ├── index.js             # Express Server
│   ├── model/              # Mongoose Models
│   ├── schemas/            # Mongoose Schemas
│   ├── package.json        # Backend Dependencies
└── frontend/
    ├── src/
    │   ├── components/     # React Components
    │   ├── landing_page/   # Landing Page Components
    │   └── App.jsx         # Main Component
    ├── public/            # Static Files
    ├── package.json       # Frontend Dependencies
    └── vite.config.js      # Build Configuration
```

## Installation
### Prerequisites
- Node.js
- MongoDB
- Git

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Create a `.env` file inside the `backend` folder with the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## API Endpoints
| Method | Endpoint        | Description         |
|--------|----------------|-------------------|
| POST   | /api/auth      | User Authentication |
| GET    | /api/holdings  | Fetch User Holdings |
| POST   | /api/orders    | Place Buy/Sell Order |

## Screenshots
| Landing Page | Dashboard | Holdings |
|-------------|-----------|----------|
| ![Landing](./screenshots/landing.png) | ![Dashboard](./screenshots/dashboard.png) | ![Holdings](./screenshots/holdings.png) |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

---
### Developed By
**Hiranmaya2004**

