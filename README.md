# 🌟 Modern Personal Portfolio Website

A sleek, responsive, and high-performance personal portfolio website built with modern **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed with a modern tech aesthetic featuring glassmorphism, glowing accent gradients, dark/light theme switching, dynamic typewriter animations, and dedicated sections for skills, experience, and projects.

---

## 🚀 Live Preview & Quick Start

### Option 1: Open Directly in Your Browser (No Setup Required)
Simply double-click the [`index.html`](./index.html) file, or right-click and choose **Open with > Chrome / Edge / Firefox**.

### Option 2: Run with VS Code Live Server
1. Open this `portfolio` folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click [`index.html`](./index.html) and select **Open with Live Server**.

---

## 📁 File Structure

```text
portfolio/
├── index.html        # Main HTML structure, semantic sections, and content
├── style.css         # Modern styling, dark/light themes, animations, glassmorphism
├── script.js         # Interactivity (Theme toggle, typewriter, filter, contact)
└── README.md         # Documentation & customization guide
```

---

## ✨ Features Included

1. **Modern Sleek Tech Theme**:
   - Deep obsidian dark theme with luminous cyan, violet, and emerald ambient glow effects.
   - One-click **Dark / Light mode** switch with `localStorage` memory and system theme detection.
   - Glassmorphism card styling with subtle depth and glowing hover states.

2. **Hero Showcase**:
   - Engaging headline with animated waving hand.
   - Dynamic **typewriter text animation** rotating through your core specializations.
   - Quick achievement badges (**CGPA: 8.95**, **AI & ML Specialist**, **AJIET**).
   - Interactive Python engineer code card with a working one-click "Copy Code" button.

3. **About Me**:
   - Professional bio narrative highlighting your academic achievements, engineering mindset, and passion.
   - 4-pillar feature grid: *AI & Machine Learning*, *Full-Stack Development*, *Data Analytics*, and *Core CS Foundations*.

4. **Interactive Skills Matrix**:
   - Filterable skills tabs: **All**, **Languages**, **AI & Data**, **Web & DB**, and **Core & Tools**.
   - Categorized cards for Python, Java, JavaScript, SQL, Machine Learning, Data Analytics, Pandas & NumPy, HTML5/CSS3, DBMS, DSA, and Git/GitHub.

5. **Work Experience & Internships**:
   - Timeline highlighting your **Data Analytics Internship at Thiranex**.
   - Bulleted breakdown of data preprocessing, visualization, and insight generation.

6. **Featured Projects Showcase**:
   - **Student Internship Portal** (Featured Web Application): Highlighted with architectural features, tech stack badges, and action buttons.
   - Additional showcase slots for **AI / ML Predictive System** and **Exploratory Data Analytics Suite**.

7. **Education & Academics**:
   - Dedicated spotlight card for **B.E. in CSE (AI & ML)** at **A J Institute of Engineering and Technology (AJIET)**.
   - Prominent **8.95 CGPA** badge.

8. **Interactive Contact Section**:
   - Form with input validation and instant feedback.
   - Direct contact links: Email, LinkedIn, GitHub, and Location (Mangalore, Karnataka, India).

---

## 🛠️ Personalization & Customization Guide

You can easily customize any detail in [`index.html`](./index.html):

| Item | Where to update in [`index.html`](./index.html) |
| :--- | :--- |
| **Your Name** | Search for `Bhavana` and replace with your preferred display name. |
| **Email Address** | Search for `bhavana.student@ajiet.edu.in` or `mailto:` and update with your real email. |
| **LinkedIn URL** | Update the `href="https://linkedin.com"` links with your LinkedIn handle. |
| **GitHub URL** | Update the `href="https://github.com"` links with your GitHub profile URL. |
| **Resume Download** | Place your resume file (e.g. `Resume.pdf`) into this folder and update `<a href="Resume.pdf" ...>` on line 105. |

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (Recommended)
1. Initialize a git repository if you haven't already:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new GitHub repository named `portfolio` (or `<your-username>.github.io`).
3. Push your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
4. Go to **Settings > Pages** in your GitHub repository, set branch to `main`, and click **Save**. Your site will be live at `https://<your-username>.github.io/<repo-name>/`!

### 2. Netlify Drop
- Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag-and-drop the entire `portfolio` folder to publish it online in 10 seconds.

---

Developed with ❤️ for your engineering journey!
