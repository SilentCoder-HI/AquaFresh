# AquaFresh Order Board

A React + TypeScript web app for AquaFresh Water Delivery staff to view delivery orders as cards.

This is **Task 1** of the AquaFresh project: a single page that shows sample order cards. The orders are stored in React state (`useState`). The Express/MongoDB API, moving cards between columns, and deployment come in the next tasks.

## Features

- Page header: "AquaFresh Order Board"
- Reusable `Card` component that receives order data through props
- Order list rendered with `map` from a `useState` array
- Each card shows the customer name, package size and status
- Typed with TypeScript and styled with Tailwind CSS

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install and run

```bash
npm install
npm start
```

Open the local URL that Vite prints in the terminal (usually http://localhost:5173).

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server (same as `npm run dev`). |
| `npm run dev` | Start the development server. |
| `npm run build` | Type-check and create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Project structure

```
src/
  components/
    Card.tsx      # Shows one order
  types/
    Order.ts      # Order type
  App.tsx         # Page header and order list
  main.tsx        # App entry point
```

## Sample data

Each order has this shape:

```ts
type Order = {
  id: number;
  packageSize: string;
  customer: string;
  status: "Paid" | "Pending";
};
```

## What is not included yet

- Backend API and database (Task 2)
- Fetching live data, moving cards between columns and deployment (Task 3)

## Author

Hussnain Iftikhar