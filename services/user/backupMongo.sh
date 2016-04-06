#!/bin/bash

now=$(date +"%Y%m%d%H%M%S")

echo "Backing up data to /data/backup/mongodump$now folder, please wait..."
echo $OSTYPE
# rest of script
case "$OSTYPE" in
  linux*)   mongodump --out /data/backup/mongodump$now;;
   msy*)     C:/MongoDB/bin/mongodump --out C:/data/backup/mongodump$now ;;
esac

