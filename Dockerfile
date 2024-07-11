FROM node:18-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["node", "./dist/src/server.js"]


#docker build -t levaeu-back .
#docker run -p 3333:3333 levaeu-back