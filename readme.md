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
    - [How to deploy production with kubernetes (kinD)](#how-to-deploy-production-with-kubernetes-kind)
    - [Screenshot Kubernetes with KinD](#screenshot-kubernetes-with-kind)
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

### How to deploy production with kubernetes (kinD)

1. First of all, copy the `example` file to .env.production.local file
2. Use Docker Desktop Kubernetes or you can use kinD to run the cluster
   - [Docker Desktop Kubernetes](https://docs.docker.com/desktop/kubernetes/)
   - [KinD](https://kind.sigs.k8s.io/)
     - create a cluster with `kind create cluster --file cluster-config.yml`. The default cluster name is `kind`
3. build your docker image with `docker image build -t YOUR_DOCKERHUB_USERNAME/sejutacita:latest .`
   - or use my image at my docker repo [here](https://hub.docker.com/repository/docker/bungambohlah/sejutacita)
4. create a deployment or pod with `kubectl apply -f pod.yml`
5. create a service with `kubectl apply -f service.yml`
6. check all the pod and service with `kubectl get all` and make sure status is `Running`
7. Access your project with port from kind cluster master port (example is 30000). Then run with [localhost:30000](http://localhost:30000/)

### Screenshot Kubernetes with KinD

Apply pod and service with `kubectl apply -f pod.yml` and `kubectl apply -f service.yml`

![apply](https://raw.githubusercontent.com/bungambohlah/sejutacita-test/master/screenshots/apply.png)

Kube ctl get all pods & services

![kubectl_get_all](https://raw.githubusercontent.com/bungambohlah/sejutacita-test/master/screenshots/kubectl_get_all.png)

Access the project at index API

![access_pod_1](https://raw.githubusercontent.com/bungambohlah/sejutacita-test/master/screenshots/access_pod_1.png)

Access the project at Swagger API Docs Page

![access_pod_2](https://raw.githubusercontent.com/bungambohlah/sejutacita-test/master/screenshots/access_pod_2.png)

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
