# Project structure

```text
aashay-portfolio/
├── public/
│   ├── images/                 # Profile photo and static images
│   ├── resume/                 # Downloadable resume PDF
│   └── certificates/           # Certificate PDFs
├── src/
│   ├── app/
│   │   ├── about/              # About page
│   │   ├── api/
│   │   │   ├── contact/        # Contact form backend (Supabase/Resend)
│   │   │   ├── github/         # GitHub profile/repository data
│   │   │   └── health/         # Health-check endpoint
│   │   ├── certifications/     # Certificates listing and links
│   │   ├── contact/            # Contact form and direct contact links
│   │   ├── data-science-lab/   # Interactive analytics demo
│   │   ├── experience/         # Experience page
│   │   ├── projects/           # Projects list and project details
│   │   ├── resume/             # Resume details + open/download actions
│   │   ├── skills/              # Skills page
│   │   ├── layout.tsx           # Shared site layout and metadata
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   ├── robots.ts            # Search-engine crawling rules
│   │   ├── sitemap.ts           # Sitemap
│   │   └── manifest.ts          # Web app manifest
│   ├── components/              # Reusable UI components
│   ├── data/                    # Profile, skills, projects, experience, certificates
│   └── lib/                     # Shared utilities
├── supabase/schema.sql          # Database table definition for contact messages
├── tests/                       # Automated tests
├── .env.example                 # Names of required/optional environment variables
├── package.json                 # Dependencies and commands
├── README.md                    # Setup and run instructions
├── PROJECT-STRUCTURE.md         # This folder guide
└── DEPLOYMENT-CHECKLIST.md      # Pre-deployment and launch checklist
```

Generated folders such as `node_modules/` and `.next/` are intentionally excluded from source-control and ZIP handoffs. They are recreated locally by `npm install` and `npm run build`.
