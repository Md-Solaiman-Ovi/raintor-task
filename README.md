 # Frontend Developer Technical Assessment

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone git@github.com:Md-Solaiman-Ovi/raintor-task.git
   cd raintor-task
   pnpm install
   pnpm run dev


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

