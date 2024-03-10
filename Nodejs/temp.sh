#!/bin/bash

# Check if port 5000 is in use and get the PID of the process using it
PID=$(lsof -t -i:5000)

# If the PID is not empty, kill the process
if [[ -n $PID ]]; then
  echo "Killing process on port 5000..."
  kill -9 $PID
fi

# Start your Node.js application
echo "Starting Node.js application..."
node index.js