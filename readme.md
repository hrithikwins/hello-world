# start the app in dev

node ace serve --watch

# build for production

node ace build --production

# serve the production version

cd build
node server.js

# LIst all routes in adonis

- node ace list:routes
- node ace list:routes --json > routes.json

TODO: execute these tasks
console.log(Application.version!.major)
console.log(Application.version!.minor)
console.log(Application.version!.patch)

# Mark Points

1.
2. Rename Controller to 'Controllers' as this is the default directory
3. Register as a preload file for routes everytime or simply import in start/routes.jsx
