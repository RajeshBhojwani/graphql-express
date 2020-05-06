const express   =   require('express');
const app   =   express();
const graphqlHTTP   =   require('express-graphql');
const schema = require('./schema/schema');
const mongoose  =   require('mongoose');
const cors  = require('cors');

mongoose.connect('mongodb+srv://graphql:graphql@graphqldb-tochh.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('mongodb connected ');
}

)

app.use(cors());

app.use("/graphql", graphqlHTTP( {
    schema,
    graphiql: true
}));


app.listen(9000, () => {
    console.log("listening request on port 9000");
});

