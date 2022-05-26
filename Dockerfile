FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npm run build


EXPOSE $PORT

CMD [ "npm", "start" ]