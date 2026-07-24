# Admin & Database Setup

## What's built (Phase 1 + this update)

- Prisma schema (`prisma/schema.prisma`) covering Courses, Lessons, Blog Posts,
  Pricing Plans, VIP Signals, Students, Payments, Legal Pages, and a generic
  `SiteSetting` table for small homepage bits (stats numbers, etc.)
- Single admin login at `/admin/login` — email/password, **or** "Continue
  with Google" as a backup if the password is ever lost
- Admin dashboard shell at `/admin` with a sidebar and live counts once
  connected
- **Legal Pages** (`/admin/legal`) — Privacy Policy, Terms of Service, Refund
  Policy, Disclaimer, and Risk Disclosure are now editable from admin and
  served live at `/legal/privacy`, `/legal/terms`, etc. Starter content is
  seeded automatically — **it's generic placeholder text, not real legal
  advice; have an actual lawyer review it before this site takes real
  payments.**
- **Settings** (`/admin/settings`) — change password, link/unlink a Google
  account for backup sign-in
- Placeholder pages for Courses, Blog, Pricing, VIP Signals, Students,
  Payments — full create/edit/delete screens are still Phase 2

## ⚠️ Important — I could not fully verify this end-to-end

Everything here passes TypeScript type-checking and ESLint with zero errors.
But `npm run build` needs a **real, generated Prisma client** to complete —
and generating it requires downloading engine binaries from Prisma's CDN,
which my sandbox's network is locked down and can't reach. So unlike
everything else I've built so far, **I have not personally run a fully green
`npm run build` on this code.** I'm confident in it based on type-checking,
linting, and knowing exactly what the one missing piece is — but you should
verify the build yourself before assuming it's flawless, the way I have with
every other delivery in this project.

## Setup steps

### 1. Create a Neon project

- Go to [neon.tech](https://neon.tech), create a free project
- From the dashboard, grab the **pooled** connection string → `DATABASE_URL`
  (that's the only one you need — see the note in `.env.example` about why
  the direct connection is normally recommended for migrations, and what to
  do if you ever hit an advisory-lock error)

### 2. Set your local env vars

Copy `.env.example` to `.env` and fill in:

```
DATABASE_URL="<pooled connection string>"
AUTH_SECRET="<run: openssl rand -base64 32>"
SEED_ADMIN_EMAIL="you@youremail.com"
SEED_ADMIN_PASSWORD="a strong password"
SEED_ADMIN_NAME="Your Name"
```

### 3. Generate the client and create the tables

```bash
npx prisma generate
npx prisma migrate dev --name init
```

This is the step that needs real internet access to Prisma's CDN — should
just work on your machine.

### 4. Create your admin login

```bash
npx prisma db seed
```

This reads `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` from `.env` and creates
the admin row (password is bcrypt-hashed, never stored in plain text). Safe
to re-run if you want to change the password later — just update `.env` and
re-run.

### 5. Run it

```bash
npm run dev
```

Visit `/admin/login` and sign in with the email/password from step 4.

### 6. (Optional) Set up "Continue with Google"

This is entirely optional — email/password login works without it. Skip this
if you don't need it yet.

1. Go to [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
2. Create an OAuth client ID → type **Web application**
3. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/google`
4. Copy the Client ID / Secret into `.env` as `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET`
5. Once logged into `/admin`, go to **Settings** and enter the Gmail address
   you want to allow — only that exact Google account will be able to sign
   in this way

### 7. Set the same env vars on Vercel

Project Settings → Environment Variables → add `DATABASE_URL`,
`AUTH_SECRET`, and (if using Google sign-in) `AUTH_GOOGLE_ID` /
`AUTH_GOOGLE_SECRET`. You don't need the `SEED_*` ones on Vercel — seeding is
a one-time local action, not something that should run on every deploy.

The `postinstall` script in `package.json` runs `prisma generate`
automatically on every `npm install`, so Vercel's build will pick up your
schema without any extra configuration.

## Editing legal pages and account settings

Once logged in, **Legal Pages** in the sidebar lets you edit Privacy Policy,
Terms of Service, Refund Policy, Disclaimer, and Risk Disclosure — changes
go live immediately at their `/legal/...` URLs, no redeploy needed.
**Settings** lets you change your password or link a Google account for
backup sign-in.

## What's next (Phase 2)

Real CRUD screens for each section, starting with Courses and Blog since
those are the most content-heavy. Then Phase 3 (wiring the public pages to
read from the database instead of hardcoded arrays) and Phase 4 (payments).