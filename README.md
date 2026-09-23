# Spade

Spade is a small Discord bot I built in 2021 while I was learning Node.js and event-driven programming. The repository shows the bot as it existed then: commands and Discord events are loaded from separate files, and a small Replit database stores a custom prefix for each server.

## What it does

- Loads commands from `commands/` when the bot starts
- Loads Discord event handlers from `events/`
- Stores a server-specific command prefix
- Includes command discovery, command help, and latency checks
- Joins a voice channel and plays a bundled audio file as an early voice experiment
- Runs a small Express health endpoint on port `8080`

## Project structure

```text
commands/   Individual bot commands
events/     Discord event handlers
index.js    Bot startup and module loading
express.js  Simple health endpoint
```

## Running it

This project uses Discord.js v12 and reflects the package versions from 2021. A current Discord bot may need API and dependency updates before this code will run unchanged.

```bash
npm install
TOKEN=your_discord_bot_token node index.js
```

The prefix commands also expect access to `@replit/database`.

## Context

Spade is an early learning project, not a production bot or a maintained starter. I keep it public because it marks the point where I began separating commands from events and thinking about software as a set of cooperating modules rather than one script.
