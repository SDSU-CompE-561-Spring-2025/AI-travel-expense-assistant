# Use Python 3.11 slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install uv
RUN pip install --no-cache-dir uv

# Copy the entire project
COPY . .

# Install dependencies using uv without virtual environment
RUN uv pip install --system --no-cache-dir ".[dev]" && \
    uv pip install --system --no-cache-dir email-validator phonenumbers

# Expose port
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "travel_buddy.main:app", "--host", "0.0.0.0", "--port", "8000"] 