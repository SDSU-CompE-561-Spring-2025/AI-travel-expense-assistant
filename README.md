# Travel Buddy

### Tech Stack :)
<!-- Frontend -->
#### 🧑‍💻 Frontend:
[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_First-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Typing-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-Code_Quality-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)

<!-- Backend -->
#### ⚙️ Backend:
[![FastAPI](https://img.shields.io/badge/FastAPI-Modern_Python_API-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![uvicorn](https://img.shields.io/badge/Uvicorn-ASGI_Server-5A29E4?logo=python&logoColor=white)](https://www.uvicorn.org/)
[![uv](https://img.shields.io/badge/uv-Python_Dependencies-yellow?logo=python&logoColor=black)](https://github.com/astral-sh/uv)
[![Hatch](https://img.shields.io/badge/Hatch-Env_Manager-4B8BBE?logo=python&logoColor=white)](https://hatch.pypa.io/)
<!-- [![python-multipart](https://img.shields.io/badge/python--multipart-FormData-FFD43B?logo=python&logoColor=black)](https://pypi.org/project/python-multipart/) -->
<!-- [![Email Validator](https://img.shields.io/badge/email--validator-Validation-306998?logo=python&logoColor=white)](https://pypi.org/project/email-validator/) -->
<!-- [![phonenumbers](https://img.shields.io/badge/phonenumbers-Validation-0A66C2?logo=python&logoColor=white)](https://pypi.org/project/phonenumbers/) -->

<!-- Database -->
#### 🗄️ Database:
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Relational_DB-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-FF6F00?logo=python&logoColor=white)](https://www.sqlalchemy.org/)
[![Pydantic](https://img.shields.io/badge/Pydantic-Data_Validation-0FA36B?logo=python&logoColor=white)](https://docs.pydantic.dev/)

<!--  Infrastructure -->
#### 🐳 Infrastructure:
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker&logoColor=white)](https://www.docker.com/)
[![Docker Compose](https://img.shields.io/badge/Docker--Compose-Multi_Container-blue?logo=docker&logoColor=white)](https://docs.docker.com/compose/)


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
Setup frontend/backend .env files:

Navigate to frontend directory and create a ```.env.local``` file. Paste the following into the file:

```
   NEXT_PUBLIC_API_URL="http://localhost:8000"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   NODE_ENV="production"
```

Also, store the API key for using Google gemini-2.0-flash for AI functionality in the same frontend/.env.local file.

Go to [`this website`](https://aistudio.google.com/apikey) and create a Google API key. Then paste this in your .env.local file and replace the xxx's with your API key: 

```console
GOOGLE_GENERATIVE_AI_API_KEY=xxxxxxxxxxxxxx
```

Navigate to backend directory and create a ```.env``` file. Paste the following into the file:

```
   DATABASE_URL="postgresql://travel_buddy:travel_buddy_pass@postgres:5432/travel_buddy_db"
   SECRET_KEY=secretkey123
```

1. Navigate to the project root directory:
   ```console
   cd AI-travel-expense-assistant
   ```

2. Build and start all services:
   ```console
   docker-compose up --build
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
