#!/usr/bin/env bash

branch=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

if [[ $branch == main ]]
then echo \"CHANGE BRANCH TO OTHER BRANCH THAN MAIN! or run db push prod\"
else dotenv -e .env.dev -- npx prisma db push
fi;