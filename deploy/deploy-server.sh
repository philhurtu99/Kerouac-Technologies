#!/usr/bin/env bash
# Rebuilds and restarts the Kerouac Technologies site on the home server.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

docker compose -f "$REPO_ROOT/deploy/docker-compose.yml" -p kerouac-technologies up -d --build --remove-orphans
docker image prune -f >/dev/null

for _ in $(seq 1 20); do
  if curl -fsS http://127.0.0.1:4343/ >/dev/null; then
    echo "Kerouac Technologies is up on 127.0.0.1:4343"
    exit 0
  fi
  sleep 1
done

echo "Site did not answer on 127.0.0.1:4343" >&2
docker compose -f "$REPO_ROOT/deploy/docker-compose.yml" -p kerouac-technologies logs --tail 50
exit 1
