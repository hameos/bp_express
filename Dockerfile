FROM node:17-alpine
#ENV NODE_ENV production
WORKDIR /bp_express
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run pro


FROM node:17-alpine
WORKDIR /bp_express
COPY --from=0 /bp_express/package*.json ./
RUN npm ci --production
COPY --from=0 /bp_express/dist ./dist
EXPOSE 3000
CMD ["node", "./dist/server.js"]
