# Docker Best Practices - Non-Root User

Learn to run Docker containers as non-root users for improved security.

## Why Non-Root?

Running containers as root is a security risk. If an attacker escapes the container, they have root access to the host. Using a non-root user limits the blast radius of a compromise.

## Build Images

```bash
# Build the insecure image (runs as root)
docker build -t app:insecure -f Dockerfile.insecure .

# Build the secure image (runs as non-root)
docker build -t app:secure -f Dockerfile.secure .
```

## Compare

```bash
# Check which user each container runs as
docker run --rm app:insecure whoami
# Output: root

docker run --rm app:secure whoami
# Output: nodejs
```

```bash
# Check UID
docker run --rm app:insecure id
# Output: uid=0(root) gid=0(root) groups=0(root)

docker run --rm app:secure id
# Output: uid=1001(nodejs) gid=1001(nodejs) groups=1001(nodejs)
```

## Security Comparison

| Aspect              | Insecure (root)      | Secure (non-root)       |
|---------------------|----------------------|-------------------------|
| Running user        | root (UID 0)         | nodejs (UID 1001)       |
| File system access  | Full read/write      | Limited to /app and /home |
| Package install     | Can install anything | Permission denied       |
| System modification | Full access          | Restricted              |
| Container escape    | Root on host         | Unprivileged user       |

## Exercise

Complete `Dockerfile.template` to create your own secure, non-root Dockerfile.
