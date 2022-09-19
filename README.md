# E2E TESTS WITH NODEJS AND PRISMA

Study repository of E2E tests and units tests with Node.js and Prisma.

### TECHNOLOGIES

- NPM;
- Node.js.

- Dependencies:

  - Express;
  - prisma/client.

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
  - ts-node;
  - typescript.

# PATTERNS

### REPOSITORY PATTERN, IN-MEMORY DATABASE AND COMMAND/QUERY SEGREGATION

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
    createLesson.spec.ts
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

### RUNNING TESTS

- The tests are using an in-memory database so there is no knowledge of external layers in unit tests.

```bash
...
prisma/
src/
tests/
  repositories/
    inMemoryLessonsRepository.ts
...
```

- All tests

```bash
npm test
```

### LOCAL DEVELOPMENT

- Database: dev
  - Models:
    - Lesson
