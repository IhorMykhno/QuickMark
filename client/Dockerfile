FROM node:18.13
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
 
COPY . /app
 
EXPOSE 8080
 
CMD [ "npm", "run", "dev" ]