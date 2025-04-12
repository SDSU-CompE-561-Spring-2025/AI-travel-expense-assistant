# Use Node.js LTS version
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Set environment variables for the build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Debug: List files to ensure everything is copied
RUN ls -la

# Build the application with verbose output
RUN npm run build --verbose

# Debug: Check if .next directory exists and its contents
RUN ls -la .next || echo ".next directory not found"

# Production image, copy all the files and run next
FROM node:20-slim AS runner

WORKDIR /app

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy built assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env.local ./.env.local

# Debug: List files in the runner stage
RUN ls -la
RUN ls -la .next || echo ".next directory not found in runner stage"

# Install production dependencies only
RUN npm ci --only=production

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"] 