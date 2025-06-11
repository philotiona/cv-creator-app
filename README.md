# CV App

A modern, responsive CV/Portfolio web application built with React, Redux Toolkit, and Vite.  
Showcase your skills, experience, and portfolio projects with a beautiful, interactive UI.

---

## 🚀 Features

- **Personalized CV:**  
  Add your personal info, skills, experience, and contact details.

- **Skills Management:**  
  - Add, edit, and display your skills with proficiency levels.
  - Real-time validation and beautiful progress bars.

- **Portfolio Showcase:**  
  - Display your best work with images and descriptions.
  - Filter projects by category (e.g., UI, Code) for easy navigation.

- **Professional Experience:**  
  - Timeline and expertise sections to highlight your career journey.

- **Feedback Section:**  
  - Display testimonials or feedback from colleagues and clients.

- **Responsive Design:**  
  - Looks great on desktop, tablet, and mobile.

- **Unit Tested:**  
  - Over 35% code coverage with Jest and React Testing Library.

- **Modern Stack:**  
  - React 18, Redux Toolkit, Vite, Formik, Yup, MirageJS (mock API), SCSS Modules.

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/15311ea2-9657-4bee-8b7d-79b2ed795b3a)
![image](https://github.com/user-attachments/assets/621785a0-82e1-4922-af20-7ee7e7edf8f9)
---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
git clone https://github.com/yourusername/cv-app.git
cd cv-app/cv-app
npm install
```

### Running Locally

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Tests

```sh
npm run test
# or with coverage
npm run test:coverage
```

---

## 🏗️ Project Structure

```
cv-app/
  ├── src/
  │   ├── app/           # Redux store setup
  │   ├── components/    # Reusable UI components (Button, Skills, Portfolio, etc.)
  │   ├── features/      # Redux slices (skills, education, etc.)
  │   ├── pages/         # Page components (Home, Inner)
  │   ├── services/      # MirageJS mock server
  │   └── App.jsx        # Main app component
  ├── public/
  ├── .husky/            # Git hooks for pre-commit/test
  ├── package.json
  └── ...
```

---

## 📝 Key User Stories

- **Skills:**  
  Users can add new skills with a name and proficiency (10–100).  
  Skills are validated, saved, and displayed with a progress bar.

- **Portfolio Filtering:**  
  Users can filter portfolio items by category (UI, Code, etc.) for quick browsing.

- **Navigation:**  
  Users can easily navigate between Home, Main, and section anchors.

- **Feedback:**  
  Users can view feedback/testimonials from others.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, SCSS Modules
- **State Management:** Redux Toolkit
- **Forms & Validation:** Formik, Yup
- **Testing:** Jest, React Testing Library
- **Mock API:** MirageJS

---

## 🧪 Testing & Quality

- **Unit tests** for all major components and Redux slices.
- **Coverage:**  
  - Statements: 35%+  
  - Functions: 35%+  
  - Branches: 35%+  
- **Pre-push hook:**  
  Prevents pushing if tests fail (via Husky).

---

## 📦 Scripts

| Script            | Description                       |
|-------------------|-----------------------------------|
| `npm run dev`     | Start development server          |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build          |
| `npm run test`    | Run unit tests                    |
| `npm run test:coverage` | Run tests with coverage     |

---

## 🧑‍🏫 Solution Architecture

- **Component-based:**  
  Each feature is modular and reusable.
- **Redux for state:**  
  All app state (skills, education, etc.) is managed centrally.
- **Mock server:**  
  MirageJS simulates API calls for a real-world feel.
- **Routing:**  
  React Router for navigation between pages and sections.
