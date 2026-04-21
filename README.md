# LVK Events — Website

Next.js 15 website for LVK Events with an admin dashboard.

## Stack

- **Next.js 15** (App Router, Turbopack)
- **Tailwind CSS v4**
- **Supabase** — contact form storage + page view analytics
- **Vercel** — deployment

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to the **SQL Editor** and run the contents of `supabase/schema.sql`
3. Copy your project URL and API keys from **Project Settings → API**

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_PASSWORD=choose-a-strong-password
```

> **Never commit `.env.local` to git.**

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Admin panel

Go to `/admin` and log in with the password from `ADMIN_PASSWORD`.

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Add all environment variables from `.env.local` in the Vercel project settings
4. Deploy

## Adding photos

When Louis has event photos ready, add them to `public/images/` and use them in the hero section or service cards. The `<Image>` component from `next/image` handles optimisation automatically.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services overview, CTA |
| `/over-ons` | Company intro + detailed service cards |
| `/team` | Louis's profile, certs, software |
| `/contact` | Contact form + direct details |
| `/algemene-voorwaarden` | Terms and conditions |
| `/admin` | Password-protected analytics dashboard |
