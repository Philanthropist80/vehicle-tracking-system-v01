Vehicle Tracking System - Version: 2021.1.00

## Get Started

### 1. Prerequisites

- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager
- [MySQL](https://www.mysql.com/downloads/) - Relational database management system (RDBMS)
- [Express](https://expressjs.com/) - Express - Framework for Node. 

### 2. Installation

On the command prompt run the following commands:

``` 
 $ unzip folder
 $ Open folder in VS Code
 $ edit .env with your secret key and database information
 $ npm install
 $ npm run migrate (to create DB Schema)
 ```
 Finally, start and build the application:
 
 ```
 $ npm run build (For development)
 $ npm run build:prod (For production)
```

List of NPM Commands:
 
  ```
  $ npm run lint                        # linting
  $ npm run clean                       # remove dist and node_modules folder and install dependencies
 ```

### 3. Usage

URL : http://127.0.0.1:3000/            # Don't use http://localhost:3000/ 

Navigate to http://127.0.0.1:3000/swagger/ for the API documentation.

### 4. Useful Link
- Web framework for Node.js - [Express](http://expressjs.com/)
- JavaScript ORM  for Node.js - [Bookshelf](http://bookshelfjs.org/)
- SQL Query Builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle - [Knex](http://knexjs.org/)
- JSON Web Tokens(jwt) - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- Logging Library - [Winston](https://www.npmjs.com/package/winston)
- Object schema validation  - [Joi](https://www.npmjs.com/package/joi)
- API documentation using [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) and [swagger-ui](https://www.npmjs.com/package/swagger-ui)
- JavaScript library for building user interfaces - [React](https://facebook.github.io/react/)
- Predictable state container - [Redux](http://redux.js.org/)
- A React component library implementing Google's Material Design - [Material-UI](https://material-ui-1dab0.firebaseapp.com/)
- Redux Form - [Redux Form](http://redux-form.com/8.3.0/)
- Declarative routing for React - [React-Router](https://reacttraining.com/react-router/)
- Promise based HTTP client - [Axios](https://github.com/mzabriskie/axios)
- Environment configuration - [dotenv](https://www.npmjs.com/package/dotenv)
- Code linting tool - [ESLint](http://eslint.org/)
- Code formatter - [Prettier](https://www.npmjs.com/package/prettier)