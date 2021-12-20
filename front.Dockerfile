FROM node:14.15 as builder
LABEL maintainer="hbjs"
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM nginx
LABEL maintainer="hbjs"
EXPOSE 80
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build  /usr/share/nginx/html