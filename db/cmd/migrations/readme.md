# Database Migrations

This directory contains database migrations for the Travel Buddy application using [Goose](https://github.com/pressly/goose).

## Setup

1. Install Goose:
```bash
go install github.com/pressly/goose/v3/cmd/goose@latest
```

## Creating New Migrations

To create a new migration file:
```bash
goose create entity_info_view sql -dir ./cmd/migrations -s -v
```

Replace `entity_info_view` with your desired migration name.

## Running Migrations

### Apply Migrations (Up)
To apply all pending migrations and seed dummy data:
```bash
make seed-dummy-data
```

### Rollback Migrations (Down)
To rollback the last migration and remove dummy data:
```bash
make migration-down
```

## Migration Files

- `00001_dummy_data.sql`: Contains seed data for testing:
  - 1 test user (username: testuser, password: password123)
  - 2 sample trips (New York and San Francisco)
  - 6 expense items (3 per trip)

## Database Connection

Migrations use the following connection string:
```
postgresql://travel_buddy:travel_buddy_pass@localhost:5432/travel_buddy_db
```

