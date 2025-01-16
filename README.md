# Music-Streaming 🎶

### Listen to music, realtime chatting*

🔈 Update the volume with a slider  
🎧 Admin dashboard to create albums and songs  
💬 Real-time Chat App integrated into web  
👨🏼‍💼 Online/Offline status  
👀 See what other users are listening to in real-time  
📊 Aggregate data for the analytics page  

### Let's see heree
[**https://nhaccuatoi.luontuoivui.xyz**](https://nhaccuatoi.luontuoivui.xyz)  

## Tech Stack

### Backend:  
- ![Node.js](https://img.shields.io/badge/Node.js-18.20.4-green) Node.js  
- ![Express.js](https://img.shields.io/badge/Express.js-4.17.1-blue) Express.js  
- ![Clerk](https://img.shields.io/badge/Clerk-auth-blue) Clerk  
- ![MongoDB](https://img.shields.io/badge/MongoDB-4.2-green) MongoDB (Mongoose)  
- ![Cloudinary](https://img.shields.io/badge/Cloudinary-API-blue) Cloudinary  
- ![Socket.io](https://img.shields.io/badge/Socket.io-v4.1.0-yellow) Socket.io  

### Frontend:  
- ![React](https://img.shields.io/badge/React-18.2.0-blue) React  
- ![Vite](https://img.shields.io/badge/Vite-2.6.12-green) Vite  
- ![TypeScript](https://img.shields.io/badge/TypeScript-4.4.4-blue) TypeScript  
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-purple) Tailwind CSS  
- ![Radix UI](https://img.shields.io/badge/Radix%20UI-1.0-blue) Radix UI  
- ![Zustand](https://img.shields.io/badge/Zustand-4.0-orange) Zustand  
- ![Lucide React](https://img.shields.io/badge/Lucide%20React-v0.2-blue) Lucide React  

### Deployment:  
- ![Docker](https://img.shields.io/badge/Docker-v20.10.8-blue) Docker  
- ![Nginx](https://img.shields.io/badge/Nginx-v1.21-green) Nginx 
- ![AWS EC2](https://img.shields.io/badge/AWS%20EC2-black) AWS EC2  

## Installation

### Clone repository:
```bash
git clone https://github.com/dnnguyen35/mern-music-streaming.git
```

### Setup .env file in backend:
```bash
PORT=...
MONGODB_URI=...
ADMIN_EMAIL=...
NODE_ENV=...

CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLOUDINARY_CLOUD_NAME=...

CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

### Setup .env file in frontend:
```bash
VITE_CLERK_PUBLISHABLE_KEY=...
```

### Install dependencies:
```bash
cd backend
npm install

cd frontend
npm install
```

### Running
#### 1. In backend:
```bash
npm run seed:songs
npm run seed:albums
npm run dev
```

#### 2. In frontend:
bash
npm run dev
