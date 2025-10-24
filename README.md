# Vision-Forge-Learning

**Vision-Forge-Learning** is an AI-powered online learning SaaS platform, leveraging AI Teachers to provide adaptive, personalized educational experiences. :contentReference[oaicite:0]{index=0} 

---

## About

Vision-Forge-Learning aims to reimagine digital learning by combining the flexibility of online education with the adaptiveness of AI-powered instructors. The platform lets learners engage with courses, assessments, and interactive modules while AI Teachers guide, respond, and personalize the pace and content.

---

## Features

- Personalized content delivery, driven by AI  
- Dynamic assessments and feedback  
- Course management (lessons, modules, quizzes)  
- Progress tracking and analytics  
- Adaptive learning paths based on performance  
- Web front-end using Next.js  
- Modular, component-based architecture  

---

## Architecture & Tech Stack
- NextJS
- Typescript
- Tailwind CSS
- ShadCN
- Supabase
- Clerck
- Vapi API
- Santry

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v16+ recommended)  
- npm or yarn  
- (Optional) pnpm / bun  
- Access to any required AI/ML API keys or back-end services  

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Eldyr/Vision-Forge-Learning.git
   cd Vision-Forge-Learning

2. create an .env.local file for your api keys 

   ```bash
   #Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY_
   CLERK_SECRET_KEY
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   
   #Supabase
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   
   #Vapi 
   NEXT_PUBLIC_VAPI_WEB_TOKEN=
   
   #Sentry
   SENTRY_AUTH_TOKEN=


3. Run on your terminal
   ```bash
   npm run dev
   
