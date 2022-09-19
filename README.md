# E2E TESTS WITH NODEJS AND PRISMA

Study repository of E2E tests with Node.js and Prima.

### TECHNOLOGIES

- NPM;
- Node.js.

- Dependencies:

  - Express.

- DevDependencies:
  - @swc/core;
  - @swc/jest;
  - @types/express;
  - @types/jest;
  - @types/node;
  - @types/supertest;
  - jest;
  - nodemon;
  - prisma;
  - supertest;
  - typescript.

# REPOSITORY PATTERN

- Abstract communication with the database in repositories.

### DATABASE

```bash
...
src/
  database/
    prisma.ts
  depositories/
  server/
  services/
...
```

### REPOSITORES

- Interfaces

  - ILessonsRepository;

- Repositories
  - PrismaLessonsRepository;

```bash
...
src/
  database/
  depositories/
    prisma/
      PrismaLessonsRepository.ts
    ILessonsRepository.ts
  server/
  services/
...
```

### EXPRESS SERVER

```bash
...
src/
  database/
  depositories/
  server/
    app.ts
    server.ts
  services/
...
```

### SERVICES

```bash
...
src/
  database/
  depositories/
  server/
  services/
    CreateLesson.ts
...
```

### RUNNING THE APPLICATION

- Development

```bash
npm run dev
```

- Production

```bash
npm start
```

### LOCAL DEVELOPMENT

- Database: dev
  - Models:
    - Lesson
