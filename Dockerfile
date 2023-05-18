FROM node:alpine

COPY index.js /home

WORKDIR /home/app

RUN npm install

EXPOSE 8080

CMD npm run app
