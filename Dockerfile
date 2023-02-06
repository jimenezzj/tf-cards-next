FROM node:19-alpine

WORKDIR /usr/tf-cards-app
COPY . .
RUN npm i
RUN sh "./scripts/node-app-starter.sh"
RUN sh "./scripts/install-dev-tools.sh"

EXPOSE 30

ENTRYPOINT [ "node","index.js"]