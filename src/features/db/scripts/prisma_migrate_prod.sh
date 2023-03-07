#!/usr/bin/env bash

branch=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

if [[ $branch == main ]]
then dotenv -e .env.prod -- npx prisma migrate dev
else echo \"CHANGE BRANCH TO MAIN! or run migrate dev\"
fi;