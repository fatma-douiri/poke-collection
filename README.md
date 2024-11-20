# Pokemon Collection App

Web application for collecting Pokemon built with Next.js, TypeScript and PostgreSQL.

## Tech Stack

- Next.js 14
- TypeScript
- PostgreSQL
- TailwindCSS
- Pokenode-ts

## Setup

```bash
# 1. Clone project
git clone <repo>
cd pokemon-collection

# 2. Install dependencies
npm install

# 3. Start database
docker-compose up -d

# 4. Create environment file
cp .env.example .env.local

# 5. Run application
npm run dev
```

## Tests

```bash
npm run test
```

## Features

- **Browse Page**: Paginated Pokemon list with collection feature
- **Collection Page**: Manage your Pokemon collection
