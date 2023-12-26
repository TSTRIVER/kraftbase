This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone this repository and then install all the dependencies required to run this project effectively and efficiently:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

## Mock API Data

This Project has an api endpoint which fetches the city listings of the queried city with the date specified.
Mock Data Includes :

```bash
Cities:

Mumbai
Delhi
Bhopal
Kerala

Listing Date/s:
12-26-2023
```

## Challenges Faced

The Only and Significant Challenge I faced while building this project was to render the Leaflet.js map in Next.js effectively
as Leaflet.js doesn't support server side rendering.

I tackled this challenge through a swift workaround which can be noticed in the files of the Leaflet folder of this project under the app directory.
