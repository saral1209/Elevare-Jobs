💼 Hired – Full Stack Job Portal
🚀 A next-gen hiring platform connecting recruiters and candidates in real-time  

🌟 About the Project
Hired is a full-stack web application that bridges the gap between recruiters and candidates through a modern, responsive platform.
It allows recruiters to post and manage jobs, while candidates can explore, apply, and track applications — all within a seamless interface built for speed and scalability.

💡 Problem It Solves
Job seekers can easily browse, filter, and apply for jobs, while tracking their application statuses.
Recruiters can post new openings, manage applicants, and maintain company profiles effortlessly.

👥 Who It’s For
Job Seekers / Candidates – Professionals looking for a clean, modern interface to explore and apply for opportunities with transparency and ease.
Recruiters / Hiring Managers – Companies or startups seeking an efficient way to manage postings, attract candidates, and track applications.

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
