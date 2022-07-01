
import './App.css';
import Nav  from './components/Nav';
import Home  from './pages/Home';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
const httpLink = createHttpLink({
  uri: '/graphql',
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider client={client}>
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  </ApolloProvider>
    
  );
}

export default App;
