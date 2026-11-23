# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies required for building the application
COPY package.json package-lock.json ./
RUN npm ci

# Copy project files and build frontend & server
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy compiled output from builder
COPY --from=builder /app/dist ./dist

# Run as non-root user
USER node

EXPOSE 3000

CMD ["node", "dist/index.js"]
