# base node image
FROM node:16-alpine as base

ENV NODE_ENV=production

# Install production deps
RUN mkdir /app
WORKDIR /app

ADD package.json package-lock.json ./
RUN npm set-script prepare "" # Needed so that husky wont kick in
# RUN npm install --production
RUN npm install 

# Build the app
ADD . .
# RUN npm run build

COPY public/favicon.ico build

# Finally, build the production image with minimal footprint

CMD ["npm", "run", "dev"]
