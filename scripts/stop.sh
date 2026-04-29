#!/bin/bash
 
echo "Stopping existing container..."
sudo docker stop my-react-container || true
 
echo "Removing existing container..."
sudo docker rm my-react-container || true