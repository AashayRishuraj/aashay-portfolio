# Deployment checklist

## 1. Before deployment

- [ ] Keep a backup copy of the current working project folder.
- [ ] Confirm `public/resume/Aashay-Rishuraj-Resume.pdf` is the latest resume.
- [ ] Confirm every file in `public/certificates/` is genuine, correctly named, and opens.
- [ ] Review profile, education dates, internships, project descriptions, GitHub links, email, and LinkedIn URL.
- [ ] Replace any unverified performance claims with measured results or clearly label them as self-reported.
- [ ] Run `npm install`, `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build`.
- [ ] Test the site at desktop and mobile widths.
- [ ] Test all navigation links, project links, certificate links, resume open/download links, theme control, GitHub links, and contact form.

## 2. Contact form services: what they do

The contact API supports two separate optional integrations:

- **Supabase** stores each submitted message in a hosted PostgreSQL table (`contact_messages`). This gives you a dashboard/history of messages even if you miss an email.
- **Resend** sends an email notification to your chosen inbox when someone submits the form. The sender address/domain must be verified with Resend for production sending.

You can use either service alone, or both together. For the complete setup, use both. If neither is configured, the form will return a “contact service is not configured” error; the direct email link on the page still works.

### Supabase setup

1. Create a Supabase project.
2. In the Supabase SQL Editor, run `supabase/schema.sql` from this repository.
3. Copy the Project URL and the server-side service-role key into your local `.env.local` and later into the hosting provider's environment variables.
4. Keep `SUPABASE_SERVICE_ROLE_KEY` server-only. Never put it in a `NEXT_PUBLIC_` variable, commit it, or share it in chat.

### Resend setup

1. Create a Resend account.
2. Verify a domain you control and create/choose an approved sender address.
3. Create an API key.
4. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in `.env.local` and in the production host's environment variables.
5. Do not expose or commit the API key. Do not use an address/domain you do not control as the sender.

## 3. Environment variables

Copy `.env.example` to `.env.local` for local development. Use real values only on your own machine and in the hosting dashboard. Never upload `.env.local` to GitHub or send secret values in chat.

- `NEXT_PUBLIC_SITE_URL`: local URL during development; production HTTPS URL after deployment.
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL (public project URL, but configure it only for this app).
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase privileged server-side key; secret.
- `RESEND_API_KEY`: Resend API key; secret.
- `CONTACT_TO_EMAIL`: inbox that receives portfolio enquiries.
- `CONTACT_FROM_EMAIL`: verified sender address/domain in Resend.
- `GITHUB_TOKEN`: optional server-side token for higher GitHub API rate limits; public repository display can work without it.

## 4. GitHub and Vercel deployment

1. Create a new GitHub repository for the portfolio (or use the intended existing repository).
2. Ensure `.env.local`, `.env*` secrets, `node_modules/`, and `.next/` are not committed. `.gitignore` already excludes these.
3. Push the source code and public assets to GitHub.
4. Import that repository into Vercel. Framework should be detected as Next.js; use the project root containing `package.json`.
5. Add the environment variables in Vercel Project Settings → Environment Variables. Add them for Production (and Preview if you want preview deployments to use the services).
6. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain. Redeploy after changing environment variables.
7. Add/configure your custom domain if desired and wait for HTTPS to become active.

## 5. Production smoke test

- [ ] Open the deployed home page in an incognito/private browser window.
- [ ] Check About, Skills, Projects, Experience, Lab, Resume, Certifications, and Contact.
- [ ] Open and download the resume PDF.
- [ ] Open each certificate PDF.
- [ ] Confirm project and GitHub links go to the correct destinations.
- [ ] Submit a test contact message using an email address you control.
- [ ] If Supabase is configured, verify the row appears in `contact_messages`.
- [ ] If Resend is configured, verify the notification arrives and Reply goes to the sender's email.
- [ ] Check `/api/health` and the browser console for errors.
- [ ] Check mobile layout and keyboard navigation.

## 6. Safe cleanup

Do not delete the only copy of an older working project until the new project has passed the production smoke test. After that, keep one backup ZIP outside the active project folder. You may remove generated `node_modules/` and `.next/` folders when the dev server is stopped; they can be regenerated. Do not delete `src/`, `public/`, `supabase/`, `package.json`, `package-lock.json`, or configuration files.
