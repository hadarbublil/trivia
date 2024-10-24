# Use your existing Ubuntu image
FROM ubuntu

# Install Node.js and npm
RUN apt-get update && apt-get install -y \
    curl \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a simple HTTP server to serve the build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build"]

