import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';


//apollo client setup
const client =  new ApolloClient({
  uri: 'http://localhost:9000/graphql'
})
class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Cloud Native Training Classes</h1>
          <h2>Student StudentList</h2>
          <StudentList></StudentList>
          <h2>Add New Students</h2>
          <AddStudent></AddStudent>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
