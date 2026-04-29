#!/bin/bash
 
echo "Pulling latest Docker image..."
sudo docker pull vickyamav/first-repo:latest
 
echo "Stopping old container..."
sudo docker stop my-react-container || true
 
echo "Removing old container..."
sudo docker rm my-react-container || true
 
echo "Running new container..."
sudo docker run -d -p 80:80 --name my-react-container vickyamav/first-repo:latest