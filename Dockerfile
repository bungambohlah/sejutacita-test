# Common build stage
FROM node:16.16.0-alpine3.16 as common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

RUN npm run build

RUN npm run migrate:prod

CMD ["npm", "run", "start"]
