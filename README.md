# TechBlog
TechBlog is a web application that allows users to create an account, publish blog posts, and interact with other users' posts.

## Features
User Authentication: Users can sign up and log in securely to the platform.
Create and Edit Posts: Authenticated users can create new blog posts and edit their existing posts.
Commenting: Users can comment on blog posts to engage in discussions.
Responsive Design: The application is designed to work well on both desktop and mobile devices.

## Technologies Used
Node.js: Server-side JavaScript runtime environment.
Express.js: Web application framework for Node.js.
MySQL: Relational database management system used for data storage.
Handlebars.js: Templating engine for creating dynamic HTML content.
bcrypt: Library for hashing passwords securely.
express-session: Middleware for managing user sessions in Express.js.
connect-session-sequelize: Session store for storing session data in MySQL.
body-parser: Middleware for parsing incoming request bodies.
dotenv: Module for loading environment variables from a .env file.

## Installation
1. clone repo:
2. npm install
3. set up environment variables:
  DB_NAME=your_database_name
  DB_USER=your_database_user
  DB_PASSWORD=your_database_password
  SESSION_SECRET=your_session_secret
4. npm start

## Deployment
The application can be deployed to Heroku or any other hosting platform that supports Node.js applications. Follow the platform-specific deployment instructions for deploying a Node.js application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License
This project is licensed under the MIT License.
