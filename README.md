# 🌦️ Weather Dashboard App

A sleek, responsive weather dashboard built with **React**, using the **OpenWeatherMap API**. Users can search for weather by city name, view current conditions, toggle between light and dark mode, and access recent search history.

---

## 🔧 Features

- 🔍 **Search Weather by City**
- 📊 **Displays**
  - City Name
  - Current Temperature (°C)
  - Weather Condition (e.g., Sunny, Rainy)
  - Humidity (%)
  - Wind Speed (km/h)
  - Weather Icon
- 🔁 **Recent Search History** (Last 5 cities)
- 🌙 **Dark/Light Theme Toggle**
- 🔄 **Refresh Button** to re-fetch current city's data
- ⏳ **Loader Animation** while fetching data
- ❌ **Error Handling** for:
  - Invalid city names
  - API/network issues
- 📱 **Fully Responsive** (mobile + desktop)

---

## 🛠️ Tech Stack

- **React** (with Hooks)
- **CSS** (custom styling + media queries)
- **Framer Motion** *(optional for animations)*
- **OpenWeatherMap API**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. Install dependencies
```bash
npm install

```
### 3. Set up your API key
Create a .env file in the root of your project
```bash
VITE_MY_API_KEY=your_openweather_api_key_here

```
### 4. Run the App
```bash
npm run dev

```
#🖼️ Screenshots
Light Mode
![image](https://github.com/user-attachments/assets/2ee70c00-24b3-44ee-af51-a61a5921f0a0)
Dark Mode
![image](https://github.com/user-attachments/assets/2c538e4f-4d99-405e-86b5-f709ccc8e461)

#🧠 Learnings & Highlights
-Mastered component-based UI structure in React

-Implemented real-world API integration

-Used media queries and Flexbox for responsive design

-Applied theme toggling using state and conditional styling

-Practiced error boundary logic and user-friendly messaging

#🌐 Live Demo

📍 https://67f5d83979e0210f63c41477--cozy-cactus-751264.netlify.app/

#📦 Folder Structure
```bash
src/
├── components/
│   ├── Search_bar.jsx
│   ├── Submit_button.jsx
│   ├── Weather_card.jsx
│   ├── Loader.jsx
│   ├── Error.jsx
├── app.jsx
├── main.jsx
├── styles.css
.env
```


