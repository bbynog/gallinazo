#!/usr/bin/env bash

branch=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

if [[ $branch == dev ]]
then dotenv -e .env.dev -- npx prisma migrate dev
else echo \"CHANGE BRANCH TO DEV!\"
fi;