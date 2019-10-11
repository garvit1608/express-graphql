const app = require('express')();
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema
}));

app.listen(4000, () => {
  console.log('Listening at port 4000');
});