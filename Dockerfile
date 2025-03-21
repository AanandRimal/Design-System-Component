FROM nginx:alpine

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/main_nginx.conf /etc/nginx/nginx.conf
COPY nginx/k8s-nginx.conf /etc/nginx/conf.d

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY dist/ /usr/share/nginx/html
COPY src/favicon.ico /usr/share/nginx/html/favicon.ico

# Expose port 80 for HTTP Traffic
EXPOSE 80 443
# start the nginx web server
CMD ["nginx", "-g", "daemon off;"]