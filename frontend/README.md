# Travel Buddy Front End

---

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Members](#project-members)

## Introduction

This is the frontend section, containing all things frontend! Check docs for drafted design and visuals!

This project's frontend uses:
- HTML
- CSS with Shadcn_UI styling
- TypeScript
- React [Next.js](https://nextjs.org), [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- Node.js (need npm installed)

## Getting Started

Start by opening a terminal in the frontend directory. (make sure you ```cd frontend```)

Download project dependencies and packages.
```console
npm install
# or
npm i
```

Create .env.local file within the overall frontend directory to store the API key for using Google gemini-2.0-flash for AI functionality.

Go to [`this website`](https://aistudio.google.com/apikey) and create a Google API key. Then paste this in your .env.local file and replace the xxx's with your API key: 

```console
GOOGLE_GENERATIVE_AI_API_KEY=xxxxxxxxxxxxxx
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Members

Sam James, Erica Lee, Brianna Ly, Joshua Constine, Sean Pitman, Theodore Bongolan
