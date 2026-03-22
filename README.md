# Docker Best Practices - Non-Root User

Learn to run Docker containers as non-root users for improved security.

## Why Non-Root?

Running containers as root is a security risk. If an attacker escapes the container, they have root access to the host. Using a non-root user limits the blast radius of a compromise.

## Project Structure

```
Dockerfile.insecure   # Runs as root (the problem)
Dockerfile.template   # Starting point for your solution
src/                  # Simple Express application
package.json
```

## Getting Started

```bash
# Build the insecure image (runs as root)
docker build -f Dockerfile.insecure -t bp-nonroot:insecure .

# Check who's running
docker run --rm bp-nonroot:insecure whoami
docker run --rm bp-nonroot:insecure id
```

## Exercise

Complete `Dockerfile.template` to create a secure Dockerfile that runs the app as a non-root user.
