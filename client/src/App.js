
import './App.css';
import Nav  from './components/Nav';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
    </div>
  );
}

export default App;
