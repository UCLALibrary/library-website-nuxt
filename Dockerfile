FROM node:14.15.4

# create destination directory

WORKDIR /usr/local

COPY package*.json ./
RUN npm ci
ENV PATH=/usr/local/node_modules/.bin:$PATH

WORKDIR /usr/local/app

EXPOSE 3000
EXPOSE 3003

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "dev" ]
