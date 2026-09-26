# FitLog — Workout Library

FitLog is a responsive workout library web application built with Next.js. It allows users to explore workouts, view detailed workout information, create a daily workout plan, save workouts for later, and track completed exercises.

## 🔗 Links

- **Live Website:** https://fit-log-livid.vercel.app/?utm_source=chatgpt.com
- **GitHub Repository:** https://github.com/esratcode/FitLog

## ✨ Key Features

- Browse all available workouts from the FitLog API
- View detailed information for each workout
- Add workouts to Today's Plan
- Save workouts for later
- Remove workouts from Today's Plan or Saved list
- Mark workouts as completed
- Maximum 5 workouts can be added to Today's Plan
- Sort workouts by Duration, Calories, and Rating
- Store workout data using Local Storage
- Toast notifications for user actions
- Responsive design for mobile, tablet, and desktop
- Custom 404 page for invalid routes

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **JavaScript**
- **Tailwind CSS**
- **Next.js App Router**
- **Context API**
- **Local Storage**
- **React Toastify**
- **REST API**

## 🔌 API

This project uses the FitLog REST API:

`https://api.abcz.workers.dev/api/fitlog`

The API provides workout information including:

- Workout name
- Description
- Muscle groups
- Equipment
- Duration
- Calories burned
- Rating
- Instructions
- Workout images

## 📄 Main Pages

### 🏋️ Workout Library

**Route:** `/`

Users can browse all available workouts, view workout statistics, sort workouts, and select a workout to see its details.

### 📋 Workout Details

**Route:** `/workouts/[id]`

Users can view detailed information about a workout, including its description, muscle groups, equipment, statistics, and instructions. Users can also add the workout to Today's Plan or save it for later.

### 💪 My Plan

**Route:** `/my-plan`

Users can view their Today's Plan and Saved workouts. They can mark workouts as completed, remove workouts, and view workout details.

## 💻 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/esratcode/FitLog.git
```

Navigate to the project directory:

```bash
cd FitLog
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## 📱 Responsive Design

FitLog is designed to provide a smooth user experience across:

- Mobile devices
- Tablets
- Desktop screens
