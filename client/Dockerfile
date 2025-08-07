FROM node:20 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm test
FROM node:20-alpine AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV VITE_BACKEND_URL=/api

RUN npm run build

# Debug the build output
RUN ls -la dist && ls -la dist/assets

FROM nginx:1.20-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the entire dist directory
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Debug the copied files
RUN ls -la /usr/share/nginx/html && ls -la /usr/share/nginx/html/assets

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
#FROM node:20 AS build-stage
#
#WORKDIR /usr/src/app
#
#COPY . .
#
#RUN npm ci
#
#ENV VITE_BACKEND_URL=http://localhost:3000
#
#RUN npm run build
#
#FROM nginx:1.25-alpine
#
#COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

