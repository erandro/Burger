# The Burger's Code

### Overview

This application is a full stack app where the user can add and update data (burger's name in this case) to a database. This information is shown to the user in real time.

The app is organized by MVC pattern (using Controller-Routes, Model-ORM, and View-Handlebars), the server is running on Heroku platform and the database is on JawsDB.

#### Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│
├── public
│   └── assets
│       └── css
│           └── burger_style.css
│  
├── views
│    ├── index.handlebars
│    └── layouts
│        └── main.handlebars
│
├── package.json
│
├── Readme.md    <──  (You Are Here)
│
└── server.js

```

### How does it work?

When entering the URL the information in being `get` (readed) from the database (MySQL) and shown to the user on a template HTML (Handlebars).

When the user inputs a burger's name, the data is being `posted` (create) in the database and the page is reloaded (from the server). The new burger is now visible to the user.

When the user clicks on the update button, there is an `update` to the database and the page is reloaded (from the server). The update is now visible to the user.

### Why does it useful?

As written, this is a full stack app demonstrating a server working on Heroku, a database working on JawsDB and an app organized in MVE.

As apps that are in use to the public are not on our local machine - it's important to understand how to make the server and database work outside of our own computer.

Using MVE is a positive and common practice since it's ordering our code so others can read it and understand it better.

 
