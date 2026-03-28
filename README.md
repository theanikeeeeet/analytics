# Analytics Dashboard

A minimal real-time analytics system that tracks user events and displays live insights.

## Features

- **Real-time Event Tracking**: Instantly capture toast notifications and custom events
- **Live Dashboard**: Auto-refresh statistics every 30 seconds
- **MongoDB Storage**: Persist all analytics data
- **Session Tracking**: Unique session identification
- **Auto Cleanup**: Automatic deletion of events older than 30 days
- **Interactive Charts**: Timeline and event distribution visualization

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Express.js, MongoDB, Mongoose
- **Charts**: Recharts
- **Styling**: Tailwind CSS
- **Real-time**: Fetch with 30s interval refresh

## Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

## Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/analytics
PORT=5000
```

## Quick Start

1. **Start MongoDB**
   ```bash
   mongod
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **View live dashboard**
   - Navigate to `http://localhost:3000/analytics`
   - Dashboard auto-updates every 30 seconds

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/analytics/track` | Track an event |
| GET | `/api/analytics/events` | Fetch all events (paginated) |
| GET | `/api/analytics/stats` | Get live statistics |
| GET | `/api/analytics/timeline` | Get 7-day timeline |
| GET | `/api/analytics/top-events` | Get top 10 events |
| DELETE | `/api/analytics/cleanup` | Remove events >30 days old |

## Dashboard Features

- **KPI Cards**: Total events, unique users, last hour activity
- **Timeline Chart**: Real-time event trends (7 days)
- **Top Events**: Most frequent event types
- **Recent Events**: Searchable & filterable history
- **Auto-refresh**: Updates every 30 seconds

## How It Works

1. Toast notifications trigger `trackEvent()` function
2. Events sent to `/api/analytics/track`
3. MongoDB stores event data
4. Dashboard fetches data via API endpoints
5. Recharts visualizes data in real-time

## Project Structure

```
analytics/
├── src/
│   ├── config/database.ts
│   ├── models/Analytics.ts
│   ├── routes/analytics.ts
│   └── server.ts
├── pages/
│   ├── api/analytics/[...slug].ts
│   └── analytics.tsx
├── hooks/
│   └── use-toast.ts
└── README.md
```

## License

MIT
