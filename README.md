# Aashay Rishuraj | Data Science & Analytics Portfolio

<p align="center">
  <img src="public/images/aashay-rishuraj.png" width="150" alt="Aashay Rishuraj" />
</p>

<h3 align="center">Aspiring Data Analyst | Data Scientist | Machine Learning Engineer</h3>

<p align="center">
  Turning data into insights, building intelligent solutions, and solving real-world problems.
</p>

<p align="center">
  <a href="https://github.com/AashayRishuraj">GitHub</a> •
  <a href="https://www.linkedin.com/in/aashay-rishuraj">LinkedIn</a> •
  <a href="mailto:aashay.rishuraj2903@gmail.com">Email</a>
</p>

---

## About the Project

Welcome to my personal portfolio repository!

This project showcases my academic background, technical skills, internships, certifications, and practical work in Data Science, Data Analytics, Machine Learning, and software development.

The portfolio is designed to present my work in a structured and interactive format, helping recruiters, hiring managers, and fellow developers explore my technical capabilities and projects.

## Portfolio Highlights

- **Professional Profile:** Introduction, education, career interests, and technical background.
- **Technical Skills:** Programming, databases, analytics, visualization, and machine learning.
- **Projects:** Detailed case studies, implementation details, and supporting resources.
- **Experience:** Internship experience and professional contributions.
- **Certifications:** Eight certificate and internship documents.
- **Resume:** View and download my latest resume.
- **Contact:** Contact form for professional opportunities and collaboration.
- **Data Science Lab:** Dedicated section showcasing data-oriented work.

## Featured Projects

### 1. Weather Forecasting Web Application

An AI-powered weather forecasting application combining real-time weather information with machine learning models.

**Technologies:** Python, Django, Scikit-learn, Random Forest, HTML, CSS, JavaScript, Bootstrap, OpenWeatherMap API.

**Key features:**
- Real-time weather information through an external API.
- Temperature and humidity forecasting.
- Rain prediction using a Random Forest classifier.
- Historical weather data processing and model training.
- Interactive weather dashboard.

**GitHub:** [Weather Prediction](https://github.com/AashayRishuraj/Weather-Prediction)

*Note: The reported MAE of 1.0°C is based on the original resume description and has not been independently reproduced.*

### 2. Inventory Management Dashboard

A Python-based inventory management and visualization project designed to organize product information and explore inventory data.

**Technologies:** Python, Streamlit, Pandas, Matplotlib, Seaborn, Excel.

**Key features:**
- Inventory data processing.
- Product-level information and analysis.
- Data visualization.
- Inventory dashboard and reporting.

**GitHub:** [Inventory Management](https://github.com/AashayRishuraj/InventoryManagement)

### 3. AI Resume Analyzer

An AI-powered application designed to analyze resumes and provide structured feedback to improve job applications.

**Technologies:** React, TypeScript, Tailwind CSS, PDF.js, Zustand, Puter.js.

**Key features:**
- PDF resume upload.
- AI-assisted resume feedback.
- ATS-style scoring.
- Improvement suggestions.
- Saved analysis history.

**GitHub:** [AI Resume Analyzer](https://github.com/AashayRishuraj/AI-Resume-Analyzer)

*Note: This project is presented as a case study in this portfolio. Its source repository is separate, and the application is not automatically deployed as part of this portfolio.*

## Technical Skills

| Category | Technologies |
|---|---|
| Programming | Python, Java, SQL |
| Data Analysis | Pandas, NumPy, Excel |
| Visualization | Power BI, Matplotlib, Seaborn |
| Machine Learning | Scikit-learn, Random Forest |
| AI & Deep Learning | TensorFlow, NLP, Deep Learning |
| Web Development | HTML, CSS, JavaScript, Django, Next.js |
| Databases & Tools | Supabase, Git, GitHub |
| Core Concepts | Statistics, Probability, EDA, Feature Engineering, Predictive Modeling |

## Experience

**Product Manager Intern — KM Infra**  
July 2025 – October 2025

- Conducted market and competitor research.
- Analysed user feedback and product-related data using Excel.
- Contributed insights for product roadmap discussions.
- Collaborated with team members in an Agile working environment.

**AI/ML Virtual Intern — AICTE–EduSkills**  
January 2025 – March 2025

- Worked with Python and Scikit-learn.
- Practised data cleaning and exploratory data analysis.
- Developed and evaluated classification and regression models.
- Applied feature engineering and model evaluation techniques.

## Certifications

This repository includes eight supplied certificate and internship PDF documents, covering:

- Python Programming — CodeWithHarry
- AI/ML Virtual Internship — AICTE–EduSkills / Google for Developers
- Data Analytics Job Simulation — Quantium / Forage
- Data Science Job Simulation — British Airways / Forage
- Google Analytics Certification
- Project Management Job Simulation — Siemens / Forage
- Ultimate Job Ready Data Science Course — CodeWithHarry
- KM Infra Internship Confirmation Letter

Visit the Certifications section of the portfolio to view the documents.

## Technology Stack

The portfolio is built using:

- **Framework:** Next.js
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Email Integration:** Resend
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Testing:** Vitest

## Run Locally

Follow these instructions to run the portfolio on your computer.

### Prerequisites

- Node.js LTS
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/AashayRishuraj/aashay-portfolio.git
```

### 2. Navigate to the project directory

```bash
cd aashay-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Copy `.env.example` to `.env.local`.

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Configure the required credentials in `.env.local` when using the corresponding integrations.

**Important:** Never commit `.env.local`, API keys, private tokens, or service-role credentials to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |
| `npm run typecheck` | Run TypeScript checks |
| `npm test` | Run automated tests |

## Project Structure

```text
aashay-portfolio/
│
├── public/
│   ├── certificates/
│   ├── images/
│   ├── project-assets/
│   └── resume/
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/
│   │   ├── certifications/
│   │   ├── contact/
│   │   ├── data-science-lab/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── resume/
│   │   └── skills/
│   │
│   ├── components/
│   ├── data/
│   └── lib/
│
├── supabase/
├── tests/
├── .env.example
├── package.json
└── README.md
```

## Important Notes & Verification

- The weather forecasting MAE figure is resume-reported and has not been independently reproduced.
- The inventory workbook contains 99 product rows and 12 columns. Verify calculations and thresholds before making performance claims.
- The AI Resume Analyzer is linked as a separate GitHub project and is not deployed automatically through this portfolio.
- Contact form storage and email notifications require correctly configured Supabase and Resend credentials.
- Live weather API functionality requires an appropriate OpenWeatherMap API key.
- Some integrations may require additional configuration before they work in a production environment.
- Certificate documents are included as supplied. Verify issuer details, dates, and public sharing permissions before publishing.

## Contact

I'm interested in opportunities involving Data Analytics, Data Science, Machine Learning, and AI.

If you would like to discuss a project, collaboration, or professional opportunity, feel free to reach out.

- **Email:** aashay.rishuraj2903@gmail.com
- **GitHub:** https://github.com/AashayRishuraj
- **LinkedIn:** https://www.linkedin.com/in/aashay-rishuraj

---

<p align="center">
  <strong>Built with curiosity, consistency, and a passion for data.</strong>
  <br/>
  © Aashay Rishuraj
</p>
