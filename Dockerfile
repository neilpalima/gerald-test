FROM node:14-alpine

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN echo $NODE_ENV

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install deps to build natively
RUN npm install \
    && npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
