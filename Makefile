.DEFAULT_GOAL := help
define BROWSER_PYSCRIPT
import os, webbrowser, sys
try:
	from urllib import pathname2url
except:
	from urllib.request import pathname2url

webbrowser.open("file://" + pathname2url(os.path.abspath(sys.argv[1])))
endef
export BROWSER_PYSCRIPT

define PRINT_HELP_PYSCRIPT
import re, sys

for line in sys.stdin:
	match = re.match(r'^([a-zA-Z_-]+):.*?## (.*)$$', line)
	if match:
		target, help = match.groups()
		print("%-20s %s" % (target, help))
endef
export PRINT_HELP_PYSCRIPT
BROWSER := python -c "$$BROWSER_PYSCRIPT"

DOCKER_COMPOSE := docker-compose -f build/docker-compose.yml --project-name floorspace
DOCKER_COMPOSE_EXEC := $(DOCKER_COMPOSE) exec -w /app floorspace-dev-server

help:
	@python -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)

.PHONY: build
build: ## Build containers for the service and builds the Floorspace.js project's embedded mode
	$(DOCKER_COMPOSE) build
	$(MAKE) build-embed

build-standalone: run-detach ## Launches detached version of service containers and builds standalone version
	$(DOCKER_COMPOSE_EXEC) yarn build

build-embed: run-detach ## Launches detached version of service containers and builds the Floorspace.js project's embedded mode
	$(DOCKER_COMPOSE_EXEC) yarn openstudio-build

run: ## Run containers for the service
	$(DOCKER_COMPOSE) up

run-detach: ## Run containers in the background
	$(DOCKER_COMPOSE) up -d

stop: ## Stop and remove containers for the service
	$(DOCKER_COMPOSE) down

rebuild-and-restart: stop build run-detach ## Rebuild both the Docker containers and the embedded Floorspace.js app, then relaunch the Docker services
