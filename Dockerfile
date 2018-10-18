FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/sasi-ui .

# Simple script not using nginx.conf

# FROM nginx
# COPY dist /usr/share/nginx/html
# EXPOSE 80
