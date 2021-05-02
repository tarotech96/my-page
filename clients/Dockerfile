#create base image that tells Docker what base image we would like to use for our application
FROM node:12.18.1
#specifies the environment in which an application is running
# ENV NODE_ENV=production
#create a working directory. This instructs Docker to use this path as the default location for all subsequent commands
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#get package.json and package-lock.json files into our images
COPY ["package.json", "package-lock.json", "./"]
#use RUN command to excute the command npm install
RUN npm install
#copy source code into the image
COPY . /usr/src/app

EXPOSE 3000

#tell Docker what command we want to run when our image is run inside of a container
CMD [ "npm", "start" ] 