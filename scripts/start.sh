#!/bin/bash
 
echo "Pulling latest Docker image..."
docker pull vickyamav/first-repo:latest
 
echo "Stopping old container..."
docker stop my-react-container || true
 
echo "Removing old container..."
docker rm my-react-container || true
 
echo "Running new container..."
docker run -d -p 80:80 --name my-react-container vickyamav/first-repo:latest2