#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull vickyamav/first-repo:latest1

# Run the Docker image as a container
docker run -d -p 80:80 vickyamav/first-repo:latest1