# ── Build stage ──────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Build args passed at docker build time (see .env.example)
ARG VITE_CLAUDE_API_KEY
ENV VITE_CLAUDE_API_KEY=$VITE_CLAUDE_API_KEY
RUN npm run build

# ── Serve stage ───────────────────────────────────────────────
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
