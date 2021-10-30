import BookList from "./components/BookList";
import AddBook from "./components/AddBook"
import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({ 
  uri: 'http://localhost:3001/graphql' 
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
            <div>
              <h1>Hello Britneys</h1>
              <BookList/>
              <AddBook/>
            </div>
        </div>
    </ApolloProvider>
  );
}

export default App;
