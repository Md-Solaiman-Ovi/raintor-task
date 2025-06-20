 # Frontend Developer Technical Assessment

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone git@github.com:Md-Solaiman-Ovi/raintor-task.git
   cd raintor-task
   pnpm install
   pnpm run dev

# ✅ Task 1 – Developer Portfolio - Homepage UI

This project is a pixel-perfect, responsive React + Tailwind CSS implementation of a Figma design for a personal developer portfolio homepage.

## 🔧 Tech Stack

- React.js, TypeScript, Tailwind CSS 
- Component-based architecture
- LocalStorage for theme persistence (Dark/Light mode)



## ⚠️ Limitations / Tradeoffs

-⚠️ Partially Completed: Only the homepage is implemented based on the Figma screenshot.
- ⏱ Time Constraint: Couldn’t complete the entire design due to limited time. Further sections like Portfolio, Blog, Footer, etc., are pending.


# ✅ Task 2 – Real-Time Location Sharing using React, Leaflet & SignalR

This project demonstrates **real-time GPS location communication** between two users using React, Leaflet, and SignalR.

---

## 🎯 Objective

- **User A:** Simulates and sends live GPS coordinates
- **User B:** Receives coordinates and displays location on an interactive map
- Communication is done in real-time via **SignalR WebSocket**
- Display powered by **Leaflet (OpenStreetMap)**

---
## ⚠️ Known Limitation / Tradeoff

### ❗ Map not showing in production (Vercel)

- In **localhost**, everything works perfectly.
- But in **production (Vercel)**, the map does **not show**, and only displays:

### 🧠 Why the Map Was Not Showing in Production

#### ❌ Problem
The application worked on localhost but not after deployment to Vercel.
The map never rendered because live location was never received due to SignalR connection failure.

#### ⚠️ Root Cause: CORS Error
Browsers blocked direct requests from `*.vercel.app` to the SignalR hub `https://tech-test.raintor.com/Hub`
SignalR negotiation and WebSocket upgrade failed due to CORS policy on the backend not allowing Vercel domains.

# ✅ Task 3: Infinite Scroll - User Feed

This project implements an infinite scrolling user feed in React with TypeScript, fetching paginated user data from an API, using virtualization and graceful loading/error states.

---

## ⚠️ Known Limitation / Tradeoff
API Endpoint: The provided API https://tech-test.raintor.com/user/GetUsersList may return 404 if unavailable or incorrect. 

## ❗ API Issue – Why Data May Not Show

The provided API endpoint: https://tech-test.raintor.com/user/GetUsersList?take=10&skip=0

returns a `404 Not Found` error, which means no data is received from the server.

This is why the user feed displays: Something went wrong: Request failed with status code 404


