#!/bin/bash
npm install pm2 -g
cd services/
cd greet/ && npm install && cd ..
cd number/ && npm install && cd ..
cd ..
cd site/ && npm install