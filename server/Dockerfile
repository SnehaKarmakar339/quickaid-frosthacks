FROM node:22.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT=3500

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]