FROM    docker.io/library/node:16
#
ENV    PORT=3000
#
LABEL  CREATOR='sebaeze@gmail.com' \
       DESCRIPCION='Hello world front end'
#
RUN      mkdir  APPLICATION 
WORKDIR  APPLICATION
#
ADD    index.js            index.js
ADD    package.json        package.json
#
EXPOSE 3000
#
RUN    pwd && ls -lta && echo "..start build.." \
       && echo "\n*********\n "$(node -v)"\n**********"     \
       && npm install
#
CMD    ["npm","start"]