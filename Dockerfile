FROM node:14.15.4

# create destination directory
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm ci
RUN npm run build



