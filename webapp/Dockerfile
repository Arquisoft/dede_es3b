FROM node:16.13.1
LABEL org.opencontainers.image.source https://github.com/Arquisoft/dede_es3b
COPY . /app
WORKDIR /app
#Install the dependencies
RUN npm install
#ARG API_URI="http://localhost:5000/api"
ARG API_URI="http://75.101.164.208:5000/api"
ENV REACT_APP_API_URI=$API_URI

#Create an optimized version of the webapp
RUN npm run build

#Ver como podemos llamar npm run prod aquí
CMD [ "npm", "run", "prod" ]