# NITRR Digital Twin

NITRR Digital Twin is an interactive campus intelligence platform designed for National Institute of Technology Raipur.

## Project Status

Phase 0 foundation is in progress. The project currently provides a React frontend, an Express API, and a health endpoint. Feature APIs and campus data have not been implemented yet.

## Project Structure

```text
frontend/          React, Vite, React Router, and Tailwind CSS
backend/           Express API, Mongoose connection, and environment configuration
.env.example       Local environment variable template
```

## Prerequisites

- Node.js 20.19 or newer and npm
- MongoDB running locally, or a MongoDB connection URI

The API can start when MongoDB is unavailable. Database-backed features will require a working MongoDB connection.

## Installation

From the repository root, install each application's dependencies:

```bash
npm --prefix backend install
npm --prefix frontend install
```

Create a local environment file from the template. In PowerShell:

```powershell
Copy-Item .env.example .env
```

In Git Bash or another POSIX shell:

```bash
cp .env.example .env
```

Edit `.env` if your MongoDB URI or local ports differ. `.env` is ignored by Git and must not be committed.

## Environment Variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `5000` | Backend HTTP port |
| `MONGODB_URI` | `mongodb://127.0.0.1:27017/nitrr-digital-twin` | MongoDB connection string |
| `FRONTEND_ORIGIN` | `http://localhost:5173` | Allowed browser origin for API CORS |
| `MONGODB_SERVER_SELECTION_TIMEOUT_MS` | `5000` | Time before an unavailable MongoDB connection attempt fails |

## Development

Run these commands in separate terminals from the repository root:

```bash
npm --prefix backend run dev
```

```bash
npm --prefix frontend run dev
```

The frontend is available at `http://localhost:5173`; the API listens at `http://localhost:5000` by default.

To create a frontend production build:

```bash
npm --prefix frontend run build
```

## Health Endpoint

`GET http://localhost:5000/api/v1/health` reports the API process and MongoDB connection separately. The endpoint returns HTTP 200 while the API is running; `server` is `running`, and `database.status` is either `connected` or `unavailable`. An unavailable database does not prevent the API process from starting.

## MongoDB Setup

Start a local MongoDB Community Server before launching the backend, or set `MONGODB_URI` in `.env` to a MongoDB deployment connection string. Ensure the database host is reachable from the backend. The application does not create any feature models or campus records in Phase 0.

## Planned Features

Authentication, campus locations and map, events, resource availability, Smart Finder, resource sharing, issue reporting, campus activity and pressure analysis, admin dashboard, analytics, and real-time updates are planned for later phases. No IoT sensors or official campus statistics are assumed.

## Technology

- Frontend: React, Vite, JavaScript, React Router, Tailwind CSS
- Backend: Node.js, Express, Mongoose, MongoDB, dotenv, CORS, Zod