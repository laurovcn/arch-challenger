  "scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/app.ts",
    "database:up": "docker-compose- up -d",
    "database:down": "docker-compose- down",
    "database:sync": "npx prisma db push"
  },