FROM node:12.13.0 as reacty-build
# The container directory where everything will be saved
WORKDIR /app
# Copy from actual source code (relative path given)
#Copy to the the given folder of the container(relative path given again)
COPY . ./

RUN yarn install
# Runs and executes a production build.
RUN yarn run build


#GETTING A SECOND CONTAINER
FROM nginx:latest
# copy from the above container, from the directory /app/build 
# copy into given nginx directoryt
COPY --from=reacty-build /app/build /usr/share/nginx/html/
#run it on port 80
EXPOSE 80

# CMD [ "nginx", "-g", "daemon off"]