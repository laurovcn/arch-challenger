# b9 - challenger

## Getting started

Clone this repository:

```
git clone https://github.com/lvneto/arch-challenger
```

### 1. Download example and install dependencies

Install npm dependencies:

```
npm install
```

### 2. Create and seed the database

### 2.1 Get ip of your container to set at dotenv
```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
```

```
npx prisma migrate dev --name init
```

Now, seed the database with the sample data in [`prisma/seed.ts`](./prisma/seed.ts) by running the following command:

```
npx prisma db seed
```

### 3. Start the REST API server

```
npm run build && npm run start
```

The server is now running on `http://localhost:3001`

