# Auto Deploy Webhook

> Automatically build projects on your server on trigger event of Github webhook

## Getting Started

Edit the config file.

### Dependencies

* Docker

### Installing

```console
docker pull trirpi/auto-deploy-webhook:1.0.0
```

### Executing program

```console
docker run -p <port>:8080 trirpi/auto-deploy-webhook:1.0.0
```

Substitute `<port>` with the port the service should run on.
