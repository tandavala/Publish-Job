# Job Saas


Job Saas, is a project developed using [Node Js](https://nodejs.org/en/)  technology, the framework selected was [Adonis Js](https://adonisjs.com/) for being very similar to Laravel Framework which I have been using for a while. I am now developement a couples of projects in JavaScript due to the reading I did in the software industry. This projects is one of them.

## Setup

This software was developed using Andonis JS Framework above [Node Js](https://nodejs.org/en/) technology, it means that before installing the software locally first you need to install [Node Js](https://nodejs.org/en/), I will not show here how to do this because you can learn this from deferent place starting [HERE](https://tecadmin.net/install-nodejs-with-nvm/) with this simple to follow tutorial which show you installing **Node Js** with **nvm (Node Version Manager)**).

##  Preparing the environment

As I said before [Adonis Js](https://adonisjs.com/) depends heavily on Node Js, this is a very good thing. So we do not have to worry  about the configuration of servers and other stuff. To install the Framework, follow the steps bellow or go to the official [Website](https://nodejs.org/en/).


1. You need Andonis Js CLI to manage the dependencies for this type.

```bash
npm i -g @adonisjs/cli
```

2. Now that we have Andonis Js CLI, it is time to clone **Job Saas** to your machine.

```bash
git clone https://github.com/tandavala/Publish-Job.git

cd Publish-Job
```

3. Now its time to install dependencies, for this task we need **Node Js** and ***npm** which comes with **Node Js**.

in the root redirectory of the project run

```bash
npm install
```

This command will install all the depencencies include [PostGresSQL](https://www.postgresql.org/) drive to connect to **Postgres** database, for you who don't want to use **Postgres** it is fine, you may use mysql ou sqlite for this you need to run the following command.
        for MySQL
```
npm install mysql --save
```
        for SQLite3
```
npm install sqlite3 --save
```

**NOTE** form some Unix based system user they will need to use sudo for these tasks.

4. Now we need to rename ```.env.example``` file to ```.env``` and bellow is my configuration replace with yours

```bash
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=
DB_USER=my_user
DB_PASSWORD=my_pass
```

replace your DB driver in ```DB_CONNECTION``` (mysql or sqlite)

5. now let's run

```bash
adonis serve --dev
```

visite  ```http://127.0.0.1:3333``` in your browser.

**NOTE**: this project is still in developement.

## Contribute

1. Clone or fork the project
2. Create your branch
3. Make Change
4. Merge it

developed by **jose tandavala**

```
or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
