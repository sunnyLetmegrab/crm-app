import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:9099',
  swaggerDefinition: {},  // by default: empty object
  tags: [                   // by default: empty Array
    {
      name: '',             // Tag name
      description: ''       // Tag description
    },
    // { ... }
  ],
  definitions: {}      
};

const outputFile = './swagger-output.json';
const routes = ['./src/app.mjs'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
const options = {
  openapi: "3.1.0",     // Enable/Disable OpenAPI.                        By default is null
  language: "en-US",     // Change response language.                      By default is 'en-US'
}
swaggerAutogen(options)(outputFile, routes, doc);