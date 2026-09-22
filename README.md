# Biren Badrakiya — Portfolio

Personal portfolio website built with React and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/    → React UI components
  data/          → Content data (projects, skills, experience, education)
  assets/        → Static assets used in imports
  App.jsx        → Main app layout
  main.jsx       → Entry point
  index.css      → Global styles + Tailwind theme
public/
  assets/        → Profile image (profile.jpg) + project images
  resume/        → Resume PDF
  favicon.svg    → Site favicon
```

## Customization

- **Profile image**: Place your photo at `public/assets/profile.jpg`
- **Resume**: Replace `public/resume/Biren-Badrakiya-Resume.pdf`
- **Projects**: Edit `src/data/projects.js` to update project URLs and details
- **Experience**: Edit `src/data/experience.js`
- **Skills**: Edit `src/data/skills.js`
- **Education**: Edit `src/data/education.js`

## Tech Stack

- React 19
- Tailwind CSS 4
- Vite 8
