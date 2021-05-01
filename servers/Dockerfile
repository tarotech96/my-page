FROM node:12.18.1

WORKDIR /build

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["index.js"]