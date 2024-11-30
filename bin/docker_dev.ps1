docker build . -t reskin:dev
docker run -v .:/usr/local/app --rm -it -p 3000:3000 --entrypoint bash reskin:dev -c "ln -s /usr/local/depenencies/node_modules node_modules && bash; rm node_modules"