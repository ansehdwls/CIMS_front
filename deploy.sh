git checkout production;
git pull;

docker-compose -f stack.yml pull;

docker stack deploy --with-registry-auth -c stack.yml cims-web;