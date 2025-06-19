# 📺 Stremio Hisense TVOS (v1.7.6) — Self-hosted Edition

> This is a forked **dump of the Stremio Hisense v1.7.6 TVOS web app**. I do not claim ownership of the original code.  
> This project is only intended for **educational and self-hosted purposes**, allowing local control of the base server URL for Stremio.

---

## What is this?

This repo contains a **static copy of the Stremio Hisense web app** (version 1.7.6) used on Vidaa-based Smart TVs.  
The purpose of this fork is to **modify the default server IP (`127.0.0.1:11470`)** to point to your own **self-hosted Stremio server**, enabling features like **torrent streaming**, etc.

---

## Requirements

1. A **Vidaa OS Hisense / Toshiba Smart TV**
2. The [Stremio Hisense sideload script](https://github.com/Stremio/stremio-hisense-install)
3. A local or remote web server to host this modified TV web app (can use Docker — see below)
4. A self-hosted [Stremio server](https://github.com/Stremio/stremio-server) running and accessible on the same network

---

## How to Install on Vidaa (Hisense/Toshiba)

You must modify the `index.html` in the [stremio-hisense-install](https://github.com/Stremio/stremio-hisense-install) repository.

Look for the following line:

```js
var appUrl = ...
```

🔧 Change it to point to your self-hosted app. Example:

```js
var appUrl = 'http://192.168.1.167:8000';
```

Then:

- Deploy your DNS server from `stremio-hisense-install`
- Visit the page on your Vidaa TV browser
- Install the hosted Stremio app via the "Install" button

---

## Docker Setup for Hosting Locally

You can host the app using a **Python HTTP server** inside Docker for easy deployment.

### Dockerfile

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000"]
```

### docker-compose.yml

```yaml
version: "3.8"
services:
  stremio-tvos:
    build: .
    ports:
      - "8000:8000"  # Change the left port if needed
```

> This serves the app on `http://<your-ip>:8000`.

---

## 🛠️ Run the Docker Container

### Step-by-step:

```bash
# 1. Clone this repo
git clone https://github.com/ananjaser1211/stremio-hisense-tvos
cd stremio-hisense-tvos

# 2. Build and run using Docker Compose
docker-compose up -d
```

Access your TV app to verify:

```
http://<your-local-ip>:8000
```

If All is well, sideload the "App"

Set this in your `appUrl` inside the sideload script.

---

## ✅ Verify Functionality

- Make sure your Stremio server is **running and reachable** by the TV (on the same subnet).
- Modify the hardcoded default IP if necessary (`main.js`) — from `192.168.1.167:11470` to your desired IP.
