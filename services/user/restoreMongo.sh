#!/bin/bash

#pass in filename as the first argument

echo "Restoring data database from $1 please wait..."
echo $OSTYPE
case "$OSTYPE" in
  linux*)   mongorestore --drop /data/backup/mongodump$1;;
   msy*)    C:/MongoDB/bin/mongorestore --drop C:/data/backup/mongodump$1 ;;
esac
