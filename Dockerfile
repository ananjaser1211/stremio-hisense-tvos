# Use Python slim image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy all files to the container
COPY . .

# Expose the HTTP port
EXPOSE 8000

# Start the simple Python HTTP server
CMD ["python", "-m", "http.server", "8000"]
