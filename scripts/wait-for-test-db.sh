#!/bin/bash

RETRIES=0

until [ $(docker inspect -f {{.State.Health.Status}} lita_test) = 'healthy' ]
do
  echo 'Waiting db to be ready'
  RETRIES=$((RETRIES+1))

  if [ $RETRIES -gt 120 ]
  then
    exit 1
  fi

  sleep 1
done

echo 'DB ready'
