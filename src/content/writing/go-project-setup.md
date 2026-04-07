---
title: Setting up a Go project from scratch, the way I like it
date: 2026-03-15
tags:
  - go
  - tooling
  - taskqueue
draft: false
---

> **Placeholder post** — real content coming soon.

Every time I start a new Go project, I spend the first hour making the same decisions. Directory layout, linter config, Makefile targets, Docker setup. I have done this enough times now that I have a repeatable process, so I am writing it down — partly for future-me, partly in case it is useful to anyone else.

## Directory structure

I follow the standard Go project layout, but I am opinionated about a few things:

```
taskqueue/
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── queue/
│   ├── worker/
│   └── store/
├── pkg/
│   └── client/
├── migrations/
├── docker-compose.yml
├── Makefile
└── .golangci.yml
```

The `internal/` directory is the workhorse. Everything that is not meant to be imported by other modules lives here. I have seen too many projects expose implementation details through `pkg/` out of habit.

## The Makefile

I keep it simple. Four targets cover ninety percent of my workflow:

```makefile
.PHONY: dev test lint build

dev:
	docker-compose up -d
	go run ./cmd/server

test:
	go test ./... -race -count=1

lint:
	golangci-lint run

build:
	go build -o bin/server ./cmd/server
```

The `-race` flag on tests is non-negotiable. It caught a real bug in my last project before it ever reached staging.

## Linter configuration

I use `golangci-lint` with a configuration that is strict but not punishing. The defaults are a good starting point, but I always enable `gocritic`, `errcheck`, and `gosec`. Catching security issues and unchecked errors at lint time saves hours of debugging later.

## Docker setup

For local development, `docker-compose.yml` spins up the dependencies — Redis and PostgreSQL in this case — and the application connects to them via environment variables. Nothing clever, but it means any new contributor can run `make dev` and have a working environment in under a minute.

This is the setup I used for `taskqueue`, the distributed task queue I am currently building. The project structure has held up well so far. I will write more about the architecture decisions in a future post.
