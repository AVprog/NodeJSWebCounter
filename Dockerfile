FROM arm32v7/node:8-slim

WORKDIR /app/

COPY package*.json ./

RUN npm install --production

COPY app.js ./

EXPOSE 9229

EXPOSE 8080

USER node

CMD ["node", "--inspect=0.0.0.0:9229", "app.js"]