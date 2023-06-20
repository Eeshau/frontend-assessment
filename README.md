# Use
https://frontend-assessment-simplify.vercel.app/

# Notes
I installed the latest release of next.js, was getting some odd errors with the version provided

Also for icons "npm install @mui/material @emotion/react @emotion/styled" and "npm install @mui/icons-material"

----------------------------------------------------------------------------------------------------------------


![logo](https://user-images.githubusercontent.com/21349718/227146863-399bdd2b-2091-4461-9775-141af610f9ef.svg)

# Simplify Frontend Exercise

Hello! If you're reading this then we're likely in the process of considering you for a role at Simplify. If so, congratulations 🎉 !

We'd like to know a little more about how you work, so this repository contains a short (approximately 2-3 hours) exercise that you can use demonstrate your skills and abilities.

We know that 2-3 hours is not a lot of time and you may not be able to complete everything you'd like, and will feel pressure to do more. We're not looking for perfection in the UI and are not evaluating your skills as a designer so be sure to focus on functionality and showing your knowledge of NextJS and React best practices. Of course if time permits, feel free to polish the UI and flex any design skills. Best of luck!

# Overview

In this exercise you will be using React, NextJS, and TailwindCSS to make three pages of an ecommerce app. You will be getting familiar with TailwindCSS and exploring the features of NextJS like server-side rendering, app layouts, and dynamic slugs. Your task will be to create pages/components based on the designs from a Figma file, mock an api to provide data to the pages, and follow instructions on which NextJS features to use for the pages.

The goal of this exercise is to evaulate your ability to:
* translate specs into well organized components
* successfully implement advanced features of NextJS you may be unfamiliar with
* showcase your experience with styling components with TailwindCSS

# Instructions

Fork this repo to get started. We've provided a starter project for you with React 18, Typescript, [NextJS 13](https://beta.nextjs.org/docs/getting-started), [TailwindCSS](https://tailwindcss.com/docs/installation), and [SWR](https://swr.vercel.app/docs/getting-started) already added and default configured. Be sure to read through the docs for these libraries if you are unfamiliar. You're also welcome to use any other packages if you'd like, just be sure to explain why you decided to use them and meet all the project requirements with the provided stack.

1. Mock ecommerce API

Using the api route feature in NextJS mock the following routes:
* Getting a list of favorite items
* Getting details of an item from its ID

We've provided a json file with mock data to use called `data.json`. Feel free to modify it or add to it if you wish. Though we are't expecting you to do error handling, you may add error responses to the api if you have time.

2. Make three pages using NextJS App Router format. Implement a root layout and individual layout files where needed.

The designs for the three pages can be found in this [Figma file](https://www.figma.com/file/lUbwgHr7OTh4IEf1Y4szwf/NextJS-Ecommerce?node-id=0%3A1&t=bHXi1DmZpSYk17Wd-1). Implement the designs, creating components where it makes sense and following best practice organization. 

* `/dashboard/list`
  * Following the `List page` design, create a page that uses a top navigation bar layout with the main content showing a list of the user's favorite items. 
  * Use swr to load the data client side from the mock API you made in step 1. Before the data is loaded, show a loading icon in place of the list. 
  * The list items do not need to have any functionality other than when clicking on an item it will take you to the /item/[id] page of its id. 
  * The appearace/UI of the top navigation is not important and does not need to match the design if it is time consuming. 
* `/dashboard/card`
  * Following the `Card page` design, create a page that uses a side navigation bar layout with the main content showing a grid of cards of the user's favorite items. 
  * Use swr to load the data client side from the mock API you made in step 1. Before the data is loaded, show a loading icon in place of the grid. 
  * The card items do not need to have any functionality other than when clicking the View button it will take you to the /item/[id] page of its id. 
  * The appearace/UI of the top navigation is not important and does not need to match the design if it is time consuming.  
* `/item/[id]`
  * Following the `Detail page` design, create a page with the Catch-all Segment to show details of a certain item. This page can use either layout configuration (Route groups may be helpful) and does not need to contain all text content from the design. 
  * This page should be Server-Side Rendered with NextJS - load the items details from the API and pass it to the page.

# Submission

When you're done just email us the link to your forked repo and we'll run it locally. If you have any additional explanation you want to add, feel free include it in the project README.


----------------------------------------------------------------------------------------------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
