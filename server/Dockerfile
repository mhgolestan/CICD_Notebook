FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --chown=node:node . .

ENV NODE_ENV=production

USER node

CMD ["node", "index.js"]