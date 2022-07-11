# SejutaCita Project Test

This is a project to testing purposes. Delivered to Deall SejutaCita company.

Just visit at [sejutacita.id](https://sejutacita.id/)

## Table of Contents

- [SejutaCita Project Test](#sejutacita-project-test)
  - [Table of Contents](#table-of-contents)
  - [Stack Used](#stack-used)
  - [Setup](#setup)
    - [How to run on local environment](#how-to-run-on-local-environment)
    - [How to setup and run tests](#how-to-setup-and-run-tests)
    - [How to deploy on production environment](#how-to-deploy-on-production-environment)
  - [Credentials](#credentials)
  - [Link Deployed to Production with Railway Cloud Platform](#link-deployed-to-production-with-railway-cloud-platform)
  - [API Docs (Swagger)](#api-docs-swagger)
  - [About Me](#about-me)
  - [License](#license)

## Stack Used

1. Node.js as backend language
2. Typescript as transpiler for the code
3. Express as web framework
4. Postgres as database
5. Docker as containerization
6. Swagger as documentation
7. Jest as testing framework
8. SWC as code minifier
9. ESLint as code linter
10. Prettier as code formatter
11. Husky as git hooks
12. Winston as logging framework

## Setup

### How to run on local environment

1. First of all, copy the `example` file to `.env.development.local` file
2. Fill the local environment variables with the correct values
3. Install the dependencies with `npm install`
4. Create a database with value that already filled from env file
5. Run migrations with `npm run migrate`
6. And last but not least, run the server with `npm run dev` as development mode

### How to setup and run tests

1. First of all, copy the `example` file to `.env.test.local` file
2. Fill the local environment variables with the correct values
3. Install the dependencies with `npm install` if you don't have any dependencies installed
4. Create a database with value that already filled from env file
5. Run migrations with `npm run migrate:test`
6. And last but not least, run the test `npm run test` with jest as test mode

### How to deploy on production environment

1. First of all, copy the `example` file to .env.production.local file
2. Fill the local environment variables with the correct values
3. Run and deploy with current exist Dockerfile and Docker Compose file (for test you can use Railway)

## Credentials

As seeding data, use the following credentials:

Admin:

```text
Username: admin
Password: password
```

User:

```text
Username: user
Password: password
```

## Link Deployed to Production with Railway Cloud Platform

you can acess the api at visit at [sctest.afif.dev](https://sctest.afif.dev/)

## API Docs (Swagger)

Visit at [sctest.afif.dev/api-docs](https://sctest.afif.dev/api-docs/)

## About Me

Hello there 👋🏻, my name is [Afif Abdillah Jusuf](https://github.com/bungambohlah) and I'm a software engineer.

I'm currently working as a [Full Stack Developer](https://www.linkedin.com/in/afifjusuf/).

Graduated from [Politeknik Elektronika Negeri Surabaya](https://pens.ac.id) as Associate Degree in Informatics Engineering.

Nice to meet you.

Visit my personal site at [afif.dev](https://afif.dev)

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
