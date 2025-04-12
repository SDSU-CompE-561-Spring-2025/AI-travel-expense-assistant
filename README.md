# Travel Buddy

[![PyPI - Version](https://img.shields.io/pypi/v/travel-buddy.svg)](https://pypi.org/project/travel-buddy)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/travel-buddy.svg)](https://pypi.org/project/travel-buddy)

---

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Developer Usage](#developer-usage)
- [Docker Setup](#docker-setup)
- [Credentials](#credentials)
- [Project Members](#project-members)

## Introduction

This travel planning application helps users plan, manage, and organize trips. The user can log in securely to store and access their trip information, complete with flight details, accommodations, activities, expenses, and personalized notes/descriptions. The application will be able to present the user's trip details in an interactive calendar view. Additionally, the application will also include an AI recommendation feature, which provides travel suggestions tailored to the user's inputted travel destination. 

## Installation & Usage

Clone the repository! 

With SSH
```console 
git clone git@github.com:SDSU-CompE-561-Spring-2025/AI-travel-expense-assistant.git
```

With HTTPS
```console
git clone https://github.com/SDSU-CompE-561-Spring-2025/AI-travel-expense-assistant.git
```

## Developer Usage

Readme files included for each section, have a look! 

## Docker Setup

The application is containerized using Docker Compose, which sets up the frontend, backend, and database services.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Application

1. Navigate to the project root directory:
   ```console
   cd AI-travel-expense-assistant
   ```

2. Build and start all services:
   ```console
   docker compose up -d
   ```

3. To view logs:
   ```console
   docker compose logs -f
   ```

4. To stop all services:
   ```console
   docker compose down
   ```

### Individual Service Management

- Rebuild a specific service:
  ```console
  docker compose build <service-name>
  ```

- Restart a specific service:
  ```console
  docker compose restart <service-name>
  ```

- View logs for a specific service:
  ```console
  docker compose logs -f <service-name>
  ```

### Accessing the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

### Docker Architecture

The application uses a multi-container architecture with the following services:

1. **Frontend (Next.js)**
   - Serves the user interface
   - Built with Next.js and React
   - Runs on port 3000

2. **Backend (FastAPI)**
   - Handles API requests
   - Built with FastAPI and Python
   - Runs on port 8000

3. **Database (PostgreSQL)**
   - Stores application data
   - Runs on port 5432

The containers are orchestrated using Docker Compose, which manages the networking between services and ensures they start in the correct order. The database container is configured to initialize with the necessary schema and data.

### Environment Configuration

Each service has its own environment configuration:

- **Frontend**: Uses `.env.local` for environment variables
- **Backend**: Uses `.env` for environment variables
- **Database**: Uses environment variables in the Docker Compose file

## Credentials

### Database Credentials (PostgreSQL)
- **Username**: `travel_buddy`
- **Password**: `travel_buddy_pass`
- **Database Name**: `travel_buddy_db`
- **Host**: `postgres` (Docker service name)
- **Port**: `5432`

### Frontend Environment Variables
- **API URL**: `http://localhost:8000` (NEXT_PUBLIC_API_URL)
- **App URL**: `http://localhost:3000` (NEXT_PUBLIC_APP_URL)
- **Environment**: `production` (NODE_ENV)

### Backend Environment Variables
- **Database URL**: `postgresql://travel_buddy:travel_buddy_pass@postgres:5432/travel_buddy_db` (DATABASE_URL)

## Project Members

Sam James, Erica Lee, Brianna Ly, Joshua Constine, Sean Pitman, Theodore Bongolan
