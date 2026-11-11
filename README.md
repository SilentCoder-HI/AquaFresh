# AquaFresh Frontend

This is the React frontend for the AquaFresh water-delivery dashboard. It presents orders in a board layout with three statuses: Pending, In-Transit, and Delivered.

## Overview

The app is built with Vite and TypeScript and uses a drag-and-drop board to move orders between columns. Each order card shows the customer name, package size, and a delete button.

## Features

- Order board with three status columns
- Drag-and-drop reordering between columns
- Reusable card component
- Delete action for each order
- Responsive dashboard layout with Tailwind CSS
- Type-safe frontend models for order data

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- @hello-pangea/dnd
- Axios

## Public deployment

- Frontend: [https://aquafresh-nine.vercel.app/](https://aquafresh-nine.vercel.app/)
- Backend API: [https://aqua-fresh-api.vercel.app/](https://aqua-fresh-api.vercel.app/)

The frontend and backend are deployed as separate Vercel projects from this repository:

1. For the backend project, set the root directory to `backend`, configure `MONGO_URI` with the production MongoDB connection string, and set `CLIENT_URL` to `https://aquafresh-nine.vercel.app`. Deploy it and confirm the API status response at the backend URL.
2. For the frontend project, set the root directory to `frontend` and the framework preset to Vite. Add the `VITE_API_URL` environment variable with the value `https://aqua-fresh-api.vercel.app`.
3. Deploy the frontend. If you change `VITE_API_URL`, redeploy so the value is included in the frontend build.

## Local setup

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
cd frontend
npm install
npm run dev
```

The app usually runs at:

```text
http://localhost:5173
```

## Available scripts

```bash
npm run dev     # start the Vite development server
npm start      # same as npm run dev
npm run build   # type-check and create production build
npm run preview # preview the production build
npm run lint    # run ESLint
```

## Project structure

```text
frontend/
├── public/
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   │   └── Card.tsx
│   └── types/
│       └── Order.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Data model

```ts
export type Status = "Pending" | "In-Transit" | "Delivered";

export interface Order {
  _id: string;
  packageSize: string;
  customer: string;
  status: Status;
}
```

## Notes

- The frontend keeps order state in the React app and updates the status after drag events.
- The delete action is implemented directly from the card component.
- The app is designed to work with the AquaFresh backend API on port 5000.

## Author

Hussnain Iftikhar