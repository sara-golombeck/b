#!/bin/sh
set -e
echo "migrate:latest"
knex migrate:latest 

echo "knex seed:run"
knex seed:run

echo "server.js"
node server.js