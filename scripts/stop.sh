#!/bin/bash
 
echo "Stopping existing container..."
docker stop my-react-container || true
 
echo "Removing existing container..."
docker rm my-react-container || true 