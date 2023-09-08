
# Omni AI SaaS Platform with Next.js 13

![Omni AI SaaS Platform Logo](https://i.imgur.com/YEsc6XO.png)


Welcome to the repository for the Omni AI SaaS Platform, a fully-featured, scalable application built using Next.js 13, React, Tailwind CSS, Prisma, Stripe, and more. This platform serves as a comprehensive example of how to create a SaaS product offering a variety of AI-based tools.

## 🌟 Features

- 🎨 **Tailwind CSS Integration**: Beautiful UI with Tailwind's utility-first CSS framework
- 🎥 **Dynamic Animations**: Eye-catching animations and effects using Tailwind
- 📱 **Responsive Design**: Full mobile responsiveness
- 🔒 **Clerk Authentication**: Support for Email, Google, and 9+ Social Logins
- ✅ **Client-Side Validation**: Using `react-hook-form` for robust form handling
- 🍞 **Toasts for Error Handling**: Utilizing `react-toast` for server error notifications
- 🖼️ **Image Generation Tool**: Powered by OpenAI
- 📹 **Video Generation Tool**: Powered by Replicate AI
- 💬 **Conversation Generation Tool**: Powered by OpenAI
- 🎵 **Music Generation Tool**: Powered by Replicate AI
- 🔄 **Page Loading State**: Elegantly handle loading states
- 💳 **Stripe Subscription**: Monthly subscription payments
- 🆓 **Free Tier**: API request limiting for free-tier users
- 🛠️ **API Route Handlers**: POST, DELETE, and GET routes with Next.js
- 📦 **Server Data Fetching**: Direct database access in server components (Magic!)
- 🔄 **Server-Client Relations**: Seamless interaction between Server and Child components
- 🎯 **Reusable Layouts**: Easily reapply common UI layouts
- 📂 **Structured Folders**: Organized Next.js 13 folder structure

## 📚 Prerequisites

- Node.js v18.x.x installed

## ⚙️ Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/AntonioErdeljac/next13-ai-saas.git
```

### Install Dependencies

Navigate to the project directory and run:

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file at the root of the project and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Initialize Prisma

Setup your MySQL Database (For demonstration, PlanetScale is used):

```bash
npx prisma db push
```

### Start the Development Server

```bash
npm run dev
```

## 🎛️ Available npm Commands

| Command | Description                                    |
| ------- | ---------------------------------------------- |
| `dev`   | Launches the app in development mode            |

---

For more information and tutorials, please visit [our website](https://example.com).

Feel free to contribute and submit issues or pull requests. Thank you for checking out the Omni AI SaaS Platform! 🚀
````