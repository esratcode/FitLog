# 💪 FitLog — Workout Library

FitLog is a modern and responsive workout library built with Next.js. It allows users to browse workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track completed exercises.

## 🚀 Live Website

[Live Demo](YOUR-VERCEL-LINK)

## 📂 GitHub Repository

[GitHub Repository](https://github.com/esratcode/FitLog)

---

## ✨ Features

- 🏋️ **Workout Library** — Browse workouts fetched from the FitLog API.
- 🔎 **Workout Details** — View detailed information including equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
- 📋 **Today's Plan** — Add workouts to a personal daily workout plan.
- 💾 **Save for Later** — Save workouts and access them from the Saved section.
- ✅ **Mark as Done** — Mark planned workouts as completed with a toast notification.
- 🗑️ **Remove Workouts** — Remove workouts from Today's Plan or Saved workouts.
- 📊 **Workout Statistics** — Track total exercises, workout minutes, and calories.
- 🔃 **Sorting** — Sort workouts by duration, calories, or rating.
- 📱 **Responsive Design** — Works across mobile, tablet, and desktop screen sizes.
- ⚡ **Loading State** — Displays a loading animation while workout data is being fetched.
- 🚫 **404 Page** — Provides a custom page for invalid routes.

---

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **JavaScript**
- **Tailwind CSS**
- **Next.js App Router**
- **React Toastify**
- **FitLog REST API**

---

## 🔗 API

The project uses the FitLog API to load workout data.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## 📄 Main Pages

| Page            | Route            |
| --------------- | ---------------- |
| Workout Library | `/`              |
| Workouts        | `/workouts`      |
| Workout Details | `/workouts/[id]` |
| My Plan         | `/my-plan`       |

---

## 🎯 Project Highlights

### Workout Library

Users can browse workout cards containing:

- Workout image
- Category
- Workout name
- Equipment
- Duration
- Calories
- Rating

### Workout Details

Each workout has a dedicated details page with:

- Workout image
- Description
- Categories
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Instructions
- Add to Today's Plan button
- Save for Later button

### My Plan

The My Plan page contains two tabs:

- **Today's Plan**
- **Saved**

Users can also see:

- Total exercises
- Total workout minutes
- Total calories
- Completed workouts
- Remove actions

---

## 📱 Responsive Design

FitLog is designed to work properly on:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Desktops

The workout grid, navigation, hero section, and cards automatically adjust according to screen size.

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/esratcode/FitLog.git
```

Go to the project folder:

```bash
cd FitLog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 👩‍💻 Author

**Esrat**

GitHub: [@esratcode](https://github.com/esratcode)

---

## 📜 License

This project was created as part of the Programming Hero B14-A6 FitLog assignment.
