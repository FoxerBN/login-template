## Live Demo

👉 [login-template-ecru.vercel.app](https://login-template-ecru.vercel.app/)
---

```markdown
# 🔐 Login Template – Next.js + NextAuth + Supabase

A reusable authentication template built with **Next.js**, **NextAuth.js**, and **Supabase** for storing user data. This project allows easy integration of multiple login providers such as Google, GitHub, Discord, and more.

## 🚀 Features

- 🔄 Social login via multiple OAuth providers (Google, GitHub, etc.)
- 🧠 Powered by **NextAuth.js** for easy authentication flow
- 🗃️ User data stored in **Supabase**
- 📦 Reusable and extendable for any Next.js project
- 🔐 Just plug in your provider credentials (client ID & secret) and you’re ready to go

## 📁 Technologies Used

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/) *(optional if you want styling)*

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/login-template.git
cd login-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root and add your credentials:

```env
# Supabase
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key

# NextAuth
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000

# Example provider: Google
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Add other providers as needed
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Add your providers

Each developer can add the OAuth providers they want by editing the `authOptions` in `/app/api/auth/[...nextauth]/route.ts` (or `.js`).

```ts
import GoogleProvider from "next-auth/providers/google";

providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  }),
  // Add more providers here
],
```

## 🧠 How it works

- When a user logs in, NextAuth authenticates them via the selected provider.
- After successful login, user data is stored in **Supabase**.
- You can extend this with custom logic, database relations, roles, etc.

## 🛠️ Customization

This template is meant to be extended. You can:

- Add your own providers
- Connect additional databases
- Add custom user fields
- Add role-based access

## 🤝 Contributing

Feel free to fork this template and adjust it to your needs. Contributions are welcome!

