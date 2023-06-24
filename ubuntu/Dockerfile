# Download base image ubuntu 22.04
FROM ubuntu:22.04

# Define working directory
WORKDIR /app


# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive

# Update Ubuntu Software repository
RUN apt update
RUN apt upgrade -y

# Add files
COPY . /app

# Install dependencies
RUN npm install

EXPOSE 8090

# Define default command
CMD ["bash"]