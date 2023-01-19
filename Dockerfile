FROM node:19-alpine

WORKDIR /usr/tf-cards-app
COPY . .
RUN ./scripts/node-app-starter.sh
RUN npm i
RUN ./scripts/install-dev-tools.sh

EXPOSE 30

ENTRYPOINT [ "node","index.js"]