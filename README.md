**💼 Hired – Full Stack Job Portal**

**[live demo : https://elevare-jobs.vercel.app/] **

🚀 A next-gen hiring platform connecting recruiters and candidates in real-time  


**🌟 About the Project**

Hired is a full-stack web application that bridges the gap between recruiters and candidates through a modern, responsive platform.

It allows recruiters to post and manage jobs, while candidates can explore, apply, and track applications — all within a seamless interface built for speed and scalability.


**💡 Problem It Solves**

Job seekers can easily browse, filter, and apply for jobs, while tracking their application statuses.

Recruiters can post new openings, manage applicants, and maintain company profiles effortlessly.


**👥 Who It’s For**

**Job Seekers / Candidates** – Professionals looking for a clean, modern interface to explore and apply for opportunities with transparency and ease.

**Recruiters / Hiring Managers** – Companies or startups seeking an efficient way to manage postings, attract candidates, and track applications.

------

⚙️ Tech Stack Overview

| 🧠 **Category** | 🧩 **Technology / Tool** | 💡 **Purpose / Description** |
|:----------------|:------------------------|:-----------------------------|
| 🎯 **Core Technologies** | ⚛️ **React.js** | Foundation for building a dynamic, component-driven, and interactive user interface. |
|  | 🎨 **Tailwind CSS** | Utility-first CSS framework for responsive, modern, and consistent UI design. |
|  | 🗄️ **Supabase** | Backend-as-a-Service for database operations, authentication, and secure file storage (resumes, logos). |
|  | 🔐 **Clerk** | Authentication and user management system enabling Google/email login with role-based access control. |
|  | 🧩 **ShadCN UI** | Elegant, re-usable React component library for modern and accessible UI development. |
|  | 🧭 **React Router DOM** | Handles smooth client-side routing and navigation between pages. |
|  | 🧾 **React Hook Form + Zod** | Schema-based validation ensuring efficient and error-free form submissions. |
|  | ⚡ **Vite** | Lightning-fast build tool providing an optimized developer experience. |
| 🧠 **Supporting Tools & Configurations** | 🧷 **PostCSS & Autoprefixer** | Enhance CSS with modern transformations and ensure cross-browser compatibility. |
|  | 🧹 **ESLint** | Static code analysis for enforcing clean, consistent, and bug-free code. |
|  | 🔑 **Environment Variables (.env)** | Secure management of API keys and configuration for production. |
|  | 🎨 **Custom Tailwind Utilities** | Extended Tailwind configuration for gradients, animations, and unique themes. |
|  | 📝 **Markdown Rendering** | Enables job descriptions to be dynamically displayed with rich formatting. |
|  | 🪣 **Supabase Storage Buckets** | Secure file uploads and storage (resumes, company logos). |
| 🧰 **Development & Deployment Tools** | 💻 **VS Code** | Primary IDE with Tailwind IntelliSense and productivity-boosting extensions. |
|  | 🌐 **GitHub** | Version control and collaboration for transparent, team-ready development. |
|  | 🚀 **Vercel** | Continuous deployment platform delivering production-grade performance and reliability. |

## ✨ Key Features

This project is built to reflect real-world functionality, combining modern full-stack development practices with a smooth, user-first experience.

| 👤 **User Features (Candidates)** | 💡 **Description** |
|:----------------------------------|:-------------------|
| 🔐 **Secure Authentication** | Sign up or log in with Google or email/password using Clerk. |
| 🧭 **Job Search & Filtering** | Search and filter jobs by title, company, or location for quick discovery. |
| 💾 **Job Wishlisting** | Save favourite job listings for later review. |
| 📄 **Detailed Job View** | Access full job descriptions, application counts, and requirements in a structured layout. |
| 📝 **Easy Job Application** | Apply seamlessly by submitting details and uploading resumes. |
| 🔎 **Application Tracking** | Monitor job application statuses in real time (e.g., applied, interviewing). |

| 🏢 **Recruiter Features** | 💡 **Description** |
|:---------------------------|:-------------------|
| 🧩 **Role-Based Access** | Distinct dashboards for recruiters and candidates. |
| 🧾 **Job Posting System** | Create and manage new job listings with rich details and markdown-formatted descriptions. |
| 🏙️ **Company Management** | Add or select companies when posting jobs to maintain structured data. |
| 👀 **Applicant Management** | View all candidates who have applied and update their status throughout the hiring process. |
| 🗑️ **Job Management** | Edit or delete job postings to keep listings updated. |

## 🧠 System Architecture / Project Overview

This full-stack job portal follows a **modular, scalable, and secure architecture** built on React.js, Supabase, and Clerk.  
It ensures smooth integration between the frontend, authentication, and backend layers for a seamless user experience.

| 🧩 **Layer** | ⚙️ **Technology / Tool** | 💡 **Purpose / Functionality** |
|:-------------|:--------------------------|:-------------------------------|
| 🎨 **Frontend** | React.js, Tailwind CSS, ShadCN UI | Builds a dynamic, responsive, and modern user interface. |
| 🧭 **Routing & Forms** | React Router DOM, React Hook Form + Zod | Enables client-side navigation and schema-based form validation. |
| 🔐 **Authentication** | Clerk | Handles secure user authentication (Google/email), session management, and JWT generation. |
| 🗄️ **Backend & Database** | Supabase (PostgreSQL) | Manages job, user, and application data with Row Level Security (RLS). |
| 🪣 **File Storage** | Supabase Storage | Stores resumes and company logos securely. |
| 🔄 **Integration (Clerk + Supabase)** | JWT Validation | Clerk issues JWTs, Supabase validates them for secure API access. |
| ⚙️ **Build & Dev Tools** | Vite, ESLint, PostCSS | Fast builds, code linting, and optimized CSS processing. |
| 🚀 **Deployment** | Vercel | Continuous deployment with global scalability and performance. |

---

### 🔄 **Communication Flow**

1️⃣ User signs in via **Clerk** → receives secure JWT  
2️⃣ **React frontend** sends API requests with JWT token  
3️⃣ **Supabase** validates JWT → enforces **RLS**  
4️⃣ Database & Storage operations occur securely  
5️⃣ Response returned → **UI updates in real time**

---
## 📂 Folder Structure

A well-structured, scalable, and modular architecture that highlights clean separation of concerns between UI, logic, and configuration.

| 📁 **Directory / File** | 💡 **Purpose / Description** |
|:------------------------|:-----------------------------|
| `public/` | Static assets like app logo, banner, and favicon. |
| ├── `logo.png` | Brand logo for the application. |
| └── `banner.jpeg` | Landing page banner image. |
| `src/` | Main source folder containing all React components and logic. |
| ├── `components/` | Reusable UI components (e.g., Header, Footer, JobCard). |
| ├── `pages/` | Core pages such as Landing, JobListing, PostJob, MyJobs. |
| ├── `layout/` | Application-wide wrappers (AppLayout, shared Header/Footer). |
| ├── `utils/` | Utility functions and Supabase client setup. |
| ├── `ui/` | Shadcn UI components customized for the app’s design. |
| ├── `App.jsx` | Root React component defining routes and layouts. |
| ├── `index.css` | Global styles with Tailwind utilities and custom themes. |
| └── `main.jsx` | App entry point initializing Clerk and Theme Providers. |
| `.env` | Environment variables (Supabase + Clerk API keys). |
| `package.json` | Lists dependencies and scripts. |
| `tailwind.config.js` | Tailwind CSS configuration and theme customization. |
| `postcss.config.js` | PostCSS setup for CSS transformations. |
| `jsconfig.json` | Configures alias paths and JavaScript compiler options. |

---

### 🧠 **Highlights**

✅ Organized for scalability and collaboration  
✅ Clear separation between UI, logic, and backend config  
✅ Easily maintainable and extensible for future growth  

---
## ⚡ Installation & Setup Instructions

Follow these steps to set up and run **Hired – Full Stack Job Portal** locally.

| 🔢 **Step** | ⚙️ **Action** | 💡 **Details** |
|:------------|:---------------|:----------------|
| 🧰 **1️⃣ Prerequisites** | Install Node.js (v18+) and npm/yarn/pnpm | 👉 [Download Node.js](https://nodejs.org/) (npm comes bundled) <br> Create accounts on **[Supabase](https://supabase.com/)** and **[Clerk](https://clerk.com/)** for backend & authentication setup. |
| 📦 **2️⃣ Install Dependencies** | Run the following command: | ```bash<br>npm install<br># or<br>yarn install<br># or<br>pnpm install``` <br> Installs React, Vite, Tailwind CSS, Supabase, Clerk, React Router, and ShadCN UI. |
| 🔑 **3️⃣ Environment Variables** | Create `.env` in project root and add credentials | ```bash<br># Supabase<br>VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"<br>VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"<br>VITE_SUPABASE_JWT_SECRET="YOUR_SUPABASE_JWT_SECRET"<br><br># Clerk<br>VITE_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"``` |
| 🧩 **4️⃣ Supabase Setup** | Create project & helper SQL function | In Supabase **Settings → API**, copy your Project URL, anon key, and JWT secret. <br> In SQL Editor, run: <br> ```sql<br>CREATE OR REPLACE FUNCTION public.auth_uid()<br>RETURNS uuid LANGUAGE plpgsql AS $$<br>BEGIN<br>  RETURN (current_setting('request.jwt.claims', true)::jsonb)->>'sub';<br>END;<br>$$;``` <br>✅ Enables Clerk → Supabase Row-Level Security (RLS) validation. |
| 🔐 **5️⃣ Clerk Setup** | Configure authentication | In Clerk, create new app → choose Email + Google sign-in. <br> In **JWT Templates → New Template → Supabase**, paste your Supabase JWT secret into the **Signing Key**. <br> Copy your Publishable Key for `.env`. |
| 🗃️ **6️⃣ Database Tables** | Create required tables in Supabase | - **profiles** → user details & roles (candidate/recruiter) <br> - **companies** → company info & logos <br> - **jobs** → job posts & requirements <br> - **applications** → candidate applications & status <br> 🔒 Enable Row-Level Security (RLS) for secure access. |
| 🚀 **7️⃣ Run the App** | Start the local server | ```bash<br>npm run dev<br># or<br>yarn dev<br># or<br>pnpm dev``` <br> Visit **http://localhost:5173** to explore your app. |
| 🎉 **Done!** | All set up! | Sign up as **candidate or recruiter**, post jobs, apply, and explore the full workflow. |

✨ **Pro Tip:** Keep your `.env` keys private — never commit them to GitHub.

## 🧠 What I Learned & Challenges Faced

Building this full-stack job portal taught me how to think like a **modern full-stack engineer**, bridging frontend, backend, and authentication layers seamlessly.

| 💡 **Area** | 🔍 **Key Learnings & Takeaways** |
|:------------|:--------------------------------|
| ⚙️ **Full Stack Development** | Gained end-to-end experience using **React (Vite) + Supabase + Clerk**, managing both frontend UI and backend logic. |
| ⚛️ **React & Routing** | Learned component structuring, state management, and smooth navigation with **React Router DOM**. |
| 🎨 **Tailwind CSS & Shadcn UI** | Mastered responsive, utility-first design and customizing prebuilt components for a consistent UX. |
| 🗄️ **Supabase Backend** | Understood database schema design, **Row Level Security (RLS)**, and JWT-based user validation. |
| 🔐 **Clerk Authentication** | Integrated Google/email sign-ins, handled JWT tokens, and connected Clerk with Supabase securely. |
| 🧩 **Integration Skills** | Configured Clerk + Supabase JWT sync and built secure PostgreSQL functions like `auth_uid()` for role-based access. |
| 🌍 **DevOps & Environment Setup** | Managed environment variables, handled external API keys, and optimized configuration for deployment. |
| 🧠 **Mindset Growth** | Improved debugging, documentation, and problem-solving while working across multiple modern frameworks. |

---

### ⚔️ Key Challenges Overcome

| 🚧 **Challenge** | 🧩 **Resolution / Learning** |
|:-----------------|:-----------------------------|
| 🔄 Vite + Tailwind + Shadcn Integration | Fixed CSS and config issues by refining PostCSS and Tailwind setup. |
| 🔑 JWT Linking (Clerk ↔ Supabase) | Solved token mismatch errors through correct secret syncing and PostgreSQL `auth_uid()` setup. |
| 🗃️ Database & RLS Policies | Resolved visibility bugs by refining RLS logic per user role (candidate/recruiter). |
| 🧭 Routing & Auth Logic | Implemented protected routes and conditional UI rendering for logged-in vs guest users. |

✅ **Outcome:**  
Developed production-grade problem-solving, integration, and architectural thinking — with a strong grasp of security, scalability, and real-world full-stack workflows.

🔮 Future Enhancements

This project is continuously evolving — below are some planned improvements and innovative ideas to make the platform more powerful, user-friendly, and production-ready.


---

**🌟 1. Enhanced User Profiles**

Candidate Resumes & Portfolios: Upload multiple resumes, add GitHub/LinkedIn links, or host personal portfolio pages.

Recruiter Profiles: Include company “About Us” sections, employee testimonials, and benefit highlights.

Skill Badges & Endorsements: Gamified badges or endorsements for verified skills.


**🚀 2. Smarter Job Listings**

AI-Powered Recommendations: Suggest jobs based on candidate behavior, skills, and history.

Job Alerts & Notifications: Real-time email or in-app job match alerts.

Rich Text Job Editor: Markdown or WYSIWYG support for detailed job descriptions.

Auto Expiry & Archiving: Automatically close outdated job listings.


**💼 3. Advanced Application Management**

Application Timeline: Visual tracker (Applied → Reviewing → Interview → Offer → Rejected).

In-App Messaging: Direct and secure recruiter–candidate chat.

Candidate Analytics Dashboard: View stats like application performance and interview rate.


**🔍 4. Improved Search & Discovery**

Advanced Filters: Salary, experience, location, and job type filters.

Fuzzy Search: Handle typos and partial matches.

Geo-Based Search: “Jobs within X km of Y location” for local job discovery.


**🎨 5. User Experience & UI Refinements**

Light/Dark Mode Toggle: Let users switch between themes.

Internationalization (i18n): Multilingual support for global reach.

Guided Onboarding: Step-by-step onboarding experience for new users.

Push Notifications: Real-time updates for new jobs or application status changes.


**💰 6. Monetization & Business Model**

Premium Recruiter Plans: Paid plans for visibility, analytics, and access to top candidates.

Candidate Subscriptions: Premium perks like resume reviews or exclusive listings.


**⚙️ 7. Technical Enhancements**

Server-Side Rendering (SSR) / SSG: Improve SEO and performance for public pages.

Optimistic UI Updates: Instant interactions that feel smooth and responsive.

Centralized Error Logging: Implement tools like Sentry for production error monitoring and debugging.

✅ Goal:
To make this job portal not just functional, but intelligent, scalable, and user-centric — bridging the gap between job seekers and recruiters in the most seamless way possible.


---
