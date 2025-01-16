FROM node:18.20.4

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "run", "start"]
