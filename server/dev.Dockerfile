FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

ENV NODE_ENV=development

#CMD ["npm", "run", "dev"]
CMD ["nodemon", "index.js"]