FROM node:20-alpine AS builder

WORKDIR /client

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /client/dist /usr/share/nginx/html

# Вказуємо порт, на якому буде працювати сервер
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
