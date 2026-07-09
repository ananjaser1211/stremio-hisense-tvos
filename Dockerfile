# Use Python slim image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy all files to the container
COPY . .

# Expose the HTTP port
EXPOSE 8001

# Start the static server with request and viewport debug logging
CMD ["python", "debug_server.py"]
