// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version:'9.6',
    connection: {
    host : 'dogogram.cxgnnx9cdw5w.us-west-2.rds.amazonaws.com',
    user : 'arthurb',
    password : 'mypassword',
    database : 'dogogram'
  },
    useNullAsDefault: true
  },
};
