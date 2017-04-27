Defined a mongoose schema in file models/superheroes

A schema is like a blueprint, and it defines what all future heroes will look like. It will be a constructor function we will use to make new superheroes.


`npm instal --save ejs`

`app.set('view engine', 'ejs');`
`app.set('views', path.join(__dirname, 'views'));`

Everything in "client" is a react app, which is separate from the rest of our code. To start the react code base, cd into 'client' and running `nmp start`.

Everything outside of client is our node-specific app - it only manages our DB and API endpoints. We can startup this project with `nodemon` or `node server`.

Each app has it own node-modules and package.json.

We're going to blend the start-up of both apps through a command. To start both simultaneously, use `npm run dev`. --This command was created in our node package.json.
